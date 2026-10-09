"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { services } from "@/content/services";
import PageBackground from "@/components/PageBackground";

const packages = [
  {
    title: "STARTER",
    subtitle: "For focused digital projects",
    price: "From ₹5,000+",
    desc: "A practical starting point for smaller websites, landing pages, dashboards and focused digital solutions.",
    features: [
      "Landing pages",
      "Business websites",
      "Small dashboards",
      "Basic integrations",
      "Responsive design",
      "Basic SEO structure"
    ],
    cta: "Start A Small Project →",
    href: "/get-quote"
  },
  {
    title: "GROWTH",
    subtitle: "For growing businesses",
    price: "From ₹15,000+",
    desc: "For businesses that need richer experiences, integrations and more advanced functionality.",
    features: [
      "Advanced websites",
      "Web applications",
      "Mobile applications",
      "Analytics dashboards",
      "API integrations",
      "Custom workflows",
      "Advanced UI/UX"
    ],
    cta: "Build For Growth →",
    href: "/get-quote"
  },
  {
    title: "BUSINESS",
    subtitle: "For custom business systems",
    price: "From ₹30,000+",
    desc: "For businesses that need custom software, automation, AI integration or connected internal systems.",
    features: [
      "Custom software",
      "CRM / ERP systems",
      "AI integrations",
      "Advanced dashboards",
      "Business automation",
      "Database-driven applications",
      "Cloud deployment"
    ],
    cta: "Discuss Your Business →",
    href: "/get-quote"
  },
  {
    title: "ENTERPRISE",
    subtitle: "For complex technology platforms",
    price: "Custom Pricing",
    desc: "For large-scale software products, AI/ML platforms, SaaS systems and complex infrastructure requirements.",
    features: [
      "AI / ML platforms",
      "SaaS products",
      "Enterprise applications",
      "Multi-tenant architecture",
      "Cloud infrastructure",
      "Digital transformation",
      "Long-term engineering support"
    ],
    cta: "Talk To Our Team →",
    href: "/contact"
  }
];

const factors = [
  {
    title: "SCOPE",
    desc: "Number of pages, screens, modules, workflows and features required."
  },
  {
    title: "COMPLEXITY",
    desc: "A landing page, SaaS platform, AI system and enterprise application require very different levels of engineering."
  },
  {
    title: "INTEGRATIONS",
    desc: "Payment gateways, APIs, maps, CRM systems, AI APIs, analytics and third-party services can affect implementation effort."
  },
  {
    title: "TECHNOLOGY",
    desc: "Frontend, backend, databases, AI/ML, cloud infrastructure and deployment requirements all influence project architecture."
  },
  {
    title: "TIMELINE",
    desc: "Project schedules and delivery requirements can affect the resources needed for development."
  },
  {
    title: "SUPPORT",
    desc: "Post-launch maintenance, monitoring, updates and ongoing development can be included depending on the engagement."
  }
];

const processSteps = [
  { step: "01", title: "DISCOVER", desc: "Understand your business, users and project goals." },
  { step: "02", title: "SCOPE", desc: "Define features, modules, integrations and technical requirements." },
  { step: "03", title: "ARCHITECT", desc: "Choose the appropriate technology and system architecture." },
  { step: "04", title: "ESTIMATE", desc: "Prepare a project estimate based on scope and implementation requirements." },
  { step: "05", title: "BUILD", desc: "Develop, test and deploy the approved solution." }
];

