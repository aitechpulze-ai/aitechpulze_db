"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── SVG Icons ── */
const IconExternalLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const IconStack = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconLive = () => (
  <svg width="7" height="7" viewBox="0 0 10 10" fill="currentColor">
    <circle cx="5" cy="5" r="5" />
  </svg>
);
const IconFilter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Category color map ── */
const categoryColors = {
  "E-Commerce & Design":      "#00F0FF",
  "Healthcare Management":    "#7B2CBF",
  "Education Technology":     "#2563EB",
  "AgriTech & AI":            "#22c55e",
  "Logistics & Supply Chain": "#f59e0b",
  "Luxury E-Commerce":        "#ec4899",
  "Healthcare AI":            "#7B2CBF",
  "Accessibility AI":         "#00F0FF",
};

const ALL = "All";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Project Card ── */
function ProjectCard({ project, index }) {
  const color = categoryColors[project.category] || "#00F0FF";
  const visibleStack = project.stack.slice(0, 3);
  const extra = project.stack.length - 3;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      custom={index}
      layout
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-white/15 transition-colors duration-300"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%,${color}0a 0%,transparent 70%)` }}
      />

      <div className="relative p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            {/* Category badge */}
            <div className="flex items-center gap-1.5 mb-2">
              <span
                className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border"
                style={{ color, borderColor: `${color}30`, background: `${color}10` }}
              >
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-white/20">{project.year}</span>
            </div>
            <h3 className="text-base font-bold text-white leading-snug group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>

          {/* Live badge */}
          <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green-500/20 bg-green-500/8">
            <motion.span
              className="text-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <IconLive />
            </motion.span>
            <span className="text-[10px] font-mono text-green-400">Live</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.summary}
        </p>

        {/* Stack */}
        <div className="flex items-center gap-1.5 flex-wrap mb-5">
          <span className="text-white/20"><IconStack /></span>
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/8 bg-white/4 text-white/50"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="text-[11px] font-mono text-white/30">+{extra}</span>
          )}
        </div>

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group/link"
          style={{ color }}
        >
          <span className="group-hover/link:underline underline-offset-2">View Demo</span>
          <span className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all">
            <IconExternalLink />
          </span>
        </a>
      </div>
    </motion.div>
  );
}

/* ── Main Client Component ── */
export default function AcademicHubClient({ projects, whatsapp }) {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 px-4">
        {/* Grid */}
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
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle,#2563EB 0%,#7B2CBF 50%,transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-[11px] font-mono text-[#2563EB] tracking-widest uppercase">
              Academic Hub
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Projects That{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#2563EB,#7B2CBF,#00F0FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ship & Inspire
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-[#8b93b0] max-w-2xl mx-auto leading-relaxed"
          >
            IEEE-grade projects, final year builds, and AI systems — all live, all real.
            Mentored by the AiTechPulze team.
          </motion.p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/20"><IconFilter /></span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/30">Filter</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                  ${active === cat
                    ? "border-[#7B2CBF]/60 bg-[#7B2CBF]/15 text-white"
                    : "border-white/10 bg-white/3 text-white/40 hover:text-white/70 hover:border-white/20"
                  }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[#7B2CBF]/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-mono text-white/20 tracking-widest uppercase mb-6"
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
          </motion.p>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
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
            {/* Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%,rgba(34,197,94,0.08) 0%,transparent 70%)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg,transparent,rgba(34,197,94,0.4),transparent)" }}
            />

            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-green-500/60 mb-3">
              Need Help?
            </p>
            <h2 className="text-2xl font-bold text-white mb-2">
              Get Project Mentorship
            </h2>
            <p className="text-[#8b93b0] text-sm mb-8 max-w-md mx-auto">
              IEEE papers, final year projects, AI systems — we guide you from idea to submission.
            </p>

            <motion.a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20need%20help%20with%20my%20academic%20project`}
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
                WhatsApp for Project Help
                <IconArrow />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
