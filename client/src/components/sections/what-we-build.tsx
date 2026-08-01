"use client";

import React from "react";
import Image from "next/image";
import {
  Globe,
  ShoppingCart,
  Layers,
  Users,
  Building2,
  Smartphone,
  Cpu,
  UserCheck,
  ShieldCheck,
  Package,
  BarChart3,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

interface BuildItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  visualType: "website" | "ecommerce" | "saas" | "crm" | "erp" | "mobile" | "ai" | "hrms" | "portal" | "inventory" | "dashboard" | "custom";
}

const buildItems: BuildItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    category: "Web Engineering",
    description: "High-performance, conversion-focused corporate websites built with Next.js 15, tailored SEO, and lightning-fast edge loading.",
    icon: Globe,
    badge: "Fast Delivery",
    visualType: "website",
  },
  {
    id: "ecommerce-platforms",
    title: "E-Commerce Platforms",
    category: "Digital Commerce",
    description: "Scalable online storefronts with seamless payment gateways, automated inventory sync, and high-conversion checkout flows.",
    icon: ShoppingCart,
    badge: "High Conversion",
    visualType: "ecommerce",
  },
  {
    id: "saas-products",
    title: "SaaS Products",
    category: "Cloud Software",
    description: "Multi-tenant SaaS architectures complete with subscription billing, user role hierarchies, and API rate limiting.",
    icon: Layers,
    badge: "Cloud Scalable",
    visualType: "saas",
  },
  {
    id: "crm-systems",
    title: "CRM Systems",
    category: "Sales Operations",
    description: "Custom lead management pipelines, sales team tracking, automated follow-ups, and customer touchpoint history.",
    icon: Users,
    badge: "Automated Pipeline",
    visualType: "crm",
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    category: "Enterprise Suite",
    description: "Unified operational software integrating supply chain, financial tracking, department workflows, and central reporting.",
    icon: Building2,
    badge: "Unified System",
    visualType: "erp",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    category: "Cross-Platform",
    description: "Native-quality iOS and Android applications with offline synchronization, real-time push alerts, and slick UI interaction.",
    icon: Smartphone,
    badge: "iOS & Android",
    visualType: "mobile",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    category: "Intelligent Workflows",
    description: "Custom AI agents, LLM integrations, document parsing engines, and automated decision workflows tailored to your business.",
    icon: Cpu,
    badge: "AI Powered",
    visualType: "ai",
  },
  {
    id: "hrms",
    title: "HR Management Systems",
    category: "Human Capital",
    description: "Digital employee onboarding, biometric attendance sync, automated payroll generation, and team performance tracking.",
    icon: UserCheck,
    badge: "Team Management",
    visualType: "hrms",
  },
  {
    id: "customer-portals",
    title: "Customer Portals",
    category: "Client Experience",
    description: "Encrypted self-service client portals for document sharing, order status tracking, invoice management, and ticketing.",
    icon: ShieldCheck,
    badge: "Secure Vault",
    visualType: "portal",
  },
  {
    id: "inventory-systems",
    title: "Inventory Systems",
    category: "Supply Chain",
    description: "Real-time multi-warehouse stock monitoring, automated low-stock reorder triggers, and barcode scanner telemetry.",
    icon: Package,
    badge: "Real-Time Stock",
    visualType: "inventory",
  },
  {
    id: "business-dashboards",
    title: "Business Dashboards",
    category: "Analytics & Telemetry",
    description: "Real-time executive KPI dashboards, automated PDF reporting, financial charts, and operational performance widgets.",
    icon: BarChart3,
    badge: "Live Telemetry",
    visualType: "dashboard",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    category: "Bespoke Solutions",
    description: "Bespoke web applications, custom microservices, and specialized internal tools engineered for complex business requirements.",
    icon: Code2,
    badge: "Bespoke Architecture",
    visualType: "custom",
  },
];

