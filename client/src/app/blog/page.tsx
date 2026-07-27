"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Why We Swapped Web Builders for Next.js 15 Static Generation",
    excerpt: "Visual page builders insert heavy styling packages and redundant scripts. Learn how Next.js SSG drops your loading times to sub-seconds.",
    category: "web-dev",
    date: "July 12, 2026",
    readTime: "5 min read",
    slug: "swapping-builders-for-nextjs",
  },
  {
    title: "The Local Business SEO Audit Checklist for 2026",
    excerpt: "Optimize your Google Business Profile, fix technical indexing errors, and structure JSON-LD local schema for search results dominance.",
    category: "seo",
    date: "July 08, 2026",
    readTime: "7 min read",
    slug: "local-business-seo-checklist",
  },
  {
    title: "Manual vs Automated Software Testing: A Balanced QA Strategy",
    excerpt: "Automated regression tests save developer hours, while manual QA sessions catch edge-case bugs before production release cycles.",
    category: "testing",
    date: "June 28, 2026",
    readTime: "6 min read",
    slug: "manual-vs-automated-testing-strategy",
  },
  {
    title: "Securing MERN Stack Apps: Essential API Validation Rules",
    excerpt: "Verify auth headers, set rate limits, sanitize MongoDB inputs, and implement secure JWT cookie settings for production SaaS platforms.",
    category: "web-dev",
    date: "June 15, 2026",
    readTime: "8 min read",
    slug: "securing-mern-stack-api-rules",
  },
];

const categories = [
  { id: "all", label: "All Topics" },
  { id: "web-dev", label: "Web Engineering" },
  { id: "testing", label: "Quality Assurance" },
  { id: "seo", label: "Search SEO" },
];

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Technical Publication
            </span>
            <h1 className="font-heading mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Engineering Blog & Tech Articles
            </h1>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
              Deep dives into web application performance, search engine algorithms, automated software testing pipelines, and enterprise SaaS architecture.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-12 flex flex-col gap-6 border-b border-purple-900/30 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "primary" : "secondary"}
                  size="sm"
                  className="text-xs font-semibold"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search tech articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-lg border border-purple-500/30 bg-[#111827] pl-9 pr-4 text-xs text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Posts List */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredPosts.map((post, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-purple-900/30 bg-[#111827]/80 p-8 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 text-[10px] text-purple-300 font-semibold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-purple-400" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-purple-400" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading mt-4 text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="font-semibold">Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <Link href={`/blog/${post.slug}`} className="absolute inset-0" aria-label={`Read article: ${post.title}`} />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="mt-20 text-center py-16 rounded-xl border border-purple-900/30 bg-[#111827]/40 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-gray-300">No guides found</p>
              <p className="text-xs text-gray-400 mt-2">
                We couldn&apos;t find any articles matching your search query.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                variant="secondary"
                size="sm"
                className="mt-6"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
