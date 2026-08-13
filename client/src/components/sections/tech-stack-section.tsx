"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function TechStackSection() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "REST APIs", category: "Architecture" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Vite", category: "Build Tool" },
    { name: "JWT", category: "Security" },
    { name: "Git", category: "Version Control" },
    { name: "Vercel", category: "Deployment" },
    { name: "Render", category: "Deployment" },
  ];

  return (
    <section id="tech-stack" className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">Engineering Stack</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built With Modern Technology
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Verified technologies implemented across our full-stack software products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-[#111116] hover:border-purple-500/50 hover:bg-[#161522] transition-all duration-300 group cursor-default shadow-sm"
            >
              <div className="h-2 w-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
