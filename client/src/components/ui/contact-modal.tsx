"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Send, Building2, User, Mail, Phone, MessageSquare, DollarSign, Briefcase } from "lucide-react";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: (defaultSubject?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");

  const openModal = (customSubject?: string) => {
    if (customSubject) setSubject(customSubject);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} defaultSubject={subject} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export function ContactModal({ isOpen, onClose, defaultSubject }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "Corporate Website",
    projectBudget: "$5,000 - $15,000",
    projectDescription: "",
    preferredContact: "WhatsApp",
  });

  // Reset form state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const businessTypes = [
    "Website",
    "CRM",
    "StackPilot Enterprise",
    "Custom Software",
  ];


  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000+",
  ];

  const contactMethods = ["Email", "WhatsApp", "Phone Call"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0f0f16] p-6 sm:p-8 shadow-2xl shadow-purple-950/50 z-10 my-auto outline-none"
          >
            {/* Soft Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              /* Success Animation & State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-950/80 border border-purple-500/50 text-purple-400 shadow-xl shadow-purple-900/50">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Consultation Requested!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Our engineering team will review your requirements and contact you within <span className="text-purple-300 font-semibold">24 hours</span>.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-950/50"
                >
                  Return to Website
                </button>
              </motion.div>
            ) : (
              /* Contact Form */
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-0.5 text-xs text-purple-300">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                    <span className="font-medium text-[11px]">Free Technical Scope & Quote</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Schedule a Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light">
                    Share your project details with our senior engineering team for a zero-obligation proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-purple-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-purple-400" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-purple-400" />
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-purple-400" />
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-purple-400" />
                        Business Solution Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#151520] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-purple-400" />
                        Project Budget
                      </label>
                      <select
                        value={formData.projectBudget}
                        onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-[#151520] text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-purple-400" />
                      Project Overview & Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Briefly describe what you would like Creovix to build..."
                      className="w-full rounded-xl border border-white/10 bg-[#151520] px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-zinc-300">Preferred Contact Method</label>
                    <div className="flex gap-2">
                      {contactMethods.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${
                            formData.preferredContact === method
                              ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                              : "bg-[#151520] text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-purple-950/60 hover:from-purple-500 hover:to-indigo-500 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