const faqs = [
  {
    q: "Are these fixed prices?",
    a: "No. The displayed prices are starting points for selected project scopes. Final pricing depends on your exact requirements, complexity, integrations, technology and delivery needs."
  },
  {
    q: "Why do service pages have different starting prices?",
    a: "Each service has different implementation requirements. The service starting prices provide an entry-level reference, while complete project pricing depends on the actual scope."
  },
  {
    q: "Can I request a custom quote?",
    a: "Yes. Share your project requirements and we can evaluate the scope and provide a tailored estimate."
  },
  {
    q: "Do you work on existing websites and applications?",
    a: "Yes. Existing systems can be redesigned, upgraded, integrated or modernized depending on their technology and requirements."
  },
  {
    q: "Can you build both frontend and backend?",
    a: "Yes. Projects can include frontend interfaces, backend APIs, databases, authentication, integrations and deployment depending on scope."
  },
  {
    q: "Can AI or machine learning be added to an existing application?",
    a: "Yes. AI and machine learning capabilities can be integrated into existing applications through APIs, custom models or appropriate AI architectures."
  },
  {
    q: "Do you provide post-launch support?",
    a: "Support can be included depending on the project scope and selected engagement. Support may cover maintenance, updates, monitoring and technical improvements."
  },
  {
    q: "How do I get an exact price?",
    a: "Use the quote form and share your project requirements. The team can then assess the scope and prepare a project-specific estimate."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PricingPage() {
  return (
    <>
      <PageBackground variant="waves" />
      {/* 01: Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="noise py-24 px-4 text-center relative overflow-hidden pt-[140px]"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">PRICING</h4>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technology That Fits Your Needs
          </h1>
          <p className="text-xl font-medium text-white mb-4">
            Transparent starting prices for AI, software development, analytics, cloud and digital transformation services.
          </p>
          <p className="text-lg text-[#8b93b0] max-w-3xl mx-auto leading-relaxed mb-10">
            Every project is different. Our starting prices give you a clear idea of where your project can begin, while final pricing is based on scope, complexity, integrations, technology requirements and delivery needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/get-quote" 
              className="px-8 py-4 rounded-lg bg-[#00F0FF] text-black font-bold uppercase tracking-wider hover:bg-[#00F0FF]/90 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              Get A Custom Quote →
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 02: Service Pricing */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">SERVICE PRICING</h4>
            <h2 className="text-4xl font-bold text-white mb-4">Start With The Service You Need</h2>
            <p className="text-lg text-[#8b93b0] max-w-3xl mx-auto">
              Explore starting prices across our core technology services. These are entry-level estimates, not fixed project quotes. Your final investment depends on your specific requirements.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={fadeInUp} className="h-full">
                <SpotlightCard className="h-full flex flex-col p-8 group border border-white/10 bg-[#0f0f0f] rounded-2xl transition-all duration-300 hover:border-white/20">
                  <div className="text-sm font-bold text-[#00F0FF] tracking-wider uppercase mb-4">{s.category}</div>
                  <div className="text-4xl text-[#00F0FF] mb-6" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#8b93b0] mb-6 min-h-[60px]">{s.description || s.tagline}</p>
                  
                  <div className="text-3xl font-bold text-white mb-6">
                    {s.price}
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {s.whatWeBuild?.slice(0,5).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="text-[#00F0FF] font-bold mt-0.5">✓</span>
                        {feat.title}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={`/services/${s.slug}`}
                    className="mt-auto pt-6 border-t border-white/10 text-[#00F0FF] font-bold uppercase text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-2"
                  >
                    Explore {s.title.split(" ")[0]} →
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-[#8b93b0] mt-12 italic">
            Starting prices are indicative entry points for selected project scopes. Final pricing depends on requirements, complexity, integrations, technology, timeline and support needs.
          </p>
        </div>
      </section>

      {/* 03: Engagement Models */}
      <section className="py-24 px-4 bg-[#03040B] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">PROJECT OPTIONS</h4>
            <h2 className="text-4xl font-bold text-white mb-4">Choose How You Want To Build</h2>
            <p className="text-lg text-[#8b93b0] max-w-3xl mx-auto">
              Whether you need a focused website, a growing digital product or a complex business platform, we can structure the engagement around your project requirements.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {packages.map((pkg) => (
              <motion.div key={pkg.title} variants={fadeInUp} className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 flex flex-col hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/5 rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                <p className="text-sm text-[#00F0FF] font-medium mb-6">{pkg.subtitle}</p>
                <div className="text-3xl font-bold text-white mb-4">{pkg.price}</div>
                <p className="text-sm text-[#8b93b0] mb-8 min-h-[60px]">{pkg.desc}</p>
                
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="text-[#00F0FF] mt-0.5">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={pkg.href}
                  className="w-full py-3 rounded-lg border border-white/20 text-center text-white font-semibold hover:bg-white/10 transition-colors block mt-auto"
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-[#8b93b0] mt-12 italic">
            These project ranges are intended as planning references. Final pricing is confirmed after understanding your requirements, scope, integrations and technical architecture.
          </p>
        </div>
      </section>

      {/* 04: Pricing Factors */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">PRICING FACTORS</h4>
            <h2 className="text-4xl font-bold text-white mb-4">What Determines Your Project Cost?</h2>
            <p className="text-lg text-[#8b93b0] max-w-2xl mx-auto">
              Project pricing depends on more than the technology itself. We evaluate the complete scope before providing a final estimate.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {factors.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-white/10 mb-4">0{i+1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-[#8b93b0] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05: Process */}
      <section className="py-24 px-4 bg-[#03040B] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">From Requirements To A Clear Estimate</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
            >
              {processSteps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative bg-[#03040B] p-6 rounded-xl border border-white/10 text-center z-10 hover:-translate-y-2 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#8b93b0]">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 06: FAQ */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">FAQ</h4>
            <h2 className="text-4xl font-bold text-white">Questions About Pricing?</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <details className="group rounded-xl border border-white/10 bg-[#0f0f0f] [&_summary::-webkit-details-marker]:hidden transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-xl">
                    {faq.q}
                    <span className="shrink-0 rounded-full bg-white/5 p-1.5 text-[#00F0FF] sm:p-3 group-open:-rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-[#8b93b0] leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07: Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#03040B] border-t border-white/5">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h4 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4">READY TO BUILD?</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Turn Your Idea Into A Working Solution.
          </h2>
          <p className="text-xl text-[#8b93b0] mb-10 max-w-2xl mx-auto">
            Whether you're starting something new, modernizing an existing system or automating a business process, we'll help you identify the right technology and define a practical path forward.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/get-quote" 
              className="px-8 py-4 rounded-lg bg-[#00F0FF] text-black font-bold tracking-wider uppercase hover:bg-[#00F0FF]/90 transition-all duration-300 hover:scale-105"
            >
              Get A Custom Quote →
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Talk To Our Team →
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
