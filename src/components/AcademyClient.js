"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ── SVG Icons ── */
const IconGrad = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconBriefcase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" /><line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconCert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* ── Data ── */
const cards = [
  {
    title: "Internships",
    icon: IconGrad,
    color: "#00F0FF",
    desc: "15 and 30-day structured internships in AI, web development, UI/UX and more. Real tasks, dedicated mentor, verifiable certificate.",
    href: "/academy/internships",
    cta: "Apply Now",
    badge: "Free to Apply",
    features: ["Mentor assigned on approval", "Real project tasks", "Portal access"],
  },
  {
    title: "Academic Hub",
    icon: IconBook,
    color: "#7B2CBF",
    desc: "IEEE projects, final year builds, research support and innovation projects — guided by our engineering team.",
    href: "/academy/projects",
    cta: "Explore Projects",
    badge: "7 Live Projects",
    features: ["IEEE-grade quality", "AI & full-stack", "WhatsApp mentorship"],
  },
  {
    title: "Careers",
    icon: IconBriefcase,
    color: "#2563EB",
    desc: "Open positions for interns and full-time roles in React, Python/AI, UI/UX, and Full Stack. Join the team.",
    href: "/academy/careers",
    cta: "View Openings",
    badge: "5 Open Roles",
    features: ["Remote friendly", "Real products", "Fast growth"],
  },
  {
    title: "Verify Certificate",
    icon: IconShield,
    color: "#00F0FF",
    desc: "Instantly verify the authenticity of any AiTechPulze internship completion certificate using the certificate ID.",
    href: "/verify",
    cta: "Verify Now",
    badge: "Instant",
    features: ["Tamper-proof IDs", "Public lookup", "Employer-ready"],
  },
];

const stats = [
  { icon: IconUsers, value: "100+", label: "Students Trained" },
  { icon: IconCert,  value: "80+",  label: "Certificates Issued" },
  { icon: IconZap,   value: "15",   label: "Days Min. Duration" },
  { icon: IconGrad,  value: "6",    label: "Domains Available" },
];

const steps = [
  { num: "01", title: "Apply Online", desc: "Fill the internship form with your details and upload your resume." },
  { num: "02", title: "Get Reviewed", desc: "Our team reviews every application personally within 24–48 hours." },
  { num: "03", title: "Mentor Assigned", desc: "On approval, a dedicated mentor is assigned to guide your work." },
  { num: "04", title: "Earn Certificate", desc: "Complete tasks, get attendance marked, and receive your verifiable certificate." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AcademyClient({ whatsapp }) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28 px-4">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blobs */}
        <div
          className="pointer-events-none absolute -top-20 left-1/4 w-[500px] h-[400px] rounded-full blur-[130px] opacity-15"
          style={{ background: "radial-gradient(circle,#7B2CBF,transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-10 right-1/4 w-[400px] h-[300px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle,#00F0FF,transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/8"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span className="text-[11px] font-mono text-[#7B2CBF] tracking-widest uppercase">
              AiTechPulze Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            We Invest in{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#7B2CBF,#00F0FF,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Students
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 text-lg text-[#8b93b0] max-w-2xl mx-auto leading-relaxed"
          >
            Internships, project mentorship, and career opportunities — all in one place.
            Built for students who want to work on real things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/academy/internships"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#7B2CBF,#2563EB)" }}
            >
              Apply for Internship <IconArrow />
            </Link>
            <Link
              href="/academy/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/70 border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              View Projects <IconArrow />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <span className="text-[#00F0FF]/50 mb-2"><SIcon /></span>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-[10px] font-mono tracking-widest uppercase text-white/30 mt-1">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/30">What We Offer</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => {
              const CIcon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-colors duration-300"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg,transparent,${card.color},transparent)` }}
                  />
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%,${card.color}0a 0%,transparent 70%)` }}
                  />

                  <div className="relative p-7 flex flex-col flex-1">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border"
                        style={{ background: `${card.color}10`, borderColor: `${card.color}25`, color: card.color }}
                      >
                        <CIcon />
                      </div>
                      <span
                        className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                        style={{ color: card.color, borderColor: `${card.color}30`, background: `${card.color}10` }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
                    <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">{card.desc}</p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-6">
                      {card.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12px] text-white/50">
                          <span style={{ color: card.color }}><IconCheck /></span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
                      style={{ color: card.color }}
                    >
                      <span className="group-hover/link:underline underline-offset-2">{card.cta}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform"><IconArrow /></span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#00F0FF]/50 mb-3">Process</p>
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden sm:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-16 h-16 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/8 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-[#7B2CBF] font-mono">{step.num}</span>
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#7B2CBF]/20"
                      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                      transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                    />
                  </div>
                  <p className="text-sm font-bold text-white mb-1">{step.title}</p>
                  <p className="text-[12px] text-white/35 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%,rgba(123,44,191,0.12) 0%,transparent 70%)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg,transparent,#7B2CBF,#00F0FF,transparent)" }}
            />

            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#7B2CBF]/60 mb-3">Questions?</p>
            <h2 className="text-2xl font-bold text-white mb-2">Talk to Us on WhatsApp</h2>
            <p className="text-[#8b93b0] text-sm mb-8 max-w-md mx-auto">
              We reply during business hours. Ask about internships, projects, or open roles.
            </p>

            <motion.a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
              />
              <span className="relative flex items-center gap-2.5">
                <IconWhatsApp />
                Chat on WhatsApp
                <IconArrow />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
