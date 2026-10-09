import InternshipForm from "@/components/forms/InternshipForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import InternshipsHero from "@/components/forms/InternshipsHero";

export const metadata = buildMetadata({
  title: "Internships",
  description:
    "Apply for a 15 or 30-day internship at AiTechPulze. Web development, AI/ML, UI/UX, and more in Coimbatore and Tirupur.",
  path: "/academy/internships",
  keywords: [
    "web development internship Coimbatore",
    "AI ML internship Tirupur",
    "UI UX design internship Tamil Nadu",
    "paid IT internship Coimbatore",
    "software engineering internship Tirupur",
    "summer internship for BTech students Coimbatore",
    "online IT internship Tamil Nadu"
  ]
});

export default function InternshipsPage() {
  return (
    <div className="bg-[#03040B] min-h-screen">
      <InternshipsHero whatsapp={site.contact.whatsapp} />
    </div>
  );
}
