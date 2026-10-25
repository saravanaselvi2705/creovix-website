"use client";

import React from "react";
import Link from "next/link";
import { Code, ShieldCheck, Search, Settings, ArrowRight, Check, Layers, RefreshCw, Sparkles, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const servicesList = [
  {
    title: "1. SEO-Friendly Web Design & Development",
    slug: "web-development",
    description: "Engineering custom web applications, business platforms, e-commerce stores, and MERN stack systems. Built for performance, security, and search dominance.",
    icon: Code,
    features: [
      "Business & Portfolio Websites",
      "High-Converting Landing Pages",
      "E-Commerce Websites (Custom / WooCommerce)",
      "Custom Web Applications (MERN Stack)",
      "SEO Friendly & SEO Optimized",
      "Mobile Responsive & Accessible",
      "Fast Loading & Enterprise Scalable",
    ],
    startingAt: "Tailored Package",
  },
  {
    title: "2. Custom Project & Org Management Software (StackPilot)",
    slug: "stackpilot",
    description: "Creovix Stack's flagship customizable business management platform tailored specifically for enterprise requirements.",
    icon: Layers,
    isFlagship: true,
    features: [
      "Project & Task Management",
      "CRM & Lead Pipeline",
      "Team & Calendar Management",
      "Reports & Financial Analytics",
      "HR & Leave Portal",
      "Role Based Access Control (RBAC)",
      "Document Management & Security",
    ],
    startingAt: "Flagship Solution",
  },
  {
    title: "3. Website Redesign & Modernization",
    slug: "redesign-modernization",
    description: "Transforming legacy tech stacks into modern high-speed architectures. Migration from WordPress to Next.js, PHP to MERN, and security hardening.",
    icon: RefreshCw,
    features: [
      "Legacy Stack to Next.js 15 & React 19",
      "WordPress → Next.js Migration",
      "PHP → MERN Architecture Migration",
      "Core Web Vitals & Speed Tuning",
      "SEO Improvements & Content Migration",
      "Mobile Responsive Overhaul",
      "Security Enhancements & Hardening",
    ],
    startingAt: "Custom Migration",
  },
  {
    title: "4. Software Testing & QA",
    slug: "software-testing",
    description: "Independent manual and automated software testing suites ensuring zero runtime bugs across every browser and device.",
    icon: ShieldCheck,
    features: [
      "Manual Functional & Regression Testing",
      "Automation Testing (Playwright / Cypress)",
      "Cross-Browser & Mobile Compatibility",
      "API & End-to-End User Flow Checks",
      "Comprehensive Bug Reports & Log Files",
      "Test Documentation & Execution Matrix",
      "100% QA Verification Before Delivery",
    ],
    startingAt: "QA Auditing Plan",
  },
  {
    title: "5. Search Engine Optimization (SEO)",
    slug: "seo",
    description: "Technical SEO audits, local Google Business profile management, keyword mapping, on-page schema configuration, and Core Web Vitals.",
    icon: Search,
    features: [
      "Technical SEO Audits & Fixes",
      "On-Page SEO & Schema.org JSON-LD",
      "Local SEO & Google Business Profile",
      "Keyword Research & Content Mapping",
      "Blog Optimization & Page Speed Tuning",
      "Core Web Vitals Metric Enhancement",
      "Monthly Search Ranking Reports",
    ],
    startingAt: "Monthly SEO Growth",
  },
  {
    title: "6. Website Maintenance & Support",
    slug: "website-maintenance",
    description: "Continuous database backups, security patches, performance tuneups, bug fixes, content edits, and dedicated monthly technical support.",
    icon: Settings,
    features: [
      "Security Updates & Threat Patching",
      "Performance Optimization Runs",
      "Rapid Bug Fixes & Code Tweaks",
      "Automated Daily / Weekly Backups",
      "Content Updates & CMS Maintenance",
      "Dedicated Monthly Support SLA",
      "24/7 Server Monitoring & Alerting",
    ],
    startingAt: "Monthly Support Tier",
  },
  {
    title: "7. Personalized Event Websites",
    slug: "event-websites",
    description: "Beautiful, personalized websites for weddings, engagements and special occasions, designed to make every celebration memorable and easy to share.",
    icon: Heart,
    features: [
      "Personalized wedding and engagement invitation websites",
      "Couple names, photos and event details",
      "Wedding date, time and venue information",
      "Mobile-responsive design",
      "Easy sharing through WhatsApp and social media",
    ],
    startingAt: "Event Package",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Engineering Verticals
            </span>
            <h1 className="font-heading mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Core Services & Digital Solutions
            </h1>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
              Creovix Stack delivers end-to-end bespoke software engineering, enterprise platform custom builds (StackPilot), legacy stack migrations, software QA testing, SEO optimization, and long-term site support.
            </p>
          </div>

          {/* Services Directory */}
          <div className="mt-16 flex flex-col gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`group grid grid-cols-1 gap-8 rounded-xl border p-8 lg:grid-cols-12 glass-card glass-card-hover ${
                    service.isFlagship ? "border-purple-500/50 bg-[#1E1B4B]/30 purple-glow-sm" : "border-purple-900/30"
                  }`}
                >
                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/80 text-purple-400 border border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        {service.isFlagship && (
                          <span className="rounded-full bg-purple-600/30 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-purple-400" /> FLAGSHIP PRODUCT
                          </span>
                        )}
                      </div>

                      <h2 className="font-heading mt-6 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-6">
                      <Link href={service.slug === "stackpilot" ? "/stackpilot" : `/services/${service.slug}`}>
                        <Button variant="primary" size="md" className="gap-2 font-semibold">
                          View Details <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      {service.slug === "stackpilot" && (
                        <a href="https://stackpilot-ai-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="md" className="font-semibold">
                            Open Live Platform
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Features */}
                  <div className="lg:col-span-5 border-t border-purple-900/30 pt-6 lg:border-t-0 lg:border-l lg:border-purple-900/30 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                    <p className="text-[11px] text-purple-400 uppercase tracking-wider font-bold mb-4">Service Capabilities</p>
                    <ul className="grid gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-gray-300 leading-normal">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-950 text-purple-400 border border-purple-500/30 mt-0.5">
                            <Check className="h-3 w-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lead Gen Banner */}
          <section className="mt-24 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-4xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Need a Custom Project Scoped?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Speak with our senior software architect. We evaluate your goals, propose technology stacks, and provide timeline estimates with transparent pricing.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-2 font-semibold">
                  Start Your Project <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
