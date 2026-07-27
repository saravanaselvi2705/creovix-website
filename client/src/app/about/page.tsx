"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Code, ArrowRight, Sparkles, Award, Users, CheckCircle2, Layers } from "lucide-react";

const coreValues = [
  {
    title: "Luxury Design & Precision",
    desc: "Inspired by Apple, Linear, Stripe, and Framer. We craft bespoke interfaces that build immediate brand authority.",
    icon: Sparkles,
  },
  {
    title: "Performance-First Engineering",
    desc: "Built with Next.js 15, React 19, and Tailwind CSS v4. Zero bloated templates, targeting Lighthouse 95+ page speeds.",
    icon: Zap,
  },
  {
    title: "100% QA Tested Guarantee",
    desc: "Every release passes automated Playwright/Cypress runs and cross-device manual QA checks before final delivery.",
    icon: ShieldCheck,
  },
  {
    title: "SEO-First Architecture",
    desc: "Built-in dynamic metadata, schema.org JSON-LD, Core Web Vitals optimization, and Google Business Profile strategies.",
    icon: Code,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#111827]/80 px-4 py-1.5 text-xs font-semibold text-purple-300 mb-6 purple-glow-sm">
              <Image
                src="/LOgo.png"
                alt="Creovix Stack Logo"
                width={18}
                height={18}
                className="object-contain"
              />
              <span>ABOUT CREOVIX STACK</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Modern <br />
              <span className="gradient-text">Digital Products & Software</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Creovix Stack is a premium software studio dedicated to building high-performance web applications, flagship enterprise management software (StackPilot), legacy site modernizations, and automated QA testing pipelines.
            </p>
          </div>

          {/* Vision & Brand Positioning */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl border border-purple-500/30 bg-[#111827]/80 p-8 glass-card">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Our Positioning</span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-white">Luxury Design Meets Industrial Engineering</h2>
              <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                We sit at the intersection of high-end aesthetics and rigorous software architecture. Unlike mass agencies using slow drag-and-drop builders, Creovix Stack writes clean, type-safe, tested code designed for long-term scalability and business valuation.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#1E1B4B]/60 to-[#111827] p-8 glass-card purple-glow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Flagship SaaS</span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-white">StackPilot Ecosystem</h2>
              <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                Beyond agency development, we maintain our flagship product StackPilot—a fully customizable business management platform integrating CRM, project management, HR, calendars, and role-based security.
              </p>
              <div className="mt-6">
                <Link href="/stackpilot">
                  <Button variant="primary" size="sm" className="gap-2 font-semibold">
                    Explore StackPilot Platform <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Engineering Principles</span>
              <h2 className="font-heading mt-2 text-3xl font-extrabold text-white">Built on Quality & Transparency</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="rounded-xl border border-purple-900/30 bg-[#111827]/80 p-6 glass-card-hover">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">{val.title}</h3>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scoping CTA */}
          <div className="mt-24 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-3xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Ready to Work With Creovix Stack?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 font-light">
              Let&apos;s build your custom website or enterprise management software.
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
