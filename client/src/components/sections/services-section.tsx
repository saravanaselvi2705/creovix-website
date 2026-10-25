"use client";

import React from "react";
import {
  Globe,
  Code2,
  Cloud,
  Users,
  Wrench,
  Zap,
  ArrowRight,
  Heart,
} from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

export function ServicesSection() {
  const services = [
    {
      id: "website-dev",
      title: "Website Development",
      description: "Custom ultra-fast Next.js & React business websites optimized for SEO, high performance, and conversions.",
      icon: Globe,
      cta: "Build Your Site",
    },
    {
      id: "event-websites",
      title: "Personalized Event Websites",
      description: "Beautiful, personalized websites for weddings, engagements and special occasions, designed to make every celebration memorable and easy to share.",
      icon: Heart,
      cta: "Explore Event Sites",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Tailor-made web applications and management portals engineered around your unique operational workflows.",
      icon: Code2,
      cta: "Explore Solutions",
    },
    {
      id: "saas-dev",
      title: "SaaS Development",
      description: "Scalable cloud-native SaaS platforms complete with subscription billing, user auth, and API integrations.",
      icon: Cloud,
      cta: "Launch Your SaaS",
    },
    {
      id: "crm-dev",
      title: "CRM Development",
      description: "Custom customer management, lead pipelines to your business.",
      icon: Users,
      cta: "Custom CRM",
    },
    {
      id: "maintenance",
      title: "Website Maintenance & Security",
      description: "24/7 uptime monitoring, security updates, daily automated backups, and ongoing technical support.",
      icon: Wrench,
      cta: "Get Support",
    },
    {
      id: "business-automation",
      title: "Business Process Automation",
      description: "Eliminate repetitive manual tasks with custom webhooks, data pipelines, and third-party API integrations.",
      icon: Zap,
      cta: "Streamline Operations",
    },
  ];

  return (
    <section id="services" className="py-20 border-b border-white/5 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            End-to-End Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            From initial strategy and UI design to cloud deployment and long-term support, we deliver full-cycle software engineering.
          </p>
        </div>

        {/* Carousel Slider */}
        <SectionCarousel autoplayDelay={4500}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative h-full rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-900/30 border border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-white/5 px-4 py-2.5 text-xs font-semibold text-zinc-200 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </SectionCarousel>
      </div>
    </section>
  );
}
