"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Zap,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  Clock,
  Rocket,
} from "lucide-react";

const metrics = [
  {
    title: "Sub-50ms API Latency",
    metric: "<50ms",
    description: "Achieved in AuctionHub real-time bidding system",
    Icon: Zap,
    accent: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
    border: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Lighthouse 90+ Speeds",
    metric: "90+",
    description: "All projects exceed industry standards",
    Icon: BarChart2,
    accent: "from-purple-400 to-violet-500",
    glow: "shadow-purple-500/20",
    border: "hover:border-purple-500/40",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Zero-Downtime Deployments",
    metric: "99.9%",
    description: "24/7 production monitoring",
    Icon: ShieldCheck,
    accent: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "28% Average Sales Lift",
    metric: "+28%",
    description: "ClientFlow CRM client results",
    Icon: TrendingUp,
    accent: "from-blue-400 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    badgeColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "15+ Hours Saved Weekly",
    metric: "40%",
    description: "StackPilot consolidates 5+ tools",
    Icon: Clock,
    accent: "from-rose-400 to-pink-500",
    glow: "shadow-rose-500/20",
    border: "hover:border-rose-500/40",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    iconColor: "text-rose-400",
    badgeColor: "text-rose-300 bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "4-8 Week Delivery",
    metric: "Fixed",
    description: "Bi-weekly staging milestones",
    Icon: Rocket,
    accent: "from-indigo-400 to-purple-500",
    glow: "shadow-indigo-500/20",
    border: "hover:border-indigo-500/40",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-400",
    badgeColor: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  },
];

function MetricCard({
  title,
  metric,
  description,
  Icon,
  accent,
  glow,
  border,
  iconBg,
  iconColor,
  badgeColor,
  index,
}: (typeof metrics)[number] & { index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-white/8 bg-[#111116]/80 backdrop-blur-sm p-6 transition-all duration-500 cursor-default
        ${border} hover:bg-[#16161e] hover:shadow-xl ${glow}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: visible ? "0ms" : `${index * 80}ms` }}
    >
      {/* Subtle gradient shimmer on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
      />

      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={1.8} />
        </div>
        <span
          className={`text-[10px] font-semibold font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeColor}`}
        >
          Verified
        </span>
      </div>

      {/* Giant metric value */}
      <div
        className={`font-heading text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${accent} bg-clip-text text-transparent tracking-tight leading-none mb-3`}
      >
        {metric}
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-zinc-100 mb-1.5 leading-snug">
        {title}
      </p>

      {/* Description */}
      <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`}
      />
    </div>
  );
}

export function ResultsMetrics() {
  return (
    <section className="py-24 border-b border-white/5 bg-[#09090b] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 subtle-purple-badge px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider">
            <TrendingUp className="h-3.5 w-3.5 text-purple-400" />
            <span>Measurable Outcomes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Results That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Every metric is backed by real deployments — not marketing
            estimates. We build software that moves the needle.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <MetricCard key={m.title} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
