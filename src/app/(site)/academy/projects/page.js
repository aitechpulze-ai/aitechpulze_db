import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import AcademicHubClient from "@/components/AcademicHubClient";
import { work } from "@/content/work";

export const metadata = buildMetadata({
  title: "Academic Hub",
  description:
    "IEEE projects, final year projects, research support, and innovation projects. Get WhatsApp project mentorship from AiTechPulze.",
  path: "/academy/projects",
});

const EXCLUDE = ["pkroutex", "iprintzone", "adhvaya-jewellery"];

export default function AcademicHubPage() {
  const academicProjects = work.filter((p) => !EXCLUDE.includes(p.slug));
  return (
    <div className="bg-[#03040B] min-h-screen">
      <AcademicHubClient projects={academicProjects} whatsapp={site.contact.whatsapp} />
    </div>
  );
}
