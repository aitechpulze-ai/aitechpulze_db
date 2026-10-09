import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import PulseLogo from "@/components/svg/PulseLogo";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Web & App Development", href: "/services/web-app-development" },
      { label: "AI & Automation",        href: "/services/ai-automation" },
      { label: "SaaS / ERP / CRM",       href: "/services/saas-erp-crm" },
      { label: "UI/UX Design",           href: "/services/ui-ux-design" },
      { label: "Cloud, DevOps & SEO",    href: "/services/cloud-devops-seo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "/about" },
      { label: "Work",    href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog",    href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Internships",       href: "/academy/internships" },
      { label: "Academic Hub",      href: "/academy/projects" },
      { label: "Careers",           href: "/academy/careers" },
      { label: "Verify Certificate",href: "/verify" },
      { label: "Student Portal",    href: "/portal/login" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "+91 95857 76088",       href: "tel:+919585776088" },
      { label: "info@aitechpulze.com",  href: "mailto:info@aitechpulze.com" },
      { label: "WhatsApp Chat",         href: `https://wa.me/${site.contact.whatsapp}` },
      { label: "Start a Project",       href: "/get-quote" },
    ],
  },
];

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const IconYouTube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#03040b"/>
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

const socials = [
  { icon: IconLinkedIn,  href: site.social.linkedin,  label: "LinkedIn" },
  { icon: IconInstagram, href: site.social.instagram, label: "Instagram" },
  { icon: IconGitHub,    href: site.social.github,    label: "GitHub" },
  { icon: IconYouTube,   href: site.social.youtube,   label: "YouTube" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-[#03040b] overflow-hidden aurora">
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-20" />
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg,transparent 0%,#7B2CBF 30%,#00F0FF 50%,#2563EB 70%,transparent 100%)" }}
      />

      {/* Subtle bg glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] opacity-8"
        style={{ background: "radial-gradient(circle,#7B2CBF,transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-14">
          {/* Brand col */}
          <div className="col-span-2">
            <PulseLogo />
            <p className="mt-4 text-sm leading-relaxed text-[#8b93b0] max-w-xs">
              Building digital products. Delivering intelligent solutions. Empowering student innovation across India.
            </p>

            {/* Contact quick links */}
            <div className="mt-6 space-y-2">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g,"")}`}
                className="flex items-center gap-2 text-sm text-[#8b93b0] hover:text-[#00F0FF] transition-colors"
              >
                <span className="text-[#00F0FF]/50"><IconPhone /></span>
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 text-sm text-[#8b93b0] hover:text-[#00F0FF] transition-colors"
              >
                <span className="text-[#00F0FF]/50"><IconMail /></span>
                {site.contact.email}
              </a>
            </div>

            {/* Socials */}
            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg border border-white/10 bg-white/4 flex items-center justify-center text-white/40 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5 list-none">
                {col.links.map((l) => {
                  const isExternal = l.href.startsWith("http") || l.href.startsWith("mailto") || l.href.startsWith("tel");
                  const Comp = isExternal ? "a" : Link;
                  const ext = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
                  return (
                    <li key={l.label}>
                      <Comp
                        href={l.href}
                        {...ext}
                        className="text-sm text-[#8b93b0]/70 hover:text-white transition-colors duration-200"
                      >
                        {l.label}
                      </Comp>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-[1px] mb-8"
          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} AiTechPulze. All rights reserved.
            </p>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/15" />
            <div className="hidden sm:flex items-center gap-2">
              <Image src="/images/msme_logo.webp" alt="MSME Logo" width={60} height={20} className="object-contain opacity-70" />
              <p className="text-xs font-mono text-white/20">{site.msme}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms",          href: "/terms" },
              { label: "Refund Policy",  href: "/refund-policy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-white/25 hover:text-white/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
