import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({ title: "Terms of Service", path: "/terms" });

export default function TermsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1>Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: January 2025</p>
        <p>By using AiTechPulze services or this website, you agree to these terms.</p>

        <h2>Services</h2>
        <p>AiTechPulze provides software development, AI/ML, design, cloud, and internship programme services. Specific deliverables and timelines are agreed in individual project contracts.</p>

        <h2>Payments</h2>
        <p>Project pricing is provided via formal quote. Payment terms are specified in the project agreement. See our <a href="/refund-policy">Refund Policy</a> for cancellation terms.</p>

        <h2>Intellectual Property</h2>
        <p>On full payment, the client receives ownership of the final deliverables. AiTechPulze retains ownership of proprietary tools, frameworks, and methodologies used in delivery.</p>

        <h2>Limitation of Liability</h2>
        <p>AiTechPulze is not liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid for the specific service.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of Tamil Nadu, India.</p>

        <h2>Contact</h2>
        <p>Questions? Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
      </div>
    </section>
  );
}
