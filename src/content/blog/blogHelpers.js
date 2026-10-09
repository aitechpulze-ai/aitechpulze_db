// Blog helper functions

// Calculate reading time (average 200 words per minute)
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

// Get all unique categories from blog posts
export function getAllCategories(posts) {
  const categories = new Set();
  posts.forEach(post => {
    if (post.category) categories.add(post.category);
  });
  return ["All", ...Array.from(categories)];
}

// Get all unique tags
export function getAllTags(posts) {
  const tags = new Set();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

// Get related posts (same category or tags)
export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  const related = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      let relevanceScore = 0;
      
      // Same category = +3 points
      if (post.category === currentPost.category) {
        relevanceScore += 3;
      }
      
      // Shared tags = +1 point per tag
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      relevanceScore += sharedTags.length;
      
      return { post, relevanceScore };
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit)
    .map(item => item.post);
  
  // If not enough related posts, add recent posts
  if (related.length < limit) {
    const remaining = allPosts
      .filter(post => 
        post.slug !== currentPost.slug && 
        !related.some(r => r.slug === post.slug)
      )
      .slice(0, limit - related.length);
    return [...related, ...remaining];
  }
  
  return related;
}

// Get featured posts
export function getFeaturedPosts(posts) {
  return posts.filter(post => post.featured);
}

// Filter posts by category
export function filterByCategory(posts, category) {
  if (category === "All") return posts;
  return posts.filter(post => post.category === category);
}

// Filter posts by tag
export function filterByTag(posts, tag) {
  return posts.filter(post => post.tags.includes(tag));
}

// Sort posts by date (newest first)
export function sortByDate(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Format date for display
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}
