"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Globe,
  Layers,
  Briefcase,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import HeroBackground from "@/components/ui/hero-background";
import { TechStackBanner } from "@/components/sections/tech-stack-banner";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { StackPilotSection } from "@/components/sections/stackpilot-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyBusinessesChooseUs } from "@/components/sections/why-businesses-choose-us";
import { DevelopmentProcess } from "@/components/sections/development-process";
// Preserved sections (commented out for future re-enabling per prompt requirements)
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
        {/* 1. HERO SECTION */}
        <section
          id="home"
          className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5"
        >
          {/* Background Image */}
          <HeroBackground />

          {/* Subtle Ambient Radial Purple Glow Behind Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none z-10" />

          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/35 z-10" />

          {/* Gradient Overlay for smooth transition at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#09090b] z-10" />

          {/* Hero Content */}
          <div className="relative z-20 mx-auto max-w-5xl px-6 py-24 lg:px-12 text-center space-y-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#121217]/90 px-4 py-1.5 text-xs text-zinc-200 backdrop-blur-md shadow-lg shadow-purple-950/40">
              <Image
                src="/logo.png"
                alt="Creovix Stack Logo"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="font-medium text-purple-200">Creovix Stack</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300 font-light">Digital Solutions That Scale</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
              Transforming Business Ideas into{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                Powerful Digital Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300/90 max-w-3xl mx-auto font-light leading-relaxed">
              We help businesses build websites, SaaS platforms, CRM systems, Portfolio websites and enterprise software that accelerate growth and improve operations.
            </p>

            {/* Service Highlight Badges / Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-zinc-300 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121217]/80 backdrop-blur-md px-4 py-2 hover:border-purple-500/40 transition-all shadow-sm">
                <Globe className="h-3.5 w-3.5 text-purple-400" />
                Modern Solutions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121217]/80 backdrop-blur-md px-4 py-2 hover:border-purple-500/40 transition-all shadow-sm">
                <Layers className="h-3.5 w-3.5 text-purple-400" />
                Scalable Systems
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121217]/80 backdrop-blur-md px-4 py-2 hover:border-purple-500/40 transition-all shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                Fast & Secure
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121217]/80 backdrop-blur-md px-4 py-2 hover:border-purple-500/40 transition-all shadow-sm">
                <Briefcase className="h-3.5 w-3.5 text-purple-400" />
                End-to-End Support
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/50 hover:shadow-purple-700/60 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#what-we-build"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#121217]/90 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all hover:-translate-y-0.5"
              >
                Explore What We Build
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 text-center text-xs text-zinc-400 font-mono tracking-wide">
              Trusted by Startups • Enterprises • Growing Brands
            </div>
          </div>
        </section>

        {/* 2. TECHNOLOGIES WE USE */}
        <TechStackBanner />

        {/* 3. MERGED WHAT WE BUILD SECTION (Replaces Core Services & Business Solutions) */}
        <WhatWeBuild />

        {/* 4. STACKPILOT FLAGSHIP PRODUCT */}
        <StackPilotSection />

        {/* 5. INDUSTRIES WE EMPOWER (Infinite Horizontal Marquee Slider) */}
        <IndustriesSection />

        {/* 6. WHY CHOOSE CREOVIX STACK (Horizontal Feature Slider) */}
        <WhyBusinessesChooseUs />

        {/* 7. DEVELOPMENT PROCESS (Connected Interactive Workflow - No Carousel) */}
        <DevelopmentProcess />

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
