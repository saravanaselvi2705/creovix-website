"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Layers,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  displayCategory: string;
  description: string;
  businessImpact?: string;
  imageUrl: string;
  altText: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isFullStack?: boolean;
  isFeatured: boolean;
  keyFeatures: string[];
  filterCategories: string[];
}

const featuredProjects: ProjectItem[] = [
  {
    id: "stackpilot-ai",
    title: "StackPilot AI",
    category: "Enterprise SaaS",
    displayCategory: "Enterprise SaaS",
    description:
      "An enterprise project management and business operations platform engineered to unify fragmented business tools, automate administrative workflows, and boost operational efficiency.",
    businessImpact:
      "Consolidates 5+ fragmented operational tools into one centralized platform, saving up to 15+ billable team hours per week and reducing operational management overhead by 35%.",
    imageUrl: "/projects/stackpilot-ai.png",
    altText: "StackPilot AI enterprise project management and business operations dashboard",
    tags: ["React", "TypeScript", "Node.js", "REST API", "Database", "AI"],
    githubUrl: "https://github.com/saravanaselvi2705/stackpilot-ai",
    liveUrl: "https://stackpilot-ai-seven.vercel.app/",
    isFullStack: true,
    isFeatured: true,
    keyFeatures: [
      "Project Management",
      "CRM & Sales",
      "Finance & Invoicing",
      "Reports & Analytics",
      "Team Workflows",
      "Calendar Sync",
      "Administration",
      "AI Workspace",
    ],
    filterCategories: ["All", "SaaS", "Business Platforms", "Web Apps"],
  },
  {
    id: "auctionhub",
    title: "AuctionHub",
    category: "Full-Stack Web Application",
    displayCategory: "Web App",
    description:
      "A high-concurrency online auction platform built for instant transaction processing, real-time bid updates, and automated buyer/seller matchmaking.",
    businessImpact:
      "Processes real-time multi-user bids with sub-50ms latency, enabling 24/7 transaction automation and driving a 40% boost in buyer engagement.",
    imageUrl: "/projects/auctionhub.png",
    altText: "AuctionHub online auction platform seller dashboard with products and auction statistics",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
    ],
    githubUrl: "",
    liveUrl: "https://auction-platform-silk.vercel.app/",
    isFullStack: true,
    isFeatured: true,
    keyFeatures: [
      "Authentication & RBAC",
      "Product Management",
      "Auctions & Bidding",
      "Bid Validation & History",
      "Automated Winner Selection",
      "Seller Dashboard",
      "Buyer Dashboard",
    ],
    filterCategories: ["All", "Web Apps", "SaaS"],
  },
  {
    id: "clientflow-crm",
    title: "ClientFlow CRM",
    category: "CRM / Business Platform",
    displayCategory: "CRM Platform",
    description:
      "A modern full-stack sales pipeline & CRM system built to eliminate manual lead entry, accelerate deal closure cycles, and provide real-time revenue analytics.",
    businessImpact:
      "Automates lead capture, task distribution, and pipeline follow-ups, resulting in a 28% increase in sales conversion rates and eliminating manual data re-entry.",
    imageUrl: "/projects/clientflow-crm.png",
    altText: "ClientFlow CRM business dashboard showing leads, deals, revenue and sales pipeline",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "Database", "REST API"],
    githubUrl: "https://github.com/saravanaselvi2705/StackCRM",
    liveUrl: "https://stack-crm-eight.vercel.app/login",
    isFullStack: true,
    isFeatured: true,
    keyFeatures: [
      "Lead Pipeline Management",
      "Contact & Client Tracking",
      "Company Database",
      "Deals & Forecasting",
      "Sales Task Automation",
      "Revenue Reports",
      "Analytics Dashboard",
    ],
    filterCategories: ["All", "CRM", "SaaS", "Business Platforms"],
  },
];

