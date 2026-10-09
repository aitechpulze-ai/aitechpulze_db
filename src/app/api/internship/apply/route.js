import { NextResponse } from "next/server";
import { z } from "zod";
import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { supabase } from "@/lib/supabase";
import { sendMail } from "@/lib/mail";
import { internshipClientMail, internshipAdminMail } from "@/lib/templates";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const MAX_BYTES = 2 * 1024 * 1024; // 2 MB

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().min(8).max(20),
  college: z.string().trim().min(2).max(200),
  domain: z.string().trim().min(2).max(100),
  duration: z.enum(["DAYS_15", "DAYS_30"]),
});

export async function POST(req) {
  if (!rateLimit(`apply:${clientIp(req)}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try later." }, { status: 429 });
  }

  const form = await req.formData();
  if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot

  const parsed = schema.safeParse({
    name: form.get("name"), email: form.get("email"), phone: form.get("phone"),
    college: form.get("college"), domain: form.get("domain"), duration: form.get("duration"),
  });
  if (!parsed.success) return NextResponse.json({ error: "Please check the form fields" }, { status: 400 });
  const data = { ...parsed.data, email: parsed.data.email.toLowerCase() };

  const file = form.get("resume");
  if (!file || typeof file === "string" || file.size === 0) {
    return NextResponse.json({ error: "Resume (PDF) is required" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "Resume must be under 2 MB" }, { status: 400 });

  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.subarray(0, 4).toString() !== "%PDF") {
    return NextResponse.json({ error: "Resume must be a PDF file" }, { status: 400 });
  }

  const { data: duplicate } = await supabase.from("InternshipApplication")
    .select("*")
    .eq("email", data.email)
    .in("status", ["PENDING", "APPROVED"])
    .maybeSingle();
  if (duplicate) return NextResponse.json({ error: "An application with this email already exists" }, { status: 409 });

  // Private storage (NOT under /public). Served only through an admin-protected route.
  const dir = path.join(process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads"), "resumes");
  await mkdir(dir, { recursive: true });
  const fileName = `${crypto.randomUUID()}.pdf`;
  await writeFile(path.join(dir, fileName), buf);

  await supabase.from("InternshipApplication").insert({ ...data, resumeUrl: `resumes/${fileName}` });

  const results = await Promise.allSettled([
    sendMail({ to: process.env.ADMIN_NOTIFY_EMAIL, replyTo: data.email, ...internshipAdminMail(data) }),
    sendMail({ to: data.email, ...internshipClientMail(data) }),
  ]);
  results.forEach((r) => r.status === "rejected" && console.error("Internship mail failed:", r.reason));

  return NextResponse.json({ ok: true });
}
