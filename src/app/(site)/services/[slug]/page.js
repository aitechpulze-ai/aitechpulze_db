"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";
import AICore from "@/components/svg/tech/AICore";
import DataFlow from "@/components/svg/tech/DataFlow";
import CloudArchitecture from "@/components/svg/tech/CloudArchitecture";
import MLPipeline from "@/components/svg/tech/MLPipeline";
import CircuitGrid from "@/components/svg/tech/CircuitGrid";
import APIConnections from "@/components/svg/tech/APIConnections";
import AnalyticsGraph from "@/components/svg/tech/AnalyticsGraph";
import DatabaseNetwork from "@/components/svg/tech/DatabaseNetwork";

// Helper to get related services
function getRelatedServices(currentSlug) {
  return services.filter(s => s.slug !== currentSlug).slice(0, 3);
}

// Service-specific SVG background mapping
function getServiceSVG(slug) {
  const svgMap = {
    'ai-development': AICore,
    'machine-learning': MLPipeline,
    'web-development': CircuitGrid,
    'mobile-app-development': APIConnections,
    'saas-development': CloudArchitecture,
    'cloud-solutions': CloudArchitecture,
    'data-analytics': AnalyticsGraph,
    'custom-software': DatabaseNetwork,
    'digital-transformation': DataFlow
  };
  return svgMap[slug] || AICore;
}

// Service-specific accent colors (Using Home Theme Cyan)
function getServiceAccent(slug) {
  return '#00F0FF';
}

function getServiceAnimations(accentColor) {
  return {
    heroImage: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    }
  };
}

function generateServiceSchema(service) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aitechpulze.com';
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "AiTechPulze",
      "url": baseUrl
    },
    "serviceType": service.category,
    "category": service.category,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "url": `${baseUrl}/services/${service.slug}`
  };
}

function generateBreadcrumbSchema(service) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aitechpulze.com';
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${baseUrl}/services/${service.slug}`
      }
    ]
  };
}

function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = services.find((x) => x.slug === slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(slug);
  const ServiceSVG = getServiceSVG(slug);
  const accentColor = getServiceAccent(slug);
  const animations = getServiceAnimations(accentColor);
  
  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema(service);
  const faqSchema = generateFAQSchema(service.faqs || []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 01. Breadcrumb & 02. Hero & 03. SEO Tagline */}
      <section className="relative bg-[#03040B] noise py-24 px-4 overflow-hidden pt-[140px]">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <ServiceSVG />
        </div>
        
        <div className="container-width relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#F3E9DC] hover:text-[#E10600] mb-8 transition-colors">
              <span aria-hidden="true">←</span> Back to Services
            </Link>
            
            <div className="flex flex-col gap-6 max-w-4xl">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.2em] text-[#00F0FF] uppercase">
                  {service.eyebrow}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {service.h1}
              </h1>
              
              <p className="text-2xl font-medium text-white/90">
                {service.tagline}
              </p>
              
              <p className="text-xl text-[#8b93b0] leading-relaxed max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4">
                <Link
                  href="/get-quote"
                  className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ backgroundColor: accentColor, '--tw-ring-color': accentColor }}
                >
                  Start Your Project →
                </Link>
                <Link href="/contact" className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                  Talk To Our Team →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. Intro / Value Proposition */}
      <section className="py-24 px-4 bg-[#0a0b14]">
        <div className="container-width max-w-4xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-8">
              {service.intro.title}
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-xl text-white/70 leading-relaxed whitespace-pre-line">
              {service.intro.content}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 05. What We Build */}
      <section className="py-24 px-4 bg-[#03040B] relative">
        <div className="container-width">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
              What We Build
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whatWeBuild.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 transition-all duration-500 hover:bg-white/[0.04]"
                  style={{ '--hover-border': accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accentColor}50`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 06. Core Capabilities & 08. Tech Stack */}
      <section className="py-24 px-4 bg-[#0a0b14]">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-10">
                Core Capabilities
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                    <span className="text-lg text-white/90">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-10">
                Technology Stack
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    variants={fadeInUp}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 07. Use Cases */}
      <section className="py-24 px-4 bg-[#03040B]">
        <div className="container-width">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
              Where It Creates Impact
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.useCases.map((useCase, idx) => (
                <motion.div key={idx} variants={staggerItem} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-white/70">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 09. How We Work (Process) */}
      <section className="py-24 px-4 bg-[#0a0b14]">
        <div className="container-width">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
              From Idea To Production
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {service.process.map((step, idx) => (
                <motion.div key={idx} variants={staggerItem} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 items-start md:items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full text-2xl font-bold shrink-0" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.phase}</h3>
                    <p className="text-white/70 text-lg">{step.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Deliverables */}
      <section className="py-24 px-4 bg-[#03040B]">
        <div className="container-width text-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-12">
              What You Receive
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {service.deliverables.map((item, idx) => (
                <motion.span key={idx} variants={fadeInUp} className="px-6 py-3 rounded-full border border-white/20 text-white/90 bg-white/5 backdrop-blur-md">
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* 12. FAQ */}
      <section className="py-24 px-4 bg-[#03040B]">
        <div className="container-width max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Related Services */}
      <section className="py-24 px-4 bg-[#0a0b14]">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-[#8b93b0] uppercase mb-4 block">EXPLORE MORE</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Related Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="block p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{related.title}</h3>
                <p className="text-white/70">{related.tagline || related.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="py-24 px-4 bg-[#03040B]">
        <div className="container-width text-center">
          <span className="text-sm font-semibold tracking-widest text-[#00F0FF] uppercase mb-6 block">READY TO BUILD?</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-5xl mx-auto leading-tight">
            Let's Turn Your Idea Into A Working Solution.
          </h2>
          <p className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're starting something new, modernizing an existing system, or looking to automate a business process, we'll help you choose the right technology and build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/get-quote" className="px-10 py-5 rounded-lg text-white text-xl font-semibold transition-all hover:scale-105" style={{ backgroundColor: accentColor }}>
              Start Your Project →
            </Link>
            <Link href="/contact" className="px-10 py-5 rounded-lg border-2 border-white/20 text-white text-xl font-semibold hover:bg-white/5 transition-colors">
              Talk To Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
