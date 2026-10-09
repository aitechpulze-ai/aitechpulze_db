import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { requireRole, generateTempPassword, hashPassword } from "@/lib/auth";
import { sendMail } from "@/lib/mail";
import { credentialsMail } from "@/lib/templates";

export async function POST(_req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { data: student } = await supabase.from("Student").select("*, User(*)").eq("id", id).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const user = Array.isArray(student.User) ? student.User[0] : student.User;

  const tempPassword = generateTempPassword();
  await supabase.from("User").update({
    passwordHash: await hashPassword(tempPassword), mustChangePassword: true
  }).eq("id", student.userId);

  try {
    await sendMail({
      to: user.email,
      ...credentialsMail({ name: user.name, email: user.email, tempPassword }),
    });
    return NextResponse.json({ ok: true, mailSent: true });
  } catch (e) {
    console.error("Resend credentials mail failed:", e);
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
