"use client";

import React from "react";
import { Sparkles, Globe, Cloud, Users, AppWindow, ShoppingBag, Bot } from "lucide-react";

export function CompactCapabilities() {
  const capabilities = [
    { label: "Websites", icon: Globe },
    { label: "SaaS Platforms", icon: Cloud },
    { label: "CRM Systems", icon: Users },
    { label: "Business Applications", icon: AppWindow },
    { label: "E-commerce", icon: ShoppingBag },
    { label: "AI-Powered Solutions", icon: Bot },
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-[#0c0c12]/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Product Capabilities
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-[#111116] text-xs font-semibold text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-purple-400" />
                  <span>{cap.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
