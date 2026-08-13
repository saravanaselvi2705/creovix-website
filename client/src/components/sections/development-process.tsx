"use client";

import React, { useState } from "react";
import {
  Compass,
  Layout,
  FileText,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/components/ui/contact-modal";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string;
}

const processSteps: Step[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "Requirements & Goals",
    description: "In-depth consultation to analyze your business goals, target audience, core pain points, and technical requirements.",
    icon: Compass,
    deliverables: "Project Scope & ROI Roadmap",
  },
  {
    number: "02",
    title: "UX UI Design",
    subtitle: "Wireframes & Visuals",
    description: "High-fidelity interactive prototypes and bespoke component design systems engineered for conversion.",
    icon: Layout,
    deliverables: "Figma Prototype & Design System",
  },
  {
    number: "03",
    title: "Architecture & Planning",
    subtitle: "System Specs & DB",
    description: "Database schema design, API definitions, security protocols, and sprint milestone scheduling.",
    icon: FileText,
    deliverables: "System Spec & Sprint Timeline",
  },
  {
    number: "04",
    title: "Frontend & Backend Development",
    subtitle: "Full-Stack Sprints",
    description: "Modular engineering with Next.js 15, TypeScript, and high-concurrency APIs delivered in bi-weekly sprints.",
    icon: Code,
    deliverables: "Production Codebase & API",
  },
  {
    number: "05",
    title: "QA & Testing",
    subtitle: "Security & Speed Pass",
    description: "Automated test suites, vulnerability audits, cross-browser validation, and Lighthouse 100 speed optimization.",
    icon: ShieldCheck,
    deliverables: "QA Audit Report & Security Pass",
  },
  {
    number: "06",
    title: "Deployment & Launch",
    subtitle: "Production Release",
    description: "Zero-downtime deployment to global edge infrastructure, DNS configuration, and automated backups.",
    icon: Rocket,
    deliverables: "Live Production Launch",
  },
  {
    number: "07",
    title: "Ongoing Support",
    subtitle: "SLA & Maintenance",
    description: "24/7 SLA uptime monitoring, continuous security updates, feature enhancements, and dedicated technical help.",
    icon: Headphones,
    deliverables: "24/7 Maintenance Retainer",
  },
];

export function DevelopmentProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { openModal } = useContactModal();

  return (
    <section id="process" className="py-20 border-b border-white/5 bg-[#0b0b0f] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Structured Engineering Roadmap</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Development Process
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            A single-screen transparent engineering roadmap ensuring predictable execution, zero downtime, and top-tier code quality.
          </p>
        </div>

        {/* All Steps Visible Connected Workflow Timeline */}
        <div className="relative">
          {/* Connecting Line Track with Animated Glow */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-white/10 z-0 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-500 rounded-full transition-all duration-500 ${
                hoveredStep !== null ? "shadow-lg shadow-purple-500/80" : ""
              }`}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Desktop 7 Step Horizontal Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3.5 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`group relative rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? "border-purple-500/80 bg-[#161522]/90 shadow-2xl shadow-purple-950/50 scale-[1.04] z-30"
                      : "border-white/10 bg-[#111116]/80 hover:border-purple-500/40 hover:bg-[#13131c]"
                  }`}
                >
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    {/* Header Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border transition-colors ${
                          isHovered
                            ? "bg-purple-600 text-white border-purple-400"
                            : "bg-purple-950/50 text-purple-300 border-purple-500/30"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`flex h-8.5 w-8.5 items-center justify-center rounded-xl transition-all duration-300 ${
                          isHovered
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50 scale-110"
                            : "bg-purple-950/40 border border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Step Titles */}
                    <div>
                      <h3
                        className={`font-heading text-sm sm:text-base font-bold transition-colors ${
                          isHovered ? "text-purple-200" : "text-white group-hover:text-purple-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400/80 block mt-0.5">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="pt-3 mt-3 border-t border-white/5 space-y-1 relative z-10">
                    <div className="text-[8px] font-mono uppercase text-zinc-500">Deliverable</div>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-purple-200">
                      <CheckCircle className="h-3 w-3 text-purple-400 shrink-0" />
                      <span className="truncate text-[10px]">{step.deliverables}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner inside Process section */}
        <div className="mt-14 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-[#12111a] via-[#161224] to-[#12111a] p-6 sm:p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-xl shadow-purple-950/20">
          <div className="space-y-1 mb-4 sm:mb-0">
            <h3 className="font-heading text-base sm:text-lg font-bold text-white">
              Ready to start Step 01 (Discovery)?
            </h3>
            <p className="text-xs text-zinc-400 font-light">
              Get a free technical scope assessment and milestone estimate for your project.
            </p>
          </div>
          <button
            onClick={() => openModal("Book Discovery Call")}
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/40 shrink-0"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
