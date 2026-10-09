import { NextResponse } from "next/server";
import { z } from "zod";

import { sendMail } from "@/lib/mail";
import { quoteClientMail, quoteAdminMail } from "@/lib/templates";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  projectType: z.string().trim().min(2).max(100),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  timeline: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(3000),
});

export async function POST(req) {
  if (!rateLimit(`quote:${clientIp(req)}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try later." }, { status: 429 });
  }

  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  
  if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot

  const payload = {
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone") || "",
    company: form.get("company") || "",
    projectType: form.get("project_type") || form.get("projectType") || "", // handle both naming conventions
    budget: form.get("budget") || "",
    timeline: form.get("timeline") || "",
    message: form.get("description") || form.get("message") || "",
  };

  const parsed = schema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form fields" }, { status: 400 });

  const data = parsed.data;
  let requirementsUrl = null;

  const file = form.get("requirements");
  if (file && typeof file !== "string" && file.size > 0) {
    if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "File must be under 5 MB" }, { status: 400 });
    
    // Check if it's a valid document type (PDF, docx, etc)
    const buf = Buffer.from(await file.arrayBuffer());
    
    const fs = require('fs/promises');
    const path = require('path');
    const crypto = require('crypto');
    
    const dir = path.join(process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads"), "requirements");
    await fs.mkdir(dir, { recursive: true });
    
    const ext = file.name.split('.').pop().toLowerCase();
    const safeExt = ['pdf', 'doc', 'docx', 'txt', 'zip'].includes(ext) ? ext : 'pdf';
    const fileName = `${crypto.randomUUID()}.${safeExt}`;
    
    await fs.writeFile(path.join(dir, fileName), buf);
    requirementsUrl = `requirements/${fileName}`;
  }

  const quoteData = { ...data, requirementsUrl };


  // Emails must never break the form: the quote is already saved.
  const admin = quoteAdminMail(quoteData);
  const client = quoteClientMail(quoteData);
  const results = await Promise.allSettled([
    sendMail({ to: process.env.ADMIN_NOTIFY_EMAIL, replyTo: data.email, ...admin }),
    sendMail({ to: data.email, ...client }),
  ]);
  results.forEach((r) => r.status === "rejected" && console.error("Quote mail failed:", r.reason));

  return NextResponse.json({ ok: true });
}
