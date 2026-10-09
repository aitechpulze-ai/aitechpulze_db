# AiTechPulze

Business website + internship management portal for AiTechPulze, built with **Next.js 16 (App Router)**, **Prisma 6 / MySQL**, JWT auth, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, JavaScript) |
| Styling | Tailwind CSS v4 |
| Database | MySQL via Prisma v6 |
| Auth | JWT in httpOnly cookie (`jose`) |
| Email | Nodemailer + Gmail SMTP |
| Validation | Zod |
| Hosting | Hostinger Node.js Web App |

---

## Prerequisites

- Node.js 22.x
- npm
- MySQL database (local or Hostinger)

---

## Local Development

### 1. Clone and install

```bash
git clone <your-repo-url>
cd aitechpulze_hostinger
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

| Variable | Description |
|---|---|
| `DATABASE_URL` | MySQL connection string: `mysql://user:pass@localhost:3306/dbname` |
| `JWT_SECRET` | Random 48-byte hex string (see below) |
| `SMTP_USER` | `info@aitechpulze.com` |
| `SMTP_PASS` | Google App Password (see below) |
| `ADMIN_NOTIFY_EMAIL` | `info@aitechpulze.com` |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` (dev) or `https://aitechpulze.com` (prod) |
| `UPLOAD_DIR` | `./uploads` for local dev |

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

**Google App Password:**
Google Account → Security → 2-Step Verification → App passwords → Generate for "Mail".

### 3. Set up database

```bash
npx prisma migrate dev --name init
```

### 4. Create first admin

```bash
ADMIN_EMAIL=you@aitechpulze.com ADMIN_NAME="Niranjan P" ADMIN_PASSWORD="YourPass#123" \
node --env-file=.env.local scripts/create-admin.js
```

On Windows PowerShell:
```powershell
$env:ADMIN_EMAIL="you@aitechpulze.com"; $env:ADMIN_NAME="Niranjan P"; $env:ADMIN_PASSWORD="YourPass#123"
node --env-file=.env.local scripts/create-admin.js
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── (site)/          # Public website (with Navbar + Footer)
│   │   ├── page.js      # Home
│   │   ├── services/    # Services listing + detail
│   │   ├── work/        # Case studies
│   │   ├── pricing/
│   │   ├── about/
│   │   ├── contact/     # Quote form
│   │   ├── blog/        # Blog listing + posts
│   │   ├── academy/     # Academy home, internships, projects, careers
│   │   ├── verify/      # Certificate verification
│   │   └── (legal)/     # privacy-policy, terms, refund-policy
│   ├── portal/
│   │   ├── login/
│   │   ├── change-password/
│   │   ├── student/dashboard/
│   │   ├── mentor/dashboard/
│   │   └── admin/dashboard/
│   └── api/
│       ├── auth/        # login, logout, change-password
│       ├── quote/       # POST – save quote + send emails
│       ├── internship/  # POST – apply (file upload)
│       ├── verify/      # GET – certificate lookup (public)
│       ├── student/     # GET dashboard, assignments, certificate download
│       ├── mentor/      # attendance, meet, assignments, submissions
│       └── admin/       # applications, students, mentors, quotes, analytics, resume
├── components/
│   ├── ui/              # Button, Input, Textarea, Select, Badge, Modal
│   ├── layout/          # Navbar, Footer, WhatsAppButton
│   ├── forms/           # QuoteForm, InternshipForm, VerifyForm
│   └── portal/          # LoginForm, ChangePasswordForm, PortalShell,
│                        # StudentDashboard, MentorDashboard, AdminDashboard
├── content/             # Editable data: site.js, services.js, work.js, team.js,
│                        # industries.js, faq.js, blog/*.js
└── lib/                 # prisma.js, auth.js, mail.js, templates.js, seo.js,
                         # rateLimit.js, uploads.js
scripts/
└── create-admin.js      # One-time admin creation script
prisma/
└── schema.prisma
```

---

## Deployment on Hostinger

### 1. MySQL database

hPanel → **Databases** → Create MySQL database + user → Copy connection details into `DATABASE_URL`.

