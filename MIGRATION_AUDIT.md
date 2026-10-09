# AITECHPULZE — PHASE A MIGRATION AUDIT

## 1. Environment & Dependencies
- **Original Architecture**: Next.js v16.3.8 (App Router `src/app`)
- **React Version**: 19.2.8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations**: Framer Motion (`framer-motion`)
- **Database/Auth**: Supabase (`@supabase/supabase-js`)
- **Backend Utilities**: `bcryptjs`, `jose` (JWT), `nodemailer`, `zod`, `@google/genai`

## 2. Inventory 
### Frontend Architecture (To map to React + Vite)
- **Routing**: `src/app/(site)/*` and `src/app/portal/*`. Requires full mapping to `react-router-dom` `<Routes>`.
- **Components**: `src/components/` (HeroSection, ChatbotWidget, MagneticButton, Portals). Must be ported exactly.
- **Images**: extensively uses `next/image`. Will require precision mapping to standard `<img src="..." loading="lazy" decoding="async">` with matching srcset/sizes if necessary to achieve zero visual deviation.
- **Links**: `next/link` must be mapped to `<Link to="...">` without losing prefetch or active state styling.

### Backend Architecture (To map to Express.js)
- **API Routes**: 30+ endpoints located in `src/app/api/`. 
- **Authentication**: Custom JWT/Session management likely using `jose` and `cookies()`.
- **Database Rules**: Supabase client initialization located at `src/lib/supabase.js`.
- **Email System**: `src/lib/mail.js` and `src/lib/templates.js` using Nodemailer.

## 3. Migration Checklist (Phase B to H)

- [ ] **Phase B1**: Initialize React + Vite + TypeScript repository.
- [ ] **Phase B2**: Migrate `tailwind.config` (or CSS variables) precisely. Ensure tokens match.
- [ ] **Phase B3**: Port all UI components. Replace Next APIs (`usePathname`, `useRouter`) with React Router hooks (`useLocation`, `useNavigate`).
- [ ] **Phase D1**: Initialize Node.js + Express + TypeScript repository.
- [ ] **Phase D2**: Port Supabase queries, ensuring no RLS policies are exposed or modified.
- [ ] **Phase D3**: Convert all 30+ `export async function POST(req)` Next.js functions into Express route handlers (handling `multer` for form-data, `cookie-parser` for auth tokens).
- [ ] **Phase F1**: Set up Playwright visual regression testing suite.
- [ ] **Phase F2**: Capture baseline screenshots of the current Next.js site across 6 required viewports.
- [ ] **Phase F3**: Run Playwright pixel-matching against the new Vite frontend. Resolve all discrepancies.

## Reversal Notice
Due to the strict ZERO-VISUAL-REGRESSION requirement, the previous automated (regex-based) conversion attempts have been fully reverted. The codebase is back to its original 100% working Next.js state. 

We will proceed strictly phase by phase.
