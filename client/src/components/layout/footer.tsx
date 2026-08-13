"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Mail, MapPin, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useContactModal } from "@/components/ui/contact-modal";

export function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="border-t border-white/5 bg-[#070709] py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121217] p-1 border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Creovix Stack Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                Creovix<span className="text-purple-400">.Stack</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              We help businesses build websites, SaaS platforms, CRM systems, AI applications, mobile apps, and enterprise software that accelerate growth.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full">
                Engineering Digital Growth
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#what-we-build" className="hover:text-white transition-colors">
                  What We Build
                </a>
              </li>
              <li>
                <a href="#stackpilot" className="hover:text-white transition-colors">
                  StackPilot SaaS
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <button
                  onClick={() => openModal("Contact Us")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => openModal("Business Websites")}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("Custom CRM Software")}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom CRM Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("StackPilot Enterprise")}
                  className="hover:text-white transition-colors text-left"
                >
                  StackPilot Enterprise
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("Custom Software")}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Software
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>

            <ul className="space-y-3 text-xs">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/918075995734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-emerald-300 transition-colors"
                >
                  <div className="w-6 flex justify-center">
                    <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="ml-2 font-medium text-emerald-400">
                    WhatsApp: +91 8075995734
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:creovixstack@gmail.com"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <div className="w-6 flex justify-center">
                    <Mail className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="ml-2">creovixstack@gmail.com</span>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/creovixstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <div className="w-6 flex justify-center">
                    <Linkedin className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="ml-2">linkedin.com/in/creovixstack</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/creovix.stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <div className="w-6 flex justify-center">
                    <Instagram className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="ml-2">@creovix.stack</span>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-center text-zinc-500">
                <div className="w-6 flex justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="ml-2">Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 pr-16 sm:pr-20">
          <p>© {new Date().getFullYear()} Creovix Stack. All rights reserved.</p>
          <p>Built with precision & care by Creovix Stack</p>
        </div>
      </div>
    </footer>
  );
}

