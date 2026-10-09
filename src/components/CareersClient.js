"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── SVG Icons ── */
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5a2.5 2.5 0 0 1 2.5 2.5v.5h.5a2.5 2.5 0 0 1 0 5H17v.5a2.5 2.5 0 0 1-2.5 2.5h-.5v.5a2.5 2.5 0 0 1-5 0V13h-.5A2.5 2.5 0 0 1 6 10.5V10h-.5a2.5 2.5 0 0 1 0-5H6V4.5A2.5 2.5 0 0 1 8.5 2h1z" />
  </svg>
);
const IconPen = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconCpu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);
const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ── Data ── */
const openings = [
  {
    title: "React Developer",
    type: "Intern",
    icon: IconCode,
    color: "#00F0FF",
    desc: "Build UI components and features for client projects using React and Next.js.",
    requirements: ["React basics", "HTML/CSS", "Git"],
  },
  {
    title: "Python / AI Developer",
    type: "Intern",
    icon: IconBrain,
    color: "#7B2CBF",
    desc: "Work on AI/ML projects: data processing, model training, and API integration.",
    requirements: ["Python", "NumPy / Pandas basics", "Interest in ML"],
  },
  {
    title: "UI/UX Design Intern",
    type: "Intern",
    icon: IconPen,
    color: "#2563EB",
    desc: "Design wireframes, mockups, and prototypes for web and mobile products.",
    requirements: ["Figma", "UX principles", "Portfolio"],
  },
  {
    title: "Full Stack Developer",
    type: "Full-time",
    icon: IconLayers,
    color: "#00F0FF",
    desc: "Own features end-to-end: database, API, and frontend across multiple client products.",
    requirements: ["React / Next.js", "Node.js", "MySQL or PostgreSQL", "2+ yrs exp"],
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time",
    icon: IconCpu,
    color: "#7B2CBF",
    desc: "Design and deploy ML models and AI pipelines for client SaaS and automation projects.",
    requirements: ["Python", "TensorFlow or PyTorch", "MLOps basics", "2+ yrs exp"],
  },
];

const perks = [
  { icon: IconStar, label: "Real Projects", desc: "Work on live client products from day one" },
  { icon: IconGlobe, label: "Remote Friendly", desc: "Work from anywhere in India" },
  { icon: IconZap, label: "Fast Growth", desc: "Steep learning curve, rapid skill building" },
  { icon: IconUsers, label: "Small Team", desc: "Direct access to founders and mentors" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Job Card ── */
function JobCard({ job, index, whatsapp }) {
  const [hovered, setHovered] = useState(false);
  const Icon = job.icon;
  const isFullTime = job.type === "Full-time";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden transition-colors duration-300 hover:border-white/15"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg,transparent,${job.color},transparent)` }}
      />
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%,${job.color}0c 0%,transparent 70%)` }}
      />

      <div className="relative p-6 sm:p-7">
        <div className="flex items-start gap-4">
          {/* Icon box */}
          <div
            className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-colors duration-300"
            style={{
              background: `${job.color}10`,
              borderColor: `${job.color}25`,
              color: job.color,
            }}
          >
            <Icon />
          </div>

          <div className="flex-1 min-w-0">
            {/* Title row */}
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h2 className="text-lg font-bold text-white">{job.title}</h2>
              <span
                className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                  isFullTime
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : "border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[#00F0FF]"
                }`}
              >
                {job.type}
              </span>
            </div>

            <p className="text-sm text-white/40 leading-relaxed mb-4">{job.desc}</p>

            {/* Requirements */}
            <div className="flex flex-wrap gap-2 mb-5">
              {job.requirements.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-white/8 bg-white/4 text-white/50"
                >
                  <span style={{ color: job.color }}><IconCheck /></span>
                  {r}
                </span>
              ))}
            </div>

            {/* Apply CTA */}
            <motion.a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20the%20${encodeURIComponent(job.title)}%20role`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 overflow-hidden relative"
              style={{ background: isFullTime ? "linear-gradient(135deg,#16a34a,#15803d)" : `linear-gradient(135deg,${job.color}30,${job.color}15)`, border: `1px solid ${job.color}30` }}
            >
              <IconWhatsApp />
              Apply via WhatsApp
              <IconArrow />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export default function CareersClient({ whatsapp }) {
  const interns = openings.filter((j) => j.type === "Intern");
  const fulltime = openings.filter((j) => j.type === "Full-time");

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
          style={{ background: "radial-gradient(circle,#7B2CBF 0%,#00F0FF 60%,transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[11px] font-mono text-[#00F0FF] tracking-widest uppercase">
              We&apos;re Hiring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Build the{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#7B2CBF,#00F0FF,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-[#8b93b0] max-w-2xl mx-auto leading-relaxed"
          >
            Join a small, fast-moving team. We work on real products across AI, web, and mobile —
            and we move fast.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/8 bg-white/3"
          >
            {[
              { value: `${openings.length}`, label: "Open Roles" },
              { value: `${interns.length}`, label: "Internships" },
              { value: `${fulltime.length}`, label: "Full-time" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {perks.map((p, i) => {
            const PIcon = p.icon;
            return (
              <motion.div
                key={p.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col gap-2 p-4 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <span className="text-[#00F0FF]/70"><PIcon /></span>
                <p className="text-sm font-semibold text-white">{p.label}</p>
                <p className="text-[11px] text-white/30 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── INTERNSHIPS ── */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#7B2CBF]/70">
              Internships
            </span>
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[11px] font-mono text-white/20">{interns.length} open</span>
          </motion.div>
          <div className="space-y-4">
            {interns.map((job, i) => (
              <JobCard key={job.title} job={job} index={i} whatsapp={whatsapp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-TIME ── */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-green-500/70">
              Full-time
            </span>
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[11px] font-mono text-white/20">{fulltime.length} open</span>
          </motion.div>
          <div className="space-y-4">
            {fulltime.map((job, i) => (
              <JobCard key={job.title} job={job} index={i + interns.length} whatsapp={whatsapp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
