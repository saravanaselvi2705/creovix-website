"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { SectionCarousel } from "@/components/ui/section-carousel";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Apex Global Logistics",
      review: "Creovix Stack transformed our entire fleet dispatch operations. The custom web portal and driver apps reduced dispatch errors by over 90%. Their engineering discipline and speed are unmatched.",
      rating: 5,
      avatar: "MV",
    },
    {
      id: 2,
      name: "Dr. Elena Rostova",
      role: "Medical Director",
      company: "MediCare Specialist Clinics",
      review: "Our patient portal built by Creovix Stack has been a game-changer. Patients love the ease of booking and instant lab results. The team was HIPAA-conscious and delivered ahead of schedule.",
      rating: 5,
      avatar: "ER",
    },
    {
      id: 3,
      name: "Siddharth Nair",
      role: "Founder & CEO",
      company: "Nexus Hospitality & Dining",
      review: "Transitioning to our own online ordering platform with Creovix saved us thousands in monthly aggregator commissions. The UI is sleek, fast, and highly reliable during peak dinner rushes.",
      rating: 5,
      avatar: "SN",
    },
    {
      id: 4,
      name: "Rachel Dupont",
      role: "Head of Product",
      company: "Vanguard B2B Software",
      review: "StackPilot and the custom SaaS modules built for our enterprise clients exceeded expectations. Creovix Stack operates like a true co-founding engineering team rather than an agency.",
      rating: 5,
      avatar: "RD",
    },
    {
      id: 5,
      name: "Vikramaditya Sharma",
      role: "Managing Director",
      company: "Apex Infrastructure & Real Estate",
      review: "Our property management dashboard built by Creovix integrated seamless tenant payments and maintenance tracking. Professional communication and top-tier code quality.",
      rating: 5,
      avatar: "VS",
    },
    {
      id: 6,
      name: "Claire Bennett",
      role: "VP of E-Commerce",
      company: "Aura Luxe Retailers",
      review: "The custom Next.js storefront they delivered boosted our mobile conversion rate by 38%. The site is lightning fast and handles peak promotional traffic effortlessly.",
      rating: 5,
      avatar: "CB",
    },
  ];

  return (
    <section id="testimonials" className="py-20 border-b border-white/5 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Client Endorsements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by Business Leaders
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Read how our enterprise digital solutions have transformed operations and accelerated revenue for our partners.
          </p>
        </div>

        {/* Carousel Slider */}
        <SectionCarousel autoplayDelay={5200}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group h-full rounded-2xl border border-white/10 bg-[#111116] p-7 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-purple-500/40 group-hover:text-purple-400 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-950 border border-purple-500/30 text-purple-300 font-bold text-xs font-mono">
                  {t.avatar}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-sm font-bold text-white truncate group-hover:text-purple-300 transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-light truncate">
                    {t.role} • {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </SectionCarousel>
      </div>
    </section>
  );
}
