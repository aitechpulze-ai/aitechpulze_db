import React from 'react';

const SvgIcon = ({ children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#00F0FF]">
    {children}
  </svg>
);

export const services = [
  {
    category: "AI DEVELOPMENT",
    title: "AI Development",
    seoTitle: "AI Development Services | Custom AI Solutions | AiTechPulze",
    metaDescription: "Build production-ready AI solutions with AiTechPulze. We develop computer vision, NLP, generative AI, RAG systems, AI agents and intelligent automation for real business use cases.",
    canonical: "/services/ai-development",
    eyebrow: "AI DEVELOPMENT",
    h1: "Build Intelligence Into Your Business",
    tagline: "Custom AI development services for intelligent automation, computer vision, NLP, generative AI and AI-powered business applications.",
    description: "We design and develop production-ready artificial intelligence solutions that transform complex business problems into intelligent, automated experiences. From computer vision and natural language processing to generative AI and AI agents, we build solutions around your real business requirements.",
    price: "From ₹5,000",
    slug: "ai-development",
    icon: <SvgIcon><path d="M12 2v2M2 12h2M20 12h2M12 20v2M16.24 7.76l1.42-1.42M6.34 17.66l1.42-1.42M16.24 16.24l1.42 1.42M6.34 6.34l1.42 1.42M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" /><path d="M15 4h4v4M5 4h4v4M15 20h4v-4M5 20h4v-4" /></SvgIcon>,
    intro: {
      title: "AI That Solves Real Business Problems",
      content: "Artificial intelligence becomes valuable when it solves a measurable problem. AiTechPulze helps businesses turn ideas, workflows and data into practical AI-powered products and automation systems.\n\nWe combine machine learning, modern AI models, application development and backend engineering to create solutions that can move from concept to production."
    },
    whatWeBuild: [
      { title: "Computer Vision", desc: "Build intelligent systems that understand images and video for recognition, classification, detection and analysis." },
      { title: "Natural Language Processing", desc: "Create applications that understand, process and generate human language for smarter workflows and user experiences." },
      { title: "Generative AI", desc: "Integrate modern AI models into applications for intelligent content generation, assistants, search and productivity." },
      { title: "RAG Applications", desc: "Connect AI systems to private documents and business knowledge to deliver context-aware responses grounded in your data." },
      { title: "AI Agents", desc: "Build intelligent systems that can reason through tasks, use tools, interact with APIs and automate multi-step workflows." },
      { title: "Recommendation Systems", desc: "Create personalized recommendations using user behavior, preferences, historical data and business rules." }
    ],
    capabilities: [
      "Computer Vision", "Natural Language Processing", "Generative AI", "AI Chatbots", "Retrieval-Augmented Generation", "AI Agents", "Recommendation Systems", "Document Intelligence", "Image & Video Analysis", "Intelligent Automation", "AI API Integration", "Model Deployment"
    ],
    useCases: [
      { title: "Intelligent customer support", description: "Automate responses to common inquiries." },
      { title: "Document processing", description: "Extract structured data from unstructured files." },
      { title: "Image recognition", description: "Automated quality control and tagging." },
      { title: "Knowledge assistants", description: "Internal search tools grounded in company data." },
      { title: "Recommendation engines", description: "Personalized product discovery." },
      { title: "Business process automation", description: "AI-driven operational workflows." }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI", "Gemini", "Hugging Face", "LangChain", "FastAPI", "Flask", "REST APIs"],
    process: [
      { phase: "Discover", activity: "Understand the business problem, users, data and expected outcome." },
      { phase: "Architect", activity: "Design the AI architecture, data pipeline and application architecture." },
      { phase: "Develop", activity: "Build, integrate and optimize the AI components." },
      { phase: "Validate", activity: "Evaluate the solution using technical and business performance metrics." },
      { phase: "Deploy", activity: "Integrate the solution into the target application or infrastructure." },
      { phase: "Improve", activity: "Monitor, refine and optimize the system as requirements evolve." }
    ],
    deliverables: [
      "AI solution architecture", "AI/ML model integration or development", "Data pipeline", "Backend APIs", "Application integration", "Deployment support", "Technical documentation"
    ],
    faqs: [
      { q: "Can you integrate AI into an existing website or application?", a: "Yes. AI capabilities can be integrated into existing web applications, mobile apps, enterprise systems and internal tools through APIs or custom integrations." },
      { q: "Do you build custom AI models?", a: "Yes. Depending on the problem, we can integrate existing models, fine-tune models or develop custom machine learning pipelines." },
      { q: "Can AI work with private company data?", a: "Yes. Private knowledge bases and RAG architectures can be designed around internal documents and approved business data." },
      { q: "Can you deploy AI models into production?", a: "Yes. We can integrate models into production applications through APIs and deployment-ready backend architectures." }
    ]
  },
  {
    category: "MACHINE LEARNING",
    title: "Machine Learning",
    seoTitle: "Machine Learning Development Services | ML Solutions | AiTechPulze",
    metaDescription: "Develop predictive machine learning solutions for classification, forecasting, anomaly detection and data-driven decision making with AiTechPulze.",
    canonical: "/services/machine-learning",
    eyebrow: "MACHINE LEARNING",
    h1: "Turn Data Into Predictive Intelligence",
    tagline: "Custom machine learning development for prediction, classification, forecasting, anomaly detection and intelligent decision systems.",
    description: "We develop machine learning solutions that identify patterns in data, predict outcomes and help organizations make more informed decisions.",
    price: "From ₹3,000",
    slug: "machine-learning",
    icon: <SvgIcon><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></SvgIcon>,
    intro: {
      title: "From Raw Data To Reliable Predictions",
      content: "Machine learning can help businesses discover patterns that are difficult to identify manually. We build complete ML pipelines covering data preparation, model development, evaluation and deployment."
    },
    whatWeBuild: [
      { title: "Predictive Models", desc: "Forecast future outcomes using historical and behavioral data." },
      { title: "Classification Systems", desc: "Automatically classify customers, transactions, documents or business records." },
      { title: "Regression Models", desc: "Predict continuous values such as revenue, demand, cost or operational metrics." },
      { title: "Anomaly Detection", desc: "Identify unusual patterns, unexpected behavior or potential operational issues." },
      { title: "Recommendation Systems", desc: "Generate personalized recommendations based on user behavior and historical data." },
      { title: "Forecasting Systems", desc: "Use historical trends to estimate future demand, sales or operational metrics." }
    ],
    capabilities: [
      "Random Forest", "XGBoost", "Decision Trees", "Logistic Regression", "Linear Regression", "Support Vector Machines", "K-Nearest Neighbors", "Neural Networks", "Time-Series Models"
    ],
    useCases: [
      { title: "Sales forecasting", description: "Predict future sales volumes." },
      { title: "Demand prediction", description: "Optimize inventory based on demand." },
      { title: "Customer churn prediction", description: "Identify users likely to leave." },
      { title: "Fraud detection", description: "Spot suspicious transactions." },
      { title: "Risk analysis", description: "Evaluate operational or financial risks." },
      { title: "Quality prediction", description: "Predict manufacturing defects." }
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "PyTorch", "TensorFlow"],
    process: [
      { phase: "Data Collection", activity: "Gather and consolidate raw data." },
      { phase: "Data Cleaning", activity: "Remove outliers and handle missing values." },
      { phase: "Exploratory Data Analysis", activity: "Identify distributions and correlations." },
      { phase: "Feature Engineering", activity: "Create meaningful variables for the model." },
      { phase: "Model Training", activity: "Train and tune machine learning algorithms." },
      { phase: "Deployment", activity: "Deploy model as a RESTful API." }
    ],
    deliverables: [
      "Data preprocessing", "Exploratory analysis", "Feature engineering", "ML model", "Evaluation report", "Prediction API", "Deployment support", "Documentation"
    ],
    faqs: [
      { q: "Can you work with our existing dataset?", a: "Yes. We can assess, clean, transform and prepare existing datasets for machine learning development." },
      { q: "Can an ML model be integrated into a website?", a: "Yes. Models can be exposed through APIs and integrated into websites, dashboards and mobile applications." },
      { q: "How do you evaluate model performance?", a: "Evaluation depends on the problem and may include metrics such as accuracy, precision, recall, F1-score, MAE, RMSE or other appropriate measures." }
    ]
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Web Development",
    seoTitle: "Web Development Services | React & Full-Stack Development | AiTechPulze",
    metaDescription: "Build fast, responsive and scalable websites and web applications with AiTechPulze. React, Next.js, Node.js, APIs, dashboards, portals and custom web solutions.",
    canonical: "/services/web-development",
    eyebrow: "WEB DEVELOPMENT",
    h1: "Digital Experiences Built To Perform",
    tagline: "Modern web development services for responsive websites, React applications, dashboards, portals and scalable full-stack platforms.",
    description: "We build modern web experiences that combine strong design, responsive interfaces, scalable architecture and reliable backend systems.",
    price: "From ₹3,000",
    slug: "web-development",
    icon: <SvgIcon><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></SvgIcon>,
    intro: {
      title: "Experiences Designed For Conversion",
      content: "A great website is more than just code. It requires performance, accessibility, SEO, and an intuitive user interface. We build full-stack web applications that represent your brand and convert visitors."
    },
    whatWeBuild: [
      { title: "Business websites", desc: "High-performance marketing and corporate sites." },
      { title: "E-commerce platforms", desc: "Custom stores with seamless checkouts." },
      { title: "Admin dashboards", desc: "Internal tools for data and operations." },
      { title: "Customer portals", desc: "Secure interfaces for your clients." },
      { title: "SaaS interfaces", desc: "Complex frontends for software products." },
      { title: "Custom web platforms", desc: "Bespoke digital solutions for unique workflows." }
    ],
    capabilities: [
      "Responsive design", "Interactive UI", "Advanced animations", "Accessibility", "SEO-friendly structure", "Performance optimization", "Reusable components", "REST APIs", "Database integration", "Authentication"
    ],
    useCases: [
      { title: "Corporate presence", description: "Establish authority with a modern site." },
      { title: "Lead generation", description: "Landing pages optimized for conversions." },
      { title: "E-commerce", description: "Sell products globally." },
      { title: "Operations management", description: "Internal tools and dashboards." }
    ],
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "PHP", "WordPress", "MySQL", "PostgreSQL"],
    process: [
      { phase: "Discover", activity: "Define goals, audience and architecture." },
      { phase: "Design", activity: "Create wireframes and visual UI." },
      { phase: "Develop", activity: "Build frontend components and backend systems." },
      { phase: "Test", activity: "Cross-browser and device testing." },
      { phase: "Deploy", activity: "Launch to production environments." },
      { phase: "Maintain", activity: "Ongoing support and optimization." }
    ],
    deliverables: [
      "Responsive frontend", "Backend/API", "Database", "Authentication", "Integrations", "Deployment", "Basic SEO setup", "Documentation"
    ],
    faqs: [
      { q: "Can you redesign an existing website?", a: "Yes. We can modernize an existing website while preserving important functionality, content and business requirements." },
      { q: "Can you build full-stack applications?", a: "Yes. We can develop both frontend and backend systems including APIs, databases and authentication." },
      { q: "Do you provide deployment support?", a: "Yes. Deployment and hosting configuration can be included depending on project requirements." }
    ]
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Mobile App Development",
    seoTitle: "Mobile App Development Services | iOS & Android Apps | AiTechPulze",
    metaDescription: "Build modern iOS and Android mobile applications with AiTechPulze. React Native, Expo, APIs, Firebase, authentication, maps, payments and scalable app solutions.",
    canonical: "/services/mobile-app-development",
    eyebrow: "MOBILE APP DEVELOPMENT",
    h1: "Apps Designed For Real-World Use",
    tagline: "Cross-platform mobile app development for iOS and Android with modern UI, backend integration and scalable application architecture.",
    description: "We build mobile applications that combine intuitive interfaces, reliable backend systems and practical functionality for real-world users.",
    price: "From ₹1,500",
    slug: "mobile-app-development",
    icon: <SvgIcon><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></SvgIcon>,
    intro: {
      title: "Native Performance, Beautiful Design",
      content: "We create mobile experiences that users love. Whether you need a consumer app, an enterprise mobility solution, or a companion app for your SaaS, we build it right."
    },
    whatWeBuild: [
      { title: "Business applications", desc: "Internal tools for mobile workforces." },
      { title: "E-commerce apps", desc: "Native shopping experiences." },
      { title: "Booking applications", desc: "Scheduling and reservation systems." },
      { title: "Education apps", desc: "Learning platforms and courses." },
      { title: "Delivery apps", desc: "Logistics and real-time tracking." },
      { title: "Social applications", desc: "Community and interaction platforms." }
    ],
    capabilities: [
      "Authentication", "Push notifications", "Maps and location", "Camera integration", "File uploads", "Payment integration", "API integration", "Firebase", "Real-time data", "User profiles"
    ],
    useCases: [
      { title: "Consumer apps", description: "Direct-to-consumer mobile platforms." },
      { title: "B2B mobility", description: "Tools for on-the-go professionals." },
      { title: "Field operations", description: "Data collection and tracking apps." }
    ],
    technologies: ["React Native", "Expo", "Flutter", "Firebase", "Node.js", "REST APIs"],
    process: [
      { phase: "Product Discovery", activity: "Define features and mobile strategy." },
      { phase: "UI/UX Design", activity: "Mobile-first interface design." },
      { phase: "App Development", activity: "Cross-platform engineering." },
      { phase: "Backend Integration", activity: "Connect APIs and databases." },
      { phase: "Testing", activity: "Device and performance testing." },
      { phase: "Deployment", activity: "App Store & Play Store launch." }
    ],
    deliverables: [
      "Mobile UI", "Application development", "Backend integration", "Database integration", "Authentication", "Testing", "Deployment assistance"
    ],
    faqs: [
      { q: "Can you build both Android and iOS apps?", a: "Yes. Cross-platform technologies can be used to build applications for both platforms while maintaining a consistent experience." },
      { q: "Can you connect the app to an existing backend?", a: "Yes. Existing APIs and backend services can be integrated into the mobile application." },
      { q: "Can mobile apps include AI features?", a: "Yes. AI APIs and custom AI services can be integrated into mobile applications." }
    ]
  },
  {
    category: "SAAS DEVELOPMENT",
    title: "SaaS Development",
    seoTitle: "SaaS Development Services | Scalable SaaS Products | AiTechPulze",
    metaDescription: "Build scalable SaaS products with AiTechPulze. We develop multi-tenant applications, subscriptions, authentication, dashboards, APIs and cloud-ready software platforms.",
    canonical: "/services/saas-development",
    eyebrow: "SAAS DEVELOPMENT",
    h1: "From Idea To Scalable Product",
    tagline: "End-to-end SaaS development for multi-tenant platforms, subscriptions, dashboards, APIs and cloud-ready software products.",
    description: "We help turn software ideas into scalable SaaS products with modern architecture, secure authentication, subscription systems and cloud-ready infrastructure.",
    price: "From ₹5,000",
    slug: "saas-development",
    icon: <SvgIcon><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></SvgIcon>,
    intro: {
      title: "Build, Launch, and Scale",
      content: "Building a SaaS product requires more than just code; it requires robust architecture. We handle multi-tenancy, billing, user roles, and scalable infrastructure so you can focus on your product."
    },
    whatWeBuild: [
      { title: "B2B SaaS", desc: "Software for businesses and enterprises." },
      { title: "AI SaaS", desc: "Products powered by AI models." },
      { title: "CRM platforms", desc: "Customer relationship tools." },
      { title: "Analytics platforms", desc: "Data insights and reporting tools." },
      { title: "Subscription products", desc: "Recurring revenue software." },
      { title: "Productivity platforms", desc: "Tools to improve workflows." }
    ],
    capabilities: [
      "Multi-tenant architecture", "Authentication", "Role-based access", "User management", "Subscription plans", "Payment integration", "Admin dashboards", "Usage tracking", "Analytics", "API architecture"
    ],
    useCases: [
      { title: "B2B software", description: "Launch subscription tools for companies." },
      { title: "AI wrappers", description: "Monetize AI workflows." },
      { title: "Internal tools", description: "Enterprise software as a service." }
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MySQL", "Docker", "AWS"],
    process: [
      { phase: "Idea", activity: "Validate concept and core features." },
      { phase: "Architecture", activity: "Design multi-tenant infrastructure." },
      { phase: "MVP", activity: "Build the minimum viable product." },
      { phase: "Development", activity: "Implement features and subscriptions." },
      { phase: "Testing", activity: "Security and scale testing." },
      { phase: "Scale", activity: "Launch and monitor usage." }
    ],
    deliverables: [
      "Product architecture", "Frontend", "Backend", "Database", "Authentication", "Subscription system", "Admin panel", "Deployment"
    ],
    faqs: [
      { q: "Can you build an MVP first?", a: "Yes. We can start with a focused MVP and design the architecture so the product can expand as requirements grow." },
      { q: "Can SaaS applications support multiple organizations?", a: "Yes. Multi-tenant architecture can support organizations, teams and individual users." },
      { q: "Can you integrate subscription payments?", a: "Yes. Subscription and payment workflows can be integrated based on the selected payment provider and project requirements." }
    ]
  },
  {
    category: "CLOUD SOLUTIONS",
    title: "Cloud Solutions",
    seoTitle: "Cloud Solutions & Deployment Services | AWS & DevOps | AiTechPulze",
    metaDescription: "Deploy, secure and scale applications with AiTechPulze cloud solutions. AWS, Docker, CI/CD, Linux servers, SSL, deployment, infrastructure and cloud migration.",
    canonical: "/services/cloud-solutions",
    eyebrow: "CLOUD SOLUTIONS",
    h1: "Infrastructure Built To Scale",
    tagline: "Cloud deployment and infrastructure solutions for secure applications, automated delivery, containers, servers and scalable workloads.",
    description: "We help deploy, configure and modernize application infrastructure using cloud platforms, containers, automation and reliable deployment practices.",
    price: "From ₹8,000",
    slug: "cloud-solutions",
    icon: <SvgIcon><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></SvgIcon>,
    intro: {
      title: "Secure, Scalable Infrastructure",
      content: "Modern applications need solid foundations. We design cloud environments that scale efficiently, maintain high security standards, and leverage automated CI/CD pipelines."
    },
    whatWeBuild: [
      { title: "Cloud Deployment", desc: "Deploy applications to production-ready infrastructure." },
      { title: "Dockerization", desc: "Package applications into portable and reproducible containers." },
      { title: "CI/CD", desc: "Automate build, testing and deployment workflows." },
      { title: "Server Configuration", desc: "Configure servers, databases, domains, SSL and application environments." },
      { title: "Cloud Migration", desc: "Move applications and workloads from traditional infrastructure to modern cloud environments." }
    ],
    capabilities: [
      "AWS deployment", "Docker containers", "Linux servers", "Nginx", "SSL configuration", "Domain configuration", "Database deployment", "CI/CD", "Monitoring", "Backup configuration"
    ],
    useCases: [
      { title: "High-traffic apps", desc: "Auto-scaling infrastructure." },
      { title: "Legacy migration", desc: "Moving on-premise to cloud." },
      { title: "DevOps automation", desc: "Automating manual deployments." }
    ],
    technologies: ["AWS", "Docker", "Linux", "Nginx", "GitHub Actions", "Node.js"],
    process: [
      { phase: "Assess", activity: "Evaluate current infrastructure." },
      { phase: "Architect", activity: "Design the cloud architecture." },
      { phase: "Configure", activity: "Setup servers, network, and security." },
      { phase: "Deploy", activity: "Launch applications and databases." },
      { phase: "Secure", activity: "Implement SSL and firewalls." },
      { phase: "Monitor", activity: "Setup logging and alerting." }
    ],
    deliverables: [
      "Cloud architecture", "Server setup", "Application deployment", "SSL", "CI/CD", "Monitoring", "Documentation"
    ],
    faqs: [
      { q: "Can you migrate our existing app to AWS?", a: "Yes. We manage the entire migration process with minimal downtime." },
      { q: "Do you setup CI/CD?", a: "Yes, we automate deployments via GitHub Actions or similar tools." },
      { q: "Is the infrastructure secure?", a: "We follow best practices including VPCs, IAM roles, and encrypted data." }
    ]
  },
  {
    category: "DATA ANALYTICS",
    title: "Data Analytics",
    seoTitle: "Data Analytics & BI Services | Power BI & Business Insights | AiTechPulze",
    metaDescription: "Transform business data into interactive dashboards and actionable insights with AiTechPulze. Power BI, Excel, SQL and Python analytics solutions.",
    canonical: "/services/data-analytics",
    eyebrow: "DATA ANALYTICS",
    h1: "Make Every Dataset Tell A Story",
    tagline: "Data analytics and business intelligence solutions that transform raw data into dashboards, KPIs and actionable business insights.",
    description: "We transform raw business data into understandable dashboards, meaningful metrics and analytical insights that support better decisions.",
    price: "From ₹2,500",
    slug: "data-analytics",
    icon: <SvgIcon><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></SvgIcon>,
    intro: {
      title: "Insights That Drive Action",
      content: "Data is useless without clarity. We build analytics pipelines and BI dashboards that help you track KPIs and discover business-critical trends."
    },
    whatWeBuild: [
      { title: "Business dashboards", desc: "High-level overview of company metrics." },
      { title: "Sales analytics", desc: "Track revenue, pipeline and performance." },
      { title: "Financial dashboards", desc: "Monitor cash flow, expenses and ROI." },
      { title: "Customer analytics", desc: "Understand behavior and retention." },
      { title: "Operational dashboards", desc: "Track supply chain and efficiency." },
      { title: "Automated reports", desc: "Scheduled insights delivered to you." }
    ],
    capabilities: [
      "Data Cleaning", "Data Modeling", "Dashboard Development", "KPI Tracking", "Business Insights", "ETL Pipelines"
    ],
    useCases: [
      { title: "Sales performance", desc: "Monitor sales team KPIs." },
      { title: "Financial analysis", desc: "Real-time revenue tracking." },
      { title: "Marketing ROI", desc: "Evaluate campaign effectiveness." }
    ],
    technologies: ["Power BI", "Excel", "Python", "SQL", "Pandas", "NumPy"],
    process: [
      { phase: "Collect", activity: "Gather data from various sources." },
      { phase: "Clean", activity: "Standardize and fix inconsistencies." },
      { phase: "Transform", activity: "Structure data for analysis." },
      { phase: "Analyze", activity: "Discover trends and insights." },
      { phase: "Visualize", activity: "Build interactive dashboards." },
      { phase: "Act", activity: "Make data-driven decisions." }
    ],
    deliverables: [
      "Data cleaning", "Data transformation", "Data model", "Interactive dashboard", "KPI system", "Analytical report", "Business insights"
    ],
    faqs: [
      { q: "Can you work with Excel data?", a: "Yes. Excel files can be cleaned, transformed and integrated into analytical workflows and dashboards." },
      { q: "Can you build Power BI dashboards?", a: "Yes. We can design interactive Power BI dashboards around business KPIs and reporting requirements." },
      { q: "Can dashboards use SQL databases?", a: "Yes. SQL databases can be connected to analytics workflows depending on the infrastructure and access requirements." }
    ]
  },
  {
    category: "CUSTOM SOFTWARE",
    title: "Custom Software",
    seoTitle: "Custom Software Development Services | Business Software | AiTechPulze",
    metaDescription: "Build custom business software with AiTechPulze. ERP, CRM, inventory, workflow automation, management systems, dashboards, APIs and tailored enterprise solutions.",
    canonical: "/services/custom-software",
    eyebrow: "CUSTOM SOFTWARE",
    h1: "Software Built Around Your Business",
    tagline: "Custom software development for ERP, CRM, inventory, management systems, automation and business-specific workflows.",
    description: "Generic software does not always match the way a business operates. We design and develop custom software around your workflows, teams, data and operational requirements.",
    price: "From ₹1,500",
    slug: "custom-software",
    icon: <SvgIcon><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z" /></SvgIcon>,
    intro: {
      title: "Solutions As Unique As Your Operations",
      content: "Stop forcing your business processes into generic tools. We build custom ERPs, CRMs, and portals that precisely match your operational needs and scale with your growth."
    },
    whatWeBuild: [
      { title: "ERP systems", desc: "Enterprise resource planning." },
      { title: "CRM platforms", desc: "Customer relationship management." },
      { title: "Inventory management", desc: "Stock tracking and optimization." },
      { title: "Billing systems", desc: "Invoicing and payment automation." },
      { title: "Internal management systems", desc: "Tools for team operations." },
      { title: "Workflow automation", desc: "Digitizing manual processes." }
    ],
    capabilities: [
      "Custom workflows", "User management", "Role-based permissions", "Dashboards", "Reports", "Notifications", "Database systems", "API integrations", "Automation"
    ],
    useCases: [
      { title: "Manufacturing", desc: "Custom ERPs and inventory." },
      { title: "Logistics", desc: "Fleet management and tracking." },
      { title: "Healthcare", desc: "Patient portals and record systems." }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker", "REST APIs"],
    process: [
      { phase: "Understand", activity: "Map the existing workflow and identify requirements." },
      { phase: "Design", activity: "Create the system architecture and UX." },
      { phase: "Build", activity: "Develop the software around approved requirements." },
      { phase: "Integrate", activity: "Connect APIs and external systems." },
      { phase: "Test", activity: "Validate functionality and reliability." },
      { phase: "Deploy", activity: "Launch the system and provide support." }
    ],
    deliverables: [
      "Requirement analysis", "UI/UX", "Frontend", "Backend", "Database", "Admin panel", "Testing", "Deployment"
    ],
    faqs: [
      { q: "Can you build software specifically for our workflow?", a: "Yes. Custom software is designed around your actual business processes rather than forcing your workflow into a generic product." },
      { q: "Can you integrate existing systems?", a: "Yes. APIs and database integrations can be used to connect existing tools and systems." },
      { q: "Can the software be expanded later?", a: "Yes. The architecture can be designed with future modules and integrations in mind." }
    ]
  },
  {
    category: "DIGITAL TRANSFORMATION",
    title: "Digital Transformation",
    seoTitle: "Digital Transformation Services | Business Modernization | AiTechPulze",
    metaDescription: "Modernize business operations with AiTechPulze digital transformation services. Automate workflows, integrate systems, modernize applications and migrate to cloud infrastructure.",
    canonical: "/services/digital-transformation",
    eyebrow: "DIGITAL TRANSFORMATION",
    h1: "Modernize The Way Your Business Works",
    tagline: "Digital transformation services for legacy modernization, workflow automation, system integration, cloud migration and business process improvement.",
    description: "We help businesses move from disconnected legacy systems and manual processes toward connected, automated and scalable digital operations.",
    price: "From ₹4,000",
    slug: "digital-transformation",
    icon: <SvgIcon><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></SvgIcon>,
    intro: {
      title: "Adapt and Thrive",
      content: "Legacy technology slows down growth. We assess your current architecture and implement a phased approach to modernize your software, data, and processes."
    },
    whatWeBuild: [
      { title: "Legacy Modernization", desc: "Upgrade outdated applications and infrastructure." },
      { title: "Process Automation", desc: "Reduce repetitive manual work through software automation." },
      { title: "Cloud Migration", desc: "Move applications to modern cloud infrastructure." },
      { title: "System Integration", desc: "Connect disconnected tools and applications." },
      { title: "Data Modernization", desc: "Create accessible and reliable data workflows." }
    ],
    capabilities: [
      "Legacy system updates", "API creation", "RPA", "Cloud migration", "System integration", "Database modernization"
    ],
    useCases: [
      { title: "Enterprise systems", desc: "Modernizing core banking or insurance tools." },
      { title: "Paperless operations", desc: "Digitizing physical workflows." },
      { title: "Siloed data", desc: "Integrating disparate databases." }
    ],
    technologies: ["Node.js", "Python", "AWS", "Docker", "REST APIs", "Microservices"],
    process: [
      { phase: "Assess", activity: "Understand current technology and challenges." },
      { phase: "Strategize", activity: "Define a practical modernization roadmap." },
      { phase: "Modernize", activity: "Upgrade applications and infrastructure." },
      { phase: "Integrate", activity: "Connect systems, APIs and data." },
      { phase: "Automate", activity: "Replace manual tasks with software." },
      { phase: "Optimize", activity: "Measure performance and improve." }
    ],
    deliverables: [
      "Technology assessment", "Transformation roadmap", "System modernization", "API integrations", "Workflow automation", "Cloud migration", "Deployment support"
    ],
    faqs: [
      { q: "Can you modernize an existing application?", a: "Yes. Existing applications can be assessed and progressively modernized without necessarily rebuilding everything from scratch." },
      { q: "Can you automate manual business processes?", a: "Yes. Repetitive workflows can be analyzed and converted into automated software processes where appropriate." },
      { q: "Can legacy systems be connected to modern applications?", a: "Yes. APIs, data integrations and middleware approaches can be used depending on the existing system architecture." }
    ]
  }
];

export const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma", "REST APIs"],
  },
  {
    category: "AI & Data",
    items: ["Python", "TensorFlow", "PyTorch", "OpenCV", "HuggingFace"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "GitHub Actions", "Nginx"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Android", "iOS"],
  },
];
