import React from 'react';
import { NavLink } from 'react-router-dom';
import { personalDetails, navLinks } from '../data/portfolioData';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#06080a] border-t border-[#189B3F]/20 pt-16 pb-12 overflow-hidden z-10">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#189B3F]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-[#189B3F] flex items-center justify-center text-black font-mono font-bold">
                S
              </div>
              <span className="font-mono text-lg tracking-wider">SAGAR MEENA</span>
            </NavLink>
            <p className="text-gray-400 text-xs leading-relaxed">
              BCA-AIML Student | Aspiring Data Analyst | Python Developer. Building high-impact technology solutions & data intelligence.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-[#00ff66]" />
              <span>{personalDetails.location}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00ff66] font-mono">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-[#00ff66] transition-colors flex items-center gap-1"
                  >
                    <span>›</span> {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Pages */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00ff66] font-mono">
              Focus Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-[#00ff66] transition-colors flex items-center gap-1"
                  >
                    <span>›</span> {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Djangopixel & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00ff66] font-mono">
              Connect & Brand
            </h3>
            <div className="p-3 rounded-xl bg-[#0d1117] border border-[#189B3F]/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{personalDetails.brand}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#189B3F]/20 text-[#00ff66]">Venture</span>
              </div>
              <p className="text-[11px] text-gray-400">Digital Marketing & Web Development Studio</p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-gray-300">

              <a
                href="mailto:djangopixel.in@gmail.com"
                className="hover:text-[#00ff66] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#189B3F]" />
                <span>djangopixel.in@gmail.com</span>
              </a>

              <a
                href="mailto:sagarmeena071@gmail.com"
                className="hover:text-[#00ff66] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#189B3F]" />
                <span>sagarmeena071@gmail.com</span>
              </a>

              <a
                href="tel:9826182835"
                className="hover:text-[#00ff66] flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#189B3F]" />
                <span>+91 9826182835</span>
              </a>   <a href={personalDetails.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-[#00ff66] flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#189B3F]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Sagar Meena. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#189B3F]" />
            <span>Built with React, Three.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
