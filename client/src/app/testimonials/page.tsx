"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const clientReviews = [
  {
    quote: "Creovix Stack restructured our website into a Next.js setup. Our loading times dropped below 1 second, and our visitor conversion rate improved by 40%. Their attention to speed and clean code is unmatched.",
    author: "Marcus Chen",
    role: "Co-founder, Align Digital",
    project: "Next.js Web Application",
    metric: "-65% Load Time",
  },
  {
    quote: "Their software QA testing runs were invaluable. They uncovered several edge-case bugs in our API connection and verified browser setups before our release. We launched with total confidence.",
    author: "Clara Sterling",
    role: "VP Product, LedgerSync",
    project: "Software Testing & QA",
    metric: "100% Bug-Free Launch",
  },
  {
    quote: "The local SEO optimization they implemented on our site helped us double our business inquiries within three months. Absolute technical search experts.",
    author: "Dr. Vivek Rajan",
    role: "Medical Director, Apex Health",
    project: "Local SEO Optimization",
    metric: "+150% Inquiries",
  },
  {
    quote: "StackPilot has completely revolutionized our enterprise workflow. Having custom CRM, project tracking, and HR in one tailored platform gives our team full visibility.",
    author: "David Miller",
    role: "CEO, NexaCorp Enterprise",
    project: "StackPilot SaaS Platform",
    metric: "+80% Team Efficiency",
  },
  {
    quote: "Migrating from our bloated legacy WordPress setup to a custom Next.js frontend was seamless. Page speeds improved dramatically and organic search traffic grew right away.",
    author: "Elena Petrova",
    role: "E-Commerce Lead, EcoShop",
    project: "Website Modernization",
    metric: "+68% Conversion",
  },
  {
    quote: "Creovix Stack delivered our custom MERN application ahead of schedule with complete documentation and automated test logs. A true partner for ambitious founders.",
    author: "Sarah Connor",
    role: "Founder, Cyberdyne Labs",
    project: "Custom MERN Web App",
    metric: "Fast Turnaround",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Verifiable Track Record
            </span>
            <h1 className="font-heading mt-2 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Client Testimonials & Impact
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              See what founders, product leads, and business owners say about partnering with Creovix Stack.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientReviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-purple-900/30 bg-[#111827]/80 p-8 flex flex-col justify-between glass-card-hover relative"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-purple-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="bg-purple-950 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 text-[10px] font-bold rounded-full">
                      {review.metric}
                    </span>
                  </div>

                  <p className="mt-6 text-xs sm:text-sm italic text-gray-300 leading-relaxed font-light">
                    &quot;{review.quote}&quot;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-900/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{review.author}</p>
                    <p className="text-[10px] text-gray-400">{review.role}</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-purple-400 font-semibold bg-purple-950/60 px-2 py-1 rounded">
                    {review.project}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-4xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Ready to Experience the Creovix Advantage?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 font-light">
              Start your project with clear milestones and mutually agreed post-delivery payment options.
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