const additionalProjects: ProjectItem[] = [
  {
    id: "creovix-agency",
    title: "Creovix Digital Agency Website",
    category: "Business Website",
    displayCategory: "Agency Platform",
    description:
      "A modern, high-conversion agency web platform showcasing full-stack SaaS engineering, custom software solutions, portfolio showcases, and client booking workflows.",
    businessImpact:
      "Engineered for maximum conversion with interactive service calculators, instant Calendly booking integration, and 98+ Lighthouse performance optimization.",
    imageUrl: "/projects/creovix-agency.png",
    altText: "Creovix Digital Agency Website homepage and services showcase",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/saravanaselvi2705/creovix-website",
    liveUrl: "https://creovix-website.vercel.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "High-conversion agency layout",
      "Interactive project portfolio",
      "Client discovery scheduling",
      "Responsive UI & dark design system",
    ],
    filterCategories: ["All", "Business Websites", "Websites"],
  },
  {
    id: "keerthika-portfolio",
    title: "Graphic Designer Portfolio Showcase",
    category: "Portfolio Website",
    displayCategory: "Client Portfolio",
    description:
      "A sleek, high-impact digital portfolio website built for a graphic design professional, featuring custom project galleries, responsive layouts, and creative brand presentation.",
    businessImpact:
      "Elevates brand presentation with fluid visual grids, fast asset loading, and optimized gallery layouts for client design showcases.",
    imageUrl: "/projects/keerthika-portfolio.png",
    altText: "Graphic Designer Portfolio website showcase with design work gallery",
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    githubUrl: "https://github.com/saravanaselvi2705/keerthika-portfolio",
    liveUrl: "https://keerthika-portfolio-8ucn.vercel.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "Design portfolio gallery",
      "Responsive grid presentation",
      "Custom branding integration",
      "Contact & inquiry channels",
    ],
    filterCategories: ["All", "Portfolio Websites", "Websites"],
  },
  {
    id: "ashidh-qa",
    title: "QA & Test Engineering Platform",
    category: "Portfolio Website",
    displayCategory: "Engineering Portfolio",
    description:
      "A specialized web portfolio built for a Software Test Engineer, featuring quality assurance automation case studies, technical skill matrices, and test suite breakdowns.",
    businessImpact:
      "Structured presentation of automated test suites, QA methodologies, bug tracking frameworks, and software verification projects.",
    imageUrl: "/projects/ashidh-qa.png",
    altText: "QA and Test Engineer portfolio website showing testing projects and technical skills",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/saravanaselvi2705/AshidhTestEngineer",
    liveUrl: "https://ashidh-test-engineer.vercel.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "QA automation showcase",
      "Test metrics & case studies",
      "Interactive skills roadmap",
      "Responsive multi-device layout",
    ],
    filterCategories: ["All", "Portfolio Websites", "Websites"],
  },
  {
    id: "personal-portfolio",
    title: "Digital Portfolio Platform",
    category: "Portfolio Website",
    displayCategory: "Portfolio Platform",
    description:
      "A responsive web portfolio platform featuring dynamic project showcases, interactive skill roadmaps, experience timelines, and lead contact forms.",
    businessImpact:
      "Demonstrates modular component architecture, smooth client routing, and responsive web presentation.",
    imageUrl: "/projects/digital-portfolio.png",
    altText: "Digital portfolio platform website screenshot",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Netlify"],
    githubUrl: "https://github.com/saravanaselvi2705",
    liveUrl: "https://candid-fudge-74ec78.netlify.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "Dynamic project showcase",
      "Interactive experience timeline",
      "Technical skills matrix",
      "Contact form integration",
    ],
    filterCategories: ["All", "Portfolio Websites", "Websites"],
  },
  {
    id: "expense-tracker",
    title: "Smart Expense Tracker",
    category: "Web Application",
    displayCategory: "Finance Application",
    description:
      "A responsive financial management web application for tracking income, operational expenses, budget limits, and real-time financial summary analytics.",
    businessImpact:
      "Simplifies personal & business budget management with dynamic chart visualizer, transaction filters, and balance calculations.",
    imageUrl: "/projects/expense-tracker.png",
    altText: "Smart Expense Tracker web dashboard showing financial charts and expense logs",
    tags: ["React", "JavaScript", "Charts.js", "Responsive Design"],
    githubUrl: "https://github.com/saravanaselvi2705/smart-expense-tracker",
    liveUrl: "https://vocal-crisp-ff6daf.netlify.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "Income & expense logging",
      "Budget calculations & balance summaries",
      "Interactive data charts",
      "Responsive mobile dashboard",
    ],
    filterCategories: ["All", "Web Applications", "React"],
  },
  {
    id: "notes-app",
    title: "Notes & Workflow App",
    category: "Web Application",
    displayCategory: "Web Application",
    description:
      "A lightweight CRUD web application for managing tasks, quick notes, and organized workflows with local data persistence and real-time state sync.",
    businessImpact:
      "Provides zero-latency note creation and instant local storage persistence for daily task organization.",
    imageUrl: "/projects/notes-app.png",
    altText: "Notes and workflow web application interface",
    tags: ["React", "JavaScript", "CRUD", "Local Storage"],
    githubUrl: "https://github.com/saravanaselvi2705/notesapp",
    liveUrl: "https://notesapp-pearl-nu.vercel.app/",
    isFullStack: false,
    isFeatured: false,
    keyFeatures: [
      "Complete CRUD operations",
      "Instant state management",
      "Local Storage persistence",
      "Clean minimal interface",
    ],
    filterCategories: ["All", "Web Applications", "React"],
  },
];

const categories = [
  "All",
  "SaaS",
  "Web Applications",
  "Business Websites",
  "Portfolio Websites",
];

interface FeaturedProjectsProps {
  isEmbedded?: boolean;
}

