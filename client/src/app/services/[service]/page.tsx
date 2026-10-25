import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Code, ShieldCheck, Search, Settings, ArrowRight, Check, ArrowLeft, RefreshCw, Heart } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDesc: string;
}

const serviceMap: Record<string, ServiceData> = {
  "web-development": {
    title: "1. SEO-Friendly Web Design & Development",
    subtitle: "Custom Web Applications, Business & E-Commerce Websites built with Next.js 15 & MERN Stack.",
    tagline: "Every website we build is SEO Friendly, SEO Optimized, Mobile Responsive, Fast Loading, Secure, Accessible, and Scalable.",
    icon: Code,
    deliverables: [
      "Business Websites & Portfolio Sites",
      "High-Converting Landing Pages",
      "E-Commerce Storefronts (WooCommerce / Custom Headless)",
      "Custom Web Applications (MERN Stack: Express, React 19, MongoDB)",
      "Next.js 15 App Router & Server Components for Sub-second load",
      "Dynamic SEO Metadata & Schema.org JSON-LD Markup",
      "100% Mobile Responsive across Desktop, Tablet, & Mobile",
      "Secure JWT Authentication & Cloudinary Media Integration",
    ],
    faqs: [
      {
        q: "What tech stack do you use for web development?",
        a: "We build bespoke full-stack applications using Next.js 15, React 19, TypeScript, Tailwind CSS v4, Express.js, and MongoDB Atlas. We avoid heavy page builders.",
      },
      {
        q: "Are your websites SEO optimized and fast loading?",
        a: "Yes. Every website is built from day one with strict technical SEO, Core Web Vitals optimization, static site generation, and mobile responsive execution targeting Lighthouse scores of 95+.",
      },
    ],
    seoTitle: "SEO-Friendly Web Design & Development | Creovix Stack",
    seoDesc: "Custom web applications, business websites, e-commerce, and MERN stack development.",
  },
  "redesign-modernization": {
    title: "3. Website Redesign & Modernization",
    subtitle: "Upgrade Legacy Stacks to Modern Next.js 15 & MERN Architectures.",
    tagline: "Transform outdated, slow, or insecure legacy sites into lightning-fast modern web applications.",
    icon: RefreshCw,
    deliverables: [
      "Legacy Stack to Next.js 15 & React 19 Modernization",
      "WordPress to Next.js Migration (Zero content loss)",
      "PHP to MERN Stack Architecture Overhaul",
      "Performance Optimization targeting sub-1s LCP",
      "SEO Improvements & Redirect Hierarchy Preservations",
      "Mobile Responsive UI/UX Redesign",
      "Security Enhancements & Vulnerability Hardening",
    ],
    faqs: [
      {
        q: "Will our existing search engine rankings be affected during migration?",
        a: "We implement strict 301 redirect mappings and preserve your URL structure and schema markup to protect and boost your organic search rankings.",
      },
      {
        q: "Why migrate from PHP/WordPress to Next.js?",
        a: "Next.js static site generation provides sub-second page loads, eliminates plugin security vulnerabilities, and delivers vastly superior Google PageSpeed scores.",
      },
    ],
    seoTitle: "Website Redesign & Modernization | Creovix Stack",
    seoDesc: "Migrate legacy websites, WordPress to Next.js, and PHP to MERN with speed & security upgrades.",
  },
  "software-testing": {
    title: "4. Software Testing & QA",
    subtitle: "Automated regression suites and manual functional testing.",
    tagline: "Every project is thoroughly QA tested before delivery to guarantee zero production faults.",
    icon: ShieldCheck,
    deliverables: [
      "Manual Functional & Exploratory Testing",
      "Automation Testing Runs (Playwright & Cypress)",
      "Regression Testing Suites & Automated Pipelines",
      "Cross Browser Testing (Chrome, Firefox, Safari, Edge)",
      "Mobile Responsive Viewport Verification",
      "Comprehensive Test Documentation & Execution Logs",
      "Bug Reporting, Severity Tracking, & Verification",
    ],
    faqs: [
      {
        q: "Why is QA testing critical before launch?",
        a: "Unchecked bugs frustrate users and hurt conversion rates. Our independent testing identifies edge cases, broken links, and responsive flaws before real clients encounter them.",
      },
      {
        q: "Do you deliver formal test reports?",
        a: "Yes. Every testing project includes a detailed bug log, steps to reproduce, severity ratings, and automated test execution summaries.",
      },
    ],
    seoTitle: "Software Testing & Automated QA Services | Creovix Stack",
    seoDesc: "Manual & automated QA testing, Playwright runs, cross-browser verification, and bug reporting.",
  },
  "seo": {
    title: "5. Search Engine Optimization (SEO)",
    subtitle: "Technical audit checks, local SEO, and Core Web Vitals dominance.",
    tagline: "Drive high-intent organic traffic with data-backed search strategies.",
    icon: Search,
    deliverables: [
      "Technical SEO Audits & Indexation Cleanup",
      "On-Page SEO & Schema.org JSON-LD Implementation",
      "Local SEO & Google Business Profile Optimization",
      "Keyword Research & Search Intent Mapping",
      "Blog Optimization & Content Strategy",
      "Core Web Vitals & Page Speed Enhancements",
      "Monthly Organic Ranking & Analytics Reports",
    ],
    faqs: [
      {
        q: "What is included in Local SEO?",
        a: "We optimize your Google Business Profile, map citations, local schema markup, and geo-targeted keywords to attract local customers.",
      },
      {
        q: "How does technical SEO improve page rankings?",
        a: "Clean code structure, dynamic metadata, semantic HTML, and fast loading speeds signal to Google that your site is authoritative and high quality.",
      },
    ],
    seoTitle: "Technical & Local SEO Optimization Services | Creovix Stack",
    seoDesc: "Technical SEO audits, local Google Business profile management, JSON-LD schemas, and keyword mapping.",
  },
  "website-maintenance": {
    title: "6. Website Maintenance & Support",
    subtitle: "Proactive security updates, backups, and performance monitoring.",
    tagline: "Keep your website secure, fast, and continuously updated with dedicated monthly support.",
    icon: Settings,
    deliverables: [
      "Security Updates & Vulnerability Patching",
      "Ongoing Performance Tuning & Image Optimizations",
      "Rapid Bug Fixes & Code Maintenance",
      "Automated Off-site Daily / Weekly Backups",
      "Content Updates & Regular CMS Support",
      "Monthly Developer SLA & Dedicated Hours",
      "Continuous Server Monitoring & Uptime Alerts",
    ],
    faqs: [
      {
        q: "What happens if our site encounters an emergency?",
        a: "Our monthly support plans include priority incident response and automated daily backups to restore operations immediately.",
      },
      {
        q: "Can we request custom feature additions under monthly support?",
        a: "Yes! Dedicated developer hours can be used for new feature additions, content updates, or design refinements.",
      },
    ],
    seoTitle: "Monthly Website Support & Maintenance Plans | Creovix Stack",
    seoDesc: "Security updates, backups, performance optimizations, bug fixes, and monthly developer support.",
  },
  "event-websites": {
    title: "7. Personalized Event Websites",
    subtitle: "Personalized Digital Invitations for Weddings, Engagements & Celebrations",
    tagline: "Beautiful, personalized websites for weddings, engagements and special occasions, designed to make every celebration memorable and easy to share.",
    icon: Heart,
    deliverables: [
      "Personalized wedding and engagement invitation websites",
      "Couple names, photos and event details",
      "Wedding date, time and venue information",
      "Mobile-responsive design",
      "Easy sharing through WhatsApp and social media",
      "Interactive digital countdown & ceremony schedule",
      "Google Maps venue location directions",
      "Digital RSVP tracking & guest confirmation",
    ],
    faqs: [
      {
        q: "What features are included in a personalized event website?",
        a: "Every event website is tailored with the couple's names, photo highlights, event dates, ceremony timings, venue directions with maps, and mobile-friendly layouts for effortless reading.",
      },
      {
        q: "How easily can guests view and share the website?",
        a: "Guests open the link directly on their mobile phones without downloading any apps. You can share your link or custom QR code via WhatsApp, Instagram, or SMS with a single tap.",
      },
      {
        q: "Can we include venue maps and RSVP tracking?",
        a: "Yes, we integrate direct Google Maps navigation for your venues, ceremony timelines, and optional digital RSVP tracking.",
      },
    ],
    seoTitle: "Personalized Event Websites & Digital Wedding Invitations | Creovix Stack",
    seoDesc: "Beautiful, personalized websites for weddings, engagements and special occasions, designed to make every celebration memorable and easy to share.",
  },
};

