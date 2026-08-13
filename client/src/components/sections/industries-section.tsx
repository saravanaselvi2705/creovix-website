"use client";

import React, { useState } from "react";
import {
  Building,
  Car,
  ShoppingBag,
  Truck,
  Scale,
  Landmark,
  Smile,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

const targetIndustries: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Property listings, lead management & agent portals",
    icon: Building,
  },
  {
    id: "automobile",
    name: "Automobile",
    description: "Dealership management, inventory & service booking",
    icon: Car,
  },
  {
    id: "retail",
    name: "Retail",
    description: "Omnichannel e-commerce & inventory automation",
    icon: ShoppingBag,
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Fleet tracking, shipment dispatch & warehouse management",
    icon: Truck,
  },
  {
    id: "legal",
    name: "Legal",
    description: "Case management, document vault & client billing",
    icon: Scale,
  },
  {
    id: "finance",
    name: "Finance",
    description: "Fintech solutions, accounting & secure customer portals",
    icon: Landmark,
  },
  {
    id: "dental",
    name: "Dental",
    description: "Patient scheduling, EHR & clinic management",
    icon: Smile,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Telemedicine, clinic software & patient portals",
    icon: Stethoscope,
  },
];

export function IndustriesSection() {
  const [isHovered, setIsHovered] = useState(false);
  // Quadruple items to ensure seamless infinite looping marquee
  const marqueeTrack = [
    ...targetIndustries,
    ...targetIndustries,
    ...targetIndustries,
    ...targetIndustries,
  ];

  return (
    <section id="industries" className="py-20 border-b border-white/5 bg-[#09090b] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Domain Expertise</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Industries We Empower
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            Tailored digital platforms and enterprise software engineered for leading industry sectors.
          </p>
        </div>
      </div>

      {/* CONTINUOUS INFINITE HORIZONTAL MARQUEE (PAUSE ON HOVER) */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Side Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 sm:w-40 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 sm:w-40 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent" />

        <div className="flex overflow-hidden py-4">
          <motion.div
            className="flex gap-6 w-max shrink-0"
            animate={{ x: isHovered ? undefined : ["0%", "-25%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {marqueeTrack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="group relative flex flex-col justify-between w-64 sm:w-72 shrink-0 rounded-2xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-950/40"
                >
                  {/* Soft Purple Glow Highlight on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono text-purple-400/80 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                        Sector
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
