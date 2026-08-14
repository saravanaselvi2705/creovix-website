"use client";

import React from "react";
import Script from "next/script";
import {
  Mail,
  Instagram,
  Clock,
  ShieldCheck,
  Linkedin,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-b border-white/5 bg-[#09090b] relative font-sans">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Direct Calendar Scheduling
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Book a Free <span className="text-purple-400">Discovery Call</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Select a convenient time on our calendar to discuss your software project, workflow requirements, and ROI strategy directly with our engineering founders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Business Contacts & Response Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#111116] p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                  Instant Access
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Direct Business Channels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Prefer instant messaging or email? Reach out to us directly for urgent inquiries or documentation sharing.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918075995734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-emerald-300 hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-900/50 text-emerald-400 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Consultation
                    </span>
                    <span className="text-emerald-400 font-mono text-xs">+91 8075995734</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:creovixstack@gmail.com"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/50 text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      Email Us
                    </span>
                    <span className="text-zinc-400 font-mono text-xs">creovixstack@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/creovixstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/50 text-purple-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      LinkedIn Page
                    </span>
                    <span className="text-zinc-400 font-mono text-xs">linkedin.com/in/creovixstack</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/creovix.stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/50 text-purple-400 group-hover:scale-105 transition-transform">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      Instagram
                    </span>
                    <span className="text-zinc-400 font-mono text-xs">@creovix.stack</span>
                  </div>
                </a>
              </div>
            </div>

            {/* SLA Commitments */}
            <div className="rounded-3xl border border-purple-500/20 bg-purple-950/10 p-6 space-y-4">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider">
                <Clock className="h-4 w-4 text-purple-400" />
                <span>Discovery Call Guarantees</span>
              </div>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>30-minute high-value technical consultation (No sales fluff)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mutual NDA execution prior to deep architecture discussions</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Receive a written technical scope & milestone estimate within 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calendly Embed Widget Container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#111116] p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Widget Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                      Interactive Booking
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    Schedule Your Discovery Call
                  </h3>
                </div>

                <a
                  href="https://calendly.com/creovixstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#171720] px-4 py-2 text-xs font-semibold text-zinc-200 hover:text-white hover:border-purple-500/40 transition-colors self-start sm:self-auto shrink-0"
                >
                  <span>Open in Full Page</span>
                  <ExternalLink className="h-3.5 w-3.5 text-purple-400" />
                </a>
              </div>

              {/* Calendly Inline Widget */}
              <div className="relative w-full min-h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-[#09090b]">
                {/* Calendly Widget Script Integration */}
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />

                {/* Inline Calendly Widget Embed */}
                <div
                  className="calendly-inline-widget w-full h-[620px]"
                  data-url="https://calendly.com/creovixstack/discovery-call?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=09090b&text_color=ffffff&primary_color=a855f7"
                  style={{ minWidth: "320px", height: "620px" }}
                >
                  {/* Fallback iframe while script initializes */}
                  <iframe
                    src="https://calendly.com/creovixstack/discovery-call?embed_domain=creovixstack.com&embed_type=Inline&background_color=09090b&text_color=ffffff&primary_color=a855f7"
                    width="100%"
                    height="620"
                    frameBorder="0"
                    title="Schedule a Discovery Call with Creovix Stack"
                    className="w-full h-[620px] rounded-2xl"
                  />
                </div>
              </div>

              {/* Widget Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Instant Google / Outlook calendar invite
                </span>
                <span className="text-zinc-500">Timezone auto-detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
