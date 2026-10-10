"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

const teamMembers = [
  {
    id: "01",
    name: "Niranjan P",
    role: "Founder & CEO",
    department: "Leadership",
    year: "2023",
    photo: "/team/niranjan.webp",
    skills: ["React", "Node.js", "ML Engineer", "Data Analytics", "Excel", "Power BI", "SQL", "Python"],
    linkedin: "https://www.linkedin.com/in/niranjan-prakash-338773290"
  },
  {
    id: "02",
    name: "Vijaykumar",
    role: "CTO",
    department: "Technology",
    year: "2023",
    photo: "/team/vijay.webp",
    skills: ["System Architecture", "Cloud", "DevOps", "Python"],
    linkedin: "https://www.linkedin.com/in/vijayakumar-s-460100290/"
  },
  {
    id: "03",
    name: "Ranjeet",
    role: "AI & ML Engineer",
    department: "AI Research",
    year: "2023",
    photo: "/team/ranjeet.webp",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    linkedin: "https://www.linkedin.com/in/ranjeet-c3102/"
  },
  {
    id: "04",
    name: "Nehashree",
    role: "AI & ML Development Intern",
    department: "AI Research",
    year: "2024",
    photo: "/team/neha.webp",
    skills: ["Python", "TensorFlow", "NLP", "Data Science", "Data Analytics"],
    linkedin: "https://www.linkedin.com/in/nehashree-r-aa2770290/"
  },
  {
    id: "05",
    name: "Varun",
    role: "BI & Analytics Engineer",
    department: "Data",
    year: "2023",
    photo: "/team/varun.webp",
    skills: ["Power BI", "SQL", "Python", "Data Modeling"],
    linkedin: "http://linkedin.com/in/varun-s-958633290/"
  },
  {
    id: "06",
    name: "Sheik Irfan Bashaa",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    year: "2023",
    photo: "/team/sheik.webp",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    linkedin: "https://www.linkedin.com/in/sheik-irfan-bashaa-s-a-121591290/"
  },
  {
    id: "07",
    name: "Sanjael",
    role: "Full Stack Web Developer",
    department: "Engineering",
    year: "2024",
    photo: "/team/sanjeal.webp",
    skills: ["React", "Express", "PostgreSQL", "Docker", "AI Engineer"],
    linkedin: "https://www.linkedin.com/in/sanjael-raja-ba0589290/"
  },
  {
    id: "08",
    name: "Nishalini",
    role: "Frontend Development Intern",
    department: "Engineering",
    year: "2024",
    photo: "/team/nisha.webp",
    skills: ["React", "Tailwind CSS", "JavaScript", "Figma", "Database", "Python", "Excel", "Data Analytics"],
    linkedin: "https://www.linkedin.com/in/nishalini-balaji-8a6671294/"
  },
  {
    id: "09",
    name: "Rakesh",
    role: "Data Scientist",
    department: "Data",
    year: "2024",
    photo: "/team/rakesh.webp",
    skills: ["Python", "Scikit-learn", "Pandas", "ML Ops"],
    linkedin: "https://www.linkedin.com/in/rakesh-ramadurai-ba781031b/"
  },
  {
    id: "10",
    name: "Ramani",
    role: "Frontend Development Intern",
    department: "Engineering",
    year: "2024",
    photo: "/team/ramani.webp",
    skills: ["React", "Tailwind CSS", "JavaScript", "Figma"],
    linkedin: "https://www.linkedin.com/in/ramani2105/"
  },
  {
    id: "11",
    name: "Rajesh",
    role: "Backend Development Intern",
    department: "Engineering",
    year: "2024",
    photo: "/team/rajesh.webp",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    linkedin: "https://www.linkedin.com/in/rajesh-y-723771290/"
  },
  {
    id: "12",
    name: "Sanjay Ram",
    role: "UI/UX & Web Design Intern",
    department: "Design",
    year: "2024",
    photo: "/team/sanjay.webp",
    skills: ["Figma", "Adobe XD", "Prototyping", "CSS", "ML Engineer"],
    linkedin: "https://www.linkedin.com/in/sanjay-ram-m-ds/"
  },
  {
    id: "13",
    name: "Susmiha bavyaa",
    role: "Frontend Development Intern",
    department: "Engineering",
    year: "2024",
    photo: "/team/susmiha.webp",
    skills: ["React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Python", "AI"],
    linkedin: "https://www.linkedin.com/in/susmiha-bavya-694410290/"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050B14] pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
      <PageBackground variant="glow" />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h4 className="text-[#00F0FF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Meet The Innovators</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            A precision-engineered squad of AI engineers, product designers, and full-stack architects — building the next generation of digital infrastructure.
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 mb-16">
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
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={fadeInUp} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00F0FF]/30 to-[#7B2CBF]/30 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full flex flex-col bg-[#0b101e] border border-white/10 rounded-[1.5rem] p-6 hover:border-white/20 transition-all duration-300">
                
                {/* ID Corner */}
                <div className="absolute top-6 left-6 text-[10px] font-mono text-white/30 tracking-widest">
                  {member.id}
                </div>

                {/* Photo & Online Indicator */}
                <div className="relative w-28 h-28 mx-auto mt-4 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF] to-[#7B2CBF] rounded-[2rem] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 opacity-20"></div>
                  <img src={member.photo} alt={member.name} className="relative w-full h-full object-cover rounded-[1.5rem] border-2 border-white/5 z-10" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#10b981] border-2 border-[#0b101e] rounded-full z-20"></div>
                </div>

                {/* Info */}
                <div className="text-center flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">{member.name}</h3>
                  <p className="text-[#00F0FF] text-[11px] font-bold tracking-widest uppercase mb-4">{member.role}</p>
                  
                  <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <div className="w-1.5 h-1.5 bg-[#8b93b0] rounded-full"></div>
                    <span className="text-[#8b93b0] text-[10px] uppercase tracking-wider">{member.department} · {member.year}</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 text-[10px] text-[#a1a1aa] bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connect Button */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-[#111827] hover:bg-[#1f2937] border border-white/5 rounded-xl text-sm font-semibold text-white transition-colors group/btn">
                    <svg className="w-4 h-4 mr-2 text-[#0a66c2] group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    CONNECT
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
