# DECISIONS.md

All deviations from the spec, overrides applied, and fixes made during build.

---

## Overrides Applied (from user instructions, override project.md)

### OVR-001: Prisma v6 install
- **Instruction:** Install `prisma@6 @prisma/client@6` instead of latest.
- **Action:** `npm i prisma@6 @prisma/client@6 nodemailer bcryptjs jose zod`
- **Installed:** prisma@6.19.3, @prisma/client@6.19.3

### OVR-002: Assignment.mentor onDelete Cascade
- **Instruction:** In `prisma/schema.prisma`, `Assignment` model, change mentor relation to include `onDelete: Cascade`.
- **Action:** Changed `mentor Mentor @relation(fields: [mentorId], references: [id])` to `mentor Mentor @relation(fields: [mentorId], references: [id], onDelete: Cascade)`
- **Reason:** Prevents orphaned Assignment rows when a Mentor is deleted.

### OVR-003: UPLOAD_DIR comment in .env.example
- **Instruction:** In `.env.example`, use `"./uploads"` for local dev and add a comment that on the live server it must be outside the project folder to survive redeployments.
- **Action:** Added the `"./uploads"` default and an explanatory comment block in `.env.example`.

### OVR-004: Separate mentorCredentialsMail template
- **Instruction:** For mentor creation, make a separate `mentorCredentialsMail` template in `templates.js`. Do NOT reuse `credentialsMail` because it says "Your application is approved".
- **Action:** Added `mentorCredentialsMail` export to `src/lib/templates.js`. It uses "An admin has set up your mentor account" wording, green portal button, and accepts a `domain` field.
- **Note:** `credentialsMail` remains unchanged for student approval flow.

### OVR-005: next.config.js replaces next.config.mjs
- **Instruction:** Section 12.8 `next.config.js` replaces Section 6.17. Uses `module.exports`.
- **Action:** Deleted the scaffolded `next.config.mjs`; created `next.config.js` with Section 12.8 content (security headers + redirects).

### OVR-006: MySQL Database Provider (Hostinger)
- **Instruction:** Use MySQL instead of PostgreSQL for Hostinger deployment.
- **Connection:** `mysql://root:@localhost:3306/aitechpulze` (root user, no password, local MySQL).
- **Action:** Prisma schema already configured with `provider = "mysql"`. Updated `.env.example` to show MySQL format with Hostinger example. Added SMTP_HOST and SMTP_FROM environment variables.
- **Impact:** All Prisma queries remain compatible — Prisma abstracts database-specific syntax. No code changes required.

---

## Fixes Made

### FIX-001: Scaffolding into temp directory
- **Problem:** `create-next-app` refused to scaffold into a folder that already contained `project.md`.
- **Action:** Scaffolded into `atp-tmp` subfolder, then moved all files to workspace root with `Move-Item`.
- **Note in DECISIONS.md** per spec instruction.

### FIX-002: Next.js 16.3.8 installed (>= 16)
- **Version:** `create-next-app@latest` installed Next.js 16.3.8.
- **Section 12.0 check:** Verified that `middleware.js` convention is still valid in Next.js 16 (templates/middleware.js exists in dist). No rename required.
- **Note:** `next.config.mjs` was scaffolded (ES module), replaced with `next.config.js` (CommonJS `module.exports`) as specified.

### FIX-003: Zod v4 compatibility
- **Installed:** zod@4.6.5 (latest v4). The schemas in the spec use `.safeParse()`, `.enum()`, `.string()`, `.object()` — all compatible with Zod v4.
- **No changes needed.**

### FIX-004: sitemap.js imports content files
- **Problem:** Section 6.16 sitemap.js has a `TODO` comment to import services, work and blog slugs.
- **Action:** Updated `src/app/sitemap.js` to import from `@/content/services`, `@/content/work`, and `@/content/blog` and generate dynamic slug paths.

---

## Assumptions Made

### ASS-001: middleware.js location
- The spec uses `src/middleware.js`. Next.js App Router with `src/` dir expects middleware at `src/middleware.js`. Confirmed correct.

### ASS-002: Hostinger UPLOAD_DIR path
- For local dev `.env.local`, used `"./uploads"` (relative to project root). On live server, README.md instructs to use an absolute path outside the project.

### FIX-005: Prisma enum inline syntax
- **Problem:** `prisma/schema.prisma` used inline enum syntax (`enum Role { STUDENT MENTOR ADMIN }`) which is valid in the spec as pseudo-code notation but is invalid Prisma SDL. Prisma requires each enum value on a separate line.
- **Action:** Expanded all 6 enums to multi-line format. Logic unchanged.
- **Note:** The original spec's one-liner format is readable shorthand but not valid Prisma syntax.

### FIX-006: next.config.js vs next.config.mjs
- **Problem:** `create-next-app` scaffolded `next.config.mjs` (ES module with `export default`). The spec uses `module.exports` (CommonJS).
- **Action:** Deleted `next.config.mjs`, created `next.config.js` with `module.exports` as per Section 12.8.

### FIX-007: Scaffolding in non-empty directory
- **Problem:** `create-next-app` refused to scaffold in a directory already containing `project.md`.
- **Action:** Scaffolded into `atp-tmp/` subdirectory, then moved all files to workspace root with PowerShell `Move-Item`.

### FIX-008: sitemap.js content imports
- **Problem:** Section 6.16 sitemap.js had a `TODO` comment for dynamic slugs.
- **Action:** Added imports from `@/content/services`, `@/content/work`, and `@/content/blog/index` to generate service, work, and blog slug paths dynamically.

