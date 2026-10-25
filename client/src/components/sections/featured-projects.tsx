"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, Layers } from "lucide-react";
import { ProjectCard, type ProjectCardData } from "./project-card";

// ─── Featured (top 3) ─────────────────────────────────────────────────────────

const featuredCardData: ProjectCardData[] = [
  {
    title: "StackPilot AI",
    type: "Enterprise SaaS",
    typeColor: "blue",
    description:
      "Engineered to unify fragmented business tools, automate administrative workflows, and boost operational efficiency.",
    tech: ["React", "TypeScript", "Node.js", "REST API", "Database", "AI"],
    businessImpact:
      "Consolidates **5+ fragmented operational tools** into one centralized platform, saving up to **15+ billable team hours** per week and reducing operational management overhead by **35%**.",
    liveUrl: "https://stackpilot-ai-seven.vercel.app/",
    githubUrl: "https://github.com/saravanaselvi2705/stackpilot-ai",
  },
  {
    title: "Shivashika & Rahul",
    type: "Wedding Invitation Website",
    typeColor: "purple",
    status: "Completed",
    description:
      "A personalized digital wedding invitation website created to celebrate a special occasion and make the invitation easy to share with family and friends.",
    tech: ["React", "Tailwind CSS", "Interactive Invitation", "WhatsApp Sharing", "Mobile Responsive"],
    businessImpact:
      "Delivered a bespoke digital invitation with **interactive wax-seal envelope opener**, instant **WhatsApp & social sharing**, and **mobile-responsive venue navigation**.",
    liveUrl: "https://rahulashika.vercel.app/",
    liveButtonText: "View Live Website",
    imageUrl: "/projects/shivashika-rahul.png",
  },
  {
    title: "AuctionHub",
    type: "Web Application",
    typeColor: "purple",
    description:
      "A high-concurrency online auction platform built for instant transaction processing, real-time bid updates, and automated buyer/seller matchmaking.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    businessImpact:
      "Processes real-time multi-user bids with **sub-50ms latency**, enabling **24/7 transaction automation** and driving a **40% boost** in buyer engagement.",
    liveUrl: "https://auction-platform-silk.vercel.app/",
  },
  {
    title: "ClientFlow CRM",
    type: "CRM Platform",
    typeColor: "emerald",
    description:
      "A modern full-stack sales pipeline & CRM system built to eliminate manual lead entry, accelerate deal closure cycles, and provide real-time revenue analytics.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Database", "REST API"],
    businessImpact:
      "Automates lead capture, task distribution, and pipeline follow-ups, resulting in a **28% increase** in sales conversion rates and **eliminating manual data re-entry**.",
    liveUrl: "https://stack-crm-eight.vercel.app/login",
    githubUrl: "https://github.com/saravanaselvi2705/StackCRM",
  },
];

// ─── Additional portfolio projects ────────────────────────────────────────────

