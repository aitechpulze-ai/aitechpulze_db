/**
 * Project Detail Page - Comprehensive Case Study Template
 * 
 * Features:
 * - Hero with project overview and key metrics
 * - Problem statement and solution approach
 * - What we built (detailed features list)
 * - Technical stack and highlights
 * - Results and impact metrics
 * - Client testimonial
 * - Related projects
 */
"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { work, getProjectBySlug } from "@/content/work";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";
import DataFlow from "@/components/svg/tech/DataFlow";

// Helper to get related projects (same category or random)
function getRelatedProjects(currentSlug, category) {
  const related = work
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, 2);
  
  if (related.length < 2) {
    const additional = work
      .filter(p => p.slug !== currentSlug && p.category !== category)
      .slice(0, 2 - related.length);
    return [...related, ...additional];
  }
  
  return related;
}

export default function ProjectDetailPage({ params }) {
  const resolvedParams = params instanceof Promise ? null : params;
  if (!resolvedParams) return null;
  
  const { slug } = resolvedParams;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = getRelatedProjects(slug, project.category);

  return (
    <>
      {/* Structured Data - Project Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.name,
            "description": project.summary,
            "author": {
              "@type": "Organization",
              "name": "AiTechPulze"
            },
            "datePublished": project.year,
            "genre": project.category,
            "keywords": project.stack.join(", ")
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#03040B] noise py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DataFlow />
        </div>
        
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#products" 
              className="inline-flex items-center gap-2 text-sm text-[#00F0FF] hover:underline mb-6"
            >
              <span aria-hidden="true">←</span>
              Back to Projects
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 text-[#00F0FF] text-xs font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-sm text-white/60">
                {project.duration} • {project.year}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
              {project.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#8b93b0] mb-8 max-w-3xl leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg bg-[#7B2CBF] text-white font-semibold hover:bg-[#5b3fd6] transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Visit Website →
                </a>
              )}
              <Link
                href="/get-quote"
                className="px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              >
                Start Similar Project
              </Link>
            </div>

            {/* Key Metrics */}
            {project.results && project.results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-white/5 border border-white/10">
                {project.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#00F0FF] mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm text-white/60">{result.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      {project.image && (
        <section className="py-12 px-4 bg-[#0a0b14]">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Problem & Solution */}
      <section className="py-20 px-4 bg-[#03040B]">
        <div className="container-width max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-3">
                THE CHALLENGE
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">Problem Statement</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <h2 className="text-sm font-bold text-[#00F0FF] tracking-[0.2em] uppercase mb-3">
                OUR APPROACH
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">Solution</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-20 px-4 bg-[#0a0b14]">
        <div className="container-width">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
            >
              What We Built
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-white/60 mb-12 text-center max-w-2xl mx-auto"
            >
              Core features and capabilities we delivered
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {project.built.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center mt-1">
                      <span className="text-[#00F0FF] text-sm font-bold">✓</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 px-4 bg-[#03040B]">
        <div className="container-width max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technology Stack
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <p className="text-sm font-semibold text-white">{tech}</p>
                </div>
              ))}
            </div>

            {project.techHighlights && project.techHighlights.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mb-4">Technical Highlights</h3>
                <ul className="space-y-3">
                  {project.techHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70">
                      <span className="text-[#00F0FF] mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 px-4 bg-[#0a0b14]">
          <div className="container-width max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#7B2CBF]/10 to-transparent border border-[#7B2CBF]/20"
            >
              <div className="text-6xl text-[#00F0FF] mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                {project.testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-white">{project.testimonial.author}</div>
                  <div className="text-sm text-white/60">{project.testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 bg-[#03040B]">
          <div className="container-width">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              >
                More Projects
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <motion.div
                    key={relatedProject.slug}
                    variants={staggerItem}
                  >
                    <Link
                      href={`/work/${relatedProject.slug}`}
                      className="block group h-full"
                    >
                      <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-[#00F0FF]/30 transition-all duration-300">
                        {relatedProject.image && (
                          <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                            <Image
                              src={relatedProject.image}
                              alt={relatedProject.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}
                        <span className="text-xs text-[#00F0FF] uppercase tracking-wider">
                          {relatedProject.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 mt-2 group-hover:text-[#00F0FF] transition-colors">
                          {relatedProject.name}
                        </h3>
                        <p className="text-sm text-white/60">{relatedProject.summary}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0b14] to-[#03040B]">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that drives real business results.
            </p>
            
            <Link
              href="/get-quote"
              className="inline-block px-10 py-5 rounded-lg bg-[#7B2CBF] text-white text-lg font-semibold hover:bg-[#5b3fd6] transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
