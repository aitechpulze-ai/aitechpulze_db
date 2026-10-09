import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Quote | Project Estimation",
  description: "Get an instant project estimate for AI, web development, apps, and final year projects in Coimbatore, Tirupur, and across Tamil Nadu.",
  path: "/get-quote",
  keywords: [
    "software development quote Coimbatore",
    "web development cost Tirupur",
    "app development estimate Tamil Nadu",
    "hire AI developers Coimbatore",
    "freelance web developer Tirupur",
    "final year project cost",
    "ecommerce website price Tamil Nadu",
    "startup MVP development cost"
  ]
});

export default function GetQuoteLayout({ children }) {
  return children;
}
