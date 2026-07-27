"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/20 blur-[140px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-2xl px-6 text-center relative z-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-950/80 p-2 border border-purple-500/30 mb-6 purple-glow-sm">
            <Image
              src="/LOgo.png"
              alt="Creovix Stack Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <h1 className="font-heading text-7xl font-extrabold text-white tracking-tight gradient-text">
            404
          </h1>
          <h2 className="font-heading mt-4 text-2xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to a new route within the Creovix Stack platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="md" className="gap-2 font-semibold">
                <Home className="h-4 w-4" /> Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="md" className="font-semibold">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
