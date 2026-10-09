"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating glass card component
const GlassCard = ({ className, children, delay = 0, yOffset = 15 }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-yOffset, yOffset, -yOffset] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute bg-[#03040b]/60 backdrop-blur-2xl border border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.2),inset_0_0_15px_rgba(0,240,255,0.1)] rounded-xl overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#7B2CBF]/10 opacity-60" />
    <div className="relative z-10 w-full h-full p-4 flex flex-col justify-center items-center">
      {children}
    </div>
  </motion.div>
);

// Particle network for the background of the dashboard
const ParticleNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="particle-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Lines */}
        <line x1="50" y1="50" x2="150" y2="120" stroke="#7B2CBF" strokeWidth="1" opacity="0.6" />
        <line x1="150" y1="120" x2="280" y2="90" stroke="#7B2CBF" strokeWidth="1" opacity="0.6" />
        <line x1="150" y1="120" x2="100" y2="250" stroke="#00F0FF" strokeWidth="1" opacity="0.4" />
        <line x1="280" y1="90" x2="350" y2="200" stroke="#00F0FF" strokeWidth="1" opacity="0.4" />
        <line x1="100" y1="250" x2="220" y2="300" stroke="#7B2CBF" strokeWidth="1" opacity="0.6" />
        <line x1="220" y1="300" x2="350" y2="200" stroke="#7B2CBF" strokeWidth="1" opacity="0.6" />
        
        {/* Nodes */}
        <circle cx="50" cy="50" r="4" fill="url(#particle-glow)" />
        <circle cx="150" cy="120" r="6" fill="url(#particle-glow)" />
        <circle cx="280" cy="90" r="4" fill="url(#particle-glow)" />
        <circle cx="100" cy="250" r="5" fill="url(#particle-glow)" />
        <circle cx="220" cy="300" r="7" fill="url(#particle-glow)" />
        <circle cx="350" cy="200" r="4" fill="url(#particle-glow)" />
      </svg>
    </div>
  );
};

export default function FloatingDashboard({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`relative w-full h-[400px] flex items-center justify-center ${className}`} style={{ perspective: '1200px' }}>
      
      {/* Container with 3D rotation */}
      <motion.div
        className="relative w-full h-full max-w-[500px]"
        initial={{ rotateX: 10, rotateY: -15 }}
        animate={{ rotateX: [10, 15, 10], rotateY: [-15, -10, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <ParticleNetwork />

        {/* 1. Isometric Keyboard / Base Grid */}
        <div 
          className="absolute bottom-4 left-4 right-4 h-[120px] bg-[#03040B]/80 border border-[#00F0FF]/40 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(123,44,191,0.6),inset_0_0_30px_rgba(0,240,255,0.2)]"
          style={{ 
            transform: 'rotateX(60deg) translateZ(-80px)',
            backgroundSize: '25px 25px',
            backgroundImage: 'linear-gradient(to right, rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(123,44,191,0.3) 1px, transparent 1px)'
          }}
        >
          {/* Glowing pulse on the keyboard */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* 2. Main Center AI Screen */}
        <GlassCard 
          className="w-[260px] h-[160px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.2)]" 
          delay={0}
          style={{ transform: 'translateZ(50px)' }}
        >
          {/* Mock Browser Header */}
          <div className="absolute top-0 left-0 right-0 h-6 border-b border-white/10 flex items-center px-3 gap-1.5 bg-black/20">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          
          <div className="flex flex-col items-center justify-center mt-4">
            <motion.div 
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]"
              animate={{ filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI
            </motion.div>
            {/* Fake Code Lines */}
            <div className="w-full mt-3 flex flex-col gap-2 px-2">
              <div className="h-1.5 w-full bg-[#00F0FF]/30 rounded-full" />
              <div className="h-1.5 w-4/5 bg-[#7B2CBF]/40 rounded-full" />
              <div className="h-1.5 w-3/5 bg-white/20 rounded-full" />
            </div>
          </div>
        </GlassCard>

        {/* 3. Floating Icons / Side Cards */}
        
        {/* Shield / Security */}
        <GlassCard className="w-[80px] h-[80px] right-4 top-8" delay={1} yOffset={15} style={{ transform: 'translateZ(80px)' }}>
          <svg className="w-8 h-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </GlassCard>

        {/* Lock */}
        <GlassCard className="w-[70px] h-[70px] left-6 top-24" delay={0.5} yOffset={15} style={{ transform: 'translateZ(100px)' }}>
          <svg className="w-8 h-8 text-[#FF007F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </GlassCard>

        {/* Gears / Tech */}
        <GlassCard className="w-[70px] h-[70px] left-1/4 -top-2" delay={1.5} yOffset={10} style={{ transform: 'translateZ(40px)' }}>
          <svg className="w-6 h-6 text-[#7B2CBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </GlassCard>

        {/* Cloud / Network */}
        <GlassCard className="w-[90px] h-[70px] right-8 bottom-28" delay={2} yOffset={20} style={{ transform: 'translateZ(120px)' }}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </GlassCard>

        {/* User / Persona */}
        <GlassCard className="w-[70px] h-[80px] left-12 bottom-16" delay={0.8} yOffset={12} style={{ transform: 'translateZ(60px)' }}>
          <svg className="w-8 h-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </GlassCard>
        
        {/* Chat / Message */}
        <GlassCard className="w-[80px] h-[60px] right-20 bottom-8" delay={1.2} yOffset={15} style={{ transform: 'translateZ(90px)' }}>
          <svg className="w-6 h-6 text-[#FF007F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </GlassCard>

      </motion.div>
    </div>
  );
}
