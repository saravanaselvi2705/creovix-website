"use client";

import React from "react";
import { WhoIsCreovix } from "./who-is-creovix";
import { FeaturedProjects } from "./featured-projects";
import { CompactCapabilities } from "./compact-capabilities";

export function UnifiedShowcaseSection() {
  return (
    <div className="relative overflow-hidden bg-[#09090b]">
      {/* 1. WHO IS CREOVIX STACK? */}
      <WhoIsCreovix />

      {/* 2. FEATURED PROJECTS SHOWCASE (REAL PROJECTS) */}
      <section id="featured-projects" className="py-20 sm:py-28 border-b border-white/5 relative">
        <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
        <FeaturedProjects isEmbedded={true} />
      </section>

      {/* 3. COMPACT CAPABILITIES STRIP */}
      <CompactCapabilities />
    </div>
  );
}
