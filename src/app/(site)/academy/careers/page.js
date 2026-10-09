import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import CareersClient from "@/components/CareersClient";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Open positions at AiTechPulze — internships and full-time roles in React, Python/AI, UI/UX, Full Stack, and AI/ML.",
  path: "/academy/careers",
});

export default function CareersPage() {
  return (
    <div className="bg-[#03040B] min-h-screen">
      <CareersClient whatsapp={site.contact.whatsapp} />
    </div>
  );
}
