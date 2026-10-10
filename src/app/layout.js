import { Inter, Space_Grotesk } from "next/font/google";
import Preloader from "@/components/Preloader";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import ParticleField from "@/components/ParticleField";
import "./globals.css";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#03040b",
};

export const metadata = buildMetadata({
  keywords: [
    // Primary Core Services
    "AI development company Coimbatore",
    "custom software development Tirupur",
    "best web development agency Tamil Nadu",
    "mobile app development company India",
    "machine learning solutions Chennai",
    
    // Specialized Tech Keywords
    "SaaS application development India",
    "chatbot development company Tirupur",
    "React and Nextjs developers Tamil Nadu",
    "ERP and CRM software solutions Coimbatore",
    "cloud migration services India",
    
    // Business Focus (B2B)
    "MSME software automation India",
    "startup MVP development agency Tamil Nadu",
    "enterprise digital transformation Erode",
    "affordable tech partner for startups",
    "business workflow automation Coimbatore",
    
    // E-commerce & Web
    "ecommerce website developers Tirupur",
    "UI UX design agency Tamil Nadu",
    "SEO and digital marketing company Coimbatore",
    
    // Local / Intent-based (Near Me)
    "IT company near me Tirupur",
    "top software company in Coimbatore",
    "best AI startups in Tamil Nadu",
    "freelance web developers Coimbatore",
    "software engineers for hire India",
    
    // Internships & Training (Online & Paid)
    "online internships in Tamil Nadu",
    "paid online internships for engineering students",
    "software development internship Coimbatore",
    "AI and machine learning internships Tirupur",
    "remote IT internships Tamil Nadu",
    "premium tech internships India",
    "React Nextjs online training internship",
    "student project internships Erode"
  ]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden w-full max-w-[100vw]">
        <Preloader />
        <ParticleField />
        <WebVitalsReporter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* Google Analytics - Only loads if NEXT_PUBLIC_GA_ID is set in .env */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script 
              async 
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `
              }}
            />
          </>
        )}

        {children}
      </body>
    </html>
  );
}
