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
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Let&apos;s Build Something
            </span>
          </h2>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tell Us About Your{" "}
            <span className="text-purple-400">Project</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Have a new website, software project, redesign, SEO requirement, or
            testing need? Tell us what you&apos;re looking for and we&apos;ll get back to you.
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

          {/* Right Column: Interactive Discovery Call Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#111116] p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Widget Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                      Project Enquiry
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    Tell Us About Your Project
                  </h3>
                </div>

                <a
                  href="https://wa.me/918075995734?text=Hi%20Creovix%20Stack%20Team%2C%20I%20would%20like%20to%20schedule%20a%20discovery%20call%20for%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-2 text-xs font-semibold text-emerald-300 hover:text-white hover:border-emerald-500/60 hover:bg-emerald-900/50 transition-all self-start sm:self-auto shrink-0"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

              <BookingForm />

              {/* Widget Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  NDA & Confidentiality Guaranteed
                </span>
                <span className="text-zinc-500">24-Hour Technical Proposal SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "Business Website",
    message: "",
    website: "",
  });

  const formatWhatsAppUrl = () => {
    const messageLines = [
      "👋 *New Project Enquiry - Creovix Stack*",
      "",
      `👤 *Name:* ${formData.name.trim()}`,
      `📧 *Email:* ${formData.email.trim()}`,
      `📱 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `🛠️ *Project Type:* ${formData.service}`,
      "",
      "📝 *Project Details:*",
      formData.message.trim() || "Looking for consultation / more information.",
    ];

    const whatsappText = messageLines.join("\n");
    return `https://wa.me/918075995734?text=${encodeURIComponent(whatsappText)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsSubmitting(true);

    const whatsappUrl = formatWhatsAppUrl();

    // Fire-and-forget email API in the background (silent fallback)
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.warn("Background email notification:", err);
    });

    setSubmitted(true);
    setIsSubmitting(false);

    // Open WhatsApp directly
    if (typeof window !== "undefined") {
      const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!win) {
        window.location.href = whatsappUrl;
      }
    }
  };

  if (submitted) {
    const whatsappUrl = formatWhatsAppUrl();

    return (
      <div className="py-10 px-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4 animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400">
          <WhatsAppIcon className="h-7 w-7 text-emerald-400" />
        </div>

        <h4 className="text-xl font-bold text-white">
          Redirecting to WhatsApp...
        </h4>

        <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you{" "}
          <span className="text-purple-300 font-semibold">
            {formData.name}
          </span>
          ! Your project enquiry is ready. If WhatsApp didn&apos;t open automatically, click the button below:
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 transition-all shadow-lg shadow-emerald-900/40"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Open WhatsApp Chat</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                service: "Business Website",
                message: "",
                website: "",
              });
            }}
            className="w-full sm:w-auto rounded-xl border border-white/10 bg-[#171720] px-5 py-3 text-xs font-semibold text-zinc-300 hover:text-white hover:border-purple-500/40 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Honeypot - hidden from normal users */}
      <div className="hidden">
        <label>
          Website
          <input
            type="text"
            value={formData.website}
            onChange={(e) =>
              setFormData({
                ...formData,
                website: e.target.value,
              })
            }
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300">
            Your Name{" "}
            <span className="text-purple-400">*</span>
          </label>

          <input
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300">
            Email{" "}
            <span className="text-purple-400">*</span>
          </label>

          <input
            type="email"
            required
            maxLength={150}
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300">
            Phone / WhatsApp{" "}
            <span className="text-purple-400">*</span>
          </label>

          <input
            type="tel"
            required
            maxLength={30}
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300">
            Project Type{" "}
            <span className="text-purple-400">*</span>
          </label>

          <select
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({
                ...formData,
                service: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          >
            <option value="Business Website">
              Business Website
            </option>

            <option value="Portfolio Website">
              Portfolio Website
            </option>

            <option value="Landing Page">
              Landing Page
            </option>

            <option value="E-commerce Website">
              E-commerce Website
            </option>

            <option value="Custom Web Application">
              Custom Web Application
            </option>

            <option value="Custom Management Software">
              Custom Management Software
            </option>

            <option value="Website Redesign">
              Website Redesign
            </option>

            <option value="SEO">
              SEO
            </option>

            <option value="Software Testing & QA">
              Software Testing & QA
            </option>

            <option value="Digital Function Invitation Card">
              Digital Function Invitation Card
            </option>

            <option value="Website Maintenance">
              Website Maintenance
            </option>

            <option value="Others">
              Others
            </option>

          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-zinc-300">
          Tell Us About Your Project
        </label>

        <textarea
          rows={5}
          maxLength={3000}
          placeholder="Tell us what you want to build, redesign, test or improve..."
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-950/20 px-4 py-3 text-xs text-red-300">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-purple-600/25 hover:from-purple-500 hover:via-indigo-500 hover:to-emerald-500 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Connecting to WhatsApp...
          </>
        ) : (
          <>
            <WhatsAppIcon className="h-4 w-4 text-emerald-300" />
            <span>Send Project Enquiry</span>
            <Sparkles className="h-3.5 w-3.5 text-purple-200" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-zinc-500">
        Your information is kept private and is only used to respond to your
        enquiry.
      </p>
    </form>
  );
}