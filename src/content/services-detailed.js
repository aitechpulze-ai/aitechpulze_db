/**
 * Comprehensive Service Definitions for AiTechPulze
 * Each service includes: overview, features, tech stack, use cases, process, FAQ
 */

export const servicesDetailed = {
  "ai-development": {
    category: "INTELLIGENT SYSTEMS",
    title: "AI Development",
    shortDesc: "Production-ready AI solutions — computer vision, NLP, and autonomous agents built for real business outcomes.",
    price: "From INR 3,000",
    slug: "ai-development",
    icon: "🤖",
    
    overview: {
      tagline: "Build Intelligent Systems That Learn and Adapt",
      description: "We develop production-ready AI systems that solve real business problems. From computer vision that automates quality inspection to NLP chatbots that handle customer queries, we build AI that delivers measurable ROI. Our AI solutions are explainable, scalable, and designed for continuous improvement.",
      benefits: [
        "Automate repetitive visual inspection tasks",
        "Process natural language at scale",
        "Personalize user experiences with recommendation engines",
        "Detect anomalies before they become problems",
        "Make data-driven predictions with confidence"
      ]
    },

    whatWeBuild: [
      "Computer Vision Systems - Object detection, facial recognition, OCR, image classification",
      "Natural Language Processing - Chatbots, sentiment analysis, text classification, document understanding",
      "Recommendation Engines - Collaborative filtering, content-based recommendations, hybrid systems",
      "Predictive Models - Demand forecasting, churn prediction, risk assessment",
      "Autonomous Agents - Rule-based systems, reinforcement learning agents",
      "AI-Powered Search - Semantic search, vector databases, intelligent query understanding"
    ],

    techStack: {
      languages: ["Python", "JavaScript", "TypeScript"],
      frameworks: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Hugging Face Transformers"],
      tools: ["OpenCV", "YOLO", "spaCy", "NLTK", "LangChain"],
      deployment: ["Docker", "AWS SageMaker", "FastAPI", "REST APIs"],
      databases: ["Pinecone", "Weaviate", "PostgreSQL", "MongoDB"]
    },

    useCases: [
      {
        industry: "E-Commerce",
        problem: "Low conversion rates, customers can't find products they want",
        solution: "Product recommendation engine using collaborative filtering",
        result: "35% increase in average order value, 20% boost in conversion rate"
      },
      {
        industry: "Manufacturing",
        problem: "Manual quality inspection slow and error-prone",
        solution: "Computer vision system for automated defect detection",
        result: "99.2% accuracy, 10x faster than manual inspection"
      },
      {
        industry: "Customer Service",
        problem: "Support team overwhelmed with repetitive queries",
        solution: "NLP-powered chatbot handling tier-1 support",
        result: "60% of queries resolved automatically, 40% reduction in support costs"
      }
    ],

    process: [
      {
        phase: "Discovery & Data Assessment",
        duration: "1 week",
        activities: [
          "Understand business problem and success metrics",
          "Assess data availability and quality",
          "Define model requirements and constraints",
          "Plan data collection if needed"
        ]
      },
      {
        phase: "Data Preparation & EDA",
        duration: "1-2 weeks",
        activities: [
          "Clean and preprocess raw data",
          "Feature engineering and selection",
          "Exploratory data analysis",
          "Train/validation/test split"
        ]
      },
      {
        phase: "Model Development",
        duration: "2-4 weeks",
        activities: [
          "Baseline model establishment",
          "Algorithm selection and training",
          "Hyperparameter tuning",
          "Cross-validation and evaluation"
        ]
      },
      {
        phase: "Deployment & Integration",
        duration: "1-2 weeks",
        activities: [
          "Model optimization for production",
          "API development (REST/GraphQL)",
          "Integration with existing systems",
          "Monitoring and logging setup"
        ]
      },
      {
        phase: "Monitoring & Improvement",
        duration: "Ongoing",
        activities: [
          "Track model performance metrics",
          "A/B testing for improvements",
          "Retrain with new data",
          "Drift detection and alerts"
        ]
      }
    ],

    pricing: {
      starting: "INR 3,000",
      factors: [
        "Model complexity and accuracy requirements",
        "Data volume and preparation needs",
        "Training compute requirements",
        "Deployment infrastructure",
        "Ongoing monitoring and retraining"
      ],
      typicalRange: "INR 50,000 - 5,00,000 for production systems"
    },

    faq: [
      {
        q: "Do I need labeled data to start an AI project?",
        a: "Not always. We can work with unlabeled data using unsupervised learning, semi-supervised techniques, or help you set up an efficient labeling process. Many projects start with a small labeled dataset and expand over time."
      },
      {
        q: "How accurate will the AI model be?",
        a: "Accuracy depends on data quality, problem complexity, and business requirements. We establish baseline metrics early and iterate to meet your accuracy goals. Most production systems achieve 85-95% accuracy, with critical applications reaching 98%+."
      },
      {
        q: "Can the AI model explain its decisions?",
        a: "Yes. We implement explainable AI (XAI) techniques like SHAP values, attention visualization, and feature importance analysis. This is crucial for regulated industries and building trust."
      },
      {
        q: "What happens if the model's accuracy degrades over time?",
        a: "We set up monitoring to detect model drift. When performance drops, we retrain with fresh data. Most models need retraining every 3-6 months, but this varies by use case."
      },
      {
        q: "Do you provide the trained model or just an API?",
        a: "Both options available. We can deliver the trained model files for self-hosting, provide a managed API, or hybrid approach. You retain full ownership of custom-trained models."
      }
    ],

    relatedServices: ["machine-learning", "data-analytics", "custom-software"],
    relatedProducts: []
  },

  "machine-learning": {
    category: "PREDICTIVE INTELLIGENCE",
    title: "Machine Learning",
    shortDesc: "Custom ML models for prediction, classification, and anomaly detection. From data prep to model deployment.",
    price: "From INR 3,000",
    slug: "machine-learning",
    icon: "🧠",
    
    overview: {
      tagline: "Turn Data Into Predictive Intelligence",
      description: "We build custom machine learning models that predict future outcomes, classify data, detect anomalies, and uncover hidden patterns. From customer churn prediction to demand forecasting, our ML solutions help you make data-driven decisions with confidence. We handle the entire ML lifecycle — data engineering, model training, deployment, and ongoing optimization.",
      benefits: [
        "Predict customer behavior and lifetime value",
        "Forecast demand and optimize inventory",
        "Detect fraud and anomalies in real-time",
        "Classify documents and automate workflows",
        "Optimize pricing and resource allocation"
      ]
    },

    whatWeBuild: [
      "Predictive Models - Churn prediction, demand forecasting, sales prediction, risk scoring",
      "Classification Systems - Document classification, spam detection, sentiment analysis",
      "Regression Models - Price prediction, time series forecasting, resource optimization",
      "Clustering & Segmentation - Customer segmentation, market basket analysis",
      "Anomaly Detection - Fraud detection, system monitoring, quality control",
      "Time Series Analysis - Trend forecasting, seasonality detection, pattern recognition"
    ],

    techStack: {
      languages: ["Python", "R", "SQL"],
      frameworks: ["scikit-learn", "XGBoost", "LightGBM", "Prophet", "statsmodels"],
      tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      deployment: ["MLflow", "Docker", "FastAPI", "Flask", "AWS Lambda"],
      databases: ["PostgreSQL", "InfluxDB", "TimescaleDB"]
    },

    useCases: [
      {
        industry: "SaaS",
        problem: "Unable to identify customers at risk of churning",
        solution: "Churn prediction model using behavioral data",
        result: "Identified 85% of at-risk customers 30 days before churn, 22% retention improvement"
      },
      {
        industry: "Retail",
        problem: "Overstocking and stockouts hurting profitability",
        solution: "Demand forecasting model with seasonality and trend analysis",
        result: "30% reduction in excess inventory, 18% fewer stockouts"
      },
      {
        industry: "Finance",
        problem: "Credit default risk assessment manual and slow",
        solution: "ML credit scoring model with 50+ features",
        result: "40% faster loan approvals, 25% reduction in default rate"
      }
    ],

    process: [
      {
        phase: "Problem Definition",
        duration: "3-5 days",
        activities: [
          "Define business objective and KPIs",
          "Identify prediction target and features",
          "Assess data availability",
          "Set success criteria"
        ]
      },
      {
        phase: "Data Engineering",
        duration: "1-2 weeks",
        activities: [
          "Data collection and integration",
          "Cleaning and handling missing values",
          "Feature engineering and transformation",
          "Data validation and quality checks"
        ]
      },
      {
        phase: "Model Training & Selection",
        duration: "1-3 weeks",
        activities: [
          "Baseline model creation",
          "Algorithm comparison and selection",
          "Hyperparameter optimization",
          "Cross-validation and evaluation"
        ]
      },
      {
        phase: "Production Deployment",
        duration: "1 week",
        activities: [
          "Model serialization and optimization",
          "API development and testing",
          "Integration with data pipelines",
          "Performance monitoring setup"
        ]
      }
    ],

    pricing: {
      starting: "INR 3,000",
      factors: [
        "Dataset size and complexity",
        "Number of features and data sources",
        "Model type and accuracy requirements",
        "Real-time vs batch prediction needs",
        "Deployment infrastructure"
      ],
      typicalRange: "INR 40,000 - 4,00,000 for production models"
    },

    faq: [
      {
        q: "What's the difference between AI and ML?",
        a: "Machine Learning is a subset of AI focused on learning from data to make predictions. AI is broader, including rule-based systems, expert systems, and reasoning. We use ML when you have historical data and want to predict future outcomes."
      },
      {
        q: "How much data do I need for an ML model?",
        a: "It depends on problem complexity. Simple models work with 1,000-10,000 examples. Complex deep learning needs 10,000-1,000,000+. We can assess your data and recommend approaches including data augmentation or transfer learning if data is limited."
      },
      {
        q: "How long does it take to build an ML model?",
        a: "Typical timeline: 4-8 weeks from data assessment to production deployment. Simple models can be ready in 2-3 weeks. Complex models with extensive feature engineering may take 3-4 months."
      },
      {
        q: "Can you improve our existing ML model?",
        a: "Yes. We can audit your current model, identify performance bottlenecks, and improve accuracy through better feature engineering, algorithm selection, or hyperparameter tuning."
      }
    ],

    relatedServices: ["ai-development", "data-analytics", "custom-software"],
    relatedProducts: []
  },

  "web-development": {
    category: "MODERN REACT UI",
    title: "Web Development",
    shortDesc: "Fast, responsive web applications with React. Landing pages, dashboards, portals, and complex web apps.",
    price: "From INR 1,500",
    slug: "web-development",
    icon: "🌐",
    
    overview: {
      tagline: "Build Modern, Fast, Responsive Web Applications",
      description: "We build high-performance web applications using modern React and Next.js. From marketing websites to complex SaaS dashboards, we deliver pixel-perfect, accessible, and SEO-optimized experiences. Our web apps are fast, responsive, and built to scale. We follow best practices for performance, security, and maintainability.",
      benefits: [
        "Lightning-fast page loads with Next.js 16",
        "Pixel-perfect responsive design on all devices",
        "SEO-optimized for search visibility",
        "Accessible (WCAG 2.1 AA compliant)",
        "Scalable architecture that grows with your business"
      ]
    },

    whatWeBuild: [
      "Marketing Websites - Landing pages, corporate sites, portfolios with CMS integration",
      "Web Applications - Admin dashboards, customer portals, internal tools",
      "E-Commerce Platforms - Product catalogs, checkout flows, payment integration",
      "Progressive Web Apps - Offline-capable apps that feel native",
      "SaaS Dashboards - Multi-tenant interfaces, data visualization, user management",
      "API Documentation Sites - Interactive API explorers, code examples"
    ],

    techStack: {
      frontend: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS"],
      stateManagement: ["React Context", "Zustand", "TanStack Query"],
      forms: ["React Hook Form", "Zod validation"],
      animation: ["Framer Motion", "CSS animations"],
      deployment: ["Vercel", "AWS Amplify", "Netlify", "Docker"],
      testing: ["Vitest", "React Testing Library", "Playwright"]
    },

    useCases: [
      {
        industry: "SaaS",
        problem: "Dashboard too slow, users frustrated",
        solution: "React dashboard with code splitting and optimized data fetching",
        result: "Page load time reduced from 4.2s to 0.8s, 35% increase in user engagement"
      },
      {
        industry: "E-Commerce",
        problem: "Low mobile conversion rate",
        solution: "Mobile-first Progressive Web App with offline cart",
        result: "Mobile conversions up 45%, cart abandonment down 28%"
      },
      {
        industry: "B2B",
        problem: "Website not ranking on Google",
        solution: "Next.js SSR site with comprehensive SEO optimization",
        result: "Organic traffic increased 180% in 3 months, ranking for 50+ keywords"
      }
    ],

    process: [
      {
        phase: "Discovery & Planning",
        duration: "3-5 days",
        activities: [
          "Requirements gathering and user stories",
          "Wireframing and information architecture",
          "Technology stack selection",
          "Project timeline and milestones"
        ]
      },
      {
        phase: "Design & Prototyping",
        duration: "1-2 weeks",
        activities: [
          "UI/UX design in Figma",
          "Design system creation",
          "Interactive prototype",
          "Design review and approval"
        ]
      },
      {
        phase: "Development",
        duration: "3-8 weeks",
        activities: [
          "Component development",
          "API integration",
          "Responsive implementation",
          "Animation and interactions"
        ]
      },
      {
        phase: "Testing & Launch",
        duration: "1 week",
        activities: [
          "Cross-browser testing",
          "Performance optimization",
          "Accessibility audit",
          "Deployment and DNS configuration"
        ]
      }
    ],

    pricing: {
      starting: "INR 1,500",
      factors: [
        "Number of pages and complexity",
        "Custom design vs template",
        "CMS integration",
        "Third-party integrations",
        "Animation and interaction complexity"
      ],
      typicalRange: "INR 25,000 (landing page) - 3,00,000 (complex web app)"
    },

    faq: [
      {
        q: "Why Next.js instead of plain React?",
        a: "Next.js gives you SEO (server-side rendering), better performance (automatic code splitting), and easier deployment. For marketing sites and web apps, Next.js is the modern standard. Plain React (CRA) is being phased out."
      },
      {
        q: "Will my website work on mobile?",
        a: "Yes. All our websites are mobile-first and fully responsive. We test on iPhone, Android, tablets, and desktop. Responsive design is included by default, not an add-on."
      },
      {
        q: "Can I update content myself without code?",
        a: "Yes. We can integrate headless CMS like Sanity, Contentful, or WordPress. You edit content in a visual editor, changes appear instantly on your site."
      },
      {
        q: "How fast will my website load?",
        a: "We target 90+ Google Lighthouse scores. Typical load times: landing pages <1s, complex web apps <2s. We use code splitting, image optimization, and caching for speed."
      },
      {
        q: "Do you provide hosting?",
        a: "We deploy to Vercel, Netlify, or AWS. Hosting costs are separate (typically $0-50/month for small sites). We can manage hosting or hand it over to you."
      }
    ],

    relatedServices: ["mobile-app-development", "saas-development", "ui-ux-design"],
    relatedProducts: ["pkroutex", "iprintzone", "adhvaya"]
  },

  // Additional services truncated for length - will continue in next response
  // This demonstrates the structure for comprehensive service content
};