export function FeaturedProjects({ isEmbedded = false }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter featured projects based on category
  const filteredFeatured =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) =>
          p.filterCategories.includes(activeCategory)
        );

  // Filter additional projects based on category
  const filteredAdditional =
    activeCategory === "All"
      ? additionalProjects
      : additionalProjects.filter((p) =>
          p.filterCategories.includes(activeCategory)
        );

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

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#111116] border border-white/10 rounded-2xl shadow-inner max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProject(null);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Featured Projects Grid (Top 3) */}
      <div className="w-full max-w-7xl mx-auto pb-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-[#111116] border border-white/10 hover:border-purple-500/50 rounded-3xl overflow-hidden transition-all duration-300 text-left hover:shadow-2xl hover:shadow-purple-950/40"
            >
              {/* 16:9 Real Screenshot Banner */}
              <div className="relative w-full aspect-[16/9] bg-[#0c0c12] overflow-hidden shrink-0 border-b border-white/10">
                <Image
                  src={project.imageUrl}
                  alt={project.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority={project.id === "stackpilot-ai"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-80" />

                {/* Badges Overlay */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 items-center z-10">
                  {project.isFullStack && (
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#09090b]/90 border border-purple-500/50 text-[10px] font-extrabold text-purple-300 shadow-md tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      <span>FULL STACK</span>
                    </div>
                  )}
                  <div className="px-2.5 py-1 rounded-full bg-[#09090b]/90 border border-white/10 text-[10px] font-semibold text-zinc-300">
                    {project.displayCategory}
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-2 font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-[10px] font-medium tracking-wide rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Feature Badges */}
                  <div className="pt-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 block mb-1.5">
                      Key Features
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.keyFeatures.slice(0, 4).map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] rounded bg-purple-950/40 text-purple-200 border border-purple-500/20"
                        >
                          {feat}
                        </span>
                      ))}
                      {project.keyFeatures.length > 4 && (
                        <span className="px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                          +{project.keyFeatures.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Business Impact Block */}
                  {project.businessImpact && (
                    <div className="pt-2">
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 shadow-inner">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Business Impact & ROI</span>
                        </div>
                        <p className="text-xs text-zinc-300 font-light leading-relaxed">
                          {project.businessImpact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-white hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#161620] text-xs font-semibold text-zinc-300 hover:text-white hover:border-purple-500/40 transition-colors inline-flex items-center gap-1"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5 text-purple-400" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-all inline-flex items-center gap-1 shadow-md shadow-purple-900/40"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Projects Section (Initially Hidden, Expanded on Click) */}
      {showMore && (
        <div className="w-full max-w-7xl mx-auto pt-10 pb-4 animate-in fade-in slide-in-from-top-4 duration-500">
          {/* Subtle Divider Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              More From Our Portfolio
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Compact Additional Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdditional.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col h-full bg-[#111116] border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden transition-all duration-300 text-left hover:shadow-xl hover:shadow-purple-950/30"
              >
                {/* 16:9 Image Screenshot */}
                <div className="relative w-full aspect-[16/9] bg-[#0c0c12] overflow-hidden shrink-0 border-b border-white/10">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-70" />

                  {/* Category Tag Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#09090b]/90 border border-purple-500/30 text-[10px] font-bold text-purple-300 shadow-sm uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Compact Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed mt-1.5 font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-medium tracking-wide rounded bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-zinc-300 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      <span>View Project</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg border border-white/10 bg-[#161620] text-[11px] font-semibold text-zinc-300 hover:text-white hover:border-purple-500/40 transition-colors inline-flex items-center gap-1"
                          title="GitHub Repository"
                        >
                          <Github className="w-3 h-3 text-purple-400" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-lg bg-purple-600 text-white font-bold text-[11px] hover:bg-purple-500 transition-all inline-flex items-center gap-1 shadow-md shadow-purple-900/30"
                          title="Live Demo"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show More / Show Less Centered CTA Button */}
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

      {/* Project Details Modal (Supports all projects) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#111116] border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col justify-between my-auto text-left">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-500/40 text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                    {selectedProject.isFeatured ? "FEATURED PROJECT" : "CREOVIX STACK"}
                  </span>
                  <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    {selectedProject.displayCategory}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
                aria-label="Close details modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 overflow-y-auto pr-1 text-left flex-1">
              {/* Large Real Screenshot Display */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c12]">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.altText}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {/* Business Impact Block */}
              {selectedProject.businessImpact && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-1.5 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span>Business Impact & Delivered Value</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
                    {selectedProject.businessImpact}
                  </p>
                </div>
              )}

              {/* Key Features Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Key Features & Workflows
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-zinc-200 bg-white/5 p-2.5 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono bg-purple-950/50 text-purple-200 border border-purple-500/30 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Buttons Footer */}
            <div className="flex items-center justify-end space-x-3 pt-6 mt-6 border-t border-white/10">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-[#171720] text-xs font-semibold text-zinc-200 hover:text-white hover:border-purple-500/40 transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-900/40"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Explore Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
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
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {content}
      </div>
    </section>
  );
}
