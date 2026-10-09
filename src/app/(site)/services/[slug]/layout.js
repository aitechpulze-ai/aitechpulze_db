import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) return {};
  
  const keywords = [
    service.title,
    `${service.title} company`,
    `${service.title} services`,
    "India",
    "Tamil Nadu",
    "enterprise solutions"
  ];
  
  return buildMetadata({ 
    title: service.title, 
    description: service.description,
    path: `/services/${slug}`,
    imageType: "service",
    keywords
  });
}

export default function ServiceLayout({ children }) {
  return children;
}
