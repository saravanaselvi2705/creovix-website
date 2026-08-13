"use client";

import React from "react";
import { Sparkles, Code2, Layers, Cpu, Compass } from "lucide-react";

export function WhoIsCreovix() {
  const capabilityCards = [
    {
      title: "Product Engineering",
      description: "Design and develop complete digital products from idea to deployment.",
      icon: Compass,
    },
    {
      title: "Full-Stack Development",
      description: "Modern frontend, backend, APIs, databases, authentication and business logic.",
      icon: Code2,
    },
    {
      title: "Business Solutions",
      description: "CRM, project management, workflow, reporting and operational platforms.",
      icon: Layers,
    },
    {
      title: "Product-Focused Approach",
      description: "Build practical software around real business requirements, usability and scalability.",
      icon: Cpu,
    },
  ];

  return (
    <section id="who-we-are" className="py-20 sm:py-24 border-b border-white/5 bg-[#09090b] relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Who Is Creovix Stack?
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            We Build Digital Products That Move Businesses Forward
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            Creovix Stack is a technology solutions studio focused on building modern websites, SaaS platforms, CRM systems, business applications, and custom digital products. We combine product thinking, modern engineering, and clean user experiences to turn business ideas into scalable digital solutions.
          </p>
        </div>

        {/* 4 Compact Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#161522] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="h-5.5 w-5.5" />
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono group-hover:text-purple-400 transition-colors">
                  <span>Core Capability</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
