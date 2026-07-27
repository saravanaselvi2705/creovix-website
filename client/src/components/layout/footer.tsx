"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070709] py-14 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#121217] p-1 border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Creovix Stack Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                Creovix<span className="text-purple-400">.Stack</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
              Modern websites. Custom software. Built with care.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#stackpilot" className="hover:text-white transition-colors">
                  StackPilot
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://wa.me/918075995734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp: +91 8075995734</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:creovixstack@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span>creovixstack@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/creovix.stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 text-purple-400" />
                  <span>@creovix.stack</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-500">
                <MapPin className="h-4 w-4 text-zinc-500" />
                <span>Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip with Right Padding to avoid overlap with floating buttons */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 pr-16 sm:pr-20">
          <p>© {new Date().getFullYear()} Creovix Stack. All rights reserved.</p>
          <p>Built with care by Creovix Stack</p>
        </div>
      </div>
    </footer>
  );
}