// Export the full services array with basic info for listings
export const services = [
  {
    category: "INTELLIGENT SYSTEMS",
    title: "AI Development",
    shortDesc: "Production-ready AI solutions — computer vision, NLP, and autonomous agents built for real business outcomes.",
    price: "From INR 3,000",
    slug: "ai-development",
    icon: "🤖"
  },
  {
    category: "PREDICTIVE INTELLIGENCE",
    title: "Machine Learning",
    shortDesc: "Custom ML models for prediction, classification, and anomaly detection. From data prep to model deployment.",
    price: "From INR 3,000",
    slug: "machine-learning",
    icon: "🧠"
  },
  {
    category: "MODERN REACT UI",
    title: "Web Development",
    shortDesc: "Fast, responsive web applications with React. Landing pages, dashboards, portals, and complex web apps.",
    price: "From INR 1,500",
    slug: "web-development",
    icon: "🌐"
  },
  {
    category: "CROSS-PLATFORM APPS",
    title: "Mobile App Development",
    shortDesc: "Native-quality mobile apps for iOS and Android with seamless backend integration.",
    price: "From INR 5,000",
    slug: "mobile-app-development",
    icon: "📱"
  },
  {
    category: "SCALABLE PRODUCTS",
    title: "SaaS Development",
    shortDesc: "End-to-end SaaS product development — multi-tenant architecture, subscriptions, and cloud-ready deployment.",
    price: "From INR 8,000",
    slug: "saas-development",
    icon: "☁️"
  },
  {
    category: "AWS & CLOUD INFRA",
    title: "Cloud Solutions",
    shortDesc: "Deploy, scale and secure your applications. CI/CD pipelines, Docker containers, and cloud orchestration.",
    price: "From INR 2,500",
    slug: "cloud-solutions",
    icon: "🚀"
  },
  {
    category: "INSIGHT-DRIVEN VIEWS",
    title: "Data Analytics",
    shortDesc: "Interactive dashboards and analytics platforms. Turn raw data into actionable business insights.",
    price: "From INR 1,500",
    slug: "data-analytics",
    icon: "📊"
  },
  {
    category: "TAILORED SOLUTIONS",
    title: "Custom Software",
    shortDesc: "Bespoke software for your workflow — ERP systems, inventory management, CRM, and automation tools.",
    price: "From INR 4,000",
    slug: "custom-software",
    icon: "⚙️"
  },
  {
    category: "BUSINESS MODERNIZATION",
    title: "Digital Transformation",
    shortDesc: "Migrate legacy systems, automate processes, and integrate modern tech stacks to accelerate growth.",
    price: "From INR 5,000",
    slug: "digital-transformation",
    icon: "🔄"
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
