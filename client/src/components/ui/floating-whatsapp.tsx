"use client";

import React from "react";
import { WhatsAppIcon } from "./whatsapp-icon";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918075995734"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all group border border-emerald-400/40"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp (+91 8075995734)"
    >
      <WhatsAppIcon className="h-5 w-5 text-white group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
