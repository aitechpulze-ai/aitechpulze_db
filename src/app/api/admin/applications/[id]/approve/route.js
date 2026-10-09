import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { requireRole, generateTempPassword, hashPassword } from "@/lib/auth";
import { sendMail } from "@/lib/mail";
import { credentialsMail } from "@/lib/templates";

export async function POST(_req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { data: app } = await supabase.from("InternshipApplication").select("*").eq("id", id).single();
  if (!app) return NextResponse.json({ error: "Application not found" }, { status: 404 });
  if (app.status === "APPROVED") return NextResponse.json({ error: "Already approved" }, { status: 409 });

  const email = app.email.toLowerCase();
  const { data: existingUser } = await supabase.from("User").select("*").eq("email", email).maybeSingle();
  if (existingUser) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
  }

  const tempPassword = generateTempPassword(app.name, app.phone);
  const passwordHash = await hashPassword(tempPassword);

  const { data: user, error: userError } = await supabase.from("User").insert({
    name: app.name, email, passwordHash, role: "STUDENT", mustChangePassword: true
  }).select().single();

  if (userError) return NextResponse.json({ error: "Failed to create user" }, { status: 500 });

  const { error: studentError } = await supabase.from("Student").insert({
    userId: user.id, applicationId: app.id,
    domain: app.domain, duration: app.duration, startDate: new Date().toISOString(),
  });

  if (studentError) return NextResponse.json({ error: "Failed to create student" }, { status: 500 });

  await supabase.from("InternshipApplication").update({ status: "APPROVED" }).eq("id", id);

  try {
    await sendMail({ to: email, ...credentialsMail({ name: app.name, email, tempPassword }) });
    return NextResponse.json({ ok: true, mailSent: true });
  } catch (e) {
    console.error("Credentials mail failed:", e);
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
