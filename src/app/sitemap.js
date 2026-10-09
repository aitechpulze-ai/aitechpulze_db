import { SITE } from "@/lib/seo";
import { services } from "@/content/services";
import { work } from "@/content/work";
import { blogPosts } from "@/content/blog/index";

const staticPaths = [
  { path: "", priority: 1.0, changeFreq: "daily" }, // Homepage
  { path: "/services", priority: 0.9, changeFreq: "weekly" },
  { path: "/industries", priority: 0.9, changeFreq: "weekly" },
  { path: "/work", priority: 0.8, changeFreq: "weekly" },
  { path: "/about", priority: 0.8, changeFreq: "monthly" },
  { path: "/pricing", priority: 0.8, changeFreq: "monthly" },
  { path: "/blog", priority: 0.7, changeFreq: "daily" },
  { path: "/contact", priority: 0.7, changeFreq: "yearly" },
  { path: "/get-quote", priority: 0.9, changeFreq: "yearly" }, // High priority CTA page
  { path: "/academy", priority: 0.7, changeFreq: "monthly" },
  { path: "/academy/internships", priority: 0.6, changeFreq: "monthly" },
  { path: "/academy/projects", priority: 0.6, changeFreq: "monthly" },
  { path: "/academy/careers", priority: 0.6, changeFreq: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFreq: "yearly" },
  { path: "/refund-policy", priority: 0.3, changeFreq: "yearly" },
];

export default function sitemap() {
  const statics = staticPaths.map((item) => ({
    url: `${SITE.url}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFreq,
    priority: item.priority,
  }));

  const servicePaths = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8, // Services are high-value pages
  }));

  const workPaths = work.map((w) => ({
    url: `${SITE.url}/work/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7, // Case studies are important for conversions
  }));

  const blogPaths = blogPosts.map((b) => ({
    url: `${SITE.url}/blog/${b.slug}`,
    lastModified: b.updated ? new Date(b.updated) : new Date(b.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...statics, ...servicePaths, ...workPaths, ...blogPaths];
}
