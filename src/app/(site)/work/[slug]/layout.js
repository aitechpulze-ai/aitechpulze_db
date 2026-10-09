import { work, getProjectBySlug } from "@/content/work";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return work.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  
  const keywords = [
    project.name,
    project.category,
    `${project.category} case study`,
    ...(project.tags || []),
    "portfolio",
    "client success story",
    "software development"
  ];
  
  return buildMetadata({ 
    title: `${project.name} - Case Study`, 
    description: project.summary,
    path: `/work/${slug}`,
    imageType: "work",
    keywords
  });
}

export default function ProjectLayout({ children }) {
  return children;
}
