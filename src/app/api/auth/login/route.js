import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { verifyPassword, signSession, COOKIE, cookieOptions } from "@/lib/auth";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const schema = z.object({ email: z.string().email(), password: z.string().min(1).max(200) });

export async function POST(req) {
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const email = parsed.data.email.toLowerCase();
  if (!rateLimit(`login:${clientIp(req)}:${email}`, 5, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  }

  const { data: user } = await supabaseAdmin.from("User").select("*").eq("email", email).maybeSingle();
  const ok = user && (await verifyPassword(parsed.data.password, user.passwordHash));
  if (!ok) return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });

  const token = await signSession({
    sub: user.id,
    role: user.role,
    name: user.name,
    mustChangePassword: user.mustChangePassword,
  });
  const res = NextResponse.json({ role: user.role, mustChangePassword: user.mustChangePassword });
  res.cookies.set(COOKIE, token, cookieOptions);
  return res;
}
