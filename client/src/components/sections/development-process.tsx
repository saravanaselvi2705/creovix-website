"use client";

import React, { useState } from "react";
import {
  Compass,
  FileText,
  Layout,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

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
    title: "Discovery",
    subtitle: "Requirements & Goals",
    description: "In-depth consultation to analyze your business goals, target audience, core pain points, and technical requirements.",
    icon: Compass,
    deliverables: "Project Scope & ROI Roadmap",
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Architecture & Specs",
    description: "Market research, tech stack selection, database schema design, and detailed technical specifications.",
    icon: FileText,
    deliverables: "System Spec & Sprint Timeline",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI/UX & Wireframing",
    description: "High-fidelity interactive prototypes and custom UI component systems crafted for high conversion.",
    icon: Layout,
    deliverables: "Figma Prototype & Design System",
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Full-Stack Sprints",
    description: "Modular engineering with Next.js 15, TypeScript, and secure APIs delivered in bi-weekly transparent sprints.",
    icon: Code,
    deliverables: "Production Codebase & API",
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "QA & Security Audit",
    description: "Automated test suites, security audits, cross-browser verification, and Lighthouse performance tuning.",
    icon: ShieldCheck,
    deliverables: "QA Audit Report & Security Pass",
  },
  {
    number: "06",
    title: "Deployment",
    subtitle: "Production Release",
    description: "Zero-downtime deployment to global edge infrastructure, DNS configuration, and automated backups.",
    icon: Rocket,
    deliverables: "Live Production Launch",
  },
  {
    number: "07",
    title: "Support",
    subtitle: "Continuous Maintenance",
    description: "Ongoing 24/7 SLA uptime monitoring, feature expansions, security updates, and dedicated technical help.",
    icon: Headphones,
    deliverables: "24/7 Maintenance Retainer",
  },
];

export function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 border-b border-white/5 bg-[#0b0b0f] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Structured Delivery Model</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Development Process
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            A transparent, 7-step engineering methodology ensuring predictable execution, zero downtime, and top-tier code quality.
          </p>
        </div>

        {/* All Steps Visible Connected Workflow Timeline */}
        <div className="relative">
          {/* Connecting Line Track (Animated Glow on Desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-white/10 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Desktop 7 Step Horizontal Pipeline Grid (All visible at once) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "border-purple-500/60 bg-[#15151d] shadow-xl shadow-purple-950/30 -translate-y-1.5"
                      : "border-white/10 bg-[#111116] hover:border-purple-500/30 hover:bg-[#13131a]"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md border ${
                          isActive
                            ? "bg-purple-600 text-white border-purple-500"
                            : "bg-purple-950/50 text-purple-400 border-purple-500/30"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
                          isActive
                            ? "bg-purple-600 text-white shadow-md shadow-purple-600/40"
                            : "bg-purple-950/40 border border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Step Titles */}
                    <div>
                      <h3
                        className={`font-heading text-base font-bold transition-colors ${
                          isActive ? "text-purple-300" : "text-white group-hover:text-purple-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400/80">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="pt-4 mt-4 border-t border-white/5 space-y-1">
                    <div className="text-[9px] font-mono uppercase text-zinc-500">Deliverable</div>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-purple-200">
                      <CheckCircle className="h-3 w-3 text-purple-400 shrink-0" />
                      <span className="truncate">{step.deliverables}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner inside Process section */}
        <div className="mt-16 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-[#12111a] via-[#161224] to-[#12111a] p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-xl shadow-purple-950/20">
          <div className="space-y-2 mb-4 sm:mb-0">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              Ready to start Step 01 (Discovery)?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Get a free technical scope assessment and milestone estimate for your project.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/40 shrink-0"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
