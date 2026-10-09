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

export const metadata = buildMetadata({
  keywords: [
    "AI development company Coimbatore",
    "software development Tirupur",
    "best web development Tamil Nadu",
    "machine learning services Chennai",
    "custom software solutions Coimbatore",
    "mobile app development Tirupur",
    "cloud solutions Tamil Nadu",
    "digital transformation Erode",
    "MSME software company India",
    "enterprise software development Coimbatore",
    "ecommerce website development Tirupur",
    "startup MVP development Tamil Nadu",
    "IoT solutions Coimbatore",
    "IT company near me Tirupur",
    "top software company Coimbatore"
  ]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
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
        {children}
      </body>
    </html>
  );
}
