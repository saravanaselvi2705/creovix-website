"use client";

import React from "react";
import {
  Wrench,
  DollarSign,
  Zap,
  Headphones,
  ShieldCheck,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface FeaturePoint {
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  benefit: string;
}

const points: FeaturePoint[] = [
  {
    title: "Tailored Solutions",
    badge: "Custom Engineering",
    description: "Every line of code and UI component is tailored specifically to your business workflows, brand identity, and customer needs.",
    icon: Wrench,
    benefit: "100% Custom Built",
  },
  {
    title: "Transparent Pricing",
    badge: "No Hidden Fees",
    description: "Fixed scope quotes and clear milestones with zero surprise costs, ensuring full predictability for your budget.",
    icon: DollarSign,
    benefit: "Predictable Investments",
  },
  {
    title: "High Performance",
    badge: "100 Speed Score",
    description: "Lightning-fast Next.js architecture, edge serverless hosting, and optimized assets delivering peak organic conversion rates.",
    icon: Zap,
    benefit: "Ultra Fast Loading",
  },
  {
    title: "Dedicated Support",
    badge: "Direct SLAs",
    description: "Direct WhatsApp and email engineering support lines with guaranteed response SLAs and proactive monthly maintenance.",
    icon: Headphones,
    benefit: "24/7 SLA Backed",
  },
  {
    title: "Secure Architecture",
    badge: "Enterprise Grade",
    description: "Bank-grade encryption, automated vulnerability checks, role-based access control, and compliance with modern standards.",
    icon: ShieldCheck,
    benefit: "Bank-Grade Protection",
  },
  {
    title: "Fast Delivery",
    badge: "Agile Sprints",
    description: "Bi-weekly sprint deliverables ensure rapid deployment to market without compromising structural quality.",
    icon: Rocket,
    benefit: "Rapid Market Entry",
  },
];

export function WhyBusinessesChooseUs() {
  return (
    <section id="why-us" className="py-24 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Why Partner With Us</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Choose Creovix Stack
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            We combine high-level business strategy with rigorous software engineering to build reliable, high-converting digital products.
          </p>
        </div>

        {/* 3x2 Grid Modern Icon Cards (6 total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:border-purple-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-950/50 flex flex-col justify-between overflow-hidden"
              >
                {/* Animated Gradient Border Glow Overlay on Hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Soft Inner Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-5 relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Key Benefit Footer */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 group-hover:text-purple-400 transition-colors">
                    Creovix Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
