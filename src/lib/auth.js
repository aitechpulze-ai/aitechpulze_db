import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const COOKIE = "atp_session";

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

export const hashPassword = (plain) => bcrypt.hash(plain, 12);
export const verifyPassword = (plain, hash) => bcrypt.compare(plain, hash);

export function generateTempPassword(name = "", phone = "") {
  if (!name && !phone) {
    // Fallback to random if no name/phone provided (e.g., for mentors)
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    const bytes = crypto.randomBytes(10);
    return Array.from(bytes, (b) => chars[b % chars.length]).join("");
  }
  
  const cleanName = name.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const namePart = (cleanName + "abcde").substring(0, 5);
  
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const phonePart = (cleanPhone.length >= 5) 
    ? cleanPhone.slice(-5) 
    : (cleanPhone + "12345").substring(0, 5);
    
  return namePart + phonePart;
}

export async function signSession(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function getSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  return token ? verifySession(token) : null;
}

// Returns the session if it has one of the roles, otherwise null.
export async function requireRole(...roles) {
  const s = await getSession();
  if (!s || !roles.includes(s.role)) return null;
  return s;
}
