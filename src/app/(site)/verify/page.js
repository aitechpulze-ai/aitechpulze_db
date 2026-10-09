import { buildMetadata } from "@/lib/seo";
import VerifyClient from "@/components/forms/VerifyClient";
import PageBackground from "@/components/PageBackground";

export const metadata = buildMetadata({
  title: "Verify Certificate",
  description:
    "Verify an AiTechPulze internship completion certificate by entering the certificate ID.",
  path: "/verify",
});

export default function VerifyPage() {
  return (
    <div className="min-h-screen relative">
      <PageBackground variant="nodes" />
      <VerifyClient />
    </div>
  );
}
