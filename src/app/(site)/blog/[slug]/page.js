"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts, getRelatedPosts, formatDate } from "@/content/blog/index";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function BlogPostPage({ params }) {
  const resolvedParams = params instanceof Promise ? null : params;
  if (!resolvedParams) return null;
  
  const { slug } = resolvedParams;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post, blogPosts);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#03040B] noise py-20 px-4">
        <div className="container-width max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#00F0FF] hover:underline mb-6">
              <span aria-hidden="true">←</span>
              All Posts
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#7B2CBF]/20 text-[#00F0FF] rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-white/60">
              {post.author && post.author.avatar && (
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">{post.author.name}</div>
                    <div className="text-xs">{post.author.role}</div>
                  </div>
                </div>
              )}
              <span>•</span>
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 bg-[#0a0b14]">
        <article className="container-width max-w-4xl prose prose-lg prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-[#00F0FF] prose-strong:text-white prose-ul:text-white/80">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="text-3xl font-bold text-white mt-12 mb-4">{line.slice(3)}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i} className="text-2xl font-bold text-white mt-8 mb-3">{line.slice(4)}</h3>;
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return <p key={i} className="font-bold text-white mt-6">{line.slice(2, -2)}</p>;
            }
            if (line.startsWith("- ")) {
              return <li key={i} className="text-white/80 ml-4">{line.slice(2)}</li>;
            }
            if (line.trim() === "") return <br key={i} />;
            
            // Handle markdown links [text](/url)
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            if (linkRegex.test(line)) {
              const parts = line.split(linkRegex);
              return (
                <p key={i} className="text-white/80 leading-relaxed my-4">
                  {parts.map((part, idx) => {
                    if (idx % 3 === 1) {
                      return <Link key={idx} href={parts[idx + 1]} className="text-[#00F0FF] hover:underline">{part}</Link>;
                    }
                    if (idx % 3 === 2) return null;
                    return part;
                  })}
                </p>
              );
            }
            
            return <p key={i} className="text-white/80 leading-relaxed my-4">{line}</p>;
          })}
        </article>
      </section>

      {/* Author Bio */}
      {post.author && post.author.bio && (
        <section className="py-12 px-4 bg-[#03040B]">
          <div className="container-width max-w-4xl">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">About {post.author.name}</h3>
                  <p className="text-sm text-[#00F0FF] mb-3">{post.author.role}</p>
                  <p className="text-white/70">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-[#0a0b14]">
          <div className="container-width">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={staggerItem}
                className="text-3xl font-bold text-white mb-12 text-center"
              >
                Related Articles
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <motion.div key={relatedPost.slug} variants={staggerItem}>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="block group h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-[#00F0FF]/30 transition-all duration-300"
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-[#7B2CBF]/10 text-[#00F0FF] rounded-full px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-4 text-xs text-white/40">
                        {relatedPost.readTime} min read
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#03040B] to-[#0a0b14]">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Project?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality with cutting-edge technology
            </p>
            <Link
              href="/get-quote"
              className="inline-block px-10 py-5 rounded-lg bg-[#7B2CBF] text-white text-lg font-semibold hover:bg-[#5b3fd6] transition-all hover:scale-105"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
