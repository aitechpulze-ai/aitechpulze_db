"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { usePathname } from "next/navigation";

const BOOT_LINES = [
  "SYS_INIT: AITechPulze OS v3.0.1",
  "NEURAL_ENGINE: Loading weights...",
  "SECURE_CONN: Establishing TLS 1.3...",
  "AI_CORE: Calibrating models...",
  "RENDER_ENGINE: Mounting interface...",
  "STATUS: All systems nominal.",
];

export default function Preloader() {
  const [phase, setPhase] = useState("boot"); // boot | reveal | done
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);
  const [glitch, setGlitch] = useState(false);
  const rafRef = useRef(null);
  const pathname = usePathname();

  // Boot lines sequencer
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 320);
    return () => clearInterval(interval);
  }, []);

  // Progress
  useEffect(() => {
    let p = 0;
    const tick = () => {
      p += Math.random() * 3.5 + 0.5;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        setTimeout(() => setGlitch(true), 200);
        setTimeout(() => setPhase("reveal"), 600);
        setTimeout(() => setPhase("done"), 1400);
        return;
      }
      setProgress(p);
      rafRef.current = setTimeout(tick, 40 + Math.random() * 60);
    };
    rafRef.current = setTimeout(tick, 200);
    return () => clearTimeout(rafRef.current);
  }, []);

  if (pathname === "/get-quote" || phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#03040B" }}
        >
          {/* Scanlines */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.015) 2px, rgba(0,240,255,0.015) 4px)",
            }}
          />

          {/* Cyber grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow center */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,44,191,0.18) 0%, transparent 70%)",
            }}
          />

          {/* HUD corner brackets */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 border-[#00F0FF]/60 ${cls}`}
              initial={{ opacity: 0, scale: 1.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            />
          ))}

          {/* HUD top bar */}
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[10px] font-mono text-[#00F0FF]/50 tracking-[0.3em] uppercase">
              ATP-OS
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[10px] font-mono text-[#00F0FF]/50 tracking-[0.3em] uppercase">
              SECURE
            </span>
          </motion.div>

          {/* Main content */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6"
            >
              {/* Orbit ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-[#7B2CBF]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-[#00F0FF]/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow behind logo */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(123,44,191,0.6) 0%, transparent 70%)",
                }}
              />

              <Image
                src="/favicon.png"
                alt="AITechPulze"
                width={72}
                height={72}
                className="relative w-18 h-18 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                priority
              />
            </motion.div>

            {/* Brand name with glitch */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative mb-8 select-none"
            >
              <span
                className={`text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-grotesk)] ${
                  glitch ? "animate-none" : ""
                }`}
                style={
                  glitch
                    ? {
                        textShadow:
                          "2px 0 #00F0FF, -2px 0 #7B2CBF, 0 0 20px rgba(0,240,255,0.8)",
                        filter: "blur(0.5px)",
                      }
                    : {}
                }
              >
                AITech
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #7B2CBF, #00F0FF, #2563EB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Pulze
                </span>
              </span>
              {glitch && (
                <>
                  <span
                    className="absolute inset-0 text-2xl font-bold tracking-tight text-[#00F0FF] opacity-70 font-[family-name:var(--font-grotesk)]"
                    style={{ transform: "translate(-3px, 1px)", clipPath: "inset(30% 0 50% 0)" }}
                    aria-hidden
                  >
                    AITechPulze
                  </span>
                  <span
                    className="absolute inset-0 text-2xl font-bold tracking-tight text-[#7B2CBF] opacity-70 font-[family-name:var(--font-grotesk)]"
                    style={{ transform: "translate(3px, -1px)", clipPath: "inset(60% 0 20% 0)" }}
                    aria-hidden
                  >
                    AITechPulze
                  </span>
                </>
              )}
            </motion.div>

            {/* Progress bar */}
            <div className="w-72 mb-3">
              <div className="relative h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #2563EB, #7B2CBF, #00F0FF)",
                    boxShadow: "0 0 12px rgba(0,240,255,0.8)",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-4rem", "20rem"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Percent + status */}
            <div className="w-72 flex justify-between items-center mb-6">
              <motion.span
                className="text-[10px] font-mono text-[#00F0FF]/70 tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                {progress < 100 ? "LOADING" : "COMPLETE"}
              </motion.span>
              <span className="text-[10px] font-mono text-white/40">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Boot terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-72 rounded border border-[#00F0FF]/10 bg-black/40 backdrop-blur-sm p-3 space-y-1"
            >
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#00F0FF]/50 text-[9px] font-mono mt-px shrink-0">›</span>
                  <span className="text-[9px] font-mono text-white/40 leading-relaxed">{line}</span>
                </motion.div>
              ))}
              {/* Cursor blink */}
              {progress < 100 && (
                <motion.span
                  className="inline-block w-1.5 h-3 bg-[#00F0FF] ml-4"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </motion.div>
          </div>

          {/* HUD bottom bar */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {["AI", "ML", "WEB", "CLOUD"].map((tag) => (
              <span key={tag} className="text-[9px] font-mono text-white/20 tracking-widest">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Reveal wipe overlay */}
          <AnimatePresence>
            {phase === "reveal" && (
              <motion.div
                className="absolute inset-0 z-30"
                style={{
                  background: "linear-gradient(135deg, #7B2CBF, #03040B, #00F0FF)",
                }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ clipPath: "inset(0 0 0 100%)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
