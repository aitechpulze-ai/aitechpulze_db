import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import {
  getSession, hashPassword, verifyPassword, signSession, COOKIE, cookieOptions,
} from "@/lib/auth";

const schema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).max(100),
});

export async function POST(req) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
  }

  const { data: user } = await supabaseAdmin.from("User").select("*").eq("id", session.sub).maybeSingle();
  if (!user || !(await verifyPassword(parsed.data.currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
  }
  if (parsed.data.currentPassword === parsed.data.newPassword) {
    return NextResponse.json({ error: "Choose a different password" }, { status: 400 });
  }

  await supabaseAdmin.from("User").update({
    passwordHash: await hashPassword(parsed.data.newPassword), mustChangePassword: false
  }).eq("id", user.id);

  const token = await signSession({
    sub: user.id, role: user.role, name: user.name, mustChangePassword: false,
  });
  const res = NextResponse.json({ ok: true, role: user.role });
  res.cookies.set(COOKIE, token, cookieOptions);
  return res;
}
