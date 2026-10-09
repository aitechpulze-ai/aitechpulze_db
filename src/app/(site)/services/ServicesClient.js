"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { techCategories } from "@/content/services";
import ServicesGrid from "@/components/ServicesGrid";
import MagneticButton from "@/components/MagneticButton";
import { APIConnections, DataFlow } from "@/components/svg/tech";
import SpotlightCard from "@/components/SpotlightCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ServicesClient() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[#03040B] noise py-24 px-4 overflow-hidden pt-[140px] text-center">
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
          <DataFlow size={700} direction="horizontal" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00F0FF]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7B2CBF]/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-4">OUR EXPERTISE</h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Intelligent Software <br />
              <span className="text-gradient-flow">Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8b93b0] mb-10 leading-relaxed max-w-3xl mx-auto">
              Everything your business needs to launch and scale — enterprise architecture, AI integration, and world-class product design.
            </p>
            <MagneticButton href="/get-quote">
              Start Your Project
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative px-4 pb-24 z-20">
        <ServicesGrid />
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
          <APIConnections size={600} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-4">THE ECOSYSTEM</h4>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Technologies We <span className="text-gradient-flow">Master</span>
            </h2>
            <p className="text-[#8b93b0] max-w-2xl mx-auto">
              We leverage modern, scalable, and secure technologies to build products that perform flawlessly under heavy loads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, i) => (
              <motion.div 
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="h-full p-8 group">
                  <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6 group-hover:text-[#00F0FF] transition-colors">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[#8b93b0] group-hover:border-[#00F0FF]/30 group-hover:bg-[#00F0FF]/5 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── CTA ── */}
      <section className="py-24 px-4 text-center border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-grotesk)] mb-6">Ready to transform your business?</h2>
          <p className="text-lg text-[#8b93b0] mb-10">Our experts are ready to map out your digital transformation strategy.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/get-quote">Get a Free Quote</MagneticButton>
            <MagneticButton href="/contact" variant="glass">Contact Sales</MagneticButton>
          </div>
        </motion.div>
      </section>
    </>
  );
}
