"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts, getAllCategories, sortByDate } from "@/content/blog/index";
import { staggerContainer, staggerItem } from "@/utils/animations";
import DataFlow from "@/components/svg/tech/DataFlow";
import PageBackground from "@/components/PageBackground";

export default function BlogPage() {
  const categories = getAllCategories(blogPosts);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? sortByDate(blogPosts)
    : sortByDate(blogPosts.filter(p => p.category === activeCategory));

  return (
    <>
      <PageBackground variant="matrix" />
      {/* Hero */}
      <section className="relative noise py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DataFlow />
        </div>
        
        <div className="container-width relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog & <span className="text-gradient-flow">Insights</span>
            </h1>
            <p className="text-xl text-[#8b93b0] max-w-2xl mx-auto">
              Practical insights on software development, AI, and growing your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-[#0a0b14] border-y border-white/5 sticky top-0 z-40 backdrop-blur-lg bg-[#0a0b14]/90">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#7B2CBF] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-[#03040B]">
        <div className="container-width max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeCategory}
            className="space-y-8"
          >
            {filteredPosts.map((post, idx) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-[#00F0FF]/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#7B2CBF]/10 text-[#00F0FF] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-white/50">
                    {post.author && post.author.avatar && (
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{post.author.name}</span>
                      </div>
                    )}
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No posts found in this category</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 px-6 py-3 rounded-lg bg-[#7B2CBF] text-white font-medium hover:bg-[#5b3fd6]"
              >
                View All Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
