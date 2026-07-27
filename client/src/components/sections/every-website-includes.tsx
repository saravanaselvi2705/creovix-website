"use client";

import React from "react";
import { Smartphone, Search, Zap, ShieldCheck, Sliders, Layout } from "lucide-react";

export function EveryWebsiteIncludes() {
  const features = [
    { title: "Mobile Friendly", desc: "Looks and works great on phones, tablets, and computers.", icon: Smartphone },
    { title: "SEO Optimized", desc: "Structured to rank higher on Google search results.", icon: Search },
    { title: "Fast Loading", desc: "Optimized for high speed so visitors don't wait.", icon: Zap },
    { title: "Secure", desc: "Protected against security threats and data breaches.", icon: ShieldCheck },
    { title: "Easy to Manage", desc: "Simple interface to update content whenever needed.", icon: Sliders },
    { title: "Responsive Design", desc: "Automatically adjusts to any screen size seamlessly.", icon: Layout },
  ];

  return (
    <section className="py-16 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Every Website Includes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light">
            Essential features built into every project to ensure long-term business success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="clean-card p-5 flex items-start gap-3.5 hover:border-purple-500/30 transition-all"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-purple-400 border border-white/10">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
