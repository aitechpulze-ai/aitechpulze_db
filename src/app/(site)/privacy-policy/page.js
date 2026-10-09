import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({ title: "Privacy Policy", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: January 2025</p>
        <p>AiTechPulze (&quot;{site.name}&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Contact forms:</strong> name, email, phone, company, project details.</li>
          <li><strong>Internship applications:</strong> name, email, phone, college, domain, resume (PDF).</li>
          <li><strong>Portal accounts:</strong> email, hashed password, attendance and assignment data.</li>
        </ul>

        <h2>How We Use It</h2>
        <ul>
          <li>To respond to enquiries and send quotes.</li>
          <li>To manage internship applications and student/mentor portals.</li>
          <li>To send transactional emails (account credentials, application status).</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>We do not sell or share your data with third parties for marketing. We use Gmail SMTP (Google) for transactional emails.</p>

        <h2>Data Retention</h2>
        <p>Enquiry data is retained for 2 years. Portal data is retained for the duration of the programme plus 1 year. You may request deletion by emailing {site.contact.email}.</p>

        <h2>Security</h2>
        <p>Passwords are hashed and never stored in plain text. Sessions use HTTP-only cookies. File uploads are stored outside the public web root.</p>

        <h2>Contact</h2>
        <p>Questions? Email us at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
      </div>
    </section>
  );
}
