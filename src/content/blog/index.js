export { default as post1 } from "./how-much-does-a-website-cost-in-india";
export { default as post2 } from "./best-ai-projects-for-final-year-students";
export { default as post3 } from "./startup-website-checklist";

import post1 from "./how-much-does-a-website-cost-in-india";
import post2 from "./best-ai-projects-for-final-year-students";
import post3 from "./startup-website-checklist";
import { calculateReadTime } from "./blogHelpers";

// Calculate read time for posts that don't have it
const posts = [post1, post2, post3].map(post => ({
  ...post,
  readTime: post.readTime || calculateReadTime(post.content),
  author: typeof post.author === 'string' ? {
    name: post.author,
    role: "AiTechPulze Team",
    avatar: "/images/favicon.webp",
    bio: "Building software that grows businesses."
  } : post.author
}));

export const blogPosts = posts;

export { 
  getAllCategories,
  getAllTags,
  getRelatedPosts,
  getFeaturedPosts,
  filterByCategory,
  filterByTag,
  sortByDate,
  formatDate
} from "./blogHelpers";

