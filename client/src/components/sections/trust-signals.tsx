"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function TrustSignals() {
  const trustPoints = [
    "SEO-Friendly Websites",
    "Custom Software Solutions",
    "QA Tested Before Delivery",
    "Transparent Communication",
    "Fast Delivery",
    "Long-Term Support",
  ];

  return (
    <section className="py-16 border-b border-white/5 bg-[#0d0d12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Clients Trust Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Guaranteed execution standards and dedicated support on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="clean-card p-4 flex items-center gap-3 hover:border-purple-500/30 transition-all"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-zinc-200">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
