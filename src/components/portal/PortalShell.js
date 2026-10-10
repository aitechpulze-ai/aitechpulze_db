"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const accents = {
  STUDENT: { bg: "bg-violet-500/20", border: "border-violet-500/50", text: "text-violet-400", ring: "ring-violet-500", glow: "shadow-[0_0_15px_rgba(139,92,246,0.5)]" },
  MENTOR:  { bg: "bg-emerald-500/20", border: "border-emerald-500/50", text: "text-emerald-400", ring: "ring-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]" },
  ADMIN:   { bg: "bg-blue-500/20", border: "border-blue-500/50", text: "text-blue-400", ring: "ring-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
};

export default function PortalShell({ role, name, tabs, children }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const accent = accents[role] ?? accents.ADMIN;

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/portal/login");
  }

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-[#7B2CBF]/30 overflow-hidden relative flex flex-col">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7B2CBF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Top bar (Glassmorphism) */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <Link href="/" className={`font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 ${accent.ring} rounded flex items-center gap-2`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent.bg} ${accent.border} border ${accent.glow} overflow-hidden`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="AiTechPulze" className="w-5 h-5 object-contain" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              AiTechPulze
            </span>
          </Link>
          <div className={`hidden sm:flex items-center px-2.5 py-1 rounded-full border ${accent.border} ${accent.bg} ${accent.text} text-[10px] font-bold uppercase tracking-wider ml-4`}>
            {role} PORTAL
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <div className="hidden sm:flex flex-col items-end">
            <span className="font-semibold text-white/90">{name}</span>
            <span className={`text-xs ${accent.text}`}>Authenticated</span>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 text-xs font-semibold uppercase tracking-wide"
            aria-label="Sign out"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 sm:p-6 gap-6 relative z-10">
        
        {/* Sidebar Tabs */}
        <nav className="lg:w-64 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Portal navigation">
          <ul className="flex flex-row lg:flex-col gap-2 min-w-max lg:min-w-0" role="tablist">
            {tabs.map((t) => {
              const isActive = activeTab === t.id;
              return (
                <li key={t.id} role="presentation">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(t.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 ${accent.ring} relative group flex items-center gap-3 overflow-hidden
                      ${isActive 
                        ? `bg-white/10 text-white shadow-lg border border-white/20` 
                        : `bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent`
                      }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className={`absolute inset-0 border border-white/20 rounded-xl bg-gradient-to-r from-white/5 to-transparent ${accent.glow} opacity-50`} 
                      />
                    )}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Tab content panel */}
        <main className="flex-1 min-w-0 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeContent}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
