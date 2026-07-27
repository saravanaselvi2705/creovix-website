"use client";

import React from "react";
import { UserCheck, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export function WhyBusinessesChooseUs() {
  const cards = [
    {
      title: "Personal Support",
      desc: "Work directly with dedicated developers who listen to your needs and respond quickly.",
      icon: UserCheck,
    },
    {
      title: "Quality First",
      desc: "Thorough testing and verification before launch so everything works smoothly.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Delivery",
      desc: "Clear timelines and efficient execution to get your project live on schedule.",
      icon: Zap,
    },
    {
      title: "Built to Grow",
      desc: "Scalable solutions engineered to easily adapt as your business expands.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-us" className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Businesses Choose Creovix Stack
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light">
            A boutique studio approach focused on quality, speed, and real relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="clean-card p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all space-y-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-purple-400 border border-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
