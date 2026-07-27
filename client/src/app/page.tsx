"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Globe, ShieldCheck, RefreshCw, Search, Wrench, Layers, 
  ArrowRight, ChevronDown, Instagram, Mail,
  Send, ExternalLink, Check, Laptop, Palette, CreditCard
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import { TechStackBanner } from "@/components/sections/tech-stack-banner";
import { EveryWebsiteIncludes } from "@/components/sections/every-website-includes";
import { StackPilotSection } from "@/components/sections/stackpilot-section";
import { WhyBusinessesChooseUs } from "@/components/sections/why-businesses-choose-us";
import { TrustSignals } from "@/components/sections/trust-signals";

export default function Home() {
  // Contact Form state
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  // 1-Sentence Service Cards
  const services = [
    {
      id: "web-design",
      title: "SEO-Friendly Web Design",
      desc: "Modern websites built for speed, mobile devices and Google.",
      icon: Globe,
    },
    {
      id: "stackpilot",
      title: "StackPilot",
      desc: "Custom project and organization management software built around your business.",
      icon: Layers,
      isFlagship: true,
    },
    {
      id: "redesign",
      title: "Website Redesign",
      desc: "Upgrade outdated websites with modern technologies.",
      icon: RefreshCw,
    },
    {
      id: "seo",
      title: "SEO",
      desc: "Improve your visibility on Google.",
      icon: Search,
    },
    {
      id: "qa",
      title: "Quality Assurance",
      desc: "Every project is tested before delivery.",
      icon: ShieldCheck,
    },
    {
      id: "maintenance",
      title: "Maintenance",
      desc: "Long-term updates and support.",
      icon: Wrench,
    },
  ];

  // Process Steps (Desktop: Horizontal Flow, Mobile: Vertical)
  const processSteps = [
    { step: "01", title: "Discover", desc: "Understanding your business goals and website needs." },
    { step: "02", title: "Plan", desc: "Designing visual layouts and content structure." },
    { step: "03", title: "Build", desc: "Developing fast, clean code tailored to your business." },
    { step: "04", title: "Test", desc: "Testing across mobile and desktop devices." },
    { step: "05", title: "Launch", desc: "Final handover, setup, and ongoing support." },
  ];

  // Real Portfolio Projects
  const portfolioProjects = [
    {
      title: "StackPilot Platform",
      category: "Flagship Business SaaS",
      desc: "Custom project management, CRM, and team coordination software designed for business operations.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      link: "https://stackpilot-ai-seven.vercel.app/",
      cta: "View Project",
      icon: Layers,
    },
    {
      title: "Ashidh QA & Test Portfolio",
      category: "QA & Software Testing",
      desc: "A sleek portfolio website highlighting software QA testing and verification expertise.",
      tech: ["React", "Tailwind CSS"],
      link: "https://ashidh-test-engineer.vercel.app/",
      cta: "View Project",
      icon: Laptop,
    },
    {
      title: "Keerthika Graphic Design",
      category: "Design Portfolio",
      desc: "Creative designer portfolio featuring visual brand showcases and responsive layouts.",
      tech: ["React", "Tailwind CSS"],
      link: "https://keerthika-portfolio-8ucn.vercel.app/",
      cta: "View Project",
      icon: Palette,
    },
    {
      title: "Smart Expense Tracker",
      category: "Finance Web App",
      desc: "Web application for tracking business expenses, budgets, and financial analytics.",
      tech: ["React", "Node.js"],
      link: "https://vocal-crisp-ff6daf.netlify.app/",
      cta: "View Project",
      icon: CreditCard,
    },
  ];

  // 5 Business FAQs
  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Pricing depends on your project requirements, number of pages, and custom features. Contact us with your project details and we will provide a clear, transparent quote.",
    },
    {
      question: "How long does a project take?",
      answer: "Most business website projects are completed within 2 to 4 weeks. We establish clear timelines before starting and deliver progress updates at every stage.",
    },
    {
      question: "Can StackPilot be customized?",
      answer: "Yes. StackPilot is our flagship software built to be customized around your unique business workflows, team roles, and daily operational needs.",
    },
    {
      question: "Do you redesign existing websites?",
      answer: "Yes, we upgrade outdated or slow websites into fast, modern applications, improving visual appeal, Google search ranking, and speed.",
    },
    {
      question: "Do you provide maintenance?",
      answer: "Yes, we provide ongoing maintenance packages that cover regular software updates, security patches, backups, and long-term support after launch.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-purple-900/40 selection:text-purple-200">
      <Header />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section id="home" className="py-20 sm:py-28 border-b border-white/5 relative bg-gradient-to-b from-[#0e0c15] via-[#09090b] to-[#09090b]">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center space-y-6">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121217] px-3.5 py-1 text-xs text-zinc-300">
              <Image
                src="/logo.png"
                alt="Creovix Stack Logo"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="font-semibold text-white">Creovix Stack</span>
            </div>

            {/* Business Heading */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              We Build Fast, Modern Websites That Help Your Business Grow.
            </h1>

            {/* Human Subheading */}
            <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
              From business websites to custom software, we create solutions that are fast, SEO-friendly, and built around your business needs.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-sm"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#121217] px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* 2. SERVICES (Moved Immediately Below Hero!) */}
        <section id="services" className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Our Services
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light">
                Simple, reliable digital services built for business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`clean-card p-6 flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-all ${
                      service.isFlagship ? "border-purple-500/40 bg-[#12111a]" : ""
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-purple-400 border border-white/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        {service.isFlagship && (
                          <span className="subtle-purple-badge text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full">
                            Flagship Product
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading text-base font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. STACKPILOT */}
        <StackPilotSection />

        {/* 4. WHY CHOOSE CREOVIX STACK */}
        <WhyBusinessesChooseUs />

        {/* 5. OUR PROCESS (Desktop Horizontal Flow, Mobile Vertical Flow) */}
        <section id="process" className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Our Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light">
                A straightforward process to bring your project from idea to launch.
              </p>
            </div>

            {/* Desktop Horizontal Flow / Mobile Vertical */}
            <div className="hidden md:flex items-center justify-between gap-3 max-w-5xl mx-auto">
              {processSteps.map((step, idx) => (
                <React.Fragment key={step.title}>
                  <div className="clean-card p-5 text-center flex-1 space-y-1 hover:border-purple-500/40 transition-all">
                    <span className="text-[10px] font-mono text-purple-400">Step {step.step}</span>
                    <h3 className="font-heading text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-[11px] text-zinc-400 font-light leading-snug">{step.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="text-purple-400 text-sm font-bold shrink-0">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="md:hidden space-y-3 max-w-md mx-auto">
              {processSteps.map((step) => (
                <div key={step.title} className="clean-card p-4 flex items-center gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 font-mono text-xs font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PORTFOLIO */}
        <section id="portfolio" className="py-20 border-b border-white/5 bg-[#0d0d12]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Our Portfolio
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light">
                Featured live software and website projects built by Creovix Stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {portfolioProjects.map((project, idx) => {
                const ProjectIcon = project.icon;
                return (
                  <div key={idx} className="clean-card p-6 flex flex-col justify-between space-y-5 hover:border-purple-500/40 transition-all">
                    <div className="space-y-4">
                      {/* Large Visual Screenshot Box */}
                      <div className="h-44 w-full rounded-lg bg-[#09090b] border border-white/10 flex flex-col items-center justify-center p-4 text-center space-y-2 relative overflow-hidden group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400">
                          <ProjectIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-200">{project.title}</span>
                        <span className="text-[10px] text-purple-400 font-mono">Live Project Preview</span>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="font-heading text-base font-semibold text-white mt-0.5">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-zinc-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors shrink-0"
                      >
                        <span>View Project</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. EVERY WEBSITE INCLUDES (Moved Lower, After Portfolio!) */}
        <EveryWebsiteIncludes />

        {/* COMPACT TECHNOLOGY SECTION */}
        <TechStackBanner />

        {/* 8. WHY CLIENTS TRUST US (Merged with Engineering Advantage) */}
        <TrustSignals />

        {/* 9. FAQ (5 Questions) */}
        <section id="faq" className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="clean-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-heading text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-purple-400 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 pt-0 text-xs text-zinc-400 leading-relaxed font-light border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CONTACT */}
        <section id="contact" className="py-20 border-b border-white/5 bg-[#0d0d12]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Heading & Direct Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    Tell Us About Your Project
                  </h2>
                  <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
                    We&apos;d love to learn about your business and discuss how we can help.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/918075995734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-4 py-3 text-xs font-semibold text-emerald-300 hover:bg-emerald-950/40 transition-all"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <div>Chat on WhatsApp</div>
                      <div className="text-[11px] text-emerald-400/80 font-mono">+91 8075995734</div>
                    </div>
                  </a>

                  <a
                    href="mailto:creovixstack@gmail.com"
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#121217] px-4 py-3 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                  >
                    <Mail className="h-5 w-5 text-purple-400 shrink-0" />
                    <div>
                      <div>Email Us Direct</div>
                      <div className="text-[11px] text-zinc-400 font-mono">creovixstack@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/creovix.stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#121217] px-4 py-3 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                  >
                    <Instagram className="h-5 w-5 text-purple-400 shrink-0" />
                    <div>
                      <div>Follow on Instagram</div>
                      <div className="text-[11px] text-zinc-400 font-mono">@creovix.stack</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="clean-card p-6 sm:p-8">
                  {submitted ? (
                    <div className="py-12 text-center space-y-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-950 text-purple-400 border border-purple-500/30">
                        <Check className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">Thank You!</h3>
                      <p className="text-xs text-zinc-400 font-light max-w-sm mx-auto">
                        Your message has been received. We will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-xs font-semibold text-purple-400 hover:text-purple-300"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-white/10 bg-[#09090b] px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full rounded-lg border border-white/10 bg-[#09090b] px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Project Details
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Tell us about your business and website goals..."
                          className="w-full rounded-lg border border-white/10 bg-[#09090b] px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-xs font-semibold text-white hover:bg-purple-500 transition-all shadow-sm"
                      >
                        <Send className="h-3.5 w-3.5" />
                        Start Your Project
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* 12. SEPARATE FLOATING ACTION BUTTONS (WHATSAPP & INSTAGRAM) */}
      <FloatingButtons />
    </div>
  );
}
