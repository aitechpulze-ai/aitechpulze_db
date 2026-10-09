import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import AcademyClient from "@/components/AcademyClient";
import PageBackground from "@/components/PageBackground";

export const metadata = buildMetadata({
  title: "Academy",
  description:
    "AiTechPulze Academy: internships, academic project support, IEEE and final year project help, and open positions in Coimbatore and Tirupur.",
  path: "/academy",
  keywords: [
    "engineering final year projects Coimbatore",
    "IEEE projects Tirupur",
    "IT internships Coimbatore",
    "computer science academic projects",
    "software training institute Coimbatore",
    "student internships Tirupur",
    "BTech final year projects Tamil Nadu",
    "MCA projects Coimbatore"
  ]
});

export default function AcademyPage() {
  return (
    <div className="min-h-screen relative">
      <PageBackground variant="nodes" />
      <AcademyClient whatsapp={site.contact.whatsapp} />
    </div>
  );
}
