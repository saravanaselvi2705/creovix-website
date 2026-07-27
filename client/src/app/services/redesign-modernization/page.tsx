"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowRight, Check, Zap, Shield, Rocket, ArrowLeft } from "lucide-react";

export default function RedesignModernizationPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services Directory
          </Link>

          <div className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/80 text-purple-400 border border-purple-500/30">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-6">
              3. Website Redesign & Modernization
            </h1>
            <p className="mt-2 text-sm sm:text-base font-semibold text-purple-300">
              Migrate Legacy Codebases to Modern Next.js 15 & MERN Architectures.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We specialize in taking slow, outdated WordPress or legacy PHP applications and rebuilding them into modern, high-speed, secure, and search-optimized Next.js and MERN stack platforms.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-purple-900/30 bg-[#111827]/80 p-6 glass-card-hover">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30 mb-4">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-white">WordPress → Next.js 15</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Eliminate plugin bloat and slow load times. We preserve your existing blog content and URL structures while upgrading your frontend to Next.js.
              </p>
            </div>

            <div className="rounded-xl border border-purple-900/30 bg-[#111827]/80 p-6 glass-card-hover">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-white">PHP → MERN Architecture</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Modernize legacy PHP monolithic codebases into modular Express.js APIs, Node.js microservices, and React 19 single-page interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-purple-900/30 bg-[#111827]/80 p-6 glass-card-hover">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30 mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-white">Security & Speed Upgrade</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Target Google PageSpeed 95+ scores with server-side rendering, code splitting, dynamic images, and vulnerability patches.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-3xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Ready to Modernize Your Legacy Website?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 font-light">
              Get a free migration audit and technology proposal from Creovix Stack.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-2 font-semibold">
                  Start Your Modernization <ArrowRight className="h-4 w-4" />
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
