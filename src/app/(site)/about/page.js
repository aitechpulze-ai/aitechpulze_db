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
      <section className="py-20 px-4 bg-[#0a0b14] border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-bl-full translate-x-1/2 -translate-y-1/2" />
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-[#8b93b0] leading-relaxed text-base">
              To empower businesses by building state-of-the-art software products that streamline operations, drive exponential growth, and create meaningful impact in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 rounded-bl-full translate-x-1/2 -translate-y-1/2" />
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-[#8b93b0] leading-relaxed text-base">
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
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">Meet The Innovators</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A precision-engineered squad of AI engineers, product designers, and full-stack architects — building the next generation of digital infrastructure.
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00F0FF] mb-2">13</div>
                <div className="text-[#8b93b0] text-sm tracking-wider uppercase font-semibold">OPERATORS</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-4xl font-bold text-[#00F0FF] mb-2">6+</div>
                <div className="text-[#8b93b0] text-sm tracking-wider uppercase font-semibold">DOMAINS</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-4xl font-bold text-[#00F0FF] mb-2">10+</div>
                <div className="text-[#8b93b0] text-sm tracking-wider uppercase font-semibold">PRODUCTS SHIPPED</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { id: "01", name: "Niranjan P", role: "Founder & CEO", department: "Leadership", year: "2023", photo: "/team/niranjan.webp", skills: ["React", "Node.js", "ML Engineer", "Data Analytics", "Excel", "Power BI", "SQL", "Python"], linkedin: "https://www.linkedin.com/in/niranjan-prakash-338773290" },
              { id: "02", name: "Vijaykumar", role: "CTO", department: "Technology", year: "2023", photo: "/team/vijay.webp", skills: ["System Architecture", "Cloud", "DevOps", "Python"], linkedin: "https://www.linkedin.com/in/vijayakumar-s-460100290/" },
              { id: "03", name: "Ranjeet", role: "AI & ML Engineer", department: "AI Research", year: "2023", photo: "/team/ranjeet.webp", skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"], linkedin: "https://www.linkedin.com/in/ranjeet-c3102/" },
              { id: "04", name: "Nehashree", role: "AI & ML Development Intern", department: "AI Research", year: "2024", photo: "/team/neha.webp", skills: ["Python", "TensorFlow", "NLP", "Data Science", "Data Analytics"], linkedin: "https://www.linkedin.com/in/nehashree-r-aa2770290/" },
              { id: "05", name: "Varun", role: "BI & Analytics Engineer", department: "Data", year: "2023", photo: "/team/varun.webp", skills: ["Power BI", "SQL", "Python", "Data Modeling"], linkedin: "http://linkedin.com/in/varun-s-958633290/" },
              { id: "06", name: "Sheik Irfan Bashaa", role: "Senior Full Stack Developer", department: "Engineering", year: "2023", photo: "/team/sheik.webp", skills: ["React", "Node.js", "MongoDB", "AWS"], linkedin: "https://www.linkedin.com/in/sheik-irfan-bashaa-s-a-121591290/" },
              { id: "07", name: "Sanjael", role: "Full Stack Web Developer", department: "Engineering", year: "2024", photo: "/team/sanjeal.webp", skills: ["React", "Express", "PostgreSQL", "Docker", "AI Engineer"], linkedin: "https://www.linkedin.com/in/sanjael-raja-ba0589290/" },
              { id: "08", name: "Nishalini", role: "Frontend Development Intern", department: "Engineering", year: "2024", photo: "/team/nisha.webp", skills: ["React", "Tailwind CSS", "JavaScript", "Figma", "Database", "Python", "Excel", "Data Analytics"], linkedin: "https://www.linkedin.com/in/nishalini-balaji-8a6671294/" },
              { id: "09", name: "Rakesh", role: "Data Scientist", department: "Data", year: "2024", photo: "/team/rakesh.webp", skills: ["Python", "Scikit-learn", "Pandas", "ML Ops"], linkedin: "https://www.linkedin.com/in/rakesh-ramadurai-ba781031b/" },
              { id: "10", name: "Ramani", role: "Frontend Development Intern", department: "Engineering", year: "2024", photo: "/team/ramani.webp", skills: ["React", "Tailwind CSS", "JavaScript", "Figma"], linkedin: "https://www.linkedin.com/in/ramani2105/" },
              { id: "11", name: "Rajesh", role: "Backend Development Intern", department: "Engineering", year: "2024", photo: "/team/rajesh.webp", skills: ["Node.js", "Express", "MongoDB", "REST APIs"], linkedin: "https://www.linkedin.com/in/rajesh-y-723771290/" },
              { id: "12", name: "Sanjay Ram", role: "UI/UX & Web Design Intern", department: "Design", year: "2024", photo: "/team/sanjay.webp", skills: ["Figma", "Adobe XD", "Prototyping", "CSS", "ML Engineer"], linkedin: "https://www.linkedin.com/in/sanjay-ram-m-ds/" },
              { id: "13", name: "Susmiha bavyaa", role: "Frontend Development Intern", department: "Engineering", year: "2024", photo: "/team/susmiha.webp", skills: ["React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Python", "AI"], linkedin: "https://www.linkedin.com/in/susmiha-bavya-694410290/" }
            ].map((member) => (
              <motion.div key={member.id} variants={fadeInUp} className="group relative">
                {/* Glowing Background Blur */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00F0FF] to-[#7B2CBF] rounded-2xl blur-lg opacity-30 transition duration-700"></div>
                
                {/* Main Card Container */}
                <div className="relative h-full flex flex-col bg-[#050B14]/80 backdrop-blur-2xl border border-[#00F0FF]/30 rounded-2xl p-6 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)]">
                  
                  {/* Scanning Laser Effect */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-100 animate-scan transition-opacity duration-300"></div>
                  
                  {/* Tech Grid Background pattern */}
                  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                  {/* Top Header Row */}
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <div className="text-[10px] font-mono text-[#00F0FF]/90 tracking-[0.2em] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
                      SYS.OP.{member.id}
                    </div>
                    <div className="px-2 py-1 bg-[#7B2CBF]/20 border border-[#7B2CBF]/50 rounded text-[9px] font-bold text-[#7B2CBF] tracking-widest uppercase">
                      {member.year}
                    </div>
                  </div>

                  {/* Holographic Photo Section */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    {/* Rotating Tech Rings */}
                    <div className="absolute inset-0 border border-white/10 rounded-full border-t-[#00F0FF]/80 border-r-[#7B2CBF]/80 animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute inset-2 border border-white/10 rounded-full border-b-[#00F0FF]/80 border-l-[#7B2CBF]/80 animate-[spin_3s_linear_infinite_reverse]"></div>
                    
                    <div className="absolute inset-3 bg-gradient-to-br from-[#00F0FF]/40 to-[#7B2CBF]/40 rounded-full blur-md opacity-80 transition-opacity duration-500"></div>
                    
                    <img src={member.photo} alt={member.name} className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-full border border-[#00F0FF]/50 z-10 transition-colors duration-500" />
                  </div>

                  {/* Content Info */}
                  <div className="text-center flex-1 relative z-10">
                    <h3 className="text-2xl font-black mb-1 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7B2CBF] transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-4">
                      &gt; {member.role}_
                    </p>
                    
                    <div className="inline-block bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-md px-3 py-1 mb-6 transition-colors">
                      <span className="text-[#00F0FF] text-[10px] uppercase tracking-widest font-semibold">{member.department}</span>
                    </div>

                    {/* Cyberspace Skills Grid */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/40 rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Futuristic Connect Button */}
                  <div className="pt-5 border-t border-[#00F0FF]/20 mt-auto relative z-10">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-full py-3 bg-[#00F0FF]/10 border border-[#00F0FF]/50 hover:bg-[#00F0FF]/20 rounded-lg text-[11px] font-bold tracking-[0.2em] text-white overflow-hidden group/btn transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                      {/* Button Glitch Effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                      <svg className="w-4 h-4 mr-2 text-[#00F0FF] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      INITIALIZE CONNECTION
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
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
