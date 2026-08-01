"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

export function SuccessStories() {
  const stories = [
    {
      id: "restaurant-pos",
      client: "Gourmet Hospitality Group",
      category: "Restaurant & Food Service",
      title: "Direct Online Ordering & Kitchen Automation Platform",
      problem: "Depended heavily on third-party aggregators charging 30% commission per order, losing customer data and profit margins.",
      solution: "Engineered a direct-to-consumer online ordering web app connected to a real-time Kitchen Display System (KDS) and POS.",
      outcome: "+45% Direct Order Growth, saved over $18,000 monthly in commission fees, and captured 12,000+ customer profiles.",
      metrics: [
        { label: "Commission Savings", value: "$18k+/mo" },
        { label: "Direct Orders", value: "+45%" },
        { label: "Page Speed", value: "0.8s" },
      ],
    },
    {
      id: "logistics-fleet",
      client: "Apex Freight & Logistics",
      category: "Logistics & Supply Chain",
      title: "Real-Time Dispatch & Fleet Telemetry System",
      problem: "Manual phone updates for 80+ trucks created dispatch delays, lost proof-of-delivery receipts, and client disputes.",
      solution: "Developed a centralized dispatch web portal integrated with a mobile app for drivers featuring automated GPS updates.",
      outcome: "Reduced dispatch latency by 70%, achieved 100% digital proof-of-delivery, and increased fleet utilization by 28%.",
      metrics: [
        { label: "Dispatch Latency", value: "-70%" },
        { label: "Fleet Utilization", value: "+28%" },
        { label: "Disputes", value: "-95%" },
      ],
    },
    {
      id: "healthcare-portal",
      client: "MediCare Specialist Clinics",
      category: "Healthcare Services",
      title: "Patient Self-Service Portal & Telehealth Engine",
      problem: "Call center overwhelmed by appointment rescheduling calls, resulting in 25% no-show rates and delayed follow-ups.",
      solution: "Built a HIPAA-compliant web portal enabling online doctor booking, instant lab result access, and SMS reminders.",
      outcome: "No-show rate dropped to under 6%, administrative call volume decreased by 55%, and patient satisfaction rose to 98%.",
      metrics: [
        { label: "No-Show Rate", value: "6%" },
        { label: "Call Volume", value: "-55%" },
        { label: "Satisfaction", value: "98%" },
      ],
    },
    {
      id: "b2b-saas-crm",
      client: "Nexus Industrial Supplies",
      category: "Manufacturing & Distribution",
      title: "Custom B2B E-Commerce & ERP Integration",
      problem: "Outdated paper catalog sales process required 3-day turnaround for wholesale quotes and manual inventory checks.",
      solution: "Implemented an automated B2B portal with tier-based wholesale pricing, dynamic stock allocation, and ERP sync.",
      outcome: "Quote-to-order time reduced from 3 days to 4 minutes, increasing wholesale reorder velocity by 3.5x.",
      metrics: [
        { label: "Turnaround", value: "4 Mins" },
        { label: "Reorder Speed", value: "3.5x" },
        { label: "B2B Volume", value: "+$1.2M" },
      ],
    },
  ];

  return (
    <section id="case-stories" className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Proven Business Outcomes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Real business challenges solved with engineered digital platforms. Here is how we deliver measurable bottom-line impact.
          </p>
        </div>

        {/* Carousel Slider */}
        <SectionCarousel autoplayDelay={6000}>
          {stories.map((story) => (
            <div
              key={story.id}
              className="group h-full rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20">
                    {story.category}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 truncate max-w-[140px]">{story.client}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {story.title}
                </h3>

                <div className="space-y-2.5 text-xs font-light">
                  <div className="rounded-xl bg-[#09090b] p-3 border border-white/5 space-y-0.5">
                    <span className="font-semibold text-red-400 uppercase text-[9px] font-mono block">The Challenge</span>
                    <p className="text-zinc-300 text-xs">{story.problem}</p>
                  </div>

                  <div className="rounded-xl bg-[#09090b] p-3 border border-white/5 space-y-0.5">
                    <span className="font-semibold text-purple-400 uppercase text-[9px] font-mono block">The Solution</span>
                    <p className="text-zinc-300 text-xs">{story.solution}</p>
                  </div>

                  <div className="rounded-xl bg-purple-950/20 p-3 border border-purple-500/20 space-y-0.5">
                    <span className="font-semibold text-emerald-400 uppercase text-[9px] font-mono block">Measured Outcome</span>
                    <p className="text-emerald-200 text-xs font-medium">{story.outcome}</p>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {story.metrics.map((m) => (
                    <div key={m.label} className="text-center rounded-lg bg-[#0d0c14] p-2 border border-white/5">
                      <p className="font-heading text-sm font-bold text-white">{m.value}</p>
                      <p className="text-[9px] text-zinc-400 font-mono truncate">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-white transition-colors"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </SectionCarousel>
      </div>
    </section>
  );
}
