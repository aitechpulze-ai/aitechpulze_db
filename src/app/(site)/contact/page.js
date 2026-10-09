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

export default function ContactPage() {
  return (
    <>
      <PageBackground variant="nodes" />
      {/* Hero Section */}
      <section className="relative noise py-24 px-4 overflow-hidden pt-[140px] text-center">
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
          <DataFlow size={600} direction="horizontal" />
        </div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">CONTACT US</h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Talk <span className="text-[#00F0FF]">Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8b93b0] mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're a business owner, a startup founder, or a student — reach out and we'll respond fast with a clear plan and honest pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="px-4 bg-[#0a0a0a] relative z-20 pb-24">
        <div className="max-w-7xl mx-auto -mt-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* WhatsApp */}
            <motion.div variants={fadeInUp} className="h-full">
              <SpotlightCard className="h-full bg-[#0f0f0f] rounded-2xl border border-white/10 p-8 flex flex-col group hover:border-[#00F0FF]/30 transition-all duration-300">
                <span className="inline-block self-start px-3 py-1 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-bold rounded-full mb-6 uppercase tracking-wider">PREFERRED</span>
                <div className="w-14 h-14 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">WhatsApp</h2>
                <p className="text-[#8b93b0] mb-8 flex-grow">
                  Instant chat with our team for immediate project discussion and quotes.
                </p>
                <a href="https://wa.me/919585776088?text=Hi%20AITechPulze%2C%20I%20need%20a%20project%20quote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#00F0FF] font-bold group-hover:underline">
                  Open WhatsApp →
                </a>
              </SpotlightCard>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp} className="h-full">
              <SpotlightCard className="h-full bg-[#0f0f0f] rounded-2xl border border-white/10 p-8 flex flex-col group hover:border-white/30 transition-all duration-300">
                <span className="inline-block self-start px-3 py-1 bg-white/5 text-white/70 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">OFFICIAL</span>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Email</h2>
                <p className="text-[#8b93b0] mb-8 flex-grow">
                  Send your requirements and attachments for a formal quotation.
                </p>
                <a href="mailto:info@aitechpulze.com?subject=Project%20Request" className="inline-flex items-center text-white font-bold group-hover:underline">
                  info@aitechpulze.com →
                </a>
              </SpotlightCard>
            </motion.div>

            {/* Call Us */}
            <motion.div variants={fadeInUp} className="h-full">
              <SpotlightCard className="h-full bg-[#0f0f0f] rounded-2xl border border-white/10 p-8 flex flex-col group hover:border-[#7B2CBF]/50 transition-all duration-300">
                <span className="inline-block self-start px-3 py-1 bg-[#7B2CBF]/10 text-[#7B2CBF] text-xs font-bold rounded-full mb-6 uppercase tracking-wider">DIRECT</span>
                <div className="w-14 h-14 bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#7B2CBF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Call Us</h2>
                <p className="text-[#8b93b0] mb-8 flex-grow">
                  Speak directly for urgent timelines and immediate project planning.
                </p>
                <a href="tel:+919585776088" className="inline-flex items-center text-[#7B2CBF] font-bold group-hover:underline">
                  +91 95857 76088 →
                </a>
              </SpotlightCard>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 px-4 bg-[#03040B] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Quick Response Promise */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">OUR COMMITMENT</h4>
            <h2 className="text-4xl font-bold text-white mb-10">Quick Response Promise</h2>
            <ul className="space-y-4">
              {[
                "Fast first response for all new project requests",
                "Clear pricing estimate based on your project scope",
                "Direct support from planning to final delivery",
                "Flexible communication via WhatsApp, call, or email"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-[#0a0a0a] p-5 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.02] transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-white/80 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Audience Blocks */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-6 lg:mt-12">
            <motion.div variants={fadeInUp} className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00F0FF]/5 rounded-full blur-2xl group-hover:bg-[#00F0FF]/10 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-3">For Businesses</h3>
              <p className="text-[#8b93b0] text-base leading-relaxed">Discuss enterprise product requirements, custom software, dashboards, and digital transformation plans.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#7B2CBF]/5 rounded-full blur-2xl group-hover:bg-[#7B2CBF]/10 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-3">For Startups</h3>
              <p className="text-[#8b93b0] text-base leading-relaxed">Plan your MVP scope, release priorities, SaaS architecture, and development roadmap.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-3">For Students</h3>
              <p className="text-[#8b93b0] text-base leading-relaxed">Get guidance on final year projects, IEEE papers, research support, and academic innovation.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#03040B] border-t border-white/5 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto">
          <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">READY TO BUILD?</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Submit Your Requirement</h2>
          <p className="text-xl text-[#8b93b0] mb-10 max-w-2xl mx-auto">
            Use the quote form to send complete project details — optionally include a PDF document.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="px-8 py-4 rounded-lg bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-black font-bold tracking-wider uppercase transition-all hover:scale-105">
              Get Free Quote →
            </Link>
            <a href="https://wa.me/919585776088?text=Hi%20AITechPulze%2C%20I%20need%20a%20project%20quote" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