### 2. Upload directory

**Important:** Set `UPLOAD_DIR` to a path **outside the project folder** so redeployments do not delete uploaded files.

Example: `/home/u123456789/atp-uploads`

Set this in your Hostinger environment variables panel. If the directory does not exist, the app creates it on first upload.

### 3. Deploy code

- Push to a private GitHub repo.
- hPanel → **Websites → Add Website → Node.js Apps** → connect the repo.
- Node version: **22.x**
- Build command: `npm run build`
- Start command: `npm start`
- Set all environment variables in the panel (same as `.env.example`).

### 4. Run database migrations

Via Hostinger SSH:
```bash
cd /path/to/your/app
npx prisma migrate deploy
```

Or from local machine with Hostinger **Remote MySQL** (whitelist your IP first):
```bash
DATABASE_URL="mysql://user:pass@hostinger-host:3306/dbname" npx prisma migrate deploy
```

### 5. Create admin account

```bash
ADMIN_EMAIL=admin@aitechpulze.com ADMIN_NAME="Niranjan P" ADMIN_PASSWORD="StrongPass#123" \
node --env-file=.env.local scripts/create-admin.js
```

Log in at `https://aitechpulze.com/portal/login` and change password immediately.

### 6. DNS records for email (Gmail SMTP)

Add these to your domain DNS to prevent spam filtering:

- **SPF:** `v=spf1 include:_spf.google.com ~all`
- **DKIM:** Get the record from Google Workspace Admin → Apps → Gmail → Authenticate email.
- **DMARC:** `v=DMARC1; p=quarantine; rua=mailto:info@aitechpulze.com`

### 7. Post-launch checklist

- [ ] Google Search Console → submit `https://aitechpulze.com/sitemap.xml`
- [ ] Google Analytics 4 → add tracking script
- [ ] UptimeRobot → monitor `https://aitechpulze.com`
- [ ] Weekly MySQL backup via hPanel → Backups
- [ ] Copy `atp-uploads/` folder to a second backup location weekly

---

## npm Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run postinstall` | Run `prisma generate` after npm install |

---

## Security Notes

- Passwords are bcrypt-hashed (cost 12). Never stored in plain text.
- Sessions use httpOnly, secure (prod), sameSite=lax cookies. No tokens in localStorage.
- All user input is validated with Zod before hitting the database.
- File uploads are stored outside `public/`. Served only through protected API routes.
- Path traversal is blocked in all file-serving routes via `safeResolve()`.
- Rate limiting on login (5/15min), quote (3/hr), apply (3/hr), verify (20/15min).
- Security headers set via `next.config.js`: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.

---

## Team Photos

Place square WebP images in `public/team/`:
- `public/team/niranjan.webp`
- `public/team/vijaykumar.webp`
- `public/team/ranjeet.webp`

Also place `public/og.png` (1200×630) for Open Graph previews.

---

## Content Editing

All editable site content lives in `src/content/`:

| File | What it controls |
|---|---|
| `site.js` | Stats, contact info, social links, tagline |
| `services.js` | 5 service groups + tech stack |
| `work.js` | Case studies (fill in `TODO` fields) |
| `team.js` | Leadership + interns |
| `industries.js` | Industry cards |
| `faq.js` | FAQ questions and answers |
| `blog/*.js` | Blog post content |

---

## Manual Steps (Required Before Launch)

See `DECISIONS.md` for all decisions made during build.

1. **Google App Password** → `SMTP_PASS`
2. **Hostinger MySQL** → `DATABASE_URL`
3. **JWT_SECRET** → generate with `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`
4. Run `npx prisma migrate deploy` + `scripts/create-admin.js`
5. **DNS records** for Gmail SPF/DKIM/DMARC
6. **Team photos** in `public/team/` (square WebP) + `public/og.png` (1200×630)
7. Fill in `TODO` fields in `src/content/work.js` (case study details)
8. Confirm stats (50+/30+/3), FAQ answers, team bios, social links in `src/content/`
9. Post-launch: Search Console, GA4, UptimeRobot, weekly DB backup
