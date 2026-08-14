"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import { Hero } from "@/components/sections/hero";
import { UnifiedShowcaseSection } from "@/components/sections/unified-showcase-section";
import { StackPilotSection } from "@/components/sections/stackpilot-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyBusinessesChooseUs } from "@/components/sections/why-businesses-choose-us";
import { AgileProcess } from "@/components/sections/agile-process";
// Preserved sections (commented out for future re-enabling per prompt requirements)
// import { DevelopmentProcess } from "@/components/sections/development-process";
// import { SuccessStories } from "@/components/sections/success-stories";
// import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What digital solutions does Creovix Stack build?",
      answer:
        "We engineer end-to-end digital solutions for businesses, including high-converting corporate websites, custom CRM and ERP software, multi-tenant SaaS platforms, mobile applications (iOS/Android), AI workflow automation, and real-time business dashboards.",
    },
    {
      question: "How long does a typical software or website project take?",
      answer:
        "Standard business websites are delivered in 1 to 2 weeks. Custom web applications, CRM systems, and SaaS platforms typically take 3 to 6 weeks depending on architectural complexity. We follow bi-weekly sprint milestones so you see constant progress.",
    },
    {
      question: "What is StackPilot and can it be customized for my company?",
      answer:
        "StackPilot is our flagship enterprise operations platform designed for team collaboration, CRM, project tracking, and financial invoicing. Yes, we customize StackPilot specifically around your company's workflows, permission hierarchies, and reporting needs.",
    },
    {
      question: "How do you handle post-launch maintenance and technical support?",
      answer:
        "We provide dedicated ongoing support retainer packages that include 24/7 uptime monitoring, security vulnerability patches, daily automated backups, feature expansions, and a direct WhatsApp/email support line.",
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer:
        "Absolutely. We respect your intellectual property and business privacy. We execute mutual NDAs prior to discussing sensitive business data or proprietary project specifications.",
    },
    {
      question: "How is pricing structured for enterprise projects?",
      answer:
        "We offer transparent, fixed-price milestone quotes based on documented project scope or flexible monthly retainer arrangements. There are no hidden fees or unexpected line items.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-purple-900/50 selection:text-purple-200">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow">
        {/* 1. PREMIUM HERO SECTION */}
        <Hero />

        {/* 2. UNIFIED SOLUTIONS & FEATURED PROJECTS SHOWCASE */}
        <UnifiedShowcaseSection />

        {/* 3. STACKPILOT FLAGSHIP PRODUCT */}
        <StackPilotSection />

        {/* 4. BUILT WITH MODERN TECHNOLOGY */}
        <TechStackSection />

        {/* 5. INDUSTRIES WE EMPOWER (Infinite Horizontal Marquee Slider) */}
        <IndustriesSection />

        {/* 6. WHY CHOOSE CREOVIX STACK (Horizontal Feature Slider) */}
        <WhyBusinessesChooseUs />

        {/* 7. AGILE PROCESS (4-Step Delivery Framework) */}
        <AgileProcess />

        {/* 
          HIDDEN / PRESERVED SECTIONS (Per Requirements 2 & 3: Code kept available for future use)
          <SuccessStories />
          <TestimonialsSection />
        */}

        {/* 8. FAQ SECTION */}
        <section id="faq" className="py-24 border-b border-white/5 bg-[#09090b]">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
                Transparent Guidance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Clear answers regarding our digital solution capabilities, delivery timelines, and engineering practices.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-[#111116] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-heading text-sm sm:text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-purple-400 shrink-0 transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180 text-purple-300" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Floating Social & WhatsApp Buttons */}
      <FloatingButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
}
