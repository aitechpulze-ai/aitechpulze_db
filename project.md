# AiTechPulze: Master Prompt for the AI Coding Agent

> **How to use:** Paste this whole file into your AI agent (Claude Code, Cursor, etc.) in an empty folder. The core code in section 6 is already written and reviewed: the agent must copy it in exactly, then build everything in section 7 around it.

---

## 1. Role and goal

You are a senior full-stack engineer. Build the **AiTechPulze** website: a professional business website for an IT/AI startup, plus an **internship management portal** (Student / Mentor / Admin), all in **one Next.js project**, deployable on **Hostinger Unlimited Web Hosting (Node.js app)**.

This replaces an older project (React + Python Flask + a separate Node backend + PostgreSQL). Do **not** use Python or Flask. One codebase, one backend (Next.js API routes).

Work in the phases listed in section 7. After each phase, run `npm run build` and fix errors before moving on. If something is ambiguous, make the most reasonable choice, note it in `DECISIONS.md`, and continue. Never invent client names, testimonials, statistics or prices; use clearly marked placeholders.

## 2. Business context

- **Company:** AiTechPulze, founded 2023, Tamil Nadu, India. MSME registered: UDYAM-TN-28-0216110.
- **What it does:** Websites, AI/ML, SaaS, ERP/CRM, mobile apps, cloud/DevOps, SEO. Also runs an academic/internship program for students.
- **Founder & CEO:** Niranjan P. **CTO:** Vijaykumar. **AI/ML Engineer:** Ranjeet. Interns: Nehashree, Nishalini, Ramani, Rajesh, Sanjay Ram, Susmiha bavyaa and others (13 members in total).
- **Contact:** info@aitechpulze.com, +91 95857 76088, Tamil Nadu, India, Mon–Sat 9AM–7PM IST.
- **Live products (case studies):**
  - PKROUTEX: enterprise logistics platform (shipment tracking, fleet management), pkroutex.com
  - iPrintZone: online printing platform (custom design, order management), iprintzone.com
  - Adhvaya Jewellery: e-commerce jewellery platform, adhvayajewellery.com
- **Audience split (important):** the **main site targets business clients**. Students are served by a separate **Academy** section.

## 3. Tech stack and hosting constraints

| Item | Decision |
|---|---|
| Framework | **Next.js (App Router, JavaScript)**, Tailwind CSS |
| Node | **22.x** (Hostinger supports 18/20/22/24) |
| Package manager | npm |
| Database | **MySQL on Hostinger** via **Prisma** |
| Auth | JWT in httpOnly cookie (`jose`), passwords hashed with `bcryptjs` |
| Validation | `zod` |
| Email | **Nodemailer + Gmail SMTP** using `info@aitechpulze.com` and a Google **App Password** (NOT Hostinger SMTP) |
| File uploads | Server disk `uploads/` folder (private, outside `public/`), served only through protected API routes |
| Hosting | Hostinger Node.js web app (no Python, no Postgres, no Docker) |

Install:

```bash
npm i prisma @prisma/client nodemailer bcryptjs jose zod
```

Add to `package.json` scripts: `"postinstall": "prisma generate"`.

## 4. Sitemap and redirects

**Business site** (route group `(site)`, with navbar + footer):

```
/                      Home
/services              Services (5 groups + Technologies section)
/services/[slug]       Service detail
/industries            Industries
/work                  Case studies list
/work/[slug]           pkroutex, iprintzone, adhvaya-jewellery
/pricing               Pricing
/about                 Story, mission, vision, MSME, Team
/contact               Contact + "Get a Quote" form
/blog   /blog/[slug]   Blog
/privacy-policy  /terms  /refund-policy
```

**Academy:**

```
/academy               Academy home
/academy/internships   Details + apply form (15 or 30 days, resume PDF upload)
/academy/projects      Academic Hub (IEEE, final year, research, innovation)
/academy/careers       Open positions
/verify                Certificate verification by ID
```

**Portal** (no navbar/footer, `noindex`):

```
/portal/login
/portal/change-password
/portal/student/dashboard   tabs: Dashboard, Attendance, Assignments, Certificate
/portal/mentor/dashboard    tabs: My Students, Attendance, GMeet Link, Create Assignment, Submissions
/portal/admin/dashboard     tabs: Applications, Students, Mentors, Quotes, Analytics
```

**Old URL redirects** are in `next.config.js` (section 6).

## 5. Design and content rules

