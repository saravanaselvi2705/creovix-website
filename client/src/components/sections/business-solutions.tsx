"use client";

import React from "react";
import {
  Globe,
  ShoppingCart,
  Users,
  Building2,
  UserCheck,
  Layers,
  Cpu,
  BarChart3,
  Smartphone,
  Package,
  Calendar,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

export function BusinessSolutions() {
  const solutions = [
    {
      id: "websites",
      title: "Business Websites",
      description: "Custom high-performance, conversion-focused websites engineered for speed, SEO, and brand positioning.",
      icon: Globe,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platforms",
      description: "Scalable online storefronts with seamless payment gateways, inventory sync, and high-conversion checkout flows.",
      icon: ShoppingCart,
    },
    {
      id: "crm",
      title: "Custom CRM Systems",
      description: "Tailored customer relationship software to track leads, automate sales pipelines, and manage client communications.",
      icon: Users,
    },
    {
      id: "erp",
      title: "ERP Software",
      description: "Integrated enterprise resource planning tools to connect operations, finance, supply chain, and reporting.",
      icon: Building2,
    },
    {
      id: "hrms",
      title: "HR Management Systems",
      description: "Streamlined employee onboarding, attendance, payroll automation, and team performance tracking.",
      icon: UserCheck,
    },
    {
      id: "saas",
      title: "SaaS Platforms",
      description: "End-to-end multi-tenant cloud software with subscription management, user roles, and robust security.",
      icon: Layers,
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      description: "Intelligent workflows, automated document analysis, custom AI chatbots, and predictive data processing.",
      icon: Cpu,
    },
    {
      id: "dashboards",
      title: "Business Dashboards",
      description: "Real-time visual telemetry, executive KPIs, and operational dashboards connecting all your business data.",
      icon: BarChart3,
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Cross-platform iOS and Android apps crafted for smooth user experiences, push alerts, and offline sync.",
      icon: Smartphone,
    },
    {
      id: "inventory",
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reorder alerts, multi-warehouse controls, and supplier management.",
      icon: Package,
    },
    {
      id: "booking",
      title: "Booking Systems",
      description: "Custom reservation engines, automated scheduling, calendar integrations, and client reminder alerts.",
      icon: Calendar,
    },
    {
      id: "portals",
      title: "Customer Portals",
      description: "Secure self-service client portals for document sharing, order tracking, ticketing, and account updates.",
      icon: ShieldCheck,
    },
    {
      id: "analytics",
      title: "Analytics Platforms",
      description: "Custom business intelligence platforms with deep telemetry, customer insights, and automated PDF reporting.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="solutions" className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Enterprise Digital Products
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Business Solutions We Build
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            We architect bespoke digital systems designed to streamline daily operations, expand revenue channels, and accelerate business growth.
          </p>
        </div>

        {/* Carousel Slider */}
/*<SectionCarousel autoplayDelay={5000}>
  {solutions.map((item) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="group relative h-full rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
      >
        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-white transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-[10px] uppercase font-mono text-zinc-600 group-hover:text-purple-400/60 transition-colors">
            Custom Build
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
