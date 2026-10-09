import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog - Insights on Tech & Business",
  description: "Practical insights on web development, AI, machine learning, and growing your business from the AiTechPulze team.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return children;
}