- Clean, modern, professional. Light theme by default, one brand accent colour, one font pair (e.g. Inter + a display font via `next/font`). Mobile-first. Good contrast and accessible (labels, focus states, alt text).
- **Remove from the old site:** "AiTechPulze 3.0 is Live" badge, floating telemetry cards, custom cursor, premium loader, auto-popup for internships, bottom dock. Keep only one floating WhatsApp button.
- Animation: subtle only (fade/slide on scroll, hover). No heavy effects.
- **Home hero:** headline "We build websites, AI tools and software for growing businesses", short subtext, buttons "Get a Quote" and "Book a Strategy Call". Under the hero show: "MSME Registered · Since 2023" and 3 key numbers (50+ Projects, 30+ Clients, 3 Live Products). Keep the numbers editable in `src/content/site.js`.
- **Home sections order:** Hero, Services (5 groups), Flagship Products/Work, Process (Discover, Design, Develop, Launch, Support), Industries strip, Tech Stack, FAQ, CTA. Academy gets only a small strip linking to `/academy`.
- **Services (5 groups):** 1) Web & App Development, 2) AI & Automation, 3) SaaS / ERP / CRM, 4) UI/UX Design, 5) Cloud, DevOps & SEO.
- **Industries:** Logistics, Healthcare, E-Commerce, Education, Finance, Manufacturing, Printing, Luxury/Jewellery.
- **Tech stack categories:** Frontend, Backend, AI & Data, Database, Cloud & DevOps, Mobile.
- **Pricing:** show "Starting from ₹9,999" (Starter: 5 pages, basic SEO, 1 month support) and "Starting from ₹14,999" (Growth: 15 pages, custom UI/UX, payment gateway, 3 months support), plus a **Business** card with "Contact us for a quote" and an Enterprise "Custom" card (AI/ML, ERP/CRM, cloud). Add a "what's included / not included" list. Do not invent other prices.
- **Case study pages:** Problem, What we built, Tech stack, Result. Use only real info given above; mark unknown results as `TODO`.
- **Team:** Founder, CTO, AI/ML Engineer as large cards; interns in a separate smaller "Interns" grid. Photos in `public/team/` (WebP, square). Use `next/image`, alt text like "Niranjan P, Founder & CEO". Use a neutral avatar placeholder if a photo is missing.
- **Blog:** 3 starter posts: "How Much Does a Website Cost in India?", "Best AI Projects for Final Year Students", "Startup Website Checklist". Store as content files in `src/content/blog/`. Write real, useful first drafts (400–700 words each).
- **Academic Hub:** 4 cards (IEEE Projects, Final Year Projects, Research Support, Innovation Projects); sample projects: ASL Sign Recognition, AI Stress Detection, Leaf Disease Classifier; tags: AI & Data Science, Healthcare, Web Applications, IoT; buttons "WhatsApp for Project Help".
- **Careers:** React Developer (Intern), Python/AI Developer (Intern), UI/UX Design Intern, Full Stack Developer (Full-time), AI/ML Engineer (Full-time).
- Keep all editable text/data in `src/content/*.js` so it can be changed without touching components.

## 6. CORE CODE (already written: copy in exactly)

> Create these files exactly as given. Do not rewrite their logic. You may fix an import path or a typo if the build fails, and must note it in `DECISIONS.md`.

### 6.1 `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

enum Role { STUDENT MENTOR ADMIN }
enum AppStatus { PENDING APPROVED REJECTED }
enum Duration { DAYS_15 DAYS_30 }
enum AttStatus { PRESENT ABSENT }
enum SubStatus { SUBMITTED ACCEPTED CHANGES_REQUESTED }
enum QuoteStatus { NEW CONTACTED WON LOST }

model User {
  id                 String   @id @default(cuid())
  name               String
  email              String   @unique
  passwordHash       String
  role               Role
  mustChangePassword Boolean  @default(true)
  createdAt          DateTime @default(now())
  student            Student?
  mentor             Mentor?
}

model Mentor {
  id          String       @id @default(cuid())
  userId      String       @unique
  user        User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  domain      String
  photoUrl    String?
  meetUrl     String?
  meetLive    Boolean      @default(false)
  students    Student[]
  assignments Assignment[]
}

model InternshipApplication {
  id        String    @id @default(cuid())
  name      String
  email     String
  phone     String
  college   String
  domain    String
  duration  Duration
  resumeUrl String
  status    AppStatus @default(PENDING)
  createdAt DateTime  @default(now())
  student   Student?
}

model Student {
  id             String                @id @default(cuid())
  userId         String                @unique
  user           User                  @relation(fields: [userId], references: [id], onDelete: Cascade)
  applicationId  String                @unique
  application    InternshipApplication @relation(fields: [applicationId], references: [id])
  mentorId       String?
  mentor         Mentor?               @relation(fields: [mentorId], references: [id])
  domain         String
  duration       Duration
  startDate      DateTime?
  certificateId  String?               @unique
  certificateUrl String?
  certificateAt  DateTime?
  attendance     Attendance[]
  submissions    Submission[]
  assignments    Assignment[]
}

model Attendance {
  id        String    @id @default(cuid())
  studentId String
  student   Student   @relation(fields: [studentId], references: [id], onDelete: Cascade)
  day       Int
  status    AttStatus
  @@unique([studentId, day])
}

model Assignment {
  id            String       @id @default(cuid())
  mentorId      String
  mentor        Mentor       @relation(fields: [mentorId], references: [id])
  studentId     String?      // null = assigned to all of the mentor's students
  student       Student?     @relation(fields: [studentId], references: [id])
  title         String
  description   String       @db.Text
  dueDate       DateTime
  attachmentUrl String?
  createdAt     DateTime     @default(now())
  submissions   Submission[]
}

model Submission {
  id           String     @id @default(cuid())
  assignmentId String
  assignment   Assignment @relation(fields: [assignmentId], references: [id], onDelete: Cascade)
  studentId    String
  student      Student    @relation(fields: [studentId], references: [id], onDelete: Cascade)
  fileUrl      String
  status       SubStatus  @default(SUBMITTED)
  feedback     String?    @db.Text
  createdAt    DateTime   @default(now())
  @@unique([assignmentId, studentId])
}

model Quote {
  id          String      @id @default(cuid())
  name        String
  email       String
  phone       String?
  company     String?
  projectType String
  budget      String?
  timeline    String?
  message     String      @db.Text
  status      QuoteStatus @default(NEW)
  createdAt   DateTime    @default(now())
}
```

### 6.2 `.env.example` (and create `.env.local` from it; never commit real values)

```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DBNAME"
JWT_SECRET="replace-with-a-long-random-string-at-least-32-chars"
SMTP_USER="info@aitechpulze.com"
SMTP_PASS="google-app-password-here"
ADMIN_NOTIFY_EMAIL="info@aitechpulze.com"
NEXT_PUBLIC_SITE_URL="https://aitechpulze.com"
UPLOAD_DIR="./uploads"
```

Add `.env*` (except `.env.example`) and `uploads/` to `.gitignore`.

### 6.3 `src/lib/prisma.js`

```js
import { PrismaClient } from "@prisma/client";

