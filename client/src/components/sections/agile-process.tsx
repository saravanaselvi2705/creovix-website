"use client";

import React, { useState } from "react";
import {
  FileText,
  Layers,
  ShieldCheck,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

interface AgileStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  icon: React.ElementType;
  deliverable: string;
  outcomes: string[];
}

const agileSteps: AgileStep[] = [
  {
    number: "01",
    title: "Requirements & SRS",
    subtitle: "Discovery & Blueprint",
    duration: "Week 1",
    description:
      "We analyze your business objectives, map user journeys, execute mutual NDAs, and author a detailed Software Requirement Specification (SRS) with fixed milestone pricing.",
    icon: FileText,
    deliverable: "Approved SRS & Scope Roadmap",
    outcomes: ["Zero scope creep", "Fixed milestone pricing", "Architecture blueprint"],
  },
  {
    number: "02",
    title: "Sprint-Based Development",
    subtitle: "Agile Execution",
    duration: "Weeks 2 - 4",
    description:
      "Full-stack engineering in bi-weekly sprints using Next.js, React, Node.js, and TypeScript with live staging access, transparent updates, and continuous feedback loops.",
    icon: Layers,
    deliverable: "Production Codebase & API",
    outcomes: ["Bi-weekly staging demos", "Clean modular code", "Real-time communication"],
  },
  {
    number: "03",
    title: "Quality Control",
    subtitle: "Rigorous QA & Security",
    duration: "Week 5",
    description:
      "End-to-end automated testing, cross-browser validation, Lighthouse 90+ speed optimization, and zero-trust security vulnerability audits prior to release.",
    icon: ShieldCheck,
    deliverable: "QA Audit & Security Pass",
    outcomes: ["Cross-browser verified", "Sub-second load times", "OWASP security pass"],
  },
  {
    number: "04",
    title: "Deployment & Support",
    subtitle: "Production & SLA",
    duration: "Ongoing",
    description:
      "Zero-downtime deployment to global edge infrastructure, DNS/SSL setup, automated backups, and 24/7 technical SLA monitoring with dedicated maintenance support.",
    icon: Rocket,
    deliverable: "Live Launch & 24/7 SLA",
    outcomes: ["Zero-downtime launch", "24/7 uptime monitoring", "Ongoing feature scale"],
  },
];

export function AgileProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 border-b border-white/5 bg-[#09090b] relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Predictable Agile Delivery
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step <span className="text-purple-400">Agile Delivery Process</span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 font-light leading-relaxed">
            From initial business requirements to live production deployment, our transparent 4-step framework guarantees rapid execution, enterprise security, and zero cost inflation.
          </p>
        </div>

        {/* 4-Step Grid with Connecting Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {agileSteps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "border-purple-500/80 bg-[#14131f] shadow-2xl shadow-purple-950/50 scale-[1.03] z-20"
                    : "border-white/10 bg-[#111116] hover:border-purple-500/40 hover:bg-[#13131b]"
                }`}
              >
                {/* Subtle top indicator line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 ${
                    isHovered ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-transparent"
                  }`}
                />

                <div className="space-y-4">
                  {/* Step Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-950/60 text-purple-300 border border-purple-500/30">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-purple-400" />
                        {step.duration}
                      </span>
                    </div>

                    <div
                      className={`h-10 w-10 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                        isHovered
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50 scale-110"
                          : "bg-purple-950/40 border border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Step Titles */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-0.5">
                      {step.subtitle}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {step.description}
                  </p>

                  {/* Value Outcomes list */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      Key Highlights
                    </span>
                    <div className="space-y-1">
                      {step.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 mt-6 border-t border-white/10">
                  <span className="text-[9px] font-mono uppercase tracking-wide text-zinc-500 block mb-1">
                    Primary Deliverable
                  </span>
                  <div className="inline-flex items-center gap-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 px-3 py-1.5 text-xs font-semibold text-purple-200 w-full justify-between">
                    <span className="truncate">{step.deliverable}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-[#12111a] via-[#171326] to-[#12111a] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-2xl shadow-purple-950/40"
        >
          <div className="space-y-2 mb-6 sm:mb-0">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-purple-300 px-3 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30">
              Ready for Step 01?
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
              Accelerate Your Project with Our 4-Step Framework
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              Schedule a free 30-minute discovery call to receive a custom SRS scope overview and transparent cost estimate.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:from-purple-500 hover:to-indigo-500 transition-all shadow-xl shadow-purple-950/60 hover:scale-105 shrink-0"
          >
            <span>Book a Free Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
