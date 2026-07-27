"use client";

import React from "react";
import { Code2, Server, Database, Layers, Globe } from "lucide-react";

export function TechStackBanner() {
  const technologies = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "WordPress", icon: Globe },
  ];

  return (
    <div className="py-8 border-b border-white/5 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-4xl mx-auto">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Built Using Modern Technologies:
          </span>
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs font-medium"
              >
                <Icon className="h-3.5 w-3.5 text-purple-400" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
