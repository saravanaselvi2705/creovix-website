"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionValue, useTransform, useSpring } from "framer-motion";
import {
  Users,
  Bell,
  ShieldCheck,
  Globe,
  Briefcase,
  ShoppingCart,
  Building2,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

interface LaptopMockupProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

interface ScreenshotSlide {
  id: string;
  name: string;
  url: string;
  badge: string;
  icon: React.ElementType;
}

const slides: ScreenshotSlide[] = [
  {
    id: "website",
    name: "Business Website",
    url: "corporate.creovix.com",
    badge: "100/100 Speed Score",
    icon: Globe,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    url: "creovix.com",
    badge: "Design Award",
    icon: Briefcase,
  },
  {
    id: "crm",
    name: "CRM Platform",
    url: "crm.creovix.com",
    badge: "Automated Pipeline",
    icon: Users,
  },
  {
    id: "stackpilot",
    name: "StackPilot OS",
    url: "stackpilot.creovix.com",
    badge: "Flagship Suite",
    icon: Sparkles,
  },
  {
    id: "erp",
    name: "ERP Enterprise",
    url: "erp.creovix.com",
    badge: "Multi-Dept Sync",
    icon: Building2,
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    url: "store.creovix.com",
    badge: "Instant Checkout",
    icon: ShoppingCart,
  },
];

export function LaptopMockup({ mouseX, mouseY }: LaptopMockupProps) {
  // Smooth spring physics for 3D tilt interaction (Max 5 degrees)
  const rawRotateX = useTransform(mouseY || new MotionValue(0), [-0.5, 0.5], [6, -4]);
  const rawRotateY = useTransform(mouseX || new MotionValue(0), [-0.5, 0.5], [-7, 7]);

  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 20 });

  // Active slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = slides[currentSlide];

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center perspective-[1400px]">
      {/* Laptop Floating Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full transition-transform duration-200 ease-out"
      >
        {/* Soft Ambient Purple Glow Behind Screen */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-800/30 blur-[90px] rounded-full pointer-events-none opacity-80" />

        {/* ----------------- LAPTOP DISPLAY UNIT ----------------- */}
        <div className="relative mx-auto w-[92%] sm:w-[94%] md:w-[96%] max-w-[920px] rounded-[20px] sm:rounded-[24px] bg-[#16161c] p-2.5 sm:p-3 shadow-2xl ring-1 ring-white/20 border border-white/10 overflow-hidden">
          {/* Top Display Bezel Notch & Webcam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 sm:h-4 w-28 sm:w-36 bg-[#0a0a0d] rounded-b-xl z-30 flex items-center justify-center gap-2 border-b border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />
            <span className="w-1 h-1 rounded-full bg-emerald-500/80 shadow-xs shadow-emerald-400" />
          </div>

          {/* Screen Inner Frame Container */}
          <div className="relative w-full aspect-[16/10] bg-[#0d0d12] rounded-lg sm:rounded-xl overflow-hidden border border-white/10 flex flex-col text-xs select-none">
            {/* Glossy Screen Reflection Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />

            {/* 1. APP TOP BAR */}
            <div className="h-8 sm:h-9 bg-[#121218] border-b border-white/10 px-3 sm:px-4 flex items-center justify-between z-10 shrink-0">
              {/* Window Dots & App Name */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="hidden sm:inline-block text-[11px] font-medium text-zinc-400 pl-2 border-l border-white/10">
                  Creovix.Stack
                </span>
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 bg-[#09090c] px-3 py-1 rounded-full border border-white/10 text-[10px] text-zinc-400 max-w-[200px] sm:max-w-[300px] w-full justify-center">
                <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                <span className="truncate text-zinc-300 font-mono">{active.url}</span>
              </div>

              {/* Top Right Quick Actions */}
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="hidden sm:flex items-center gap-1 bg-purple-950/40 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {active.badge}
                </div>
                <Bell className="h-3.5 w-3.5 hover:text-white transition-colors" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">
                  CX
                </div>
              </div>
            </div>

            {/* 2. SCREENSHOT TABS SELECTOR STRIP */}
            <div className="bg-[#0b0b0e] border-b border-white/5 px-2 py-1 flex items-center justify-center gap-1 sm:gap-2 z-10 shrink-0 overflow-x-auto">
              {slides.map((s, idx) => {
                const Icon = s.icon;
                const isSelected = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium transition-all shrink-0 ${
                      isSelected
                        ? "bg-purple-900/60 text-white border border-purple-500/40 shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`h-3 w-3 ${isSelected ? "text-purple-300" : "text-zinc-500"}`} />
                    <span>{s.name}</span>
                  </button>
                );
              })}
            </div>

            {/* 3. ROTATING SCREENSHOT CANVAS */}
            <div className="flex-1 p-3 sm:p-4 bg-[#0a0a0e] overflow-hidden flex flex-col justify-between relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full flex flex-col justify-between"
                >
                  {/* SLIDE 1: BUSINESS WEBSITE */}
                  {active.id === "website" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="bg-gradient-to-r from-purple-950/40 via-[#13121d] to-[#0d0d12] rounded-xl p-4 border border-purple-500/20 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                            Next.js 15 Corporate Site
                          </span>
                          <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 100/100 Speed
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                            Engineered for High-Conversion & Global Reach
                          </h4>
                          <p className="text-[10px] sm:text-xs text-zinc-400 font-light mt-1">
                            Blazing fast page loads, pixel-perfect responsiveness, and automated lead funnels.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <div className="bg-purple-600 text-white text-[9px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                            <span>Get Started</span>
                            <ArrowRight className="h-2.5 w-2.5" />
                          </div>
                          <div className="border border-white/10 text-zinc-300 text-[9px] font-medium px-3 py-1 rounded-full">
                            Explore Capabilities
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#121218] border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs font-bold text-white font-mono">+240%</div>
                          <div className="text-[8px] text-zinc-400">Conversion Rate</div>
                        </div>
                        <div className="bg-[#121218] border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs font-bold text-purple-300 font-mono">&lt; 0.4s</div>
                          <div className="text-[8px] text-zinc-400">LCP Load Time</div>
                        </div>
                        <div className="bg-[#121218] border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs font-bold text-emerald-400 font-mono">#1 SEO</div>
                          <div className="text-[8px] text-zinc-400">Google Ranking</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 2: PORTFOLIO */}
                  {active.id === "portfolio" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          Award-Winning Client Portfolio
                        </span>
                        <span className="text-[9px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                          Selected Works 2026
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="bg-gradient-to-br from-[#161522] to-[#0d0c14] border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                          <div className="space-y-1">
                            <span className="text-[8px] text-purple-400 font-mono uppercase">Fintech App</span>
                            <div className="text-xs font-bold text-white">AuraPay Platform</div>
                          </div>
                          <div className="text-[9px] text-zinc-400 font-light">$4.2M Transaction Vol</div>
                        </div>

                        <div className="bg-gradient-to-br from-[#161522] to-[#0d0c14] border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                          <div className="space-y-1">
                            <span className="text-[8px] text-indigo-400 font-mono uppercase">HealthTech</span>
                            <div className="text-xs font-bold text-white">MediSync Telehealth</div>
                          </div>
                          <div className="text-[9px] text-zinc-400 font-light">120k Active Patients</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 3: CRM PLATFORM */}
                  {active.id === "crm" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-purple-400" />
                          Custom CRM & Lead Funnel
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400">14 Active Leads Today</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 flex-1">
                        <div className="bg-[#121218] border border-purple-500/30 rounded-xl p-2.5 space-y-2">
                          <div className="flex justify-between items-center text-[9px] font-semibold text-purple-300">
                            <span>QUALIFIED</span>
                            <span>$42k</span>
                          </div>
                          <div className="bg-[#1b1a26] p-2 rounded border border-white/5 space-y-1">
                            <div className="text-[10px] font-bold text-white">Nexus Corp</div>
                            <div className="text-[8px] text-zinc-400">Custom ERP Suite</div>
                          </div>
                        </div>

                        <div className="bg-[#121218] border border-indigo-500/30 rounded-xl p-2.5 space-y-2">
                          <div className="flex justify-between items-center text-[9px] font-semibold text-indigo-300">
                            <span>PROPOSAL</span>
                            <span>$85k</span>
                          </div>
                          <div className="bg-[#1b1a26] p-2 rounded border border-white/5 space-y-1">
                            <div className="text-[10px] font-bold text-white">Vanguard Inc</div>
                            <div className="text-[8px] text-zinc-400">SaaS Multi-Tenant</div>
                          </div>
                        </div>

                        <div className="bg-[#121218] border border-emerald-500/30 rounded-xl p-2.5 space-y-2">
                          <div className="flex justify-between items-center text-[9px] font-semibold text-emerald-300">
                            <span>CLOSED WON</span>
                            <span>$120k</span>
                          </div>
                          <div className="bg-[#1b1a26] p-2 rounded border border-white/5 space-y-1">
                            <div className="text-[10px] font-bold text-white">Orion Global</div>
                            <div className="text-[8px] text-emerald-400">Contract Signed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 4: STACKPILOT OS */}
                  {active.id === "stackpilot" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#13131a] border border-white/10 rounded-xl p-2.5">
                          <span className="text-[9px] text-zinc-400">Monthly Revenue</span>
                          <div className="text-xs sm:text-sm font-bold text-purple-300 font-mono">$148,920</div>
                        </div>
                        <div className="bg-[#13131a] border border-white/10 rounded-xl p-2.5">
                          <span className="text-[9px] text-zinc-400">Active CRM Leads</span>
                          <div className="text-xs sm:text-sm font-bold text-white font-mono">1,420</div>
                        </div>
                        <div className="bg-[#13131a] border border-white/10 rounded-xl p-2.5">
                          <span className="text-[9px] text-zinc-400">Uptime</span>
                          <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">99.98%</div>
                        </div>
                      </div>

                      <div className="bg-[#13131a] border border-white/10 rounded-xl p-3 flex-1 flex flex-col justify-between">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-white">StackPilot Operational Telemetry</span>
                          <span className="text-[9px] text-purple-400 font-mono">Real-time Sync</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#0b0b0e] p-2 rounded border border-amber-500/30 text-[9px]">
                            <span className="text-amber-400 font-bold block mb-1">In Progress (4)</span>
                            <span className="text-zinc-300">AWS Edge Deploy</span>
                          </div>
                          <div className="bg-[#0b0b0e] p-2 rounded border border-blue-500/30 text-[9px]">
                            <span className="text-blue-400 font-bold block mb-1">QA Audit (2)</span>
                            <span className="text-zinc-300">Invoice PDF Engine</span>
                          </div>
                          <div className="bg-[#0b0b0e] p-2 rounded border border-emerald-500/30 text-[9px]">
                            <span className="text-emerald-400 font-bold block mb-1">Completed (18)</span>
                            <span className="text-zinc-300">Client Portal Auth</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 5: ERP ENTERPRISE */}
                  {active.id === "erp" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                          Enterprise ERP Suite & Resource Flow
                        </span>
                        <span className="text-[9px] font-mono text-purple-300">5 Modules Synced</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="bg-[#121218] border border-white/10 rounded-xl p-3 space-y-2">
                          <span className="text-[9px] text-zinc-400 font-mono">SUPPLY CHAIN & STOCKS</span>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-white">
                              <span>Warehouse A (US East)</span>
                              <span className="text-emerald-400 font-mono">4,820 units</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-400 w-[85%]" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#121218] border border-white/10 rounded-xl p-3 space-y-2">
                          <span className="text-[9px] text-zinc-400 font-mono">FINANCE & DISBURSEMENT</span>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-white">
                              <span>Monthly Payroll Sync</span>
                              <span className="text-purple-400 font-mono">100% Processed</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 w-[100%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 6: ECOMMERCE */}
                  {active.id === "ecommerce" && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <ShoppingCart className="h-3.5 w-3.5 text-emerald-400" />
                          High-Conversion E-Commerce Storefront
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400">$24,890 Sales Today</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 flex-1">
                        <div className="bg-[#121218] border border-white/10 rounded-xl p-2 flex flex-col justify-between">
                          <div className="h-12 bg-purple-950/40 rounded border border-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-300">
                            Product Card 01
                          </div>
                          <div className="flex justify-between items-center text-[9px] mt-1">
                            <span className="text-white font-bold">$149</span>
                            <span className="text-emerald-400">In Stock</span>
                          </div>
                        </div>

                        <div className="bg-[#121218] border border-white/10 rounded-xl p-2 flex flex-col justify-between">
                          <div className="h-12 bg-indigo-950/40 rounded border border-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                            Product Card 02
                          </div>
                          <div className="flex justify-between items-center text-[9px] mt-1">
                            <span className="text-white font-bold">$299</span>
                            <span className="text-emerald-400">In Stock</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-950/50 to-[#121218] border border-emerald-500/30 rounded-xl p-2 flex flex-col justify-between">
                          <span className="text-[8px] text-emerald-300 font-mono uppercase">Stripe Checkout</span>
                          <div className="text-[10px] font-bold text-white">Instant Sync</div>
                          <div className="bg-emerald-600 text-white text-[8px] font-bold py-1 rounded text-center">
                            Paid 100%
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Animated Floating Pointer Cursor */}
              <motion.div
                animate={{
                  x: [30, 280, 180, 90, 30],
                  y: [100, 30, 120, 60, 100],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute z-30 pointer-events-none"
              >
                <svg className="w-5 h-5 text-purple-300 drop-shadow-md filter" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ----------------- LAPTOP LOWER BASE & KEYBOARD HINGE ----------------- */}
        <div className="relative mx-auto w-[98%] sm:w-[99%] max-w-[980px] h-3.5 sm:h-5 bg-gradient-to-b from-[#24242e] via-[#1a1a22] to-[#101016] rounded-b-2xl shadow-2xl border-t border-white/10 flex items-center justify-center">
          {/* Opening Notch Lip */}
          <div className="w-16 sm:w-24 h-1.5 bg-[#09090c] rounded-b-md border-x border-b border-white/10" />
        </div>

        {/* Soft Ambient Shadow & Glow Underneath Laptop Base */}
        <div className="relative mx-auto w-[85%] h-6 bg-purple-950/40 blur-2xl rounded-full -mt-2 pointer-events-none" />
      </motion.div>
    </div>
  );
}

