"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ExternalLink } from "lucide-react";

export function StackPilotSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const features = [
    "Project Tracking",
    "CRM",
    "Team Management",
    "Reports",
    "Document Management",
  ];

  return (
    <section id="stackpilot" className="py-20 border-b border-white/5 bg-[#0d0d12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="clean-card p-8 lg:p-12 border-purple-500/30 bg-[#121118] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="subtle-purple-badge text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                Flagship Product
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                StackPilot
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                StackPilot is our customizable project and organization management platform designed to simplify daily business operations.
              </p>

              <div className="pt-2 space-y-2">
                {features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                    <Check className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-purple-500 transition-all shadow-sm"
                >
                  Request Demo
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <a
                  href="https://stackpilot-ai-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 hover:text-white transition-colors"
                >
                  <span>Explore Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-[#09090b] p-6 space-y-4 text-center sm:text-left">
                <h3 className="font-heading text-sm font-semibold text-white">
                  Built Around Your Business
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Tailored to your specific team workflows, permission levels, and business reporting needs.
                </p>
                <div className="pt-2 border-t border-white/5 flex flex-wrap justify-between gap-2 text-[11px] text-purple-300 font-medium">
                  <span>✔ Customizable</span>
                  <span>✔ QA Tested</span>
                  <span>✔ Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="clean-card p-6 sm:p-8 max-w-md w-full border-purple-500/40 relative">
            <h3 className="font-heading text-xl font-bold text-white mb-2">Request Demo</h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Fill in your details and we&apos;ll set up a demo walkthrough tailored to your business.
            </p>
            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <p className="text-sm font-semibold text-emerald-400">Request Sent!</p>
                <p className="text-xs text-zinc-400">We will contact you shortly.</p>
                <button
                  onClick={() => {
                    setDemoOpen(false);
                    setSubmitted(false);
                  }}
                  className="mt-4 text-xs font-semibold text-purple-400"
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
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-white/10 bg-[#09090b] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Email or Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="name@company.com or Phone"
                    className="w-full rounded-lg border border-white/10 bg-[#09090b] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
                  />
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
                    Request Demo
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