export async function generateStaticParams() {
  return [
    { service: "web-development" },
    { service: "redesign-modernization" },
    { service: "software-testing" },
    { service: "seo" },
    { service: "website-maintenance" },
    { service: "event-websites" },
  ];
}

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const serviceKey = resolvedParams.service;
  const service = serviceMap[serviceKey];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services Directory
          </Link>

          {/* Hero */}
          <div className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-950/80 text-purple-400 border border-purple-500/30">
              <IconComponent className="h-6 w-6" />
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-6">
              {service.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base font-semibold text-purple-300">
              {service.subtitle}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              {service.tagline}
            </p>
          </div>

          {/* Deliverables */}
          <div className="mt-16 border-t border-purple-900/30 pt-16">
            <h2 className="font-heading text-2xl font-bold text-white">
              Included Deliverables & Capabilities
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-purple-900/30 bg-[#111827]/80 p-4 glass-card-hover"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-950 text-purple-400 border border-purple-500/30 mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-xs text-gray-300 leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20 border-t border-purple-900/30 pt-16 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-400 mb-8">
              Everything you need to know about our {service.title} process.
            </p>
            <Accordion>
              {service.faqs.map((faq, idx) => (
                <AccordionItem key={idx} title={faq.q}>
                  {faq.a}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center max-w-3xl mx-auto purple-glow-sm">
            <h3 className="font-heading text-2xl font-bold text-white">
              Start Your {service.title} Project
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Contact Creovix Stack today to receive a custom architecture estimate and delivery timeline.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-2 font-semibold">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
