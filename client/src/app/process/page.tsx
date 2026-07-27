"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Search, Code, ShieldCheck, Rocket, RefreshCw, Lock } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture Planning",
    desc: "We begin with a deep dive into your business goals, target audience, and system requirements. We map out full technical stack specs, database schemas, and UX wireframes before writing code.",
    icon: Search,
    deliverables: ["Technical SRS Document", "Database Architecture Spec", "Wireframes & UI Strategy", "Timeline & Milestone Plan"],
  },
  {
    step: "02",
    title: "Bespoke Full Stack Engineering",
    desc: "Our senior developers write clean, type-safe code using Next.js 15, React 19, TypeScript, Express.js, and MongoDB. Zero heavy page builders—100% custom lightweight code.",
    icon: Code,
    deliverables: ["Next.js 15 Server Components", "Express RESTful APIs", "MongoDB Indexing", "Tailwind CSS v4 Styling"],
  },
  {
    step: "03",
    title: "Software QA Testing Verification",
    desc: "Every release undergoes rigorous automated end-to-end testing with Playwright and Cypress alongside manual cross-browser, cross-device, and security audits.",
    icon: ShieldCheck,
    deliverables: ["Automated Regression Suite", "Cross-Browser Testing", "Mobile Viewport Audit", "Detailed Bug Report Logs"],
  },
  {
    step: "04",
    title: "Technical SEO & Performance Launch",
    desc: "Before going live, we configure dynamic metadata, JSON-LD Schema.org markup, 301 redirects, sitemaps, and tune Core Web Vitals to target Lighthouse 95+ scores.",
    icon: Rocket,
    deliverables: ["JSON-LD Schema Markup", "Robots & XML Sitemap", "Core Web Vitals Tuning", "Google Analytics & Search Console"],
  },
  {
    step: "05",
    title: "Client Review & Payment Options",
    desc: "You review the staging deployment thoroughly. We incorporate feedback, verify satisfaction, and offer flexible payment options including post-delivery payment where mutually agreed.",
    icon: CheckCircle2,
    deliverables: ["Staging Link Preview", "Client Review Cycle", "Flexible Payment Options", "Full Codebase Transfer"],
  },
  {
    step: "06",
    title: "Long-term Maintenance & Support",
    desc: "We provide ongoing database backups, security patches, uptime monitoring, performance tuneups, and monthly developer hours to keep your system ahead.",
    icon: RefreshCw,
    deliverables: ["Automated Daily Backups", "Security Threat Updates", "Uptime Alerting SLA", "Continuous Feature Upgrades"],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Execution Methodology
            </span>
            <h1 className="font-heading mt-2 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Our 6-Step Development Process
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              How Creovix Stack turns complex software specifications into fast, secure, QA-verified, and search-optimized digital products.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-purple-900/30 bg-[#111827]/80 p-8 flex flex-col justify-between glass-card-hover relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-extrabold text-purple-400">
                        {stepItem.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-950 text-purple-400 border border-purple-500/30">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="font-heading mt-6 text-xl font-bold text-white">
                      {stepItem.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-purple-900/30">
                    <p className="text-[11px] text-purple-400 uppercase tracking-widest font-bold mb-2">Key Deliverables:</p>
                    <ul className="grid gap-1.5 text-xs text-gray-400">
                      {stepItem.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-24 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-4xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Ready to Initiate Step 01 Discovery?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 font-light">
              Contact our engineering leads to schedule your discovery call.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-2 font-semibold">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
