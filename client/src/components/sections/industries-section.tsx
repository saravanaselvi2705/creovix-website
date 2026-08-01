"use client";

import React from "react";
import {
  Stethoscope,
  HardHat,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Landmark,
  Plane,
  Factory,
  Building,
  Truck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface Industry {
  id: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    icon: Stethoscope,
    tagline: "EHR & Patient Portals",
    description: "HIPAA-ready appointment portals, EHR integrations, teleconsultation tools, and automated SMS reminders.",
  },
  {
    id: "construction",
    title: "Construction & Engineering",
    icon: HardHat,
    tagline: "Site & Resource Tracking",
    description: "Project tracking portals, subcontractor management, machinery logs, and site inspection apps.",
  },
  {
    id: "education",
    title: "Education & EdTech",
    icon: GraduationCap,
    tagline: "LMS & Student Portals",
    description: "Student management systems, online learning platforms, fee collection, and exam management portals.",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    icon: ShoppingBag,
    tagline: "Omnichannel Commerce",
    description: "Omnichannel inventory sync, customer portals, custom checkout workflows, and automated marketing integrations.",
  },
  {
    id: "restaurants",
    title: "Restaurants & Food Services",
    icon: Utensils,
    tagline: "Ordering & KDS Systems",
    description: "Direct online ordering engines, QR digital menus, kitchen display systems (KDS), and loyalty rewards.",
  },
  {
    id: "finance",
    title: "Finance & Fintech",
    icon: Landmark,
    tagline: "Secure Financial Portals",
    description: "Loan management tools, investor reporting dashboards, compliance audit trails, and automated accounting.",
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    icon: Plane,
    tagline: "Booking Engines & Tours",
    description: "Custom reservation engines, tour package configurators, itinerary planners, and payment portals.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    icon: Factory,
    tagline: "Supply Chain & Inventory",
    description: "Supply chain dashboards, raw material trackers, quality control logs, and automated vendor ordering.",
  },
  {
    id: "realestate",
    title: "Real Estate & Property",
    icon: Building,
    tagline: "Listing Portals & CRM",
    description: "Property listing portals, virtual tour embeds, tenant portal payments, and automated lead distribution.",
  },
  {
    id: "logistics",
    title: "Logistics & Fleet",
    icon: Truck,
    tagline: "Dispatch & Tracking",
    description: "Real-time dispatch portals, driver mobile apps, consignment tracking links, and digital proof-of-delivery.",
  },
];

export function IndustriesSection() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...industries, ...industries];

  return (
    <section id="industries" className="py-24 border-b border-white/5 bg-[#0b0b0f] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-medium uppercase tracking-wider text-[11px]">Domain Specialization</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Industries We Empower
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed">
            We architect bespoke digital products tailored specifically to the operational workflows and compliance requirements of your domain.
          </p>
        </div>
      </div>

      {/* Continuously Moving Horizontal Slider (Infinite Marquee) */}
      <div className="relative w-full py-4 group">
        {/* Left & Right Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#0b0b0f] via-[#0b0b0f]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#0b0b0f] via-[#0b0b0f]/80 to-transparent" />

        {/* Marquee Track */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="w-72 sm:w-80 shrink-0 rounded-2xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#15151c] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Tagline */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20">
                      {item.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-400 hover:text-white transition-colors"
                  >
                    <span>Domain Solution</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <span className="text-[9px] font-mono text-zinc-600">Creovix Industry</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
