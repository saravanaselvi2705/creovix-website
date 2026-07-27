"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, 
  Layers, Users, Calendar, FileText, BarChart3, UserCheck, Lock, FolderKanban, Check 
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const stackPilotModules = [
  {
    title: "Project Management",
    desc: "Agile boards, milestone tracking, Gantt views, and project progress reporting.",
    icon: FolderKanban,
  },
  {
    title: "Customer Relationship Management (CRM)",
    desc: "Lead pipeline tracking, client communication logs, stage management, and revenue forecasts.",
    icon: Users,
  },
  {
    title: "Task Management",
    desc: "Granular task assignments, subtasks, priority levels, deadline reminders, and status tags.",
    icon: CheckCircle2,
  },
  {
    title: "Team Management",
    desc: "Team directory, workload distribution, activity feeds, and performance tracking.",
    icon: Users,
  },
  {
    title: "Calendar & Schedule Sync",
    desc: "Integrated calendar for meetings, deadlines, sprint milestones, and client calls.",
    icon: Calendar,
  },
  {
    title: "Reports & Financials",
    desc: "Custom reporting engines, project profitability graphs, and automated PDF export.",
    icon: BarChart3,
  },
  {
    title: "HR & Leave Portal",
    desc: "Employee leave requests, approval flows, attendance logs, and team availability views.",
    icon: UserCheck,
  },
  {
    title: "Dashboard Analytics",
    desc: "Real-time executive summaries with interactive charts, KPIs, and goal progress bars.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "Granular permissions for Super Admin, Admin, Manager, Employee, and Client roles.",
    icon: Lock,
  },
  {
    title: "Document Management",
    desc: "Secure document cloud, asset versioning, client file uploads, and attachment previews.",
    icon: FileText,
  },
];

export default function StackPilotPage() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow">
        {/* StackPilot Hero */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-purple-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25)_0%,_rgba(6,6,10,1)_80%)] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/80 px-4 py-1.5 text-xs font-bold text-purple-300 mb-6 purple-glow-sm">
              <Sparkles className="h-4 w-4 text-purple-400" /> CREOVIX STACK FLAGSHIP PRODUCT
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              StackPilot SaaS <br />
              <span className="gradient-text">Custom Enterprise Platform</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              StackPilot is Creovix Stack&apos;s all-in-one customizable business management platform. Engineered for startups, agencies, and enterprise teams needing tailored CRM, project tracking, HR, calendar, and role-based analytics.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="gap-2 font-semibold px-8 py-3 h-auto">
                  Launch StackPilot Live <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="font-semibold px-8 py-3 h-auto">
                  Request Custom Implementation
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-purple-300 font-semibold border-t border-purple-900/30 pt-8">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-purple-400" /> QA Tested</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-purple-400" /> Secure JWT Auth</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-purple-400" /> Enterprise Ready</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-purple-400" /> Performance Optimized</span>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-24 border-b border-purple-900/30 bg-[#111827]/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                Customizable Modules
              </span>
              <h2 className="font-heading mt-2 text-3xl font-extrabold text-white">
                Everything Your Business Needs in One Interface
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-gray-400">
                Every StackPilot deployment is customized to fit your company&apos;s unique operational workflows.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackPilotModules.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-purple-900/30 bg-[#111827]/80 p-6 glass-card-hover"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {mod.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Live App Banner CTA */}
        <section className="py-20 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] border-b border-purple-900/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-white">
              Try the StackPilot Web App Now
            </h2>
            <p className="mt-3 text-sm text-purple-200 max-w-2xl mx-auto">
              Experience the sleek UI, real-time dashboard analytics, and modular design deployed live on Vercel.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="gap-2 font-semibold">
                  Open StackPilot Application <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
