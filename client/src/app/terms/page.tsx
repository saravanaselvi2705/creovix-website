"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home Page
          </Link>

          <div className="border-b border-purple-900/30 pb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Legal Policy
            </span>
            <h1 className="font-heading mt-2 text-4xl font-extrabold text-white">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs text-gray-400">Last updated: July 26, 2026</p>
          </div>

          <div className="mt-10 flex flex-col gap-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing or utilizing the services provided by Creovix Stack (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">2. Services & Code Ownership</h2>
              <p>
                Creovix Stack delivers bespoke web design, software development, StackPilot SaaS implementations, legacy site modernizations, QA testing, and SEO services. Upon completion of milestone requirements and full payment settlement, complete ownership of custom codebase files is transferred to the client.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">3. Payment Terms & Post-Delivery Commitments</h2>
              <p>
                Payment schedules are agreed upon prior to project kickoff. Where mutually agreed in writing, flexible payment terms including post-delivery payment after successful staging review are honored.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">4. Warranties & Quality Guarantee</h2>
              <p>
                All custom web projects delivered by Creovix Stack undergo software QA testing prior to release. We provide post-launch support and warranty bug fixes as specified in individual client Statement of Work (SOW) agreements.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