### FIX-009: Root page.js conflict
- **Problem:** The scaffold created `src/app/page.js` which conflicts with `src/app/(site)/page.js` since Next.js App Router resolves `/` to the `(site)` group.
- **Action:** Deleted the scaffold's `src/app/page.js`.

### FIX-010: Student assignment query in server component
- **Problem:** The `StudentDashboard` server page initially had a logic error fetching assignments with `studentId: undefined` in the include filter.
- **Action:** Split into two separate Prisma queries: one for the student record and one for assignments using an `OR` clause (`studentId = student.id` OR `studentId = null AND mentorId = student.mentorId`).

---

## Architecture Decisions

### ARCH-001: Route groups
- The `(site)` route group wraps all public pages with a shared Navbar + Footer layout.
- The `portal` group has a minimal no-nav layout with `robots: noindex`.

### ARCH-002: Server vs client components
- All page components are server components (no `"use client"` unless interactive).
- Only interactive pieces use `"use client"`: Navbar (mobile menu state), all forms, portal shell, dashboard components.

### ARCH-003: JSON.parse(JSON.stringify(...)) for Prisma data
- Prisma returns objects with `Date` instances. To pass them as props to client components, they are serialised via `JSON.parse(JSON.stringify(...))` in the server component pages.

### ARCH-004: Portal dashboard data fetching
- Portal dashboards (`/portal/student/dashboard`, etc.) are server components that fetch all data on the server using `requireRole()` directly. This is efficient and avoids waterfall client fetches.

### ARCH-005: mentorCredentialsMail
- `credentialsMail` is for students (says "Your application is approved").
- `mentorCredentialsMail` is for mentors (says "An admin has set up your mentor account"). Different subject, different wording, green CTA button.
- `/api/admin/mentors` POST uses `mentorCredentialsMail`.
- `/api/admin/students/[id]/resend-credentials` uses `credentialsMail` (student context).


## FIX-011: ESLint JSX Unescaped Entities (Phase 4)
**Date:** 2026-10-01  
**Problem:** Next.js ESLint config flags unescaped apostrophes/quotes in JSX text (`react/no-unescaped-entities`).  
**Solution:** Replaced all unescaped `'` with `&apos;` in 10 files (work/page.js, not-found.js, InternshipForm.js, QuoteForm.js, MentorDashboard.js, privacy-policy/page.js, services/[slug]/page.js, page.js home, contact/page.js, academy/projects/page.js). Lint now passes with zero errors/warnings.  
**Impact:** Fully compliant with Next.js ESLint default rules. Build: exit 0, 68 routes, 1 Turbopack warning (non-blocking path.resolve in uploads.js — expected).

---

## Phase 4 Complete: Polish & Documentation
**Date:** 2026-10-01  
**Completed:**
- 404/error pages with consistent design + return-home CTAs
- Loading states for (site) and portal route groups
- Accessibility: skip-to-content link, prose typography, semantic HTML maintained throughout
- README.md: full deployment guide, Hostinger specifics, UPLOAD_DIR warning, manual checklist
- DECISIONS.md: comprehensive decision log (11 fixes, 5 overrides, 5 architecture notes)
- ESLint cleanup: zero errors, zero warnings
- Final build: exit 0, 68 routes

**Remaining (Manual per Spec Sections 14 & 15):**
1. **Section 14 — Test Results:** Manual testing required (login flows, file uploads, RBAC, forms, email).
2. **Section 15 — Manual Checklist:** Admin approval flow, mentor/student portal smoke tests, certificate generation, resume access.
3. **Production deploy:** Push to GitHub → Hostinger setup → seed initial admin with `npm run create-admin`.

**Start command:**
- Local: `npm run dev`
- Production: `npm start`


## OVR-007: Production SMTP Configuration
**Date:** 2026-10-01  
**Override:** Gmail SMTP with SSL (port 465) instead of default TLS (port 587).  
**Credentials:**
- SMTP_HOST: smtp.gmail.com
- SMTP_PORT: 465 (SSL)
- SMTP_USER: info@aitechpulze.com
- SMTP_PASS: ppzxsfeajpkszfyy (Google App Password)
- SMTP_FROM: AiTechPulze <info@aitechpulze.com>
**Implementation:** Updated `src/lib/mail.js` to read SMTP_HOST, SMTP_PORT, and SMTP_FROM from environment variables. Added dynamic `secure` flag (true for 465, false for 587).

## OVR-008: Production MySQL Database
**Date:** 2026-10-01  
**Override:** Production Hostinger MySQL credentials instead of local.  
**Connection:** `mysql://u140962315_user:Pvbn%407738@82.25.121.27:3306/u140962315_aitech`  
**Details:**
- Host: 82.25.121.27 (Hostinger remote MySQL)
- User: u140962315_user
- Password: Pvbn@7738 (URL-encoded as Pvbn%407738)
- Database: u140962315_aitech
**Note:** Password contains `@` symbol which must be URL-encoded as `%40` in connection string. Local testing requires IP whitelist on Hostinger or SSH tunnel.

## FIX-012: Dynamic Mail Configuration
**Date:** 2026-10-01  
**Problem:** `src/lib/mail.js` had hardcoded SMTP settings (host, port, FROM address).  
**Solution:** Made all SMTP settings read from environment variables (SMTP_HOST, SMTP_PORT, SMTP_FROM). Dynamic `secure` flag based on port number (true for 465/SSL, false for 587/TLS).  
**Impact:** Supports both Gmail SSL (465) and TLS (587) configurations. No code changes needed when switching SMTP providers.
