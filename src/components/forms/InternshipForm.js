"use client";

import { useState, useRef } from "react";

const IconUpload = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const IconFile = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconCheck = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconAlert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1 -mt-0.5">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconCheckSmall = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
import { motion, AnimatePresence } from "framer-motion";

const domains = [
  "Web Development",
  "AI & Machine Learning",
  "UI/UX Design",
  "Python & Data Science",
  "Mobile Development",
  "Cloud & DevOps",
];

/* ── Cyber Input ── */
function CyberInput({ label, error, id, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-mono tracking-widest uppercase text-white/40">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-white/4 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20
            outline-none transition-all duration-200
            ${error ? "border-red-500/60" : focused ? "border-[#00F0FF]/50" : "border-white/10"}
          `}
          {...props}
        />
        {/* Focus glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-200"
          style={{
            boxShadow: focused ? "0 0 0 1px rgba(0,240,255,0.2), 0 0 20px rgba(0,240,255,0.06)" : "none",
          }}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[11px] text-red-400 font-mono flex items-center"
          >
            <IconAlert /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Cyber Select ── */
function CyberSelect({ label, error, id, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-mono tracking-widest uppercase text-white/40">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-[#0a0b14] border rounded-lg px-4 py-3 text-sm text-white
            outline-none transition-all duration-200 appearance-none cursor-pointer
            ${error ? "border-red-500/60" : focused ? "border-[#00F0FF]/50" : "border-white/10"}
          `}
          {...props}
        >
          {children}
        </select>
        {/* Chevron */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
          <IconChevronDown />
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-200"
          style={{
            boxShadow: focused ? "0 0 0 1px rgba(0,240,255,0.2), 0 0 20px rgba(0,240,255,0.06)" : "none",
          }}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[11px] text-red-400 font-mono flex items-center"
          >
            <IconAlert /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── File Upload ── */
function CyberFileUpload({ resume, setResume, error, setErrors }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  function handleFile(file) {
    setResume(file || null);
    setErrors((e) => ({ ...e, resume: "" }));
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-mono tracking-widest uppercase text-white/40">
        Resume (PDF · max 2 MB) *
      </label>
      <motion.div
        whileHover={{ scale: 1.005 }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        onClick={() => inputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed
          py-8 px-4 cursor-pointer transition-all duration-200
          ${dragging ? "border-[#00F0FF]/60 bg-[#00F0FF]/5" : error ? "border-red-500/40" : "border-white/10 hover:border-[#7B2CBF]/50 hover:bg-white/3"}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
          aria-label="Upload resume PDF"
        />

        {resume ? (
          <>
            <div className="w-10 h-10 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
              <IconFile />
            </div>
            <p className="text-sm text-white font-medium">{resume.name}</p>
            <p className="text-[11px] text-white/30 font-mono">
              {(resume.size / 1024).toFixed(0)} KB · Click to change
            </p>
          </>
        ) : (
          <>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <IconUpload />
            </div>
            <p className="text-sm text-white/60">
              Drop your PDF here or <span className="text-[#00F0FF]">browse</span>
            </p>
            <p className="text-[11px] text-white/20 font-mono">PDF only · max 2 MB</p>
          </>
        )}

        {/* Scan line on drag */}
        {dragging && (
          <motion.div
            className="absolute inset-x-0 h-[1px] bg-[#00F0FF]/60"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[11px] text-red-400 font-mono flex items-center"
          >
            <IconAlert /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Duration Picker ── */
function DurationPicker({ value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-mono tracking-widest uppercase text-white/40">
        Duration *
      </label>
      <div className="grid grid-cols-2 gap-3">
        {[{ label: "15 Days", value: "DAYS_15", desc: "Starter" }, { label: "30 Days", value: "DAYS_30", desc: "Full Track" }].map((opt) => (
          <motion.button
            key={opt.value}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(opt.value)}
            className={`relative flex flex-col items-center py-4 rounded-xl border transition-all duration-200
              ${value === opt.value
                ? "border-[#7B2CBF]/70 bg-[#7B2CBF]/10"
                : "border-white/10 bg-white/3 hover:border-white/20"
              }`}
          >
            {value === opt.value && (
              <div
                className="absolute inset-0 rounded-xl"
                style={{ boxShadow: "0 0 20px rgba(123,44,191,0.2)" }}
              />
            )}
            <span className="text-lg font-bold text-white">{opt.label}</span>
            <span className="text-[11px] font-mono text-white/30 mt-0.5">{opt.desc}</span>
            {value === opt.value && (
              <motion.div
                layoutId="duration-check"
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#7B2CBF] flex items-center justify-center text-white"
              >
                <IconCheckSmall />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[11px] text-red-400 font-mono flex items-center"
          >
            <IconAlert /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Form ── */
export default function InternshipForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", college: "", domain: "", duration: "", website: "",
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email";
    if (form.phone.trim().length < 8) errs.phone = "Enter a valid phone number";
    if (form.college.trim().length < 2) errs.college = "Enter your college name";
    if (!form.domain) errs.domain = "Select a domain";
    if (!form.duration) errs.duration = "Select a duration";
    if (!resume) errs.resume = "Please upload your resume (PDF, max 2 MB)";
    else if (resume.type !== "application/pdf") errs.resume = "Resume must be a PDF file";
    else if (resume.size > 2 * 1024 * 1024) errs.resume = "Resume must be under 2 MB";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    setServerError("");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append("resume", resume);

    try {
      const res = await fetch("/api/internship/apply", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("error");
    }
  }

  /* ── Success ── */
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12 px-4"
        role="status"
        aria-live="polite"
      >
        {/* Animated check */}
        <div className="relative mb-6">
          <motion.div
            className="w-20 h-20 rounded-full border-2 border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <IconCheck />
            </motion.span>
          </motion.div>
          {/* Pulse rings */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#00F0FF]/20"
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
        <p className="text-[#8b93b0] text-sm max-w-sm leading-relaxed">
          We&apos;ve received your application. Our team will review it and email you within 24–48 hours if approved.
        </p>
        <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] animate-pulse" />
          <span className="text-xs font-mono text-[#7B2CBF] tracking-wider">UNDER REVIEW</span>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      encType="multipart/form-data"
      aria-label="Internship application form"
      className="space-y-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => set("website", e.target.value)}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <CyberInput
          id="iname"
          label="Full Name *"
          placeholder="Niranjan P"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <CyberInput
          id="iemail"
          type="email"
          label="Email Address *"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <CyberInput
          id="iphone"
          type="tel"
          label="Phone Number *"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <CyberInput
          id="icollege"
          label="College / University *"
          placeholder="Anna University"
          value={form.college}
          onChange={(e) => set("college", e.target.value)}
          error={errors.college}
        />
      </div>

      {/* Domain */}
      <CyberSelect
        id="idomain"
        label="Domain *"
        value={form.domain}
        onChange={(e) => set("domain", e.target.value)}
        error={errors.domain}
      >
        <option value="">Select your domain…</option>
        {domains.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </CyberSelect>

      {/* Duration */}
      <DurationPicker
        value={form.duration}
        onChange={(v) => { set("duration", v); }}
        error={errors.duration}
      />

      {/* Resume */}
      <CyberFileUpload
        resume={resume}
        setResume={setResume}
        error={errors.resume}
        setErrors={setErrors}
      />

      {/* Server error */}
      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="flex items-start gap-3 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/8 text-sm text-red-400"
          >
            <span className="mt-0.5 shrink-0"><IconAlert /></span>
            {serverError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="relative w-full py-4 rounded-xl font-semibold text-sm tracking-wide overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg,#7B2CBF,#2563EB,#00F0FF)",
        }}
      >
        {/* Shimmer */}
        {status !== "loading" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
          />
        )}
        <span className="relative text-white">
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              Submitting…
            </span>
          ) : (
            "Submit Application →"
          )}
        </span>
      </motion.button>

      <p className="text-center text-[11px] font-mono text-white/20 tracking-wider">
        ENCRYPTED · SECURE · FREE TO APPLY
      </p>
    </form>
  );
}
