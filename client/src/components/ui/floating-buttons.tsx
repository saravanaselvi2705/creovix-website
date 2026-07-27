"use client";

import React from "react";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp-icon";

export function FloatingButtons() {
  return (
    <aside
      aria-label="Contact actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center pointer-events-auto"
    >
      {/* WhatsApp Circular Button */}
      <a
        href="https://wa.me/918075995734"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 8075995734)"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 border border-emerald-400/40 group"
      >
        <WhatsAppIcon className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Instagram Circular Button with Creovix Purple Gradient */}
      <a
        href="https://www.instagram.com/creovix.stack"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        title="Follow Creovix Stack on Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-violet-500 text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 border border-purple-400/40 group"
      >
        <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
}
