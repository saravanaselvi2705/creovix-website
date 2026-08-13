"use client";

import React from "react";
import { CheckCircle2, Code2, Layers, Cpu } from "lucide-react";

export function ProjectStats() {
  const stats = [
    {
      value: "3+",
      label: "Completed Full-Stack Projects",
      description: "Verified software applications",
      icon: CheckCircle2,
    },
    {
      value: "Multiple",
      label: "Business Solutions",
      description: "CRM, SaaS & Workspaces",
      icon: Layers,
    },
    {
      value: "Full-Stack",
      label: "Development",
      description: "End-to-end architecture",
      icon: Code2,
    },
    {
      value: "Modern",
      label: "Web Technologies",
      description: "React, Next.js, Node.js & Mongo",
      icon: Cpu,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="relative group rounded-2xl border border-purple-500/20 bg-[#111116]/80 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-[#161522] hover:shadow-xl hover:shadow-purple-950/30"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-light mt-0.5">
                {stat.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
