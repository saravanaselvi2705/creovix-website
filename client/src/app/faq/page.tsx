"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";

const faqCategories = [
  {
    category: "General & Services",
    items: [
      {
        q: "What core services does Creovix Stack provide?",
        a: "We provide SEO-friendly Web Design & Development (Business Websites, E-Commerce, Portfolios, MERN apps), Custom Project & Org Management Software (StackPilot SaaS), Website Redesign & Modernization (WordPress to Next.js, PHP to MERN), Software Testing & QA, SEO Optimization, and Monthly Website Maintenance.",
      },
      {
        q: "What is StackPilot?",
        a: "StackPilot is Creovix Stack's flagship customizable business management platform. It combines CRM, project tracking, team tasks, HR leaves, calendars, and role-based permissions into a single interface. You can test it live at https://stackpilot-ai-seven.vercel.app/ or request a custom deployment for your enterprise.",
      },
      {
        q: "Do you use pre-built templates or visual website builders?",
        a: "No. We write 100% bespoke, type-safe code using Next.js 15, React 19, Express, and MongoDB. We skip bloated visual builders like Elementor or Wix to ensure sub-second page loads and maximum security.",
      },
    ],
  },
  {
    category: "QA Testing & Technical Standards",
    items: [
      {
        q: "How do you test software before client delivery?",
        a: "Every project undergoes automated end-to-end regression testing using Playwright and Cypress alongside manual cross-browser and mobile viewport verifications. We guarantee 100% QA verification before final delivery.",
      },
      {
        q: "Are all Creovix websites SEO-friendly and fast loading?",
        a: "Yes. Every website is built from the ground up with dynamic SEO metadata, JSON-LD Schema.org markup, semantic HTML, mobile responsiveness, and Core Web Vitals optimization targeting Lighthouse scores of 95+.",
      },
    ],
  },
  {
    category: "Pricing & Client Commitments",
    items: [
      {
        q: "What are your payment terms and flexible options?",
        a: "We offer structured milestone payments and flexible payment options—including payment after successful delivery where mutually agreed upon during scoping.",
      },
      {
        q: "Do I get full ownership of the source code?",
        a: "Yes. Upon completion and final settlement, 100% full ownership of the source code, assets, and GitHub repositories is transferred directly to you with zero vendor lock-in.",
      },
      {
        q: "What is your project turnaround time?",
        a: "Standard business websites and landing pages are typically delivered in 2 to 4 weeks. Complex web applications and custom StackPilot implementations take 6 to 10 weeks depending on feature scope.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#111827]/80 px-4 py-1.5 text-xs font-semibold text-purple-300 mb-6 purple-glow-sm">
              <HelpCircle className="h-4 w-4 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Everything You Need to Know
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Clear answers regarding our engineering standards, StackPilot software implementations, QA testing pipelines, and client guarantees.
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="mt-16 flex flex-col gap-12">
            {faqCategories.map((cat, cIdx) => (
              <div key={cIdx} className="rounded-2xl border border-purple-900/30 bg-[#111827]/80 p-8 glass-card">
                <h2 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  {cat.category}
                </h2>

                <Accordion>
                  {cat.items.map((item, iIdx) => (
                    <AccordionItem key={iIdx} title={item.q}>
                      {item.a}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Scoping Call invitation */}
          <div className="mt-20 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-3xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Have More Questions?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 font-light">
              Speak directly with our engineering team to discuss your project requirements.
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
