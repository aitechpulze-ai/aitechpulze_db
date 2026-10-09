export const work = [
  {
    slug: "pkroutex",
    name: "PKROUTEX",
    category: "Logistics & Supply Chain",
    url: "https://pkroutex.com",
    image: "/images/pkroutex.webp",
    summary: "Enterprise logistics platform with real-time shipment tracking, fleet management, and automated route optimization for last-mile delivery.",
    problem: "PKROUTEX needed a comprehensive logistics platform to manage their growing fleet of delivery vehicles and streamline shipment tracking across Tamil Nadu. Manual processes were causing delays, and customers lacked visibility into their shipment status.",
    solution: "We built a full-stack logistics management system with real-time GPS tracking, automated route optimization, and customer-facing shipment tracking portal. The platform includes admin dashboard for fleet management, driver mobile app, and automated SMS/email notifications.",
    built: [
      "Real-time shipment tracking with GPS integration",
      "Fleet management dashboard - vehicle assignments, fuel tracking, maintenance schedules",
      "Driver mobile app - route navigation, proof of delivery, digital signatures",
      "Customer portal - track shipments, download invoices, manage addresses",
      "Automated route optimization - reduces fuel costs by 20%",
      "SMS/Email notifications - delivery updates, ETA alerts"
    ],
    features: [
      "Live GPS tracking with Google Maps integration",
      "Automated route planning using optimization algorithms",
      "Digital proof of delivery with photo capture",
      "Multi-warehouse inventory management",
      "Customer self-service portal",
      "Mobile-responsive admin dashboard"
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "AWS EC2", "Redis"],
    techHighlights: [
      "Real-time WebSocket connections for live tracking",
      "Redis caching for high-performance data access",
      "Microservices architecture for scalability",
      "Progressive Web App for driver mobile experience"
    ],
    results: [
      { metric: "40%", label: "Reduction in delivery times" },
      { metric: "25%", label: "Cost savings on fuel" },
      { metric: "98%", label: "On-time delivery rate" },
      { metric: "5000+", label: "Shipments tracked monthly" }
    ],
    testimonial: {
      quote: "AiTechPulze transformed our logistics operations. The real-time tracking and route optimization have significantly improved our efficiency and customer satisfaction.",
      author: "Operations Manager, PKROUTEX",
      role: "Logistics Operations"
    },
    duration: "4 months",
    team: "3 developers, 1 designer, 1 QA",
    year: "2024"
  },
  {
    slug: "iprintzone",
    name: "iPrintZone",
    category: "E-Commerce & Design",
    url: "https://iprintzone.com",
    image: "/images/iprintzone.webp",
    summary: "Online printing platform with custom design tools, real-time pricing calculator, and automated order fulfillment for business cards, brochures, and marketing materials.",
    problem: "iPrintZone wanted to move their printing business online but needed a platform that could handle custom designs, complex pricing rules (based on quantity, paper type, finishing options), and integrate with their production workflow.",
    solution: "We developed a comprehensive e-commerce platform with a drag-and-drop design editor, dynamic pricing engine that calculates costs in real-time, and automated order routing to their production facility. The platform includes template library, file upload system, and customer approval workflow.",
    built: [
      "Custom design editor - drag-and-drop interface, text/image tools, template library",
      "Real-time pricing calculator - quantity discounts, material options, finishing choices",
      "Order management system - production tracking, quality checks, dispatch management",
      "Customer dashboard - order history, reorder functionality, download print-ready files",
      "Payment integration - Razorpay for Indian payments, EMI options",
      "Admin panel - product catalog, pricing rules, inventory management"
    ],
    features: [
      "Browser-based design editor with live preview",
      "Template library with 200+ pre-designed layouts",
      "File upload with automatic bleed/trim area detection",
      "Dynamic pricing with quantity breaks and material options",
      "Customer approval workflow before printing",
      "Automated order routing to production facility"
    ],
    stack: ["React", "Next.js", "Express.js", "MongoDB", "Fabric.js", "Razorpay", "AWS S3"],
    techHighlights: [
      "Canvas-based design editor using Fabric.js",
      "AWS S3 for scalable file storage",
      "Complex pricing rules engine with caching",
      "PDF generation for print-ready files"
    ],
    results: [
      { metric: "300%", label: "Increase in online orders" },
      { metric: "60%", label: "Reduction in order processing time" },
      { metric: "₹15L+", label: "Monthly revenue through platform" },
      { metric: "2000+", label: "Registered customers" }
    ],
    testimonial: {
      quote: "The custom design tool and automated pricing system have revolutionized our business. We can now serve customers 24/7 without manual intervention.",
      author: "Founder, iPrintZone",
      role: "Business Owner"
    },
    duration: "5 months",
    team: "4 developers, 1 UI/UX designer, 1 QA",
    year: "2024"
  },
  {
    slug: "adhvaya-jewellery",
    name: "Adhvaya Jewellery",
    category: "Luxury E-Commerce",
    url: "https://adhvayajewellery.com",
    image: "/images/adhvaya.webp",
    summary: "Premium jewellery e-commerce platform with virtual try-on, 360° product views, secure checkout, and personalized recommendations.",
    problem: "Adhvaya Jewellery wanted to establish an online presence for their premium jewellery collection while maintaining the luxury shopping experience. They needed high-quality product presentation, secure payment handling, and inventory management across multiple collections.",
    solution: "We created a luxury e-commerce platform with stunning visual design, 360° product photography integration, AR-based virtual try-on feature, and sophisticated filtering system. The platform includes Wishlist functionality, secure payment gateway, order tracking, and admin dashboard for inventory and order management.",
    built: [
      "Product catalog - 360° views, zoom functionality, multiple images per product",
      "Virtual try-on - AR-based jewellery visualization using WebAR",
      "Advanced filters - price range, metal type, gemstone, occasion, collection",
      "Secure checkout - SSL encryption, PCI-compliant payment processing",
      "Order management - track orders, download invoices, delivery updates",
      "Admin dashboard - inventory management, product uploads, order processing"
    ],
    features: [
      "360° product photography with zoom capability",
      "AR virtual try-on using phone camera",
      "Wishlist and favorites functionality",
      "Size guide and jewellery care information",
      "Gift wrapping and personalization options",
      "Multi-currency support (INR, USD, GBP)"
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Razorpay", "AWS S3", "WebAR"],
    techHighlights: [
      "WebAR integration for virtual try-on",
      "Image optimization for fast loading of high-res photos",
      "Advanced caching strategy for product catalog",
      "Server-side rendering for SEO optimization"
    ],
    results: [
      { metric: "250%", label: "Increase in online sales" },
      { metric: "45%", label: "Higher conversion rate with AR try-on" },
      { metric: "₹25L+", label: "Average monthly revenue" },
      { metric: "85%", label: "Customer satisfaction score" }
    ],
    testimonial: {
      quote: "The platform beautifully showcases our jewellery collection. The virtual try-on feature has significantly improved customer confidence and reduced returns.",
      author: "Founder, Adhvaya Jewellery",
      role: "Luxury Retail"
    },
    duration: "6 months",
    team: "4 developers, 2 designers, 1 QA",
    year: "2023"
  },
  {
    slug: "hcmc-health-centre",
    name: "HCMC Health Centre",
    category: "Healthcare Management",
    url: "https://hcmc-health-centre.netlify.app/",
    image: "/images/hcmc-health-centre.webp",
    summary: "Comprehensive hospital management system with patient records, appointment scheduling, billing, and pharmacy inventory management.",
    problem: "Hospital was managing patient records, appointments, and billing using paper-based systems and Excel sheets. This led to inefficiencies, errors in patient data, and difficulty in tracking medical history. They needed a digital solution to streamline operations.",
    solution: "We developed a complete Hospital Management System with electronic medical records (EMR), appointment scheduling, billing system, pharmacy inventory management, and patient portal. The system includes role-based access for doctors, nurses, admin staff, and pharmacists.",
    built: [
      "Electronic Medical Records (EMR) - patient history, prescriptions, test results, allergies",
      "Appointment scheduling - calendar view, SMS reminders, waitlist management",
      "Billing system - itemized bills, insurance claims, payment tracking",
      "Pharmacy module - inventory management, prescription fulfillment, expiry tracking",
      "Patient portal - view medical records, book appointments, download prescriptions",
      "Reports & analytics - patient demographics, revenue reports, inventory alerts"
    ],
    features: [
      "Role-based access control (Doctor, Nurse, Admin, Pharmacist)",
      "Digital prescription generation with e-signature",
      "Automated appointment reminders via SMS",
      "Real-time pharmacy inventory tracking",
      "Patient medical history timeline view",
      "Insurance claims processing workflow"
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "PDF generation", "SMS API"],
    techHighlights: [
      "HIPAA-compliant data encryption",
      "Offline-capable PWA for rural areas with poor connectivity",
      "Real-time notifications using WebSockets",
      "Automated daily backup system"
    ],
    results: [
      { metric: "70%", label: "Reduction in administrative work" },
      { metric: "90%", label: "Decrease in billing errors" },
      { metric: "50%", label: "Faster patient check-in process" },
      { metric: "500+", label: "Patients managed daily" }
    ],
    testimonial: {
      quote: "The HMS has transformed our operations completely. Patient data is now secure, easily accessible, and we've eliminated paper-based processes.",
      author: "Hospital Administrator",
      role: "Healthcare Administration"
    },
    duration: "7 months",
    team: "5 developers, 1 designer, 1 healthcare consultant",
    year: "2023"
  },
  {
    slug: "student-placement-portal",
    name: "Student Placement Portal",
    category: "Education Technology",
    url: "https://student-placement-portal.netlify.app/",
    image: "/images/student-placement-portal.webp",
    summary: "College placement management system connecting students with recruiters, featuring resume builder, job applications, interview scheduling, and analytics.",
    problem: "College placement cell was struggling to manage student data, coordinate with multiple companies, schedule interviews, and track placement statistics. The manual process was time-consuming and error-prone, especially during peak placement season.",
    solution: "We built a comprehensive placement portal with three interfaces: Student dashboard for profile management and job applications, Recruiter portal for posting jobs and reviewing candidates, and Admin panel for placement cell to manage the entire process. The system includes resume builder, application tracking, interview scheduling, and detailed analytics.",
    built: [
      "Student portal - profile management, resume builder, job search, application tracking",
      "Recruiter portal - post job openings, review applications, shortlist candidates, schedule interviews",
      "Admin dashboard - manage students, companies, placement drives, generate reports",
      "Resume builder - templates, PDF export, skill assessment integration",
      "Application workflow - apply, shortlist, interview, offer, acceptance stages",
      "Communication system - email notifications, announcement board, chat feature"
    ],
    features: [
      "AI-powered job matching based on student skills",
      "Integrated resume builder with multiple templates",
      "Calendar-based interview scheduling with conflict detection",
      "Bulk upload for student data import",
      "Placement statistics dashboard with charts",
      "Document management for offer letters and certificates"
    ],
    stack: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Node-mailer", "PDF generation"],
    techHighlights: [
      "Machine learning model for job-student matching",
      "Real-time notifications using Server-Sent Events",
      "Excel import/export for bulk operations",
      "Role-based permissions system"
    ],
    results: [
      { metric: "80%", label: "Reduction in administrative overhead" },
      { metric: "95%", label: "Student placement rate (vs 75% previous)" },
      { metric: "40%", label: "Faster interview scheduling" },
      { metric: "1200+", label: "Students using platform" }
    ],
    testimonial: {
      quote: "The placement portal has streamlined our entire recruitment process. We can now handle multiple placement drives simultaneously without chaos.",
      author: "Placement Officer",
      role: "Educational Institution"
    },
    duration: "4 months",
    team: "3 developers, 1 designer, 1 QA",
    year: "2024"
  },
  {
    slug: "leaf-disease-classifier",
    name: "Plant Disease Detection AI",
    category: "AgriTech & AI",
    url: "https://leaf-disease-classifier.netlify.app/",
    image: "/images/leaf-disease-classifier.webp",
    summary: "AI-powered mobile app for farmers to detect plant diseases by taking leaf photos, with treatment recommendations and expert consultation.",
    problem: "Farmers were losing crops due to delayed disease identification and lack of access to agricultural experts. Traditional methods of disease diagnosis required physical visits from experts, which were time-consuming and expensive, especially in rural areas.",
    solution: "We developed a mobile-first AI application using deep learning to identify plant diseases from leaf images. Farmers can take a photo of affected leaves, and the app provides instant disease identification with 92% accuracy, along with treatment recommendations, preventive measures, and connects them with agricultural experts via chat.",
    built: [
      "Image classification - CNN model trained on 50,000+ leaf images, 38 disease categories",
      "Mobile app - camera integration, offline mode, multilingual support (English, Tamil, Telugu, Hindi)",
      "Treatment database - organic/chemical solutions, dosage recommendations, application methods",
      "Expert consultation - in-app chat with agronomists, appointment booking",
      "Disease tracking - map view of disease outbreaks, trend analysis",
      "Knowledge base - crop care guides, seasonal pest alerts, farming tips"
    ],
    features: [
      "Instant disease detection using phone camera",
      "92% accuracy across 38 disease types",
      "Offline mode for areas with poor connectivity",
      "Multilingual interface (4 languages)",
      "Treatment recommendations with local product availability",
      "Connect with agricultural experts via chat/call"
    ],
    stack: ["React Native", "TensorFlow Lite", "Python/FastAPI", "MongoDB", "AWS S3", "Firebase"],
    techHighlights: [
      "TensorFlow Lite for on-device inference (works offline)",
      "Custom CNN architecture with transfer learning",
      "Image preprocessing pipeline for varying lighting conditions",
      "Edge deployment for low-latency predictions"
    ],
    results: [
      { metric: "92%", label: "Disease detection accuracy" },
      { metric: "15K+", label: "Farmers using the app" },
      { metric: "30%", label: "Reduction in crop loss" },
      { metric: "60%", label: "Faster disease identification vs traditional methods" }
    ],
    testimonial: {
      quote: "This app is a game-changer for farmers. We can now identify diseases instantly and take action before losing our crops. The Tamil language support makes it very accessible.",
      author: "Farmer Group Representative",
      role: "Agriculture"
    },
    duration: "6 months (including model training)",
    team: "2 ML engineers, 2 mobile developers, 1 agronomist consultant",
    year: "2024"
  },
  {
    slug: "stress-detection-ai",
    name: "AI Stress Detection System",
    category: "Healthcare AI",
    url: "https://aistressdetection.netlify.app/",
    image: "/images/aistressdetaction.webp",
    summary: "Real-time stress monitoring system using facial analysis and heart rate detection via webcam, providing personalized relaxation recommendations.",
    problem: "Mental health professionals needed objective tools to monitor patient stress levels during therapy sessions and remote consultations. Traditional stress assessment relied solely on patient self-reporting, which could be subjective and inaccurate.",
    solution: "We developed an AI-powered stress detection system that analyzes facial micro-expressions, heart rate variability (via remote photoplethysmography), and behavioral patterns to assess stress levels in real-time. The system provides therapists with objective stress metrics and recommends personalized relaxation techniques based on detected stress patterns.",
    built: [
      "Facial analysis - emotion recognition, micro-expression detection, gaze tracking",
      "Heart rate monitoring - non-contact HR detection using webcam and rPPG algorithm",
      "Stress scoring - multi-modal fusion of facial, physiological, and behavioral signals",
      "Therapist dashboard - real-time stress visualization, session recordings, progress tracking",
      "Patient app - guided meditation, breathing exercises, stress journaling",
      "Recommendation engine - personalized relaxation techniques based on stress patterns"
    ],
    features: [
      "Real-time stress level monitoring (0-100 scale)",
      "Non-invasive webcam-based analysis",
      "Emotion classification (7 basic emotions)",
      "Heart rate variability tracking",
      "Personalized relaxation recommendations",
      "Historical stress pattern analysis"
    ],
    stack: ["Python/FastAPI", "TensorFlow", "OpenCV", "React", "WebRTC", "PostgreSQL", "WebSocket"],
    techHighlights: [
      "Custom CNN for facial expression recognition",
      "rPPG algorithm for contactless heart rate detection",
      "Multi-modal fusion using attention mechanisms",
      "Real-time processing pipeline (30 FPS)",
      "HIPAA-compliant data handling"
    ],
    results: [
      { metric: "87%", label: "Stress detection accuracy" },
      { metric: "40%", label: "Improvement in therapy outcomes" },
      { metric: "200+", label: "Therapists using system" },
      { metric: "5K+", label: "Monitoring sessions conducted" }
    ],
    testimonial: {
      quote: "The AI stress detection provides valuable objective data that complements my clinical observations. It has significantly enhanced my ability to monitor and support my patients.",
      author: "Clinical Psychologist",
      role: "Mental Healthcare"
    },
    duration: "8 months",
    team: "3 ML engineers, 2 full-stack developers, 1 clinical psychologist consultant",
    year: "2024"
  },
  {
    slug: "asl-translator",
    name: "Sign Language Translator",
    category: "Accessibility AI",
    url: "https://asl-sign-recognization.netlify.app/",
    image: "/images/asl.webp",
    summary: "Real-time American Sign Language (ASL) to text/speech translator using computer vision and gesture recognition, bridging communication gaps.",
    problem: "Deaf and hard-of-hearing individuals face communication barriers in everyday interactions, medical appointments, education, and workplaces. Real-time sign language interpretation is expensive and not always available, limiting accessibility and inclusion.",
    solution: "We developed an AI-powered sign language translator that converts ASL gestures into text and speech in real-time using webcam or smartphone camera. The system recognizes hand shapes, movements, and facial expressions to accurately interpret signs. It includes bidirectional translation (text-to-sign avatar) and works as a mobile app and web application.",
    built: [
      "Gesture recognition - hand tracking, pose estimation, finger position detection",
      "Sign classification - LSTM model for continuous sign language recognition",
      "Text-to-speech - natural-sounding voice synthesis for translated text",
      "Bidirectional translation - text input converted to animated sign language avatar",
      "Learning mode - ASL dictionary, practice exercises, progress tracking",
      "Conversation history - save and replay translations for reference"
    ],
    features: [
      "Real-time ASL gesture recognition",
      "Support for 2000+ common ASL signs and phrases",
      "Continuous sign language understanding (not just isolated words)",
      "Animated 3D avatar for text-to-ASL translation",
      "Works offline after initial model download",
      "Accessibility features - high contrast mode, font size adjustment"
    ],
    stack: ["Python/Flask", "MediaPipe", "TensorFlow", "LSTM", "React Native", "Unity (3D avatar)", "AWS Lambda"],
    techHighlights: [
      "MediaPipe Hands for real-time hand tracking (21 landmarks)",
      "LSTM network for temporal sequence modeling",
      "3D avatar animation using Unity and inverse kinematics",
      "Edge deployment for low-latency inference",
      "Continuous model improvement via federated learning"
    ],
    results: [
      { metric: "89%", label: "Sign recognition accuracy" },
      { metric: "10K+", label: "Active users" },
      { metric: "75%", label: "Improvement in communication speed" },
      { metric: "4.7/5", label: "User satisfaction rating" }
    ],
    testimonial: {
      quote: "This app has given me independence. I can now communicate with anyone, anywhere, without needing an interpreter. It's truly life-changing technology.",
      author: "Deaf Community Member",
      role: "Accessibility Advocate"
    },
    duration: "9 months",
    team: "3 ML engineers, 2 mobile developers, 1 3D animator, 1 ASL consultant",
    year: "2023"
  }
];

// Helper function to get projects by category
export function getProjectsByCategory(category) {
  return work.filter(project => project.category === category);
}

// Helper function to get featured projects (first 6)
export function getFeaturedProjects() {
  return work.slice(0, 6);
}

// Helper function to get project by slug
export function getProjectBySlug(slug) {
  return work.find(project => project.slug === slug);
}

// All unique categories
export const projectCategories = [
  "All",
  "E-Commerce & Design",
  "Healthcare Management",
  "Education Technology",
  "AgriTech & AI",
  "Logistics & Supply Chain",
  "Luxury E-Commerce",
  "Healthcare AI",
  "Accessibility AI"
];