const g = globalThis;
export const prisma = g.__prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") g.__prisma = prisma;
```

### 6.4 `src/lib/auth.js`

```js
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

// Random temporary password (no ambiguous chars like 0/O, 1/l/I).
export function generateTempPassword(length = 10) {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  const bytes = crypto.randomBytes(length);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
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
```

### 6.5 `src/lib/rateLimit.js`

```js
// Simple in-memory limiter. Resets when the server restarts. Fine for one server.
const hits = new Map();

export function rateLimit(key, max = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= max;
}

export function clientIp(req) {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}
```

### 6.6 `src/lib/mail.js`

```js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export const FROM = '"AiTechPulze" <info@aitechpulze.com>';

export function sendMail(opts) {
  return transporter.sendMail({ from: FROM, ...opts });
}

// Escape user input before putting it in HTML emails.
export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
```

### 6.7 `src/lib/templates.js`

```js
import { esc } from "./mail";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://aitechpulze.com";

const layout = (title, body) => `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;color:#1f2937">
  <h2 style="margin:0 0 16px;color:#111827">${title}</h2>
  ${body}
  <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
  <p style="font-size:12px;color:#6b7280">AiTechPulze · info@aitechpulze.com · +91 95857 76088</p>
</div>`;

const row = (k, v) =>
  `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">${k}</td><td style="padding:4px 0"><b>${esc(v || "-")}</b></td></tr>`;

export const quoteClientMail = (d) => ({
  subject: "We received your request | AiTechPulze",
  html: layout(
    `Thanks, ${esc(d.name)}!`,
    `<p>We have received your request for <b>${esc(d.projectType)}</b>.</p>
     <p>Our admin will contact you shortly (usually within 24 hours, Mon–Sat 9AM–7PM IST).</p>`
  ),
});

export const quoteAdminMail = (d) => ({
  subject: `New quote request: ${d.name} (${d.projectType})`,
  html: layout(
    "New quote request",
    `<table>${row("Name", d.name)}${row("Email", d.email)}${row("Phone", d.phone)}
     ${row("Company", d.company)}${row("Project", d.projectType)}${row("Budget", d.budget)}
     ${row("Timeline", d.timeline)}</table>
     <p style="white-space:pre-wrap">${esc(d.message)}</p>`
  ),
});

export const internshipClientMail = (d) => ({
  subject: "Internship application received | AiTechPulze",
  html: layout(
    `Thanks for applying, ${esc(d.name)}!`,
    `<p>We received your application for the <b>${esc(d.domain)}</b> internship.</p>
     <p>Our admin will review it and contact you. If approved, your portal login details will be emailed to you.</p>`
  ),
});

export const internshipAdminMail = (d) => ({
  subject: `New internship application: ${d.name}`,
  html: layout(
    "New internship application",
    `<table>${row("Name", d.name)}${row("Email", d.email)}${row("Phone", d.phone)}
     ${row("College", d.college)}${row("Domain", d.domain)}${row("Duration", d.duration)}</table>
     <p>Review it in the admin portal: <a href="${SITE}/portal/admin/dashboard">${SITE}/portal/admin/dashboard</a></p>`
  ),
});

export const credentialsMail = ({ name, email, tempPassword }) => ({
  subject: "Your AiTechPulze internship portal login",
  html: layout(
    `Welcome, ${esc(name)}! Your application is approved 🎉`,
    `<p>Use these details to log in:</p>
     <table>${row("Portal", `${SITE}/portal/login`)}${row("Username", email)}${row("Temporary password", tempPassword)}</table>
     <p>You will be asked to <b>set a new password</b> when you log in for the first time.</p>
     <p><a href="${SITE}/portal/login" style="display:inline-block;padding:10px 18px;background:#4f46e5;color:#fff;border-radius:8px;text-decoration:none">Open Student Portal</a></p>`
  ),
});
```

### 6.8 `src/middleware.js`

```js
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
```

### 6.9 `src/app/api/auth/login/route.js`

```js
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
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

  const user = await prisma.user.findUnique({ where: { email } });
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
```

### 6.10 `src/app/api/auth/logout/route.js`

```js
import { NextResponse } from "next/server";
import { COOKIE } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
```

### 6.11 `src/app/api/auth/change-password/route.js`

```js
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
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

  const user = await prisma.user.findUnique({ where: { id: session.sub } });
  if (!user || !(await verifyPassword(parsed.data.currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
  }
  if (parsed.data.currentPassword === parsed.data.newPassword) {
    return NextResponse.json({ error: "Choose a different password" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword), mustChangePassword: false },
  });

  const token = await signSession({
    sub: user.id, role: user.role, name: user.name, mustChangePassword: false,
  });
  const res = NextResponse.json({ ok: true, role: user.role });
  res.cookies.set(COOKIE, token, cookieOptions);
  return res;
}
```

### 6.12 `src/app/api/quote/route.js`

```js
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
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
  website: z.string().optional(), // honeypot: real users leave this empty
});

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  if (body.website) return NextResponse.json({ ok: true }); // bot: pretend success

  if (!rateLimit(`quote:${clientIp(req)}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try later." }, { status: 429 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form fields" }, { status: 400 });

  const { website, ...data } = parsed.data;
  await prisma.quote.create({ data });

  // Emails must never break the form: the quote is already saved.
  const admin = quoteAdminMail(data);
  const client = quoteClientMail(data);
  const results = await Promise.allSettled([
    sendMail({ to: process.env.ADMIN_NOTIFY_EMAIL, replyTo: data.email, ...admin }),
    sendMail({ to: data.email, ...client }),
  ]);
  results.forEach((r) => r.status === "rejected" && console.error("Quote mail failed:", r.reason));

  return NextResponse.json({ ok: true });
}
```

### 6.13 `src/app/api/internship/apply/route.js`

```js
import { NextResponse } from "next/server";
import { z } from "zod";
import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { prisma } from "@/lib/prisma";
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

  const duplicate = await prisma.internshipApplication.findFirst({
    where: { email: data.email, status: { in: ["PENDING", "APPROVED"] } },
  });
  if (duplicate) return NextResponse.json({ error: "An application with this email already exists" }, { status: 409 });

  // Private storage (NOT under /public). Served only through an admin-protected route.
  const dir = path.join(process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads"), "resumes");
  await mkdir(dir, { recursive: true });
  const fileName = `${crypto.randomUUID()}.pdf`;
  await writeFile(path.join(dir, fileName), buf);

  await prisma.internshipApplication.create({ data: { ...data, resumeUrl: `resumes/${fileName}` } });

  const results = await Promise.allSettled([
    sendMail({ to: process.env.ADMIN_NOTIFY_EMAIL, replyTo: data.email, ...internshipAdminMail(data) }),
    sendMail({ to: data.email, ...internshipClientMail(data) }),
  ]);
  results.forEach((r) => r.status === "rejected" && console.error("Internship mail failed:", r.reason));

  return NextResponse.json({ ok: true });
}
```

### 6.14 `src/app/api/admin/applications/[id]/approve/route.js`

```js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole, generateTempPassword, hashPassword } from "@/lib/auth";
import { sendMail } from "@/lib/mail";
import { credentialsMail } from "@/lib/templates";

export async function POST(_req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const app = await prisma.internshipApplication.findUnique({ where: { id } });
  if (!app) return NextResponse.json({ error: "Application not found" }, { status: 404 });
  if (app.status === "APPROVED") return NextResponse.json({ error: "Already approved" }, { status: 409 });

  const email = app.email.toLowerCase();
  if (await prisma.user.findUnique({ where: { email } })) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
  }

  const tempPassword = generateTempPassword();
  const passwordHash = await hashPassword(tempPassword);

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: { name: app.name, email, passwordHash, role: "STUDENT", mustChangePassword: true },
    });
    await tx.student.create({
      data: {
        userId: user.id, applicationId: app.id,
        domain: app.domain, duration: app.duration, startDate: new Date(),
      },
    });
    await tx.internshipApplication.update({ where: { id }, data: { status: "APPROVED" } });
  });

  try {
    await sendMail({ to: email, ...credentialsMail({ name: app.name, email, tempPassword }) });
    return NextResponse.json({ ok: true, mailSent: true });
  } catch (e) {
    console.error("Credentials mail failed:", e);
    // Account exists but the mail failed: the UI must tell the admin to use "Resend credentials".
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
```

> **Password policy note:** a random temporary password plus a forced change on first login is the default. If the owner later wants a rule like "first 4 letters of name + last 5 digits of phone", only `generateTempPassword()` call sites change. The `mustChangePassword` flow must stay.

### 6.15 `src/lib/seo.js`

```js
export const SITE = {
  name: "AiTechPulze",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aitechpulze.com",
  description:
    "AiTechPulze builds websites, AI tools and software for growing businesses. MSME registered, Tamil Nadu, India.",
};

export function buildMetadata({ title, description = SITE.description, path = "/", image = "/og.png", noindex = false }) {
  const url = `${SITE.url}${path}`;
  return {
    metadataBase: new URL(SITE.url),
    title: title ? `${title} | ${SITE.name}` : SITE.name,
    description,
    alternates: { canonical: url },
    openGraph: { title: title || SITE.name, description, url, siteName: SITE.name, images: [image], type: "website" },
    twitter: { card: "summary_large_image", title: title || SITE.name, description, images: [image] },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: "info@aitechpulze.com",
  telephone: "+91 95857 76088",
  foundingDate: "2023",
  address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
};
```

### 6.16 `src/app/sitemap.js` and `src/app/robots.js`

```js
// src/app/sitemap.js
import { SITE } from "@/lib/seo";

// TODO (agent): also import the services, work and blog slug lists from src/content and add them.
const staticPaths = [
  "", "/services", "/industries", "/work", "/pricing", "/about", "/contact", "/blog",
  "/academy", "/academy/internships", "/academy/projects", "/academy/careers", "/verify",
  "/privacy-policy", "/terms", "/refund-policy",
];

export default function sitemap() {
  return staticPaths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
```

```js
// src/app/robots.js
import { SITE } from "@/lib/seo";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/portal", "/api"] }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
```

### 6.17 `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r("/solutions", "/services"),
      r("/technologies", "/services"),
      r("/products", "/work"),
      r("/portfolio", "/work"),
      r("/get-quote", "/contact"),
      r("/team", "/about"),
      r("/careers", "/academy/careers"),
      r("/internships", "/academy/internships"),
      r("/academic-hub", "/academy/projects"),
      r("/portal/student", "/portal/student/dashboard"),
      r("/portal/mentor", "/portal/mentor/dashboard"),
      r("/portal/admin", "/portal/admin/dashboard"),
    ];
  },
};

