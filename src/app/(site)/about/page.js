"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import DataFlow from "@/components/svg/tech/DataFlow";
import PageBackground from "@/components/PageBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const values = [
  {
    title: "Innovation First",
    desc: "We constantly explore emerging technologies to bring the best, future-proof solutions to our clients."
  },
  {
    title: "Uncompromising Quality",
    desc: "Every line of code we write and every pixel we design undergoes rigorous quality checks."
  },
  {
    title: "Client-Centric Approach",
    desc: "Your success is our success. We build long-term partnerships through transparency and dedication."
  },
  {
    title: "Agile & Adaptive",
    desc: "We pivot quickly, adapt to new requirements, and deliver iterative value without missing a beat."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageBackground variant="orbits" />
      {/* Hero Section */}
      <section className="relative noise py-24 px-4 overflow-hidden pt-[140px] text-center">
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
          <DataFlow size={600} direction="horizontal" />
        </div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">WHO WE ARE</h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Engineering the <span className="text-[#00F0FF]">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8b93b0] mb-8 leading-relaxed max-w-3xl mx-auto">
              AiTechPulze is a premium digital agency specializing in AI, enterprise software, and cloud infrastructure. We transform complex challenges into elegant technological solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-[#0a0b14] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/5 rounded-bl-full translate-x-1/2 -translate-y-1/2" />
            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-[#8b93b0] leading-relaxed text-lg">
              To empower businesses by building state-of-the-art software products that streamline operations, drive exponential growth, and create meaningful impact in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2CBF]/5 rounded-bl-full translate-x-1/2 -translate-y-1/2" />
            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-[#8b93b0] leading-relaxed text-lg">
              To be the globally recognized vanguard of technological innovation, where ambitious ideas converge with flawless execution to shape the intelligent software of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-[#03040B]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">CORE VALUES</h4>
            <h2 className="text-4xl font-bold text-white">What Drives Us Forward</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="h-full">
                <SpotlightCard className="h-full flex flex-col p-8 group border border-white/10 bg-[#0f0f0f] rounded-2xl hover:border-white/20 transition-all">
                  <div className="text-4xl font-bold text-white/10 mb-6 group-hover:text-[#00F0FF]/20 transition-colors">0{i+1}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">{v.title}</h3>
                  <p className="text-sm text-[#8b93b0] leading-relaxed flex-1">{v.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-[#0a0b14] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">OUR TEAM</h4>
            <h2 className="text-4xl font-bold text-white">The Minds Behind The Code</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dynamically imported data or hardcoded for now since they want to see it */}
            [ 
              { name: "Niranjan P", role: "Founder & CEO", photo: "/team/niranjan.webp" },
              { name: "Vijaykumar", role: "CTO", photo: "/team/vijay.webp" },
              { name: "Ranjeet", role: "AI/ML Engineer", photo: "/team/ranjeet.webp" },
              { name: "Nehashree", role: "Intern", photo: "/team/neha.webp" },
              { name: "Nishalini", role: "Intern", photo: "/team/nisha.webp" },
              { name: "Ramani", role: "Intern", photo: "/team/ramani.webp" },
              { name: "Rajesh", role: "Intern", photo: "/team/rajesh.webp" },
              { name: "Sanjay Ram", role: "Intern", photo: "/team/sanjay.webp" },
              { name: "Susmiha bavyaa", role: "Intern", photo: "/team/susmiha.webp" },
              { name: "Rakesh", role: "Intern", photo: "/team/rakesh.webp" },
              { name: "Sanjeal", role: "Intern", photo: "/team/sanjeal.webp" },
              { name: "Sheik", role: "Intern", photo: "/team/sheik.webp" },
              { name: "Varun", role: "Intern", photo: "/team/varun.webp" }
            ].map((member, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#00F0FF]/30" />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00F0FF] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0b14] to-[#03040B] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-xl text-[#8b93b0] mb-10 max-w-2xl mx-auto">
              We bring the expertise, you bring the vision. Partner with AiTechPulze to elevate your digital presence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-quote" className="px-8 py-4 rounded-lg bg-[#00F0FF] text-black font-bold tracking-wider uppercase hover:bg-[#00F0FF]/90 transition-all hover:scale-105">
                Start A Project →
              </Link>
              <Link href="/services" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
