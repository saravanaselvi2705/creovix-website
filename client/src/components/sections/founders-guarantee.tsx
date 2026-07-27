"use client";

import React from "react";
import { UserCheck, ShieldCheck, Clock, CheckCircle2, Lock, Sparkles, MessageSquare } from "lucide-react";

export function FoundersGuarantee() {
  const advantages = [
    {
      title: "Direct Founder Access",
      desc: "Work 1-on-1 with senior engineering lead. No account managers, middle-men, or junior developer hand-offs.",
      icon: UserCheck,
    },
    {
      title: "Rigorous QA Testing",
      desc: "Every line of code undergoes strict manual and automated cross-browser verification before production delivery.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Milestones",
      desc: "Live staging previews, regular progress updates, and flexible risk-free payment structures.",
      icon: Clock,
    },
    {
      title: "Long-Term Reliability",
      desc: "Continuous post-launch maintenance, security patches, and direct developer support to keep software running fast.",
      icon: Lock,
    },
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="clean-card p-8 lg:p-12 border-purple-500/30 bg-[#121118] relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 subtle-purple-badge px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>THE FOUNDER&apos;S GUARANTEE</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Boutique Studio Dedication. Enterprise-Grade Execution.
            </h2>

            <p className="mt-4 text-sm text-zinc-300 font-light leading-relaxed">
              Large agencies pass your project to junior teams and bury communication under account management layers. We keep our team specialized so every client receives dedicated founder attention, zero-bloat code, and guaranteed delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title} className="p-5 rounded-lg border border-white/5 bg-[#09090b] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-950/50 text-purple-400 border border-purple-500/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-white">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed pl-10">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-purple-400" />
              <span>100% Bespoke Code • No Page-Builders • Payment Options Available</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-purple-400 hover:text-purple-300"
            >
              <span>Talk Directly With Founder</span>
              <MessageSquare className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