module.exports = nextConfig;
```

## 7. YOUR TASKS (build everything else, in this order)

**Phase 1: Setup**
1. `npx create-next-app@latest` (JavaScript, Tailwind, App Router, `src/`, `@/*` alias) and install the packages from section 3.
2. Create all section 6 files. Run `npx prisma generate`. Confirm `npm run build` passes.
3. Add `scripts/create-admin.js`: creates the first ADMIN user from env vars `ADMIN_EMAIL`, `ADMIN_NAME`, `ADMIN_PASSWORD` (hashed with bcryptjs, `mustChangePassword: true`). Document how to run it.
4. Create `src/content/` files (`site.js`, `services.js`, `work.js`, `team.js`, `industries.js`, `faq.js`, `blog/`) using section 2 and 5.

**Phase 2: Public site**
5. Shared components: Navbar (Services, Work, Industries, Pricing, About, Contact + Academy link + "Get a Quote" button; mobile menu), Footer, floating WhatsApp button, Section/Card/Button/Modal primitives.
6. All public pages from section 4, each exporting `metadata` via `buildMetadata()`. Marketing pages must be **server components** (use `"use client"` only for interactive pieces like the mobile menu and forms).
7. Add `organizationJsonLd` to the root layout, plus `BlogPosting` JSON-LD for blog posts and `FAQPage` JSON-LD where an FAQ exists.
8. Forms: Get a Quote (on `/contact`) posting to `/api/quote`; Internship apply (on `/academy/internships`) posting multipart to `/api/internship/apply` (name, email, phone, college, domain, duration 15/30 days, resume PDF). Include the hidden honeypot field `website`, loading/success/error states and client-side validation.
9. `/verify` page + `GET /api/verify?id=` (public, rate limited): looks up `Student.certificateId` and returns student name, domain, duration, start/end dates only.

**Phase 3: Portal**
10. `/portal/login` (role-based tabs or one form that redirects by role after login: student violet, mentor green, admin blue accents) and `/portal/change-password`.
11. **Student portal + `/api/student/*`:** Dashboard (welcome, Meet link with Join button when mentor's `meetLive`, stats: attendance %, days done, assignments, pending), Attendance grid (Day 1..15/30: Present/Absent/Upcoming), Assignments (list, download attachment, upload and submit file, status), Certificate (download if issued, else "Not Issued Yet").
12. **Mentor portal + `/api/mentor/*`:** My Students, Attendance marking per day, GMeet link publish/end (updates `meetUrl`, `meetLive`), Create Assignment (title, description, due date, one student or all, optional PDF attachment), Submissions (per student, file preview/download, set status ACCEPTED / CHANGES_REQUESTED with feedback). Student card click opens a modal with full attendance and submissions.
13. **Admin portal + `/api/admin/*`:** 
    - Applications: list, resume preview via protected route (`GET /api/admin/resume/[...path]` that streams from `UPLOAD_DIR` and **prevents path traversal**), Approve (uses the existing approve route, show a warning if `mailSent` is false), Reject, Delete.
    - **Resend credentials:** generates a new temp password, sets `mustChangePassword: true`, emails it.
    - Students: list, assign mentor, issue certificate (generate unique `certificateId` such as `ATP-2026-XXXXXX`, upload PDF or auto-generate PDF), delete, export CSV.
    - Mentors: create (name, email, domain, photo, temp password emailed), delete.
    - **Quotes:** list with status (NEW/CONTACTED/WON/LOST), view details, change status.
    - Analytics: KPI cards (applications, approved, pending, certificates, mentors, quotes), charts (students by domain, application status, 15 vs 30 day split). Use a lightweight chart lib or plain SVG.
14. Every API route must verify the session itself with `requireRole()` (middleware is a second layer, not the only one). Students and mentors may only access **their own** data: always filter by the session user, never trust IDs from the client.
15. Uploaded files (assignment attachments, submissions, certificates): validate type and size, store under `UPLOAD_DIR`, serve through protected routes only.

**Phase 4: Quality**
16. Set `robots: { index: false }` on all portal layouts.
17. Performance: `next/image` everywhere, `next/font`, no unused client JS. Target Lighthouse mobile 90+.
18. Accessibility pass, 404 and error pages, loading states.
19. Write `README.md` (setup, env vars, scripts, deployment) and `DECISIONS.md`.

## 8. Security requirements (non-negotiable)

- Never log or return password hashes or temp passwords (except in the credentials email).
- All user input validated with `zod`; all user input escaped when placed in emails.
- Cookies: httpOnly, secure in production, sameSite lax. No tokens in localStorage.
- Rate-limit login, quote, apply and verify endpoints.
- No file in `public/` for private uploads. Block path traversal in file-serving routes.
- Prisma only (no raw SQL string concatenation).
- Add security headers in `next.config.js` (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
- Secrets only from env vars; `.env*` ignored by git.

## 9. Deployment on Hostinger (document this in README)

1. hPanel → **Databases** → create MySQL database + user, set `DATABASE_URL`.
2. Push code to a private GitHub repo.
3. hPanel → **Websites → Add website → Node.js Apps**: connect the repo (or upload a zip). Node **22.x**, package manager npm, build command `npm run build`, start command `npm start`, set all env vars.
4. Run `npx prisma migrate deploy` (via SSH if available, or from a local machine using Hostinger **Remote MySQL** with the local IP whitelisted).
5. Run `scripts/create-admin.js` once to create the first admin.
6. DNS: add the Google SPF/DKIM/DMARC records for `aitechpulze.com` so emails do not land in spam.
7. After launch: Google Search Console (submit sitemap), Google Analytics 4, UptimeRobot, weekly DB export.

> If the Hostinger Node.js app flow differs from the above, follow the current hPanel UI and note the differences in `DECISIONS.md`.

## 10. Definition of done

- `npm run build` passes with no errors; `npm run lint` passes.
- A quote submission saves to the DB, emails info@aitechpulze.com (with reply-to set to the client) and sends the client a welcome mail.
- An internship application saves with the resume, emails admin and the student; admin approval creates the student account and emails portal link, username and temporary password; the student is forced to set a new password on first login.
- Student / mentor / admin cannot access each other's pages or API routes (test with curl).
- All old URLs redirect (301) to the new ones.
- `sitemap.xml` and `robots.txt` work; portal pages are not indexable.
- No fake testimonials, clients or numbers anywhere: placeholders are clearly marked `TODO`.

## 11. How to work

- Work phase by phase and summarize what you completed at the end of each phase.
- Do not change the section 6 logic without a written reason in `DECISIONS.md`.
- Ask me only when blocked; otherwise decide, document and continue.
- Final output: a working project plus a short checklist of manual steps I must do myself (Google App Password, Hostinger DB creation, DNS records, team photos, real case-study details).

# AiTechPulze Master Prompt: Part 2 (Sections 12 onwards)

> **How to use:** Paste this directly after Section 11 of the master prompt, in the same file. Everything in Part 2 is part of the same instructions. Section 12 code is also **core code**: copy it in exactly, and note any fix in `DECISIONS.md`.

---

## 12. MORE CORE CODE (already written: copy in exactly)

Create these in **Phase 1, step 2**, together with the Section 6 files.

### 12.0 Next.js version note

If `create-next-app@latest` installs **Next.js 16 or newer**, the `middleware.js` convention may be renamed to `proxy.js` (exported function `proxy` instead of `middleware`). In that case, rename the file and the export, keep the logic and `config` identical, and write it in `DECISIONS.md`. If the build complains about anything else in Section 6 or 12, fix the minimum needed and document it.

### 12.1 `src/lib/uploads.js`

```js
import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";

export const UPLOAD_ROOT = path.resolve(
  process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads")
);

// Resolves a relative path inside UPLOAD_ROOT. Returns null if it escapes (path traversal).
export function safeResolve(relPath) {
  const full = path.resolve(UPLOAD_ROOT, relPath);
  if (full !== UPLOAD_ROOT && !full.startsWith(UPLOAD_ROOT + path.sep)) return null;
  return full;
}

// Validates and stores a PDF. Returns { relPath } or { error }.
export async function savePdf(file, subdir, maxBytes = 5 * 1024 * 1024) {
  if (!file || typeof file === "string" || file.size === 0) return { error: "File is required" };
  if (file.size > maxBytes) {
    return { error: `File must be under ${Math.round(maxBytes / 1024 / 1024)} MB` };
  }
  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.subarray(0, 4).toString() !== "%PDF") return { error: "File must be a PDF" };

  const dir = safeResolve(subdir);
  if (!dir) return { error: "Invalid path" };
  await mkdir(dir, { recursive: true });

  const name = `${crypto.randomUUID()}.pdf`;
  await writeFile(path.join(dir, name), buf);
  return { relPath: `${subdir}/${name}` };
}
```

### 12.2 `src/app/api/admin/resume/[...path]/route.js`

```js
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { requireRole } from "@/lib/auth";
import { safeResolve } from "@/lib/uploads";

export async function GET(_req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path: parts } = await params;
  const rel = (parts || []).join("/");

  // Only resumes, only PDFs.
  if (!rel.startsWith("resumes/") || !rel.endsWith(".pdf")) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const full = safeResolve(rel);
  if (!full) return NextResponse.json({ error: "Invalid path" }, { status: 400 });

  try {
    const data = await readFile(full);
    return new Response(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
```

### 12.3 `src/app/api/admin/students/[id]/resend-credentials/route.js`

```js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole, generateTempPassword, hashPassword } from "@/lib/auth";
import { sendMail } from "@/lib/mail";
import { credentialsMail } from "@/lib/templates";

export async function POST(_req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const student = await prisma.student.findUnique({ where: { id }, include: { user: true } });
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const tempPassword = generateTempPassword();
  await prisma.user.update({
    where: { id: student.userId },
    data: { passwordHash: await hashPassword(tempPassword), mustChangePassword: true },
  });

  try {
    await sendMail({
      to: student.user.email,
      ...credentialsMail({ name: student.user.name, email: student.user.email, tempPassword }),
    });
    return NextResponse.json({ ok: true, mailSent: true });
  } catch (e) {
    console.error("Resend credentials mail failed:", e);
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
```

### 12.4 `src/app/api/admin/students/[id]/certificate/route.js`

```js
import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth";
import { savePdf } from "@/lib/uploads";

const CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function makeCertificateId() {
  const bytes = crypto.randomBytes(6);
  const code = Array.from(bytes, (b) => CHARS[b % CHARS.length]).join("");
  return `ATP-${new Date().getFullYear()}-${code}`;
}

// Optional multipart field "certificate" (PDF). If omitted, only the ID is issued and
// the agent's auto-generated PDF (if built) fills certificateUrl.
export async function POST(req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const student = await prisma.student.findUnique({ where: { id } });
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });
  if (student.certificateId) {
    return NextResponse.json({ error: "Certificate already issued" }, { status: 409 });
  }

  let certificateUrl = null;
  const form = await req.formData().catch(() => null);
  const file = form?.get("certificate");
  if (file && typeof file !== "string" && file.size > 0) {
    const saved = await savePdf(file, "certificates");
    if (saved.error) return NextResponse.json({ error: saved.error }, { status: 400 });
    certificateUrl = saved.relPath;
  }

  // Retry a few times in the very unlikely case of an ID collision.
  for (let i = 0; i < 5; i++) {
    try {
      const updated = await prisma.student.update({
        where: { id },
        data: { certificateId: makeCertificateId(), certificateUrl, certificateAt: new Date() },
        select: { certificateId: true, certificateAt: true },
      });
      return NextResponse.json({ ok: true, ...updated });
    } catch (e) {
      if (e.code !== "P2002") throw e;
    }
  }
  return NextResponse.json({ error: "Could not generate a unique ID, try again" }, { status: 500 });
}
```

### 12.5 `src/app/api/verify/route.js`

```js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const ID_FORMAT = /^ATP-\d{4}-[A-Z0-9]{6}$/;

export async function GET(req) {
  if (!rateLimit(`verify:${clientIp(req)}`, 20, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  const id = (new URL(req.url).searchParams.get("id") || "").trim().toUpperCase();
  if (!ID_FORMAT.test(id)) {
    return NextResponse.json({ valid: false, error: "Invalid certificate ID format" }, { status: 400 });
  }

  const student = await prisma.student.findUnique({
    where: { certificateId: id },
    include: { user: { select: { name: true } } },
  });
  if (!student) return NextResponse.json({ valid: false });

  // Public response: only these fields, nothing else.
  const days = student.duration === "DAYS_15" ? 15 : 30;
  const start = student.startDate;
  const end = start ? new Date(start.getTime() + (days - 1) * 86400000) : null;

  return NextResponse.json({
    valid: true,
    name: student.user.name,
    domain: student.domain,
    durationDays: days,
    startDate: start,
    endDate: end,
  });
}
```

### 12.6 `src/app/api/mentor/attendance/route.js` (pattern for "own data only")

```js
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth";

const schema = z.object({
  studentId: z.string().min(1),
  day: z.number().int().min(1).max(30),
  status: z.enum(["PRESENT", "ABSENT"]),
});

export async function POST(req) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const { studentId, day, status } = parsed.data;

  // Identify the mentor from the SESSION, never from the request body.
  const mentor = await prisma.mentor.findUnique({ where: { userId: session.sub } });
  if (!mentor) return NextResponse.json({ error: "Mentor profile not found" }, { status: 404 });

  // The student must belong to this mentor.
  const student = await prisma.student.findFirst({ where: { id: studentId, mentorId: mentor.id } });
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const maxDay = student.duration === "DAYS_15" ? 15 : 30;
  if (day > maxDay) return NextResponse.json({ error: `Day must be 1 to ${maxDay}` }, { status: 400 });

  await prisma.attendance.upsert({
    where: { studentId_day: { studentId, day } },
    update: { status },
    create: { studentId, day, status },
  });
  return NextResponse.json({ ok: true });
}
```

> **Pattern rule for the agent:** every `/api/student/*` and `/api/mentor/*` route follows 12.6: get the session with `requireRole`, look up the profile from `session.sub`, and filter every query by that profile. Never accept `userId`, `mentorId` or `studentId` as proof of identity from the client. For protected file downloads (assignment attachments, submissions, certificates), check ownership the same way before streaming, and resolve paths only through `safeResolve()`.

### 12.7 `scripts/create-admin.js`

```js
// Usage (Node 20+):
//   ADMIN_EMAIL=you@aitechpulze.com ADMIN_NAME="Niranjan P" ADMIN_PASSWORD='Temp#Pass123' \
//   node --env-file=.env.local scripts/create-admin.js
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

async function main() {
  const { ADMIN_EMAIL, ADMIN_NAME, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_NAME || !ADMIN_PASSWORD) {
    console.error("Set ADMIN_EMAIL, ADMIN_NAME and ADMIN_PASSWORD.");
    process.exit(1);
  }
  if (ADMIN_PASSWORD.length < 8) {
    console.error("ADMIN_PASSWORD must be at least 8 characters.");
    process.exit(1);
  }

  const prisma = new PrismaClient();
  try {
    const email = ADMIN_EMAIL.toLowerCase();
    if (await prisma.user.findUnique({ where: { email } })) {
      console.error("A user with this email already exists.");
      process.exit(1);
    }
    await prisma.user.create({
      data: {
        name: ADMIN_NAME,
        email,
        passwordHash: await bcrypt.hash(ADMIN_PASSWORD, 12),
        role: "ADMIN",
        mustChangePassword: true,
      },
    });
    console.log(`Admin created: ${email} (you must change the password on first login)`);
  } finally {
    await prisma.$disconnect();
  }
}

main();
```

### 12.8 `next.config.js` (REPLACES the 6.17 version: adds security headers)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r("/solutions", "/services"),
      r("/technologies", "/services"),
      r("/products", "/work"),
      r("/portfolio", "/work"),
      r("/get-quote", "/contact"),
      r("/team", "/about"),
      r("/careers", "/academy/careers"),
      r("/internships", "/academy/internships"),
      r("/academic-hub", "/academy/projects"),
      r("/portal/student", "/portal/student/dashboard"),
      r("/portal/mentor", "/portal/mentor/dashboard"),
      r("/portal/admin", "/portal/admin/dashboard"),
    ];
  },
};

module.exports = nextConfig;
```

---

## 13. CONTENT SEED (use exactly; mark unknowns as `TODO`)

### 13.1 `src/content/site.js` (starting point)

```js
export const site = {
  name: "AiTechPulze",
  tagline: "We build websites, AI tools and software for growing businesses",
  subtext: "TODO: one or two lines about what makes AiTechPulze different (write from the facts in Section 2 only).",
  founded: 2023,
  msme: "UDYAM-TN-28-0216110",
  contact: {
    email: "info@aitechpulze.com",
    phone: "+91 95857 76088",
    whatsapp: "919585776088", // used for https://wa.me/<number>
    hours: "Mon–Sat 9AM–7PM IST",
    location: "Tamil Nadu, India",
  },
  stats: [
    { label: "Projects", value: "50+" },
    { label: "Clients", value: "30+" },
    { label: "Live Products", value: "3" },
  ],
  social: {
    // TODO: fill real links; hide any that are empty
    linkedin: "", instagram: "", github: "", youtube: "",
  },
};
```

### 13.2 `src/content/team.js`

```js
export const leadership = [
  { name: "Niranjan P", role: "Founder & CEO", photo: "/team/niranjan.webp", bio: "TODO" },
  { name: "Vijaykumar", role: "CTO", photo: "/team/vijaykumar.webp", bio: "TODO" },
  { name: "Ranjeet", role: "AI/ML Engineer", photo: "/team/ranjeet.webp", bio: "TODO" },
];

// Smaller grid. Roles unknown, so leave as "Intern" (do not invent roles).
export const interns = [
  "Nehashree", "Nishalini", "Ramani", "Rajesh", "Sanjay Ram", "Susmiha bavyaa",
  // TODO: add the remaining names (13 team members in total)
].map((name) => ({ name, role: "Intern", photo: "" }));
```

### 13.3 `src/content/work.js` (shape; fill only with real facts)

```js
export const work = [
  {
    slug: "pkroutex",
    name: "PKROUTEX",
    category: "Logistics",
    url: "https://pkroutex.com",
    summary: "Enterprise logistics platform with shipment tracking and fleet management.",
    problem: "TODO",
    built: "Shipment tracking and fleet management platform.",
    stack: ["TODO"],
    result: "TODO",
  },
  {
    slug: "iprintzone",
    name: "iPrintZone",
    category: "Printing",
    url: "https://iprintzone.com",
    summary: "Online printing platform with custom design and order management.",
    problem: "TODO",
    built: "Online printing platform: custom design and order management.",
    stack: ["TODO"],
    result: "TODO",
  },
  {
    slug: "adhvaya-jewellery",
    name: "Adhvaya Jewellery",
    category: "Luxury / Jewellery",
    url: "https://adhvayajewellery.com",
    summary: "E-commerce jewellery platform.",
    problem: "TODO",
    built: "E-commerce platform for jewellery.",
    stack: ["TODO"],
    result: "TODO",
  },
];
```

### 13.4 `src/content/faq.js` (starter, agent may extend using only real facts)

Questions to cover: How long does a website take? (answer: `TODO`, confirm with owner), Do you provide support after launch? (Starter 1 month, Growth 3 months), Do you build AI/automation tools? (yes: AI & Automation group), Which technologies do you use? (from the tech stack list), How do I get a quote? (contact form, reply usually within 24 hours, Mon–Sat 9AM–7PM IST), How do internships work? (link to `/academy/internships`).

---

## 14. TESTING CHECKLIST (run before saying "done")

Run the app (`npm run build && npm start`) and verify each item. Report results in a table (item, pass/fail, note).

**Auth and roles (use curl with cookies)**
1. `curl -i localhost:3000/api/admin/applications` with no cookie → **401**.
2. Log in as a student, then call an `/api/admin/*` and an `/api/mentor/*` route with that cookie → **401**.
3. Log in as a mentor, call `/api/student/*` → **401**; call `/api/admin/*` → **401**.
4. New student with `mustChangePassword: true` calling `/api/student/*` → **403**; visiting `/portal/student/dashboard` redirects to `/portal/change-password`.
5. After a successful password change, the student can reach the dashboard without logging in again.
6. 6 wrong login attempts for one email → 6th gets **429**.

**Data isolation**
7. Mentor A cannot read or mark attendance for Mentor B's student (use a real studentId from the other mentor; expect 404).
8. Student A cannot download Student B's submission or certificate, even with the exact file path.

**Files**
9. `GET /api/admin/resume/..%2f..%2f.env.local` and `/api/admin/resume/resumes/../../package.json` as admin → **400 or 404, never file contents**.
10. Upload a `.txt` renamed to `.pdf` to the apply form → rejected. Upload a PDF over 2 MB → rejected.
11. Nothing in `public/` is a private upload.

**Business flows**
12. Quote form: row saved, admin email received (reply-to = client), client email received. Break SMTP on purpose: the form still returns success and the quote is still saved.
13. Internship apply: row + resume saved, both emails sent. Duplicate email → 409.
14. Admin approve: student user created, email sent, `mustChangePassword` true. Break SMTP: response has `mailSent: false` and the UI warns the admin. "Resend credentials" then works.
15. Issue certificate → `/verify` with that ID shows only name, domain, duration, dates. Wrong ID → "not found". Malformed ID → 400.

**SEO and redirects**
16. Every old URL in `next.config.js` returns **301** to the new URL (`curl -I`).
17. `/sitemap.xml` includes services, work and blog slugs. `/robots.txt` disallows `/portal` and `/api`. Portal pages have `noindex`.
18. `npm run build` and `npm run lint` pass. Lighthouse mobile on `/` is 90+ (report the real score; if lower, list what to fix).

---

## 15. MANUAL STEPS CHECKLIST (the agent must output this at the end)

The agent can't do these. End your final message with this list, filled in with the exact values or file names needed:

1. **Google App Password** for `info@aitechpulze.com` (Google Account → Security → 2-Step Verification on → App passwords) → put in `SMTP_PASS`.
2. **Hostinger MySQL database** (hPanel → Databases) → set `DATABASE_URL`.
3. **`JWT_SECRET`**: generate with `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.
4. Run `npx prisma migrate deploy`, then `scripts/create-admin.js` once.
5. **DNS records** for email: Google SPF, DKIM, DMARC for `aitechpulze.com`.
6. **Team photos** in `public/team/` (square WebP) and `public/og.png` (1200×630).
7. **Real case-study details** (problem, stack, result) for PKROUTEX, iPrintZone and Adhvaya Jewellery; replace every `TODO`.
8. Confirm pricing, FAQ answers, team bios, social links, and whether the stats (50+/30+/3) are accurate.
9. After launch: Search Console + sitemap, GA4, UptimeRobot, weekly DB export, and a backup copy of the `uploads/` folder.

---

## 16. START COMMAND (what the agent does first)

When you finish reading this prompt:

1. Reply with a **short plan** (max 15 lines): phases, anything ambiguous, any assumption you will make.
2. Do **not** wait for approval unless you are blocked. Start **Phase 1** immediately.
3. After each phase, print: ✅ what is done, ⚠️ what is `TODO`/placeholder, and the result of `npm run build`.
4. At the very end, print the Section 15 checklist and the Section 14 test results.

Begin now with Phase 1.

