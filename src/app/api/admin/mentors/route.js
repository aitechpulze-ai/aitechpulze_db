import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole, generateTempPassword, hashPassword } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { sendMail } from "@/lib/mail";
import { mentorCredentialsMail } from "@/lib/templates";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  domain: z.string().trim().min(2).max(100),
});

export async function GET() {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data: rawMentors } = await supabase.from("Mentor").select("*, user:User(name, email), students:Student(*)").order("id", { ascending: false });
  return NextResponse.json(rawMentors || []);
}

export async function POST(req) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const email = parsed.data.email.toLowerCase();
  const { data: existing } = await supabase.from("User").select("*").eq("email", email).maybeSingle();
  if (existing) {
    return NextResponse.json({ error: "A user with this email already exists" }, { status: 409 });
  }

  const tempPassword = generateTempPassword();
  const passwordHash = await hashPassword(tempPassword);

  const { data: user, error: userError } = await supabase.from("User").insert({
    name: parsed.data.name, email, passwordHash, role: "MENTOR", mustChangePassword: true
  }).select().single();
  if (userError) return NextResponse.json({ error: "Failed to create user" }, { status: 500 });

  const { error: mentorError } = await supabase.from("Mentor").insert({
    userId: user.id, domain: parsed.data.domain
  });
  if (mentorError) return NextResponse.json({ error: "Failed to create mentor" }, { status: 500 });

  // OVERRIDE OVR-004: use mentorCredentialsMail, not credentialsMail.
  try {
    await sendMail({
      to: email,
      ...mentorCredentialsMail({ name: parsed.data.name, email, tempPassword, domain: parsed.data.domain }),
    });
    return NextResponse.json({ ok: true, mailSent: true });
  } catch (e) {
    console.error("Mentor credentials mail failed:", e);
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
