"use client";

import React from "react";
import { Zap, Gauge, ShieldCheck, Search, Award } from "lucide-react";

export function PerformanceMetrics() {
  const lighthouseScores = [
    { label: "Performance", score: 100, icon: Zap },
    { label: "Accessibility", score: 100, icon: Gauge },
    { label: "Best Practices", score: 100, icon: ShieldCheck },
    { label: "SEO", score: 100, icon: Search },
  ];

  const speedMetrics = [
    { name: "First Contentful Paint (FCP)", value: "0.3s", status: "Instant", note: "Sub-second load threshold" },
    { name: "Largest Contentful Paint (LCP)", value: "0.7s", status: "Optimal", note: "Google green benchmark" },
    { name: "Total Blocking Time (TBT)", value: "0 ms", status: "Zero Lag", note: "Zero main-thread blockage" },
    { name: "Cumulative Layout Shift (CLS)", value: "0.00", status: "Perfect", note: "Zero visual shifts" },
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 subtle-purple-badge px-3 py-1 rounded-full text-xs font-semibold">
            <Award className="h-3.5 w-3.5 text-purple-400" />
            <span>PROOF OF COMPETENCE</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
            100/100 Performance & Zero-Bloat Engineering
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We don&apos;t rely on marketing claims. We prove quality with measurable Google Lighthouse audits and sub-second Core Web Vitals.
          </p>
        </div>

        {/* 4 Lighthouse Score Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {lighthouseScores.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="clean-card p-6 flex flex-col items-center text-center space-y-4 hover:border-purple-500/40 transition-all"
              >
                {/* SVG Radial Progress Ring */}
                <div className="relative flex items-center justify-center w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background Track */}
                    <path
                      className="text-zinc-800"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Vibrant Accent Ring */}
                    <path
                      className="text-purple-500"
                      strokeDasharray="100, 100"
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-heading text-xl font-bold text-white tracking-tight">
                      {item.score}
                    </span>
                    <span className="text-[9px] font-mono text-purple-400 uppercase">PASS</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-200">
                    <Icon className="h-3.5 w-3.5 text-purple-400" />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-mono">100/100 Verified</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Speed Benchmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {speedMetrics.map((metric) => (
            <div key={metric.name} className="clean-card p-5 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>{metric.name.split(" (")[1]?.replace(")", "") || "METRIC"}</span>
                <span className="text-emerald-400 font-semibold">{metric.status}</span>
              </div>
              <div className="font-heading text-2xl font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <p className="text-[11px] text-zinc-400 font-light">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
