export const SITE = {
  name: "AiTechPulze",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aitechpulze.com",
  description:
    "AiTechPulze builds websites, AI tools and software for growing businesses. MSME registered, Tamil Nadu, India.",
};

export function buildMetadata({ 
  title, 
  description = SITE.description, 
  path = "/", 
  image = null, 
  imageType = "default",
  noindex = false,
  keywords = []
}) {
  const url = `${SITE.url}${path}`;
  
  // Use provided image or fallback to the site's logo for social previews
  const ogImage = image || `${SITE.url}/icon.png`;
  
  return {
    metadataBase: new URL(SITE.url),
    title: title ? `${title} | ${SITE.name}` : SITE.name,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    alternates: { canonical: url },
    openGraph: { 
      title: title || SITE.name, 
      description, 
      url, 
      siteName: SITE.name, 
      images: [{ url: ogImage, width: 1200, height: 630, alt: title || SITE.name }], 
      type: "website",
      locale: "en_IN"
    },
    twitter: { 
      card: "summary_large_image", 
      title: title || SITE.name, 
      description, 
      images: [ogImage],
      site: "@aitechpulze",
      creator: "@aitechpulze"
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.png`,
  email: "info@aitechpulze.com",
  telephone: "+91 95857 76088",
  foundingDate: "2023",
  description: SITE.description,
  address: { 
    "@type": "PostalAddress", 
    addressRegion: "Tamil Nadu", 
    addressCountry: "IN" 
  },
  sameAs: [
    "https://www.linkedin.com/company/aitechpulze",
    "https://twitter.com/aitechpulze",
    "https://github.com/aitechpulze"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 95857 76088",
    contactType: "Customer Service",
    email: "info@aitechpulze.com",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil", "Hindi"]
  }
};

// Website schema for homepage
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/favicon.png`
    }
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// Service schema generator
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title || feature,
          description: feature.description || feature
        }
      }))
    }
  };
}

// Article/BlogPosting schema generator
export function generateArticleSchema(post, author) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${SITE.url}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: author?.name || "AiTechPulze Team",
      url: author?.linkedin
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/favicon.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`
    }
  };
}

// Project/Case Study schema generator
export function generateCaseStudySchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: project.image ? `${SITE.url}${project.image}` : undefined,
    author: {
      "@type": "Organization",
      name: SITE.name
    },
    about: {
      "@type": "Thing",
      name: project.category
    },
    keywords: project.tags?.join(", ")
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`
    }))
  };
}

// FAQ schema generator
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
