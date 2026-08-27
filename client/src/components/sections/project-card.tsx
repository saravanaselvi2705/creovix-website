"use client";

import React from "react";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectCardData {
  title: string;
  type: string; // Badge label (e.g. "Enterprise SaaS")
  typeColor?: "blue" | "purple" | "emerald" | "amber"; // Badge colour theme
  description: string;
  tech: string[];
  businessImpact: string; // Plain text – bold markers handled by component
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  className?: string;
}

// ─── Badge colour maps ─────────────────────────────────────────────────────────

const badgeStyles: Record<
  NonNullable<ProjectCardData["typeColor"]>,
  { pill: string }
> = {
  blue: {
    pill: "bg-blue-950/60 text-blue-300 border border-blue-500/30",
  },
  purple: {
    pill: "bg-purple-950/60 text-purple-300 border border-purple-500/30",
  },
  emerald: {
    pill: "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30",
  },
  amber: {
    pill: "bg-amber-950/60 text-amber-300 border border-amber-500/30",
  },
};

// ─── Helper – bold key numbers inside impact text ─────────────────────────────
// Words/phrases wrapped in **…** become <strong> nodes.
// If no markers are present the whole string is rendered as-is.
function renderImpactText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const theme = badgeStyles[project.typeColor ?? "blue"];

  return (
    <article
      className={[
        // Base
        "group relative flex flex-col font-sans",
        // Spacing
        "p-8 lg:p-10",
        // Border & background – dark-first (site is dark-only)
        "bg-[#111116] border border-white/10 rounded-2xl",
        // Hover elevation
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/30 hover:border-white/20",
        className,
      ].join(" ")}
    >
      {/* ── Subtle glow on hover ── */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5" />

      {/* ══════════════════════════════════════
          1. HEADER
      ══════════════════════════════════════ */}
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
        {/* Left – title + description */}
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 font-light max-w-xl">
            {project.description}
          </p>
        </div>

        {/* Right – type badge */}
        <div className="shrink-0 sm:ml-4 mt-0.5">
          <span
            className={[
              "inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap",
              theme.pill,
            ].join(" ")}
          >
            {project.type}
          </span>
        </div>
      </header>

      {/* ══════════════════════════════════════
          2. TECH STACK
      ══════════════════════════════════════ */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.tech.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md bg-white/5 text-zinc-300 border border-white/8"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ══════════════════════════════════════
          3. BUSINESS IMPACT CALLOUT
      ══════════════════════════════════════ */}
      <div className="mb-7 pl-4 border-l-2 border-blue-500 bg-blue-900/10 rounded-r-xl py-3.5 pr-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">
          Business Impact &amp; ROI
        </p>
        <p className="text-sm text-zinc-300 font-light leading-relaxed">
          {renderImpactText(project.businessImpact)}
        </p>
      </div>

      {/* Spacer pushes footer to the bottom in flex columns */}
      <div className="flex-1" />

      {/* ══════════════════════════════════════
          4. FOOTER – action buttons
      ══════════════════════════════════════ */}
      <footer className="flex items-center gap-3 pt-6 border-t border-white/8">
        {/* Primary – Live Demo */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
              "bg-white text-zinc-900 font-bold text-xs",
              "hover:bg-zinc-100 active:scale-[0.97]",
              "transition-all duration-200 shadow-md shadow-white/5",
            ].join(" ")}
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            <span>Live Demo</span>
          </a>
        )}

        {/* Secondary – View GitHub */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
              "border border-white/15 bg-transparent text-zinc-300 font-semibold text-xs",
              "hover:border-white/30 hover:text-white",
              "transition-all duration-200",
            ].join(" ")}
          >
            <Github className="w-3.5 h-3.5 shrink-0" />
            <span>View GitHub</span>
          </a>
        )}
      </footer>
    </article>
  );
}

// ─── Demo / Preview usage ─────────────────────────────────────────────────────
// Import this wherever you need to preview the card in isolation.

export const stackPilotDemo: ProjectCardData = {
  title: "StackPilot AI",
  type: "Enterprise SaaS",
  typeColor: "blue",
  description:
    "Engineered to unify fragmented business tools, automate administrative workflows, and boost operational efficiency.",
  tech: ["React", "TypeScript", "Node.js", "REST API", "Database", "AI"],
  businessImpact:
    "Consolidates **5+ fragmented operational tools** into one centralized platform, saving up to **15+ billable team hours per week** and reducing operational management overhead by **35%**.",
  liveUrl: "https://stackpilot-ai-seven.vercel.app/",
  githubUrl: "https://github.com/saravanaselvi2705/stackpilot-ai",
};
