"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { work, projectCategories } from "@/content/work";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";
import DataFlow from "@/components/svg/tech/DataFlow";
import PageBackground from "@/components/PageBackground";

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? work 
    : work.filter(p => p.category === activeCategory);

  return (
    <>
      <PageBackground variant="geometric" />
      {/* Hero Section */}
      <section className="relative noise py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DataFlow />
        </div>
        
        <div className="container-width relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-gradient-flow">Projects</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#8b93b0] mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-world solutions delivering measurable impact across industries — from e-commerce to healthcare AI
            </p>

            <div className="flex items-center justify-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00F0FF]"></div>
                <span>{work.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7B2CBF]"></div>
                <span>{projectCategories.length - 1} Industries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-[#0a0b14] border-y border-white/5 sticky top-0 z-40 backdrop-blur-lg bg-[#0a0b14]/90">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#7B2CBF] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-[#03040B]">
        <div className="container-width">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                variants={staggerItem}
                layout
              >
                <Link
                  href={project.url || `/work/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <div className="h-full flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-[#00F0FF]/30 transition-all duration-300">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {project.url && (
                          <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                            Live
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#00F0FF] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-white/40">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-sm text-white/60 mb-4 line-clamp-2">
                        {project.summary}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Demo Link */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-sm font-bold text-[#00F0FF] group-hover:underline flex items-center gap-2">
                        View Demo
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No projects found in this category</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 px-6 py-3 rounded-lg bg-[#7B2CBF] text-white font-medium hover:bg-[#5b3fd6] transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0b14] to-[#03040B]">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's build something amazing together. Get a free consultation and project quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="px-10 py-5 rounded-lg bg-[#7B2CBF] text-white text-lg font-semibold hover:bg-[#5b3fd6] transition-all hover:scale-105"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 rounded-lg border-2 border-white/20 text-white text-lg font-semibold hover:bg-white/5 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