const additionalCardData: ProjectCardData[] = [
  {
    title: "Creovix Digital Agency Website",
    type: "Agency Platform",
    typeColor: "blue",
    description:
      "A modern, high-conversion agency web platform showcasing full-stack SaaS engineering, custom software solutions, portfolio showcases, and client booking workflows.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    businessImpact:
      "Engineered for maximum conversion with interactive service calculators, instant Calendly booking integration, and **98+ Lighthouse performance** optimization.",
    liveUrl: "https://creovix-website.vercel.app/",
    githubUrl: "https://github.com/saravanaselvi2705/creovix-website",
  },
  {
    title: "Graphic Designer Portfolio",
    type: "Client Portfolio",
    typeColor: "amber",
    description:
      "A sleek, high-impact digital portfolio website built for a graphic design professional, featuring custom project galleries, responsive layouts, and creative brand presentation.",
    tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
    businessImpact:
      "Elevates brand presentation with **fluid visual grids**, fast asset loading, and optimized gallery layouts for client design showcases.",
    liveUrl: "https://keerthika-portfolio-8ucn.vercel.app/",
    githubUrl: "https://github.com/saravanaselvi2705/keerthika-portfolio",
  },
  {
    title: "QA & Test Engineering Platform",
    type: "Engineering Portfolio",
    typeColor: "purple",
    description:
      "A specialized web portfolio built for a Software Test Engineer, featuring quality assurance automation case studies, technical skill matrices, and test suite breakdowns.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    businessImpact:
      "Structured presentation of **automated test suites**, QA methodologies, bug tracking frameworks, and software verification projects.",
    liveUrl: "https://ashidh-test-engineer.vercel.app/",
    githubUrl: "https://github.com/saravanaselvi2705/AshidhTestEngineer",
  },
  {
    title: "Digital Portfolio Platform",
    type: "Portfolio Platform",
    typeColor: "emerald",
    description:
      "A responsive web portfolio platform featuring dynamic project showcases, interactive skill roadmaps, experience timelines, and lead contact forms.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Netlify"],
    businessImpact:
      "Demonstrates **modular component architecture**, smooth client routing, and responsive web presentation.",
    liveUrl: "https://candid-fudge-74ec78.netlify.app/",
    githubUrl: "https://github.com/saravanaselvi2705",
  },
  {
    title: "Smart Expense Tracker",
    type: "Finance Application",
    typeColor: "blue",
    description:
      "A responsive financial management web application for tracking income, operational expenses, budget limits, and real-time financial summary analytics.",
    tech: ["React", "JavaScript", "Charts.js", "Responsive Design"],
    businessImpact:
      "Simplifies personal & business budget management with **dynamic chart visualization**, transaction filters, and real-time balance calculations.",
    liveUrl: "https://vocal-crisp-ff6daf.netlify.app/",
    githubUrl: "https://github.com/saravanaselvi2705/smart-expense-tracker",
  },
  {
    title: "Notes & Workflow App",
    type: "Web Application",
    typeColor: "purple",
    description:
      "A lightweight CRUD web application for managing tasks, quick notes, and organized workflows with local data persistence and real-time state sync.",
    tech: ["React", "JavaScript", "CRUD", "Local Storage"],
    businessImpact:
      "Provides **zero-latency note creation** and instant local storage persistence for daily task organization.",
    liveUrl: "https://notesapp-pearl-nu.vercel.app/",
    githubUrl: "https://github.com/saravanaselvi2705/notesapp",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface FeaturedProjectsProps {
  isEmbedded?: boolean;
}

export function FeaturedProjects({ isEmbedded = false }: FeaturedProjectsProps) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const content = (
    <div className="relative z-10 font-sans">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md mb-4">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">
            Creovix Stack Project Portfolio
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-zinc-300 text-xs sm:text-base mt-2 max-w-2xl mx-auto font-light leading-relaxed">
          Real digital products and full-stack applications built by Creovix Stack.
        </p>
      </div>

      {/* ── Featured Cards Grid ── */}
      <div className="w-full max-w-7xl mx-auto pb-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {featuredCardData.map((card, idx) => (
            <ProjectCard key={idx} project={card} className="h-full" />
          ))}
        </div>
      </div>

      {/* ── Additional Portfolio Projects ── */}
      {showMore && (
        <div className="w-full max-w-7xl mx-auto pt-10 pb-4 animate-in fade-in slide-in-from-top-4 duration-500">
          {/* Divider Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              More From Our Portfolio
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {additionalCardData.map((card, idx) => (
              <ProjectCard key={idx} project={card} className="h-full" />
            ))}
          </div>
        </div>
      )}

      {/* Show More / Show Less CTA */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111116] border border-purple-500/40 text-purple-300 font-bold text-sm hover:bg-purple-950/40 hover:border-purple-400 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 cursor-pointer"
        >
          <span>{showMore ? "Show Less Projects" : "Show More Projects"}</span>
          {showMore ? (
            <ChevronUp className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
          ) : (
            <ChevronDown className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover:translate-y-0.5" />
          )}
        </button>
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section
      id="featured-projects"
      className="py-24 bg-[#09090b] relative overflow-hidden font-sans border-b border-white/5"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {content}
      </div>
    </section>
  );
}