// Helper visual renderers for real product preview mockups
function CardVisualPreview({ item }: { item: BuildItem }) {
  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/10 bg-[#0d0d12] flex flex-col justify-between p-3 group-hover:border-purple-500/30 transition-all">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5 z-10">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          creovix.com/{item.id}
        </div>
        <span className="text-[9px] font-semibold text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">
          {item.badge}
        </span>
      </div>

      {/* Visual Content representation based on type */}
      <div className="relative flex-1 my-2 rounded-lg bg-[#13131a] p-3 overflow-hidden border border-white/5 flex flex-col justify-center">
        {item.visualType === "website" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-2 w-1/3 bg-purple-500/60 rounded" />
              <div className="flex gap-1">
                <div className="h-2 w-4 bg-white/20 rounded" />
                <div className="h-2 w-4 bg-white/20 rounded" />
              </div>
            </div>
            <div className="h-6 w-3/4 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded border border-purple-500/20 flex items-center px-2">
              <span className="text-[9px] font-semibold text-purple-200">High Conversion Hero UI</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-purple-600/40 rounded border border-purple-400/30" />
            </div>
          </div>
        )}

        {item.visualType === "ecommerce" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-zinc-300 font-medium">
              <span>Checkout Flow</span>
              <span className="text-emerald-400 font-mono">+$2,450.00</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-9 bg-purple-900/30 rounded border border-purple-500/30 p-1 flex flex-col justify-between">
                <span className="text-[8px] text-zinc-400">Pro Item</span>
                <span className="text-[9px] font-bold text-white">$199</span>
              </div>
              <div className="h-9 bg-white/5 rounded p-1 flex flex-col justify-between">
                <span className="text-[8px] text-zinc-400">Cart Sync</span>
                <span className="text-[9px] font-bold text-zinc-300">Success</span>
              </div>
              <div className="h-9 bg-emerald-950/40 rounded border border-emerald-500/30 p-1 flex flex-col justify-between">
                <span className="text-[8px] text-emerald-300">Stripe Live</span>
                <span className="text-[8px] text-emerald-200">Paid 100%</span>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "saas" && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] text-purple-300 font-mono">
              <span>StackPilot SaaS</span>
              <span className="bg-purple-500/20 px-1.5 py-0.5 rounded text-[8px]">Active Subs</span>
            </div>
            <div className="h-8 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-[#121218] rounded border border-white/10 p-1.5 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="h-1.5 w-16 bg-purple-300 rounded" />
                <div className="h-1 w-10 bg-zinc-500 rounded" />
              </div>
              <span className="text-[10px] font-bold text-purple-400 font-mono">99.9% Uptime</span>
            </div>
          </div>
        )}

        {item.visualType === "crm" && (
          <div className="space-y-1.5">
            <div className="text-[10px] font-semibold text-zinc-300 flex items-center justify-between">
              <span>Lead Pipeline</span>
              <span className="text-purple-400 text-[9px]">14 Hot Deals</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-purple-950/40 border border-purple-500/30 rounded p-1 text-[8px]">
                <div className="text-zinc-300 font-medium">New Lead</div>
                <div className="text-purple-400 font-bold">$12,000</div>
              </div>
              <div className="bg-indigo-950/40 border border-indigo-500/30 rounded p-1 text-[8px]">
                <div className="text-zinc-300 font-medium">Proposal</div>
                <div className="text-indigo-300 font-bold">$35,500</div>
              </div>
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded p-1 text-[8px]">
                <div className="text-emerald-300 font-medium">Won</div>
                <div className="text-emerald-400 font-bold">$48,000</div>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "erp" && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] text-zinc-300 font-medium">
              <span>Enterprise Resource Flow</span>
              <span className="text-purple-400 text-[9px]">Multi-Dept Sync</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/5 border border-white/10 rounded p-1.5 text-[8px]">
                <span className="text-zinc-400">Finance & Payroll</span>
                <div className="h-1 w-full bg-purple-500/60 rounded mt-1" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded p-1.5 text-[8px]">
                <span className="text-zinc-400">Supply Chain</span>
                <div className="h-1 w-full bg-emerald-500/60 rounded mt-1" />
              </div>
            </div>
          </div>
        )}

        {item.visualType === "mobile" && (
          <div className="flex items-center justify-center">
            <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-purple-900/60 to-indigo-950/80 border border-purple-500/30 p-2 flex flex-col justify-between shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-white">App Store</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[9px] font-medium text-purple-200">iOS & Android Ready</div>
            </div>
          </div>
        )}

        {item.visualType === "ai" && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-purple-300">
              <span className="flex items-center gap-1 font-mono">
                <Sparkles className="h-3 w-3 text-purple-400" />
                AI Agent Pipeline
              </span>
              <span className="text-emerald-400 text-[8px] font-mono">Active Agent</span>
            </div>
            <div className="h-7 bg-purple-950/40 rounded border border-purple-500/30 p-1.5 flex items-center justify-between">
              <span className="text-[9px] text-zinc-200">Automated Data Parsing</span>
              <span className="text-[8px] bg-purple-600 text-white px-1 rounded">100% LLM</span>
            </div>
          </div>
        )}

        {item.visualType === "hrms" && (
          <div className="space-y-1.5">
            <div className="text-[10px] font-semibold text-zinc-300 flex justify-between">
              <span>Employee Portal</span>
              <span className="text-purple-400 text-[9px]">48 Active Staff</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/5 rounded p-1 text-[8px]">
                <div className="text-zinc-400">Attendance</div>
                <div className="text-emerald-400 font-bold">98.4%</div>
              </div>
              <div className="flex-1 bg-white/5 rounded p-1 text-[8px]">
                <div className="text-zinc-400">Payroll</div>
                <div className="text-purple-300 font-bold">Disbursed</div>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "portal" && (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-zinc-300 font-medium">
              <span>Secure Client Vault</span>
              <span className="text-emerald-400 text-[8px]">256-bit SSL</span>
            </div>
            <div className="bg-purple-950/40 border border-purple-500/30 rounded p-1.5 flex justify-between items-center text-[9px]">
              <span className="text-purple-200 font-mono">Contract_v2.pdf</span>
              <span className="bg-purple-600/60 text-white px-1.5 py-0.5 rounded text-[8px]">Verified</span>
            </div>
          </div>
        )}

        {item.visualType === "inventory" && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-zinc-300 font-medium">
              <span>Warehouse Stock</span>
              <span className="text-purple-400 text-[9px]">Auto Reorder</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[8px]">
              <div className="bg-white/5 rounded p-1">
                <span className="text-zinc-400">Warehouse A</span>
                <div className="text-white font-bold">1,420 Units</div>
              </div>
              <div className="bg-white/5 rounded p-1">
                <span className="text-zinc-400">Warehouse B</span>
                <div className="text-white font-bold">890 Units</div>
              </div>
            </div>
          </div>
        )}

        {item.visualType === "dashboard" && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-zinc-300 font-semibold">
              <span>Executive Telemetry</span>
              <span className="text-purple-400 font-mono text-[9px]">+38% YoY</span>
            </div>
            <div className="h-8 bg-gradient-to-r from-purple-950/60 via-indigo-950/60 to-black rounded border border-purple-500/30 p-1 flex items-end justify-between gap-1">
              <div className="w-1/6 bg-purple-500/40 h-2 rounded-t" />
              <div className="w-1/6 bg-purple-500/60 h-4 rounded-t" />
              <div className="w-1/6 bg-purple-500/80 h-3 rounded-t" />
              <div className="w-1/6 bg-purple-400 h-6 rounded-t" />
              <div className="w-1/6 bg-purple-500 h-5 rounded-t" />
              <div className="w-1/6 bg-purple-300 h-7 rounded-t shadow-md shadow-purple-500/50" />
            </div>
          </div>
        )}

        {item.visualType === "custom" && (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-purple-300 font-mono">
              <span>Bespoke Microservices</span>
              <span className="text-emerald-400 text-[8px]">API 200 OK</span>
            </div>
            <div className="bg-black/60 rounded border border-white/10 p-1.5 text-[8px] font-mono text-zinc-300">
              <code>POST /api/v1/engine {"{ status: 'active' }"}</code>
            </div>
          </div>
        )}
      </div>

      {/* Card Visual Bottom Glow line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full" />
    </div>
  );
}

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-24 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Full-Cycle Digital Solutions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What We Build
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            From high-converting corporate websites to complex enterprise ERP systems and SaaS products, we engineer end-to-end software designed to accelerate business growth.
          </p>
        </div>

        {/* Carousel Container (Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card) */}
        <SectionCarousel autoplayDelay={4500}>
          {buildItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative h-full rounded-2xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Real Portfolio Preview Visual */}
                  <CardVisualPreview item={item} />

                  {/* Header Title & Icon */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
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
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-950/60 border border-purple-500/30 px-4 py-2 text-xs font-semibold text-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-purple-400/80 transition-colors">
                    Creovix Stack
                  </span>
                </div>
              </div>
            );
          })}
        </SectionCarousel>
      </div>
    </section>
  );
}
