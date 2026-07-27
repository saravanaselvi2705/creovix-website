"use client";

import React, { useState } from "react";
import { Layers, CheckCircle2, ExternalLink, Activity, ShieldAlert, Cpu, Check } from "lucide-react";

export function DeepDiveCaseStudy() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "result">("challenge");

  return (
    <section className="py-20 border-b border-white/5 bg-[#0b0b10]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 subtle-purple-badge px-3 py-1 rounded-full text-xs font-semibold">
            <Layers className="h-3.5 w-3.5 text-purple-400" />
            <span>PROOF OF WORK</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Deep-Dive Case Study: StackPilot Architecture
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            See how we diagnose engineering bottlenecks and construct custom, production-ready software solutions built for speed and long-term reliability.
          </p>
        </div>

        {/* Main Grid: Mockup Frame + 3 Separated Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left / Top: High-Fidelity UI Dashboard Mockup Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="clean-card p-5 border-purple-500/30 bg-[#121219] shadow-2xl relative overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-purple-400">
                  stackpilot.creovixstack.com/dashboard
                </span>
              </div>

              {/* Simulated High-Fidelity UI */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#09090b] rounded-lg border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-purple-400" />
                    <span className="text-zinc-200">System Architecture</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active & Optimized
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-[#09090b] rounded border border-white/5 space-y-1">
                    <span className="text-zinc-500 text-[9px] uppercase">API Latency</span>
                    <p className="text-white font-bold">&lt; 35ms</p>
                  </div>
                  <div className="p-2.5 bg-[#09090b] rounded border border-white/5 space-y-1">
                    <span className="text-zinc-500 text-[9px] uppercase">Lighthouse Score</span>
                    <p className="text-purple-400 font-bold">100 / 100</p>
                  </div>
                </div>

                <div className="p-3 bg-[#09090b] rounded-lg border border-white/5 space-y-2">
                  <div className="flex justify-between text-[11px] text-zinc-300">
                    <span>Role Access & Security</span>
                    <span className="text-purple-400">JWT Verified</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 text-xs text-zinc-400">
              <span>Stack: Next.js 15, Node.js, Express, MongoDB</span>
              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right / Bottom: 3 Clearly Separated Blocks */}
          <div className="lg:col-span-6 space-y-4">
            {/* Tab Selectors */}
            <div className="flex border-b border-white/10 text-xs font-semibold text-zinc-400">
              <button
                onClick={() => setActiveTab("challenge")}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeTab === "challenge"
                    ? "border-purple-500 text-white"
                    : "border-transparent hover:text-zinc-200"
                }`}
              >
                1. The Challenge
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeTab === "solution"
                    ? "border-purple-500 text-white"
                    : "border-transparent hover:text-zinc-200"
                }`}
              >
                2. The Solution
              </button>
              <button
                onClick={() => setActiveTab("result")}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeTab === "result"
                    ? "border-purple-500 text-white"
                    : "border-transparent hover:text-zinc-200"
                }`}
              >
                3. The Result
              </button>
            </div>

            {/* Block 1: The Challenge */}
            <div className={`clean-card p-6 space-y-3 ${activeTab === "challenge" ? "block" : "hidden"}`}>
              <div className="flex items-center gap-2 text-red-400 text-xs font-semibold">
                <ShieldAlert className="h-4 w-4" />
                <span>THE CHALLENGE</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                Unscalable Legacy Software & Page Slowdowns
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Off-the-shelf business management tools are often bloated with unnecessary scripts, slow database response times, and fixed templates that restrict customized organization workflows.
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-400 pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>3+ second page load delays impacting productivity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Rigid role-permission structures breaking team workflows</span>
                </li>
              </ul>
            </div>

            {/* Block 2: The Solution */}
            <div className={`clean-card p-6 space-y-3 ${activeTab === "solution" ? "block" : "hidden"}`}>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                <Cpu className="h-4 w-4" />
                <span>THE SOLUTION</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                Custom Next.js & MERN Architecture
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                We engineered StackPilot from scratch using Next.js 15, dynamic server-side rendering, secure JWT role access, and an optimized MongoDB schema structure.
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-400 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-purple-400" />
                  <span>Zero-bloat modular architecture tailored to client needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-purple-400" />
                  <span>Sub-50ms database responses with optimized API queries</span>
                </li>
              </ul>
            </div>

            {/* Block 3: The Result */}
            <div className={`clean-card p-6 space-y-3 ${activeTab === "result" ? "block" : "hidden"}`}>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>THE RESULT</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                99.9% Uptime & Sub-Second Speeds
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                The final platform achieved 100/100 Google Lighthouse scores, instant page transitions, and a 100% QA pass rate across all functional modules.
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-400 pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>0.3s First Contentful Paint score</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Zero critical security or performance bugs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
