"use client";

import { motion } from "framer-motion";
import InternshipForm from "./InternshipForm";

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5a2.5 2.5 0 0 1 2.5 2.5v.5h.5a2.5 2.5 0 0 1 0 5H17v.5a2.5 2.5 0 0 1-2.5 2.5h-.5v.5a2.5 2.5 0 0 1-5 0V13h-.5A2.5 2.5 0 0 1 6 10.5V10h-.5a2.5 2.5 0 0 1 0-5H6V4.5A2.5 2.5 0 0 1 8.5 2h1z"/>
  </svg>
);
const IconTask = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const IconCert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const IconFree = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconAI = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconPen = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);
const IconCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconCloud = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const highlights = [
  { icon: IconClock, label: "Duration", value: "15 or 30 Days", color: "#00F0FF" },
  { icon: IconBrain, label: "Mentorship", value: "1-on-1 Assigned", color: "#7B2CBF" },
  { icon: IconTask, label: "Tasks", value: "Real Projects", color: "#2563EB" },
  { icon: IconCert, label: "Certificate", value: "Verifiable", color: "#00F0FF" },
  { icon: IconChart, label: "Tracking", value: "Portal Access", color: "#7B2CBF" },
  { icon: IconFree, label: "Cost", value: "Free to Apply", color: "#2563EB" },
];

const domains = [
  { name: "Web Development", icon: IconGlobe },
  { name: "AI & Machine Learning", icon: IconAI },
  { name: "UI/UX Design", icon: IconPen },
  { name: "Python & Data Science", icon: IconCode },
  { name: "Mobile Development", icon: IconPhone },
  { name: "Cloud & DevOps", icon: IconCloud },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function InternshipsHero({ whatsapp }) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 px-4">
        {/* Grid bg */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle,#7B2CBF 0%,#00F0FF 60%,transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[11px] font-mono text-[#00F0FF] tracking-widest uppercase">
              Applications Open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Launch Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#7B2CBF,#00F0FF,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tech Career
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-[#8b93b0] max-w-2xl mx-auto leading-relaxed"
          >
            A structured 15 or 30-day programme with real tasks, a dedicated mentor,
            and a verifiable certificate — completely free.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-[#00F0FF]/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="relative group flex flex-col items-center text-center p-4 rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%,${h.color}18 0%,transparent 70%)`,
                  }}
                />
                <span className="mb-2" style={{ color: h.color }}><h.icon /></span>
                <p className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-1">
                  {h.label}
                </p>
                <p className="text-sm font-semibold text-white">{h.value}</p>
                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg,transparent,${h.color},transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAINS ── */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[11px] font-mono tracking-[0.3em] uppercase text-[#00F0FF]/50 mb-6"
          >
            Available Domains
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((d, i) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/4 text-sm text-white/70 hover:border-[#7B2CBF]/50 hover:text-white transition-colors"
              >
                <span className="text-white/40"><d.icon /></span>
                {d.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#00F0FF]/50 mb-3">
              Step 01 — Apply
            </p>
            <h2 className="text-3xl font-bold text-white">Submit Your Application</h2>
            <p className="mt-2 text-[#8b93b0] text-sm">
              Fill in your details below. We review every application personally.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg,transparent,#7B2CBF,#00F0FF,transparent)" }}
            />
            {/* Corner brackets */}
            {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((cls, i) => (
              <div key={i} className={`absolute w-4 h-4 border-[#00F0FF]/30 ${cls}`} />
            ))}

            <div className="p-8 sm:p-10">
              <InternshipForm />
            </div>
          </motion.div>

          {/* WhatsApp help */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-sm text-[#8b93b0]/60"
          >
            Questions?{" "}
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              Chat on WhatsApp ↗
            </a>
          </motion.p>
        </div>
      </section>
    </>
  );
}
