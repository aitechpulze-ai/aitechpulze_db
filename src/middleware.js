import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

const rules = [
  ["/portal/student", "STUDENT"], ["/api/student", "STUDENT"],
  ["/portal/mentor", "MENTOR"],   ["/api/mentor", "MENTOR"],
  ["/portal/admin", "ADMIN"],     ["/api/admin", "ADMIN"],
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const rule = rules.find(([prefix]) => pathname.startsWith(prefix));
  if (!rule) return NextResponse.next();

  const isApi = pathname.startsWith("/api/");
  let payload = null;
  try {
    payload = (await jwtVerify(req.cookies.get("atp_session")?.value, secret)).payload;
  } catch {}

  if (!payload || payload.role !== rule[1]) {
    return isApi
      ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      : NextResponse.redirect(new URL("/portal/login", req.url));
  }

  if (payload.mustChangePassword) {
    return isApi
      ? NextResponse.json({ error: "Password change required" }, { status: 403 })
      : NextResponse.redirect(new URL("/portal/change-password", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/portal/:path*", "/api/:path*"] };
