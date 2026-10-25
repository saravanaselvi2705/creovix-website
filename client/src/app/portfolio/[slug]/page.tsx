import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ArrowRight, ExternalLink } from "lucide-react";

interface ProjectData {
  title: string;
  category: string;
  duration: string;
  metric: string;
  metricLabel: string;
  liveUrl?: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  clientTestimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const projectsMap: Record<string, ProjectData> = {
  "stackpilot-enterprise-platform": {
    title: "StackPilot: Enterprise Management Platform",
    category: "Custom Software & SaaS",
    duration: "10 Weeks",
    metric: "100% Custom",
    metricLabel: "Bespoke SaaS Engine",
    tags: ["Next.js 15", "Express.js", "MongoDB Atlas", "Tailwind CSS v4", "JWT Auth"],
    challenge: "The client needed a scalable internal management platform uniting CRM, multi-tier project tracking, HR leaves, and document uploads into a single high-security portal.",
    solution: "We engineered StackPilot using Next.js 15, Node.js Express microservices, and MongoDB Atlas. We implemented strict role-based access control (RBAC), real-time KPI dashboards, and automated report generation.",
    results: [
      "Streamlined daily team workflows and client project tracking",
      "Unified HR leave requests and calendar scheduling into one dashboard",
      "Passed strict automated QA security and performance benchmarks",
      "Sub-second page load times across desktop and mobile devices",
    ],
    clientTestimonial: {
      quote: "StackPilot transformed how our enterprise operations function. Having CRM, task tracking, and HR in one clean portal is a game changer.",
      author: "David Miller",
      role: "CEO, NexaCorp Enterprise",
    },
  },
  "aerodrive-fleet-management": {
    title: "AeroDrive: Fleet Management System",
    category: "Full Stack Web Development",
    duration: "8 Weeks",
    metric: "LCP 1.1s",
    metricLabel: "Page Speed Score",
    tags: ["Next.js 15", "Express.js", "MongoDB", "Tailwind CSS v4", "TypeScript"],
    challenge: "The client needed a responsive dashboard to track 500+ commercial vehicles in real time without lag or layout shifts.",
    solution: "We engineered a clean custom web application using Next.js 15 SSR and Express.js, featuring indexing queries in MongoDB Atlas to fetch telemetry metrics instantly.",
    results: [
      "Page load speed LCP dropped to 1.1s (65% improvement)",
      "Eliminated dashboard crashes during concurrent logins",
      "Real-time telemetry queries respond in under 50ms",
      "Built-in test cases ensure stable monthly updates",
    ],
    clientTestimonial: {
      quote: "Creovix Stack built a highly responsive dashboard that handles our vehicle telemetry without issues.",
      author: "Robert Gellar",
      role: "Operations Director, AeroDrive Corp",
    },
  },
  "ecoshop-headless-woocommerce": {
    title: "Legacy WordPress → Next.js 15 Migration",
    category: "Website Redesign & Modernization",
    duration: "6 Weeks",
    metric: "+68%",
    metricLabel: "Sales Conversion Rate",
    tags: ["WordPress REST API", "Next.js 15", "WooCommerce", "Tailwind CSS", "Framer Motion"],
    challenge: "The client's legacy WordPress site suffered from plugin bloat (LCP > 5s) and high cart abandonment.",
    solution: "We migrated the site to a modern headless Next.js 15 architecture, preserving backend WordPress management while accelerating frontend delivery.",
    results: [
      "Baseline cart conversion rate rose by 68% post-launch",
      "Catalog pages load instantly, boosting user engagement",
      "Retained existing backend WordPress management interfaces",
      "Reduced monthly server costs by 40% using CDN edge hosting",
    ],
    clientTestimonial: {
      quote: "Migrating to Next.js improved our store performance drastically. Sales grew immediately after launch.",
      author: "Elena Petrova",
      role: "E-Commerce Lead, EcoShop",
    },
  },
  "apexhealth-local-seo": {
    title: "ApexHealth: Local SEO Growth Program",
    category: "Search Engine Optimization",
    duration: "4 Months",
    metric: "+150%",
    metricLabel: "Local Lead Volume Growth",
    tags: ["Local SEO", "Structured Data", "Schema.org", "Google Maps", "Audit Tuning"],
    challenge: "ApexHealth operated multiple physical clinics but struggled with local search visibility, losing patient bookings to local competitors.",
    solution: "We resolved technical site indexing bugs, implemented JSON-LD LocalBusiness schema scripts on key pages, and optimized their Google Business Profiles.",
    results: [
      "Increased local clinical leads by 150% within 120 days",
      "Achieved first-page rankings for key services in local search results",
      "Improved maps search visibility, raising clinic foot traffic",
      "Lowered customer acquisition costs through organic search traffic",
    ],
    clientTestimonial: {
      quote: "The technical and local SEO updates executed helped us secure a steady stream of new patients directly from Google Maps.",
      author: "Dr. Vivek Rajan",
      role: "Medical Director, Apex Health Clinics",
    },
  },
  "ledgersync-automated-testing": {
    title: "LedgerSync: Automated QA Audit Runs",
    category: "Software Testing & QA",
    duration: "4 Weeks",
    metric: "100%",
    metricLabel: "Core UI Flow Coverage",
    tags: ["Playwright", "Cypress", "CI/CD Pipeline", "Regression Logs", "Mobile QA"],
    challenge: "LedgerSync is a fintech platform with complex payment paths. Manual audits before release cycles were slow and missed bugs.",
    solution: "We constructed a comprehensive automation test suite using Cypress and Playwright, integrating checks for payment routing and session status updates.",
    results: [
      "Replaced manual verification cycles with a 5-minute automation pipeline",
      "Identified and resolved several critical path bugs before launch",
      "Achieved 100% test coverage for core UI payment paths",
      "Integrated automated verification reports directly into GitHub Actions",
    ],
    clientTestimonial: {
      quote: "Their automation test cases have saved us weeks of QA cycles. Our releases are much more stable.",
      author: "Clara Sterling",
      role: "VP Product, LedgerSync Fin",
    },
  },
  "shivashika-rahul-wedding": {
    title: "Shivashika & Rahul: Wedding Invitation Website",
    category: "Personalized Event Websites",
    duration: "Completed",
    metric: "Completed",
    metricLabel: "Delivered & Live",
    liveUrl: "https://rahulashika.vercel.app/",
    tags: ["Wedding Invitation Website", "Mobile-First", "Interactive Envelope", "WhatsApp Sharing", "RSVP Form"],
    challenge: "The couple required an elegant, personalized digital wedding invitation website to celebrate their special occasion in Munnar, Kerala, giving guests an interactive invitation experience with immediate venue directions and WhatsApp sharing.",
    solution: "We engineered a bespoke, mobile-first invitation website featuring an interactive wax-seal envelope opener, couple photo moments, venue details with map navigation, countdown timer, and one-click WhatsApp sharing.",
    results: [
      "100% mobile-responsive design tailored for modern smartphones",
      "Interactive wax-seal envelope opening animation creating an engaging celebration experience",
      "Effortless one-click sharing via WhatsApp and social platforms",
      "Integrated venue directions, ceremony schedules, and digital RSVP form",
    ],
    clientTestimonial: {
      quote: "Our wedding invitation website was absolutely stunning! Our friends and family loved opening the digital invitation and having all the venue details right on their phones.",
      author: "Shivashika & Rahul",
      role: "Bride & Groom",
    },
  },
};

export async function generateStaticParams() {
  return [
    { slug: "stackpilot-enterprise-platform" },
    { slug: "aerodrive-fleet-management" },
    { slug: "ecoshop-headless-woocommerce" },
    { slug: "apexhealth-local-seo" },
    { slug: "ledgersync-automated-testing" },
    { slug: "shivashika-rahul-wedding" },
  ];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projectsMap[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies Gallery
          </Link>

          <div className="border-b border-purple-900/30 pb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
              {project.category} • {project.duration}
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-wider text-purple-200 bg-purple-950/60 border border-purple-500/20 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-purple-500/30 bg-[#111827]/80 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 glass-card purple-glow-sm">
            <div>
              <p className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">Project Impact Metric</p>
              <p className="text-3xl font-extrabold text-white mt-1">{project.metric}</p>
              <p className="text-xs text-gray-300 mt-0.5">{project.metricLabel}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-950/80 border border-purple-500/40 px-4 py-2 text-xs font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Live Website</span>
                </a>
              )}
              <Link href="/contact">
                <Button variant="primary" size="md" className="gap-2 font-semibold">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 flex flex-col gap-10">
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">The Challenge</h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">{project.challenge}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Our Engineering Approach</h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">{project.solution}</p>
              </div>
            </div>

            <div className="md:col-span-4 border-t border-purple-900/30 pt-8 md:border-t-0 md:border-l md:border-purple-900/30 md:pt-0 md:pl-8">
              <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Key Outcomes</h2>
              <ul className="grid gap-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-gray-300 leading-normal">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-purple-950 text-purple-400 border border-purple-500/30 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-purple-900/30 pt-16">
            <blockquote className="rounded-xl border-l-4 border-purple-500 bg-[#111827]/80 p-6 glass-card">
              <p className="text-xs sm:text-sm italic text-gray-300 leading-relaxed">
                &quot;{project.clientTestimonial.quote}&quot;
              </p>
              <footer className="mt-4 text-xs font-semibold text-white">
                — {project.clientTestimonial.author}, <span className="text-purple-300 font-normal">{project.clientTestimonial.role}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
