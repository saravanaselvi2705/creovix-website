"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { Button } from "@/components/ui/button";

const projectsList = [
  {
    title: "Digital Wedding Invitation Card",
    category: "event-websites",
    metric: "Completed",
    status: "Completed",
    tags: ["Wedding Invitation Website", "Mobile-First", "Interactive Invitation", "WhatsApp Sharing"],
    slug: "shivashika-rahul-wedding",
    imageUrl: "/projects/shivashika-rahul.png",
    liveUrl: "https://rahulashika.vercel.app/",
    description:
      "A personalized digital wedding invitation website created to celebrate a special occasion and make the invitation easy to share with family and friends.",
  },
  {
    title: "StackPilot: Enterprise Management Platform",
    category: "web-development",
    metric: "Flagship Product",
    tags: ["Next.js 15", "Express.js", "MongoDB Atlas", "Tailwind CSS v4"],
    slug: "stackpilot-enterprise-platform",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "AeroDrive: Fleet Management System",
    category: "web-development",
    metric: "LCP 1.1s",
    tags: ["Next.js 15", "Express.js", "MongoDB", "Tailwind CSS v4"],
    slug: "aerodrive-fleet-management",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Legacy WordPress → Next.js 15 Migration",
    category: "redesign-modernization",
    metric: "+85% Speed Up",
    tags: ["WordPress API", "Next.js 15", "Tailwind CSS", "301 Mapping"],
    slug: "ecoshop-headless-woocommerce",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "ApexHealth: Local SEO Growth Program",
    category: "seo",
    metric: "+150% Leads",
    tags: ["Local SEO", "JSON-LD Schema", "Audit Tuning", "GBP"],
    slug: "apexhealth-local-seo",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "LedgerSync: Automated QA Audit Runs",
    category: "software-testing",
    metric: "100% QA Verified",
    tags: ["Playwright", "Cypress", "CI/CD Pipeline", "Regression Logs"],
    slug: "ledgersync-automated-testing",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "event-websites", label: "Event Websites" },
  { id: "web-development", label: "Web Development" },
  { id: "redesign-modernization", label: "Modernization" },
  { id: "software-testing", label: "Software Testing" },
  { id: "seo", label: "SEO Optimization" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Verified Deliverables
            </span>
            <h1 className="font-heading mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Portfolio & Case Studies
            </h1>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
              Explore our engineering portfolio of bespoke Next.js 15 web applications, flagship enterprise platforms (StackPilot), legacy site modernizations, and automated QA test runs.
            </p>
          </div>

          {/* Filters Menu */}
          <div className="mt-12 flex flex-wrap gap-3 border-b border-purple-900/30 pb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "primary" : "secondary"}
                size="sm"
                className="text-xs font-semibold"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <PortfolioCard
                key={idx}
                title={project.title}
                metric={project.metric}
                status={project.status}
                tags={project.tags}
                slug={project.slug}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                description={project.description}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-20 text-center py-16 rounded-xl border border-purple-900/30 bg-[#111827]/40 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-gray-300">No projects found</p>
              <p className="text-xs text-gray-400 mt-2">
                No case studies match this filter. Select another option to explore our work.
              </p>
              <Button
                onClick={() => setActiveCategory("all")}
                variant="secondary"
                size="sm"
                className="mt-6"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
