"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import FloatingDashboard from "./FloatingDashboard";
import NeuralNetworkBg from "./svg/NeuralNetworkBg";
import CircuitDivider from "./svg/CircuitDivider";

function Orb({ className, color, drift, duration }) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-[110px] ${className}`}
      style={{ background: color }}
      animate={mounted && reduce ? undefined : { x: drift.x, y: drift.y }}
      transition={{ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    />
  );
}

const rotatingTexts = [
  "We build websites, AI tools and software for growing businesses",
  "Founded in 2023 in Tamil Nadu, AITechPulze is an MSME-registered IT startup.",
  "Launch faster with custom websites, AI automation, SaaS platforms, and mobile apps.",
  "Next-generation digital infrastructure for the modern web."
];

export default function HeroSection({ whatsapp }) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="noise scanlines relative isolate overflow-hidden px-4 sm:px-6 pb-24 pt-[120px] sm:pt-[140px] min-h-screen flex items-center justify-center -mt-[90px]">
      {/* Animated cyber grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg-animated opacity-40" />
      <NeuralNetworkBg className="-z-10" />
      
      {/* Floating orbs */}
      <div className="orb-violet float-orb absolute -left-32 -top-32 -z-10 w-[600px] h-[600px] opacity-30" />
      <div className="orb-cyan float-orb-slow absolute right-0 top-20 -z-10 hidden w-[500px] h-[500px] opacity-25 md:block" />
      <div className="orb-blue float-orb absolute bottom-0 left-1/2 -z-10 w-[400px] h-[400px] opacity-20" />
      
      <Orb className="-left-24 -top-20 -z-10 h-[500px] w-[500px] opacity-40" color="#7B2CBF" drift={{ x: [0, 120, 0], y: [0, 80, 0] }} duration={20} />
      <Orb className="right-0 top-10 -z-10 hidden h-[450px] w-[450px] opacity-35 md:block" color="#00F0FF" drift={{ x: [0, -100, 0], y: [0, 90, 0] }} duration={24} />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 w-full">
        <div className="text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-bold text-emerald-400 backdrop-blur-xl lg:mx-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            MSME REGISTERED STARTUP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance text-5xl font-extrabold leading-[1.1] sm:text-6xl xl:text-7xl font-[family-name:var(--font-grotesk)] tracking-tight text-white"
          >
            Engineering the <br className="hidden lg:block"/>
            <span className="text-gradient-flow relative inline-block">
              Future of Tech
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00F0FF] to-transparent opacity-50"
                animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <div className="h-24 mt-8 relative flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute max-w-xl text-lg leading-relaxed text-[#8b93b0] font-medium"
              >
                {rotatingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
          >
            <MagneticButton href="/get-quote">
              <span className="flex items-center gap-2">
                Deploy Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
            </MagneticButton>
            <MagneticButton href="/work" variant="glass">
              <span className="flex items-center gap-2 text-[#00F0FF]">
                View Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </MagneticButton>
          </motion.div>
          
          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8"
          >
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Certified By</span>
              <div className="flex gap-4 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* MSME Image mock */}
                <div className="h-10 px-4 py-2 border border-white/20 rounded bg-white/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-white tracking-widest">MSME INDIA</span>
                </div>
                {/* ISO/Internship mock */}
                <div className="h-10 px-4 py-2 border border-white/20 rounded bg-white/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-white tracking-widest">ISO 9001</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
          className="mx-auto w-full max-w-[550px] relative mt-12 lg:mt-0 z-0"
        >
          {/* Intense Holographic background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/20 to-[#7B2CBF]/20 blur-[100px] rounded-full scale-150" />
          <div className="absolute inset-20 bg-[#00F0FF]/10 blur-[60px] rounded-full" />
          
          <FloatingDashboard className="relative z-10 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <CircuitDivider />
      </div>
    </section>
  );
}
