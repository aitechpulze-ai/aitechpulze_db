import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Transform | AI Solutions Across 8+ Sectors",
  description: "Deep domain expertise in Logistics, Healthcare, E-Commerce, Education, Finance, Manufacturing, Printing, and Agriculture. AI-powered solutions that solve industry-specific challenges with measurable business outcomes.",
  path: "/industries",
  keywords: [
    "industry solutions",
    "healthcare software",
    "logistics software",
    "ecommerce solutions",
    "education technology",
    "fintech development",
    "manufacturing software",
    "agriculture technology",
    "industry-specific AI",
    "vertical software solutions"
  ]
});

export default function IndustriesLayout({ children }) {
  return children;
}
