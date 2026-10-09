"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { techCategories } from "@/content/services";
import { industries } from "@/content/industries";
import { faq } from "@/content/faq";
import { getFeaturedProjects } from "@/content/work";

import HeroSection from "@/components/HeroSection";
import SpotlightCard from "@/components/SpotlightCard";
import ServicesGrid from "@/components/ServicesGrid";
import CircuitDivider from "@/components/svg/CircuitDivider";
import FeatureIcon from "@/components/svg/FeatureIcon";
import MagneticButton from "@/components/MagneticButton";
import { AICore, DataFlow, CloudArchitecture, APIConnections, AnalyticsGraph, MLPipeline } from "@/components/svg/tech";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

const process = [
  { step: "01", title: "Discover", desc: "We understand your business goals, users, and constraints." },
  { step: "02", title: "Design", desc: "Wireframes, UI mockups, and an architecture plan before any code." },
  { step: "03", title: "Develop", desc: "Clean, tested code shipped in regular deliverable milestones." },
  { step: "04", title: "Launch", desc: "Deployment, DNS, monitoring, and a smooth go-live." },
  { step: "05", title: "Support", desc: "Post-launch support and iteration based on real usage." },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <>
      {/* ============================================================
          1. HERO SECTION (EXISTING - PRESERVED)
          ============================================================ */}
      <HeroSection headline={site.tagline} subtext={site.subtext} whatsapp={site.contact.whatsapp} />

      {/* ============================================================
          2. TRUST STRIP (NEW)
          Company credibility indicators + stats
          ============================================================ */}
      <section className="py-12 px-6 border-y border-white/5 relative overflow-hidden">
        {/* Subtle aurora */}
        <div className="orb-cyan float-orb-slow pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20" />
        <div className="orb-violet float-orb pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 opacity-15" />
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* MSME Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-16 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center p-1">
                <Image src="/images/msme_logo.webp" alt="MSME Logo" width={80} height={40} className="object-contain" />
              </div>
              <div>
                <div className="text-xs text-[#8b93b0] uppercase tracking-wider">MSME Registered</div>
                <div className="text-sm text-white font-medium">{site.msme}</div>
              </div>
            </motion.div>

            {/* Stats */}
            {site.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#00F0FF]">{stat.value}</div>
                <div className="text-sm text-[#8b93b0] mt-1">{stat.label}</div>
              </motion.div>
            ))}

            {/* Founded */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#7B2CBF]">{site.founded}</div>
              <div className="text-sm text-[#8b93b0] mt-1">Founded</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. WHAT WE BUILD (NEW)
          Core capability categories with icons
          ============================================================ */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Background AI Core */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <AICore size={400} />
        </div>

        <div className="mx-auto w-full max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-4">WHAT WE BUILD</h3>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Intelligent Digital <span className="text-gradient-flow">Products</span>
            </h2>
            <p className="text-[#8b93b0] max-w-2xl mx-auto text-lg leading-relaxed">
              From AI-powered systems to enterprise-grade platforms, we build software that drives real business outcomes.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M12 2v2M2 12h2M20 12h2M12 20v2M16.24 7.76l1.42-1.42M6.34 17.66l1.42-1.42M16.24 16.24l1.42 1.42M6.34 6.34l1.42 1.42M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" /><path d="M15 4h4v4M5 4h4v4M15 20h4v-4M5 20h4v-4" /></svg>, title: "AI & ML Systems", desc: "Computer vision, NLP, predictive models, recommendation engines" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>, title: "Web Applications", desc: "Progressive web apps, admin dashboards, customer portals" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: "Mobile Apps", desc: "Native iOS & Android apps with seamless cloud sync" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>, title: "SaaS Platforms", desc: "Multi-tenant architectures, subscription management, analytics" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>, title: "Data Platforms", desc: "ETL pipelines, real-time analytics, business intelligence" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>, title: "Automation", desc: "Workflow automation, API integrations, intelligent bots" },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <SpotlightCard className="h-full">
                  <div className="mb-4 inline-block">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8b93b0] leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* ============================================================
          4. SERVICES (EXISTING - PRESERVED)
          ============================================================ */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden aurora">
        {/* Animated grid bg */}
        <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-30" />
        <div className="mx-auto w-full max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-4">SERVICES</h3>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">What We Build For You</h2>
            <p className="text-[#8b93b0] max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end technology services — from AI model development to cloud deployment. Every project delivered with quality, speed, and clarity.
            </p>
          </div>
          
          <div className="mt-8">
            <ServicesGrid hidePrice={true} />
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* ============================================================
          5. FLAGSHIP PRODUCTS (ENHANCED - DYNAMIC)
          ============================================================ */}
      <section id="products" className="py-20 md:py-28 px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight font-[family-name:var(--font-grotesk)]">
              Featured <span className="text-gradient-flow">Projects</span>
            </h2>
            <p className="text-[#8b93b0] max-w-2xl mx-auto">
              Real-world projects delivering measurable impact across industries
            </p>
          </motion.div>
          
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="h-full p-0">
                  {project.image && (
                    <div className="relative h-48 bg-[#0a0a0a] border-b border-white/10">
                      {project.url && (
                        <span className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase z-10">
                          Live Product
                        </span>
                      )}
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        fill 
                        className="object-contain p-4 opacity-90" 
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-semibold text-[#7B2CBF] tracking-wider uppercase mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-[#8b93b0] mb-6 flex-grow">
                      {project.summary}
                    </p>
                    
                    {/* Key Metrics */}
                    {project.results && project.results.length >= 2 && (
                      <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-y border-white/10">
                        {project.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-[#00F0FF]">{result.metric}</div>
                            <div className="text-xs text-white/60">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <Link 
                        href={`/work/${project.slug}`}
                        className="text-center px-4 py-2.5 bg-[#7B2CBF] border border-[#7B2CBF] hover:bg-[#5b3fd6] text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        View Case Study
                      </Link>
                      {project.url ? (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-center px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          Visit Site
                        </a>
                      ) : (
                        <Link 
                          href="/get-quote"
                          className="text-center px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          Build Similar
                        </Link>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#8b93b0] mb-4">
              Explore our complete portfolio of {featuredProjects.length}+ successful projects
            </p>
            <Link
              href="/work"
              className="inline-block px-8 py-3 rounded-lg border-2 border-[#7B2CBF] text-white font-semibold hover:bg-[#7B2CBF]/10 transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          6. BUSINESS VALUE (NEW)
          Why businesses need intelligent digital products
          ============================================================ */}
      <section className="py-20 md:py-28 px-6 relative">
        {/* Background Data Flow */}
        <div className="absolute left-0 top-1/4 opacity-10 pointer-events-none">
          <DataFlow size={500} direction="vertical" />
        </div>

        <div className="mx-auto w-full max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Why Digital Products <span className="text-gradient-flow">Matter</span>
            </h2>
            <p className="text-[#8b93b0] max-w-3xl mx-auto text-lg leading-relaxed">
              In today's competitive landscape, intelligent software isn't optional—it's how businesses scale, compete, and win.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                title: "Speed to Market",
                metric: "3-6 months",
                desc: "Launch MVPs fast. We ship working software in weeks, not years. From idea to deployed product with iterative feedback.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
                title: "Cost Efficiency",
                metric: "40-60% savings",
                desc: "Build vs buy vs outsource. We deliver custom solutions at a fraction of enterprise vendor costs, with full IP ownership.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
                title: "Scalability",
                metric: "10x → 100x",
                desc: "Built for growth. Our architectures handle 10 users or 10 million. Auto-scaling cloud infrastructure, zero downtime deploys.",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
                title: "Innovation Edge",
                metric: "AI-first",
                desc: "Stay ahead with AI. We integrate ML models, automation, and intelligent workflows that give you a technological advantage.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <SpotlightCard className="h-full p-8">
                  <div className="mb-6 inline-block">{item.icon}</div>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded-full">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[#8b93b0] leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-[#8b93b0] mb-6">Ready to build your competitive advantage?</p>
            <MagneticButton href="/get-quote" variant="primary">
              Start Your Project
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* ============================================================
          7. HOW WE WORK (EXISTING PROCESS - ENHANCED)
          ============================================================ */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-tight font-[family-name:var(--font-grotesk)]">How We Work</h2>
          <div className="grid items-stretch gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.step} className="h-full">
                <SpotlightCard className="h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-[#00F0FF] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#8b93b0]">{p.desc}</p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8. TECHNOLOGY ECOSYSTEM (NEW - ENHANCED TECH STACK)
          ============================================================ */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <APIConnections size={600} />
        </div>

        <div className="mx-auto w-full max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Technology <span className="text-gradient-flow">Ecosystem</span>
            </h2>
            <p className="text-[#8b93b0] max-w-3xl mx-auto">
              Modern stack, battle-tested tools. We use production-grade technologies that scale.
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xs font-semibold text-[#7B2CBF] uppercase tracking-wider mb-2">{cat.category}</h3>
                <ul className="space-y-1 list-none">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-[#8b93b0]">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-bold text-white text-center mb-8">Full-Stack Architecture</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                </div>
                <div className="text-sm font-semibold text-white">Frontend</div>
                <div className="text-xs text-[#8b93b0] mt-1">React/Next.js</div>
              </div>

              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="hidden md:block">
                <path d="M0 12h40" stroke="rgba(0,240,255,0.5)" strokeWidth="2"/>
              </svg>

              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7B2CBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
                </div>
                <div className="text-sm font-semibold text-white">API</div>
                <div className="text-xs text-[#8b93b0] mt-1">Node/Python</div>
              </div>

              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="hidden md:block">
                <path d="M0 12h40" stroke="rgba(123,44,191,0.5)" strokeWidth="2"/>
              </svg>

              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <div className="text-sm font-semibold text-white">Database</div>
                <div className="text-xs text-[#8b93b0] mt-1">PostgreSQL</div>
              </div>

              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="hidden md:block">
                <path d="M0 12h40" stroke="rgba(37,99,235,0.5)" strokeWidth="2"/>
              </svg>

              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                </div>
                <div className="text-sm font-semibold text-white">Cloud</div>
                <div className="text-xs text-[#8b93b0] mt-1">AWS/Vercel</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* ============================================================
          9. WHO WE SERVE (NEW)
          ============================================================ */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]">
              Industries We <span className="text-gradient-flow">Serve</span>
            </h2>
            <p className="text-[#8b93b0] max-w-2xl mx-auto">
              From startups to enterprises, we build technology solutions across diverse sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href="/industries" className="block h-full">
                  <SpotlightCard className="h-full hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl mb-3">{industry.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-sm text-[#8b93b0]">{industry.desc.slice(0, 60)}...</p>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/industries" className="text-[#00F0FF] hover:text-white transition-colors font-medium inline-flex items-center gap-2">
              Explore All Industries <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* ============================================================
          10. FAQ (EXISTING - PRESERVED)
          ============================================================ */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-tight font-[family-name:var(--font-grotesk)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <SpotlightCard key={item.q}>
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm text-[#8b93b0]">{item.a}</dd>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Academy strip */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-[#7B2CBF]/10 -z-10 blur-3xl"></div>
        <div className="mx-auto w-full max-w-4xl text-center">
          <SpotlightCard className="items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight font-[family-name:var(--font-grotesk)]">Looking for an internship?</h2>
            <p className="mt-2 text-[#8b93b0] mb-8">We offer 15 and 30-day internships in AI, web development, and more.</p>
            <MagneticButton href="/academy" variant="glass">Explore Academy</MagneticButton>
          </SpotlightCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 text-center relative overflow-hidden">
        {/* Glow orbs */}
        <div className="orb-violet float-orb pointer-events-none absolute left-1/4 top-0 w-96 h-96 opacity-20" />
        <div className="orb-cyan float-orb-slow pointer-events-none absolute right-1/4 bottom-0 w-80 h-80 opacity-15" />
        <h2 className="text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-grotesk)]">Ready to build something?</h2>
        <p className="mt-3 text-[#8b93b0] mb-8">Tell us about your project — we&apos;ll get back to you within 24 hours.</p>
        <MagneticButton href="/get-quote">Get a Quote</MagneticButton>
      </section>
    </>
  );
}
