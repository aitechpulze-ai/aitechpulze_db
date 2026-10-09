import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us - Our Story & Team",
  description: "Founded in 2023 in Tamil Nadu. MSME registered. Meet the 13-member team building AI-powered software for growing businesses in Coimbatore and Tirupur.",
  path: "/about",
  keywords: [
    "about AiTechPulze",
    "software company Tamil Nadu",
    "top IT company Coimbatore",
    "MSME registered software company",
    "best tech startup Tirupur",
    "AI development team Coimbatore",
    "Indian software company",
    "tech startup India",
    "company profile Tirupur",
    "our team Coimbatore"
  ]
});

export default function AboutLayout({ children }) {
  return children;
}
