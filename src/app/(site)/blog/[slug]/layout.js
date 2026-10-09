import { blogPosts } from "@/content/blog/index";
import { buildMetadata, SITE } from "@/lib/seo";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  
  const keywords = [
    ...post.tags,
    post.category,
    "AI development",
    "software engineering",
    "tech insights"
  ];
  
  return buildMetadata({ 
    title: post.title, 
    description: post.excerpt, 
    path: `/blog/${slug}`,
    imageType: "blog",
    keywords
  });
}

export default function BlogPostLayout({ children }) {
  return children;
}
