"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── SVG Icons ── */
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconCheck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconX = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconCert = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const IconZoomIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

/* ── Result field row ── */
function ResultRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
      <span className="mt-0.5 text-[#00F0FF]/60"><Icon /></span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

export default function VerifyClient() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = id.trim().toUpperCase();
    if (!/^ATP-\d{4}-[A-Z0-9]{6}$/.test(trimmed)) {
      setError("Invalid format — expected ATP-YYYY-XXXXXX");
      return;
    }
    setStatus("loading");
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/verify?id=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Error checking certificate"); setStatus("error"); return; }
      setResult(data);
      setStatus("done");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

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
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{ background: "radial-gradient(circle,#00F0FF 0%,#7B2CBF 60%,transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5"
          >
            <span className="text-[#00F0FF]"><IconShield /></span>
            <span className="text-[11px] font-mono text-[#00F0FF] tracking-widest uppercase">
              Certificate Verification
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Verify Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#00F0FF,#7B2CBF,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certificate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-[#8b93b0] max-w-xl mx-auto leading-relaxed"
          >
            Enter the certificate ID printed on your AiTechPulze internship certificate to verify its authenticity.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Form + Result */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Form card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-5">
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: "linear-gradient(90deg,transparent,#00F0FF,#7B2CBF,transparent)" }}
              />
              {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r",
                "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((cls, i) => (
                <div key={i} className={`absolute w-4 h-4 border-[#00F0FF]/20 ${cls}`} />
              ))}

              <div className="p-7">
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#00F0FF]/50 mb-5">
                  Enter Certificate ID
                </p>

                <form onSubmit={handleSubmit} aria-label="Certificate verification form">
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor="certId" className="text-[11px] font-mono tracking-widest uppercase text-white/40">
                      Certificate ID *
                    </label>
                    <div className="relative">
                      <input
                        id="certId"
                        value={id}
                        onChange={(e) => { setId(e.target.value.toUpperCase()); setError(""); setResult(null); setStatus("idle"); }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="ATP-2024-ABCDEF"
                        className={`w-full bg-white/4 border rounded-lg px-4 py-3 text-sm text-white font-mono placeholder:text-white/20
                          outline-none transition-all duration-200 tracking-widest
                          ${error ? "border-red-500/60" : focused ? "border-[#00F0FF]/50" : "border-white/10"}`}
                        style={focused ? { boxShadow: "0 0 0 1px rgba(0,240,255,0.15), 0 0 20px rgba(0,240,255,0.06)" } : {}}
                      />
                    </div>
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-[11px] text-red-400 font-mono"
                        >
                          ⚠ {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#00F0FF20,#7B2CBF,#2563EB)", border: "1px solid rgba(0,240,255,0.2)" }}
                  >
                    {status !== "loading" && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}
                    <span className="relative flex items-center justify-center gap-2">
                      {status === "loading" ? (
                        <>
                          <motion.span
                            className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Verifying…
                        </>
                      ) : (
                        <>
                          <IconSearch />
                          Verify Certificate
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                <p className="mt-4 text-center text-[11px] font-mono text-white/20 tracking-wider">
                  FORMAT: ATP-YYYY-XXXXXX
                </p>
              </div>
            </div>

            {/* Result */}
            <AnimatePresence>
              {status === "done" && result && (
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  aria-live="polite"
                  className="relative rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: result.valid ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)",
                    background: result.valid ? "rgba(34,197,94,0.04)" : "rgba(239,68,68,0.04)",
                  }}
                >
                  {/* Top line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px]"
                    style={{
                      background: result.valid
                        ? "linear-gradient(90deg,transparent,#22c55e,transparent)"
                        : "linear-gradient(90deg,transparent,#ef4444,transparent)",
                    }}
                  />

                  <div className="p-6">
                    {/* Status header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center border"
                        style={{
                          background: result.valid ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                          borderColor: result.valid ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)",
                          color: result.valid ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {result.valid ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <IconCheck />
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <IconX />
                          </motion.span>
                        )}
                      </div>
                      <div>
                        <p
                          className="font-bold text-base"
                          style={{ color: result.valid ? "#22c55e" : "#ef4444" }}
                        >
                          {result.valid ? "Certificate Verified" : "Certificate Not Found"}
                        </p>
                        <p className="text-[11px] font-mono text-white/30 tracking-wider">
                          {result.valid ? "AUTHENTIC · ISSUED BY AITECHPULZE" : "INVALID OR DOES NOT EXIST"}
                        </p>
                      </div>
                    </div>

                    {result.valid && (
                      <div className="space-y-0">
                        <ResultRow icon={IconUser} label="Name" value={result.name} />
                        <ResultRow icon={IconCode} label="Domain" value={result.domain} />
                        <ResultRow icon={IconClock} label="Duration" value={`${result.durationDays} Days`} />
                        {result.startDate && (
                          <ResultRow
                            icon={IconCalendar}
                            label="Period"
                            value={`${new Date(result.startDate).toLocaleDateString("en-IN")} – ${new Date(result.endDate).toLocaleDateString("en-IN")}`}
                          />
                        )}
                        <ResultRow icon={IconCert} label="Certificate ID" value={id.trim().toUpperCase()} />
                      </div>
                    )}

                    {!result.valid && (
                      <p className="text-sm text-white/40 leading-relaxed">
                        No certificate with this ID was found in our records. Please double-check the ID printed on your certificate and try again.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — Sample Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/30 mb-4">
              Sample Certificate
            </p>

            <div
              className="relative rounded-2xl border border-white/10 overflow-hidden group cursor-zoom-in"
              onClick={() => setLightbox(true)}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white text-sm font-medium">
                  <IconZoomIn />
                  View Full Size
                </div>
              </div>

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] z-10"
                style={{ background: "linear-gradient(90deg,transparent,#00F0FF,#7B2CBF,transparent)" }}
              />

              <Image
                src="/images/inter_sample.webp"
                alt="Sample AiTechPulze Internship Certificate"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Callout */}
            <div className="mt-4 flex items-start gap-3 px-4 py-3 rounded-xl border border-[#00F0FF]/10 bg-[#00F0FF]/4">
              <span className="mt-0.5 text-[#00F0FF]/60 shrink-0"><IconCert /></span>
              <p className="text-[12px] text-white/40 leading-relaxed">
                The Certificate ID is printed at the bottom of your certificate in the format{" "}
                <span className="font-mono text-[#00F0FF]/70">ATP-YYYY-XXXXXX</span>.
                Enter it in the form to verify.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/inter_sample.webp"
                alt="Sample AiTechPulze Internship Certificate"
                width={1200}
                height={850}
                className="w-full h-auto"
              />
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <IconX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
