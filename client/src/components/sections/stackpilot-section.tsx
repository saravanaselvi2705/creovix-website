"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export function StackPilotSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const features = [
    "Custom CRM & Lead Pipeline",
    "Project & Task Management",
    "HR & Employee Portal",
    "Finance & Expense Tracking",
    "Real-time Reports & Analytics",
    "AI Business Assistant",
    "Timesheets & Billing",
    "Automated PDF Invoices",
    "Client Portal & Messaging",
    "Role-Based Access Control",
  ];

  return (
    <section id="stackpilot" className="py-24 border-b border-white/5 bg-[#08080c] relative overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-semibold">Our Flagship Product</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            StackPilot Enterprise Workspace
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            A unified platform for managing projects, clients, teams, finance, reports and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Features & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Everything Your Business Needs To Operate
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                StackPilot is a real, live full-stack SaaS product built by Creovix Stack that eliminates fragmented tools by consolidating core business operations into a single customizable workspace.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-[#111116] px-3.5 py-2 text-xs font-medium text-zinc-200 hover:border-purple-500/30 transition-colors"
                >
                  <Check className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40"
              >
                <span>Explore StackPilot</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#121217] px-6 py-3 text-xs sm:text-sm font-semibold text-purple-300 hover:bg-zinc-800 hover:text-white transition-all"
              >
                <span>Book Live Walkthrough</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: REAL STACKPILOT DASHBOARD SCREENSHOT */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-2xl border border-purple-500/30 bg-[#0f0e17] p-2 sm:p-2.5 shadow-2xl shadow-purple-950/60 transition-all duration-500 hover:scale-[1.015] hover:border-purple-500/50">
              {/* Subtle Ambient Rear Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />

              {/* Real Screenshot Aspect Ratio Container */}
              <div className="relative z-10 aspect-[16/10] w-full bg-[#0c0c12] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/projects/stackpilot-ai.png"
                  alt="StackPilot AI enterprise project management and business operations dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="rounded-2xl border border-purple-500/40 bg-[#111116] p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <h3 className="font-heading text-xl font-bold text-white mb-2">Book StackPilot Walkthrough</h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Get a personalized 1-on-1 walkthrough tailored to your business operational structure.
            </p>
            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                  <Check className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-emerald-400">Walkthrough Request Submitted!</p>
                <p className="text-xs text-zinc-400">Our engineering team will reach out within 2 hours.</p>
                <button
                  onClick={() => {
                    setDemoOpen(false);
                    setSubmitted(false);
                  }}
                  className="mt-4 rounded-lg bg-purple-600 px-5 py-2 text-xs font-semibold text-white hover:bg-purple-500"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    className="w-full rounded-lg border border-white/10 bg-[#09090b] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-lg border border-white/10 bg-[#09090b] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Company / Team Size</label>
                  <select
                    className="w-full rounded-lg border border-white/10 bg-[#09090b] px-3.5 py-2 text-xs text-white focus:border-purple-500 focus:outline-none"
                  >
                    <option value="1-10">1 - 10 Employees</option>
                    <option value="11-50">11 - 50 Employees</option>
                    <option value="50+">50+ Employees</option>
                  </select>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setDemoOpen(false)}
                    className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-purple-600 px-5 py-2 text-xs font-semibold text-white hover:bg-purple-500"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
