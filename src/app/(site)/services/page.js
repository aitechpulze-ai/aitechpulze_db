import { buildMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export const metadata = buildMetadata({
  title: "Services | Intelligent Software Engineering",
  description: "Web & App Development, AI & Automation, SaaS/ERP/CRM, UI/UX Design, Cloud, DevOps & SEO in Coimbatore & Tirupur.",
  path: "/services",
  keywords: [
    "software services Coimbatore",
    "web development company Tirupur",
    "SaaS development Tamil Nadu",
    "ERP CRM development Coimbatore",
    "AI automation services Tirupur",
    "mobile app developers Coimbatore",
    "DevOps consulting Tamil Nadu",
    "SEO services Tirupur"
  ]
});

export default function ServicesPage() {
  return <ServicesClient />;
}
