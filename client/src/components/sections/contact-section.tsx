"use client";

import React, { useState } from "react";
import { Mail, Instagram, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Business Website",
    budget: "$3,000 - $10,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/5 bg-[#09090b] relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="subtle-purple-badge text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Start Your Transformation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Schedule a Free Consultation
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Discuss your project specs, timeline, and architectural requirements with our senior software engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Contact Details & SLAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#111116] p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white">
                Direct Business Contacts
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Reach out directly via WhatsApp for instant response or email us detailed project documentation.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918075995734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-emerald-300 hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">WhatsApp Consultation</span>
                    <span className="text-emerald-400 font-mono text-xs">+91 8075995734</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:creovixstack@gmail.com"
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-950/50 text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Email Us</span>
                    <span className="text-zinc-400 font-mono text-xs">creovixstack@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/creovixstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-950/50 text-purple-400">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">LinkedIn Company Page</span>
                    <span className="text-zinc-400 font-mono text-xs">linkedin.com/in/creovixstack</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/creovix.stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#09090b] p-4 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-950/50 text-purple-400">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Instagram</span>
                    <span className="text-zinc-400 font-mono text-xs">@creovix.stack</span>
                  </div>
                </a>
              </div>
            </div>

            {/* SLA Promises */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-950/10 p-6 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider">
                <Clock className="h-4 w-4 text-purple-400" />
                <span>Our Response Commitment</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Guaranteed reply within 2 hours during business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Free initial architectural review & non-disclosure agreement (NDA)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Business Lead Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#111116] p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Consultation Scheduled!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our senior technology strategist will review your project requirements and reach out via email/phone shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: "Business Website",
                        budget: "$3,000 - $10,000",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-xl bg-purple-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-purple-500 transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Tell Us About Your Project
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acro Enterprises"
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Custom Software">Custom Software / Portals</option>
                        <option value="SaaS Platform">SaaS Platform Development</option>
                        <option value="CRM/ERP System">Custom CRM / ERP System</option>
                        <option value="Mobile App">Mobile Application (iOS/Android)</option>
                        <option value="AI Automation">AI & Workflow Automation</option>
                        <option value="Maintenance & Cloud">Maintenance & Cloud Infra</option>
                      </select>
                    </div>

                    {/* Project Budget */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Estimated Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Project Details & Key Features
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business goals, required features, or target timeline..."
                      className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Schedule Free Consultation</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
