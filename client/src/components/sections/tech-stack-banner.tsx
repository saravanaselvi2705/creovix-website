"use client";

import React from "react";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

export function TechStackBanner() {
  const technologies = [
    { name: "React 19", category: "Frontend" },
    { name: "Next.js 15", category: "Full-Stack" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "Database" },
    { name: "Firebase", category: "Cloud DB" },
    { name: "AWS", category: "Infrastructure" },
    { name: "Docker", category: "Containers" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "Redis", category: "Caching" },
    { name: "GraphQL", category: "API Spec" },
  ];

  return (
    <section id="tech-stack" className="py-10 border-b border-white/5 bg-[#08080c]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-4">
        <p className="text-[11px] uppercase font-mono tracking-widest text-zinc-400">
          Engineered With Production Technologies
        </p>

        {/* Infinite Scrolling Marquee */}
        <InfiniteMarquee items={technologies} />
      </div>
    </section>
  );
}
