"use client";

import React from "react";

import {
  Globe,
  Users,
  Layers,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";
import { useContactModal } from "@/components/ui/contact-modal";

interface BuildItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  visualType: "website" | "crm" | "stackpilot";
}

const buildItems: BuildItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    category: "Web Engineering",
    description: "Premium responsive business websites designed to establish your online presence and convert visitors into customers.",
    icon: Globe,
    badge: "Conversion Focused",
    visualType: "website",
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    category: "Sales Operations",
    description: "Custom CRM platforms for customer management, sales pipelines, invoices, reporting and business operations.",
    icon: Users,
    badge: "Automated Pipeline",
    visualType: "crm",
  },
  {
    id: "stackpilot-enterprise",
    title: "StackPilot Enterprise",
    category: "Enterprise Operations",
    description: "All-in-one enterprise workspace combining CRM, project management, HR, finance, reporting and automation.",
    icon: Layers,
    badge: "Flagship Suite",
    visualType: "stackpilot",
  },
];

function CardVisualPreview({ item }: { item: BuildItem }) {
  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0c0c12] p-4 group-hover:border-purple-500/50 transition-all duration-500">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Ambient Radial Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />

      {/* Browser Bar Mockup Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/80" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[9px] font-mono text-zinc-400">creovix.com/{item.id}</span>
        </div>
        <span className="text-[8px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
          {item.badge}
        </span>
      </div>

      {/* Image / Interactive Visual Preview Container with Hover Zoom */}
      <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700 ease-out flex flex-col justify-center">
        {item.visualType === "website" && (
          <div className="space-y-2.5 relative z-10 bg-[#12121c] p-3 rounded-lg border border-purple-500/20 shadow-md">
            <div className="flex items-center justify-between text-[10px] text-zinc-200 font-semibold">
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3 text-purple-400" />
                Corporate Business Website
              </span>
              <span className="text-emerald-400 font-mono text-[9px]">99/100 Speed</span>
            </div>
            <div className="h-2 bg-purple-500/20 rounded-full w-3/4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 w-full" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="bg-white/5 p-1.5 rounded text-[8px] text-zinc-300 text-center border border-white/5">
                <div className="text-purple-300 font-bold">SEO Ready</div>
                <div className="text-[7px] text-zinc-400">Schema Meta</div>
              </div>
              <div className="bg-white/5 p-1.5 rounded text-[8px] text-zinc-300 text-center border border-white/5">
                <div className="text-emerald-400 font-bold">Responsive</div>
                <div className="text-[7px] text-zinc-400">Mobile First</div>
              </div>
              <div className="bg-white/5 p-1.5 rounded text-[8px] text-zinc-300 text-center border border-white/5">
                <div className="text-purple-300 font-bold">Fast Edge</div>
                <div className="text-[7px] text-zinc-400">Next.js 15</div>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "crm" && (
          <div className="space-y-2.5 relative z-10 bg-[#12121c] p-3 rounded-lg border border-purple-500/20 shadow-md">
            <div className="flex justify-between items-center text-[10px] text-zinc-200 font-semibold">
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-purple-400" />
                Sales Pipeline & CRM
              </span>
              <span className="text-purple-300 font-mono text-[9px]">$148,500 Deals</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-purple-950/50 border border-purple-500/30 p-1.5 rounded text-[8px]">
                <div className="text-zinc-400">Leads</div>
                <div className="text-white font-bold">42 Active</div>
              </div>
              <div className="bg-purple-950/50 border border-purple-500/30 p-1.5 rounded text-[8px]">
                <div className="text-zinc-400">Invoices</div>
                <div className="text-emerald-400 font-bold">Paid</div>
              </div>
              <div className="bg-purple-950/50 border border-purple-500/30 p-1.5 rounded text-[8px]">
                <div className="text-zinc-400">Automation</div>
                <div className="text-purple-300 font-bold">Active</div>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "stackpilot" && (
          <div className="space-y-2.5 relative z-10 bg-[#12121c] p-3 rounded-lg border border-purple-500/20 shadow-md">
            <div className="flex justify-between items-center text-[10px] text-zinc-200 font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-purple-400" />
                StackPilot Enterprise
              </span>
              <span className="bg-purple-600 text-white text-[8px] font-mono px-1.5 py-0.5 rounded">All-In-One</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/5 rounded p-1.5 text-[8px] border border-white/5">
                <div className="text-zinc-400">Projects</div>
                <div className="text-purple-300 font-bold">18 Sprints</div>
              </div>
              <div className="flex-1 bg-white/5 rounded p-1.5 text-[8px] border border-white/5">
                <div className="text-zinc-400">Finance & HR</div>
                <div className="text-emerald-400 font-bold">Automated</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Visual Bottom Glow Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent rounded-full mt-2" />
    </div>
  );
}

interface WhatWeBuildProps {
  isEmbedded?: boolean;
}

export function WhatWeBuild({ isEmbedded = false }: WhatWeBuildProps) {
  const { openModal } = useContactModal();

  const content = (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          <span className="font-medium uppercase tracking-wider text-[11px]">Real Creovix Products</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          What We Build
        </h2>

        <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
          We engineer tailored business websites, custom CRM software, and enterprise operating systems that power real growth.
        </p>
      </div>

      {/* Carousel Container */}
      <SectionCarousel autoplayDelay={5000}>
        {buildItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group relative h-full rounded-2xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:border-purple-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-950/50 flex flex-col justify-between overflow-hidden"
            >
              {/* Border Glow Gradient Overlay on Hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Real Portfolio Preview Visual with Hover Zoom */}
                <CardVisualPreview item={item} />

                {/* Header Title & Icon */}
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Action Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <button
                  onClick={() => openModal(`Learn More - ${item.title}`)}
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-950/60 border border-purple-500/30 px-4 py-2 text-xs font-semibold text-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 shadow-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[10px] font-mono text-zinc-500 group-hover:text-purple-400/80 transition-colors">
                  Creovix Product
                </span>
              </div>
            </div>
          );
        })}
      </SectionCarousel>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section id="what-we-build" className="py-24 border-b border-white/5 bg-[#09090b]">
      {content}
    </section>
  );
}
