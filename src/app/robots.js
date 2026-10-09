import { SITE } from "@/lib/seo";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/portal", "/api"] }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
