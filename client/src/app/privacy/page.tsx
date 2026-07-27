"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-gray-400">Last updated: July 26, 2026</p>
          </div>

          <div className="mt-10 flex flex-col gap-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">1. Overview</h2>
              <p>
                Creovix Stack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with our software services including StackPilot.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">2. Data We Collect</h2>
              <p>
                When you submit a project scoping form or inquiry on our website, we collect your name, email address, company name, service requirements, and project description. We do not sell or rent your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">3. How We Use Your Data</h2>
              <p>
                We use collected information strictly to review project scopes, communicate with you regarding requested engineering services, prepare quotes, and deliver our bespoke software platforms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">4. Data Security</h2>
              <p>
                We implement industry-standard encryption protocols (SSL/TLS) and secure database access policies to safeguard client data from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-white mb-2">5. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or your personal data, please contact us at <span className="text-purple-400 font-semibold">contact@creovixstack.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
