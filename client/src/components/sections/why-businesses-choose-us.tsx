"use client";

import React from "react";
import {
  Zap,
  Cpu,
  Headphones,
  Target,
  TrendingUp,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

interface Feature {
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  benefit: string;
}

const features: Feature[] = [
  {
    title: "Fast Delivery",
    badge: "Agile Sprints",
    description: "Bi-weekly sprint milestones ensure rapid MVP deployment and rapid time-to-market without compromising code architecture.",
    icon: Zap,
    benefit: "Launch 2x Faster",
  },
  {
    title: "Modern Technologies",
    badge: "Next.js 15 & React",
    description: "Engineered with Next.js 15, TypeScript, Tailwind CSS, and edge serverless infrastructure for future-proof software.",
    icon: Cpu,
    benefit: "Cutting-Edge Tech",
  },
  {
    title: "Dedicated Support",
    badge: "Direct Channel",
    description: "Direct WhatsApp and email engineering support lines with guaranteed response SLAs and active monthly maintenance.",
    icon: Headphones,
    benefit: "24/7 SLA Guarantee",
  },
  {
    title: "Business First",
    badge: "ROI Driven",
    description: "We focus on real business goals, conversion rate optimization, and eliminating concrete operational bottlenecks.",
    icon: Target,
    benefit: "Measurable Impact",
  },
  {
    title: "Scalable Solutions",
    badge: "Cloud Native",
    description: "Architected from day one to handle high traffic spikes, expanding user bases, and growing database loads smoothly.",
    icon: TrendingUp,
    benefit: "Enterprise Scale",
  },
  {
    title: "Transparent Communication",
    badge: "Clear Milestones",
    description: "Fixed milestone quotes and clear project telemetry so you always know exact status, timeline, and deliverables.",
    icon: MessageSquare,
    benefit: "Zero Hidden Costs",
  },
  {
    title: "SEO Optimized",
    badge: "Search Authority",
    description: "Technical SEO, Schema structured data, dynamic OpenGraph meta tags, and 95+ Lighthouse performance scores.",
    icon: Search,
    benefit: "Top Google Rankings",
  },
  {
    title: "Secure Development",
    badge: "Bank-Grade",
    description: "Encrypted data transmission, role-based access control, automated backups, and routine vulnerability scanning.",
    icon: ShieldCheck,
    benefit: "100% Data Protection",
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
            <span className="font-medium uppercase tracking-wider text-[11px]">Core Differentiators</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Choose Creovix Stack
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            We combine high-level business strategy with rigorous software engineering to build reliable, high-converting digital products.
          </p>
        </div>

        {/* Horizontal Feature Slider */}
        <SectionCarousel autoplayDelay={4200}>
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative h-full rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#14141b] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600">Creovix Guarantee</span>
                </div>
              </div>
            );
          })}
        </SectionCarousel>
      </div>
    </section>
  );
}
