import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({ title: "Refund Policy", path: "/refund-policy" });

export default function RefundPolicyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1>Refund Policy</h1>
        <p className="text-sm text-gray-400">Last updated: January 2025</p>

        <h2>Project Cancellation</h2>
        <ul>
          <li><strong>Before work begins:</strong> Full refund of any advance payment.</li>
          <li><strong>After work has started:</strong> Refund of the unused portion of the advance, minus work completed to date.</li>
          <li><strong>After final delivery:</strong> No refund. Revisions within the agreed scope are included.</li>
        </ul>

        <h2>Internship Programme</h2>
        <p>The internship programme is currently free to join. No payment is collected, so no refund applies.</p>

        <h2>How to Request a Refund</h2>
        <p>Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> with your project details. We will respond within 3 business days.</p>

        <h2>Contact</h2>
        <p>Questions? Call us on <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a> or email {site.contact.email}.</p>
      </div>
    </section>
  );
}
