import React from 'react';

const SvgIcon = ({ children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#00F0FF]">
    {children}
  </svg>
);

export const industries = [
  {
    name: "Logistics & Supply Chain",
    slug: "logistics",
    icon: <SvgIcon><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.18a2 2 0 0 1 1.95 1.57L8.5 9h9.18a2 2 0 0 1 1.95 1.57L21.5 15h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><circle cx="16" cy="18" r="3"/><circle cx="8" cy="18" r="3"/></SvgIcon>,
    desc: "Real-time tracking, fleet management, and route optimization for modern logistics operations.",
    problems: [
      "Manual shipment tracking leading to delivery delays",
      "Inefficient route planning increasing fuel costs",
      "Lack of real-time visibility for customers",
      "Paper-based proof of delivery causing disputes"
    ],
    solutions: [
      "GPS-based real-time shipment tracking",
      "AI-powered route optimization",
      "Customer self-service tracking portal",
      "Digital proof of delivery with photo capture",
      "Fleet maintenance scheduling",
      "Driver mobile app with navigation"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Redis", "WebSocket"],
    caseStudy: {
      client: "PKROUTEX",
      result: "40% reduction in delivery times, 25% fuel cost savings",
      project: "pkroutex"
    },
    stats: [
      { value: "40%", label: "Faster Deliveries" },
      { value: "25%", label: "Cost Reduction" },
      { value: "5000+", label: "Monthly Shipments" }
    ]
  },
  {
    name: "Healthcare & Medical",
    slug: "healthcare",
    icon: <SvgIcon><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></SvgIcon>,
    desc: "Patient portals, hospital management systems, and AI-powered health analytics.",
    problems: [
      "Paper-based patient records causing inefficiencies",
      "Appointment scheduling chaos and no-shows",
      "Billing errors and insurance claim delays",
      "Pharmacy inventory management issues",
      "Lack of patient medical history access"
    ],
    solutions: [
      "Electronic Medical Records (EMR) system",
      "Online appointment booking with SMS reminders",
      "Automated billing and insurance integration",
      "Pharmacy inventory with expiry tracking",
      "Patient portal for medical history access",
      "AI stress detection for mental health monitoring"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "TensorFlow", "HIPAA-compliant infrastructure"],
    caseStudy: {
      client: "HCMC Health Centre",
      result: "70% reduction in admin work, 90% fewer billing errors",
      project: "hcmc-health-centre"
    },
    stats: [
      { value: "70%", label: "Less Admin Work" },
      { value: "90%", label: "Fewer Errors" },
      { value: "500+", label: "Daily Patients" }
    ]
  },
  {
    name: "E-Commerce & Retail",
    slug: "ecommerce",
    icon: <SvgIcon><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></SvgIcon>,
    desc: "Online stores, inventory management, payment integration, and customer analytics.",
    problems: [
      "High cart abandonment rates",
      "Poor product discovery and search",
      "Manual inventory management",
      "Limited payment options",
      "Lack of customer insights"
    ],
    solutions: [
      "Optimized checkout flow with multiple payment options",
      "AI-powered product recommendations",
      "Real-time inventory synchronization",
      "Razorpay/Stripe payment gateway integration",
      "Customer analytics dashboard",
      "Mobile-responsive PWA for app-like experience"
    ],
    technologies: ["Next.js", "MongoDB", "Stripe", "Razorpay", "AWS S3", "Redis"],
    caseStudy: {
      client: "Adhvaya Jewellery",
      result: "250% increase in sales, 45% higher conversion with AR",
      project: "adhvaya-jewellery"
    },
    stats: [
      { value: "250%", label: "Sales Growth" },
      { value: "45%", label: "Higher Conversion" },
      { value: "₹25L+", label: "Monthly Revenue" }
    ]
  },
  {
    name: "Education & EdTech",
    slug: "education",
    icon: <SvgIcon><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></SvgIcon>,
    desc: "Learning management systems, student portals, and placement management platforms.",
    problems: [
      "Manual student data management",
      "Inefficient placement coordination",
      "Lack of student-company matching",
      "Paper-based assignment submissions",
      "No centralized communication system"
    ],
    solutions: [
      "Student information management system",
      "AI-powered job-student matching",
      "Online placement drive management",
      "Digital assignment submission and grading",
      "Integrated resume builder",
      "Interview scheduling automation"
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "ML algorithms", "PDF generation"],
    caseStudy: {
      client: "Student Placement Portal",
      result: "95% placement rate (vs 75%), 80% less admin work",
      project: "student-placement-portal"
    },
    stats: [
      { value: "95%", label: "Placement Rate" },
      { value: "80%", label: "Admin Reduction" },
      { value: "1200+", label: "Students" }
    ]
  },
  {
    name: "Finance & FinTech",
    slug: "finance",
    icon: <SvgIcon><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></SvgIcon>,
    desc: "Secure payment systems, accounting integrations, and financial dashboards.",
    problems: [
      "Manual accounting and reconciliation",
      "Lack of real-time financial visibility",
      "Security concerns with online payments",
      "Complex invoice generation",
      "Regulatory compliance challenges"
    ],
    solutions: [
      "Automated accounting with QuickBooks/Tally integration",
      "Real-time financial dashboards",
      "PCI-DSS compliant payment processing",
      "Automated invoice generation and tracking",
      "Expense management system",
      "Multi-currency support"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Plaid API", "Encryption"],
    caseStudy: null,
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "PCI-DSS", label: "Compliant" },
      { value: "<1s", label: "Transaction Time" }
    ]
  },
  {
    name: "Manufacturing & Industry",
    slug: "manufacturing",
    icon: <SvgIcon><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></SvgIcon>,
    desc: "ERP systems, production tracking, quality control, and supply chain management.",
    problems: [
      "Disconnected production and inventory systems",
      "Manual quality inspection processes",
      "Production downtime due to lack of visibility",
      "Supply chain coordination issues",
      "Inefficient resource allocation"
    ],
    solutions: [
      "Integrated ERP for end-to-end operations",
      "IoT-based production monitoring",
      "AI-powered quality inspection",
      "Supply chain visibility platform",
      "Predictive maintenance alerts",
      "Resource optimization dashboard"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "Computer Vision", "IoT sensors"],
    caseStudy: null,
    stats: [
      { value: "35%", label: "Efficiency Gain" },
      { value: "50%", label: "Less Downtime" },
      { value: "Real-time", label: "Visibility" }
    ]
  },
  {
    name: "Printing & Design",
    slug: "printing",
    icon: <SvgIcon><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></SvgIcon>,
    desc: "Online design tools, print-on-demand platforms, and order management systems.",
    problems: [
      "Manual design file handling",
      "Complex pricing for custom orders",
      "Production workflow bottlenecks",
      "Customer design approval delays",
      "Inventory management of materials"
    ],
    solutions: [
      "Browser-based design editor with templates",
      "Dynamic pricing calculator",
      "Automated order routing to production",
      "Customer approval workflow",
      "Material inventory tracking",
      "Print-ready file generation"
    ],
    technologies: ["React", "Fabric.js", "MongoDB", "AWS S3", "PDF generation", "Canvas API"],
    caseStudy: {
      client: "iPrintZone",
      result: "300% increase in orders, 60% faster processing",
      project: "iprintzone"
    },
    stats: [
      { value: "300%", label: "Order Growth" },
      { value: "60%", label: "Faster Process" },
      { value: "₹15L+", label: "Monthly Revenue" }
    ]
  },
  {
    name: "AgriTech & Farming",
    slug: "agriculture",
    icon: <SvgIcon><path d="M12 2v20M8.5 6.5A5.5 5.5 0 0 0 14 12c0-3.04-2.46-5.5-5.5-5.5ZM15.5 12.5A5.5 5.5 0 0 0 10 18c0-3.04 2.46-5.5 5.5-5.5Z"/></SvgIcon>,
    desc: "AI-powered crop monitoring, disease detection, and farm management systems.",
    problems: [
      "Late disease detection causing crop loss",
      "Lack of farming expertise in rural areas",
      "Manual farm record keeping",
      "Inefficient resource usage",
      "No access to market pricing"
    ],
    solutions: [
      "AI plant disease detection from photos",
      "Multilingual farming advisory system",
      "Digital farm management records",
      "Weather-based irrigation recommendations",
      "Market price integration",
      "Expert consultation platform"
    ],
    technologies: ["TensorFlow", "React Native", "Python", "FastAPI", "Firebase", "Edge ML"],
    caseStudy: {
      client: "Plant Disease Detection AI",
      result: "92% accuracy, 30% crop loss reduction, 15K+ farmers",
      project: "leaf-disease-classifier"
    },
    stats: [
      { value: "92%", label: "Detection Accuracy" },
      { value: "30%", label: "Less Crop Loss" },
      { value: "15K+", label: "Farmers Served" }
    ]
  }
];

// Helper to get industry by slug
export function getIndustryBySlug(slug) {
  return industries.find(i => i.slug === slug);
}

// Get industries with case studies
export function getIndustriesWithCaseStudies() {
  return industries.filter(i => i.caseStudy !== null);
}
