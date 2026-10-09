"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import CircuitDivider from "@/components/svg/CircuitDivider";
import MagneticButton from "@/components/MagneticButton";
import { industries } from "@/content/industries";
import { work } from "@/content/work";
import { staggerContainer, staggerItem } from "@/utils/animations";
import PageBackground from "@/components/PageBackground";

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <PageBackground variant="orbits" />
      {/* Hero */}
      <section className="noise py-20 px-6 text-center relative overflow-hidden pt-[140px]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-4"
          >
            WHO WE SERVE
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-grotesk)]"
          >
            Industries We <span className="text-gradient-flow">Transform</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#8b93b0] max-w-3xl mx-auto leading-relaxed"
          >
            Deep domain expertise meets cutting-edge AI technology. We don't just build software—we solve industry-specific challenges with solutions that drive measurable business outcomes.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            {[
              { value: "8+", label: "Industries" },
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00F0FF]">{s.value}</div>
                <div className="text-sm text-[#8b93b0]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Industry Cards Grid */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight font-[family-name:var(--font-grotesk)]">
              Select Your <span className="text-gradient-flow">Industry</span>
            </h2>
            <p className="text-lg text-[#8b93b0] max-w-2xl mx-auto">
              Click any industry to explore challenges, solutions, and success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <SpotlightCard
                  onClick={() => setSelectedIndustry(selectedIndustry === industry.slug ? null : industry.slug)}
                  className={`h-full flex flex-col text-left cursor-pointer transition-all duration-300 ${
                    selectedIndustry === industry.slug
                      ? "ring-2 ring-[#00F0FF] shadow-lg shadow-[#00F0FF]/20"
                      : ""
                  }`}
                >
                  <div className="text-5xl mb-4 text-[#00F0FF] flex-shrink-0" aria-hidden="true">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">{industry.name}</h3>
                  <p className="text-sm text-[#8b93b0]">{industry.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Industry Details */}
      {selectedIndustry && industries.find(i => i.slug === selectedIndustry) && (
        <IndustryDetail
          industry={industries.find(i => i.slug === selectedIndustry)}
          onClose={() => setSelectedIndustry(null)}
        />
      )}

      <CircuitDivider />

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 text-center relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-[#7B2CBF]/10 -z-10 blur-3xl" />
        <div className="mx-auto w-full max-w-4xl">
          <SpotlightCard className="items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight font-[family-name:var(--font-grotesk)]">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-[#8b93b0] mb-8 max-w-2xl mx-auto">
                Let's discuss how our domain expertise and AI solutions can solve your specific challenges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton href="/get-quote" variant="primary">
                  Get Industry-Specific Quote
                </MagneticButton>
                <MagneticButton href="/contact" variant="glass">
                  Schedule Consultation
                </MagneticButton>
              </div>
            </motion.div>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}

function IndustryDetail({ industry, onClose }) {
  const caseStudyProject = industry.caseStudy ? work.find(p => p.slug === industry.caseStudy.project) : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start justify-between mb-12"
        >
          <div className="flex items-center gap-6">
            <div className="text-6xl">{industry.icon}</div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2 tracking-tight font-[family-name:var(--font-grotesk)]">{industry.name}</h2>
              <p className="text-lg text-[#8b93b0]">{industry.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            Close ✕
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {industry.stats.map((stat, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <SpotlightCard>
                <div className="text-3xl font-bold text-[#00F0FF] mb-2">{stat.value}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Problems & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-red-400">⚠</span> Industry Challenges
            </h3>
            <div className="space-y-4">
              {industry.problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + idx * 0.07 }}
                  className="p-5 rounded-xl bg-red-500/5 border border-red-500/20"
                >
                  <p className="text-sm text-[#8b93b0]">{typeof problem === "string" ? problem : problem.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Our Solutions
            </h3>
            <div className="space-y-4">
              {industry.solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + idx * 0.07 }}
                  className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
                >
                  <p className="text-sm text-[#8b93b0]">{typeof solution === "string" ? solution : solution.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Technologies We Use</h3>
          <div className="flex flex-wrap gap-3">
            {industry.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.35 + idx * 0.05 }}
                className="px-4 py-2 rounded-lg bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-purple-300 text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        {industry.caseStudy && caseStudyProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📊</span>
                <h3 className="text-2xl font-bold text-white">Success Story</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">{caseStudyProject.name}</h4>
                  <p className="text-[#8b93b0] mb-4">{caseStudyProject.problem}</p>
                  <div className="space-y-2 mb-6">
                    {caseStudyProject?.results?.map((metric, idx) => (
                      <div key={idx} className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#00F0FF]">{metric.metric}</span>
                        <span className="text-white">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/work/${caseStudyProject?.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7B2CBF] text-white font-bold uppercase tracking-wider hover:bg-[#5b3fd6] transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
                {caseStudyProject.testimonial && (
                  <div className="flex items-center justify-center">
                    <blockquote className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white italic mb-4">"{caseStudyProject.testimonial.quote}"</p>
                      <footer className="text-sm">
                        <div className="font-semibold text-[#7B2CBF]">{caseStudyProject.testimonial.author}</div>
                        <div className="text-[#8b93b0]">{caseStudyProject.testimonial.role}</div>
                      </footer>
                    </blockquote>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
