import React from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { djangopixelServices, personalDetails } from '../data/portfolioData';
import { NavLink } from 'react-router-dom';
import { Share2, TrendingUp, Code, Palette, Video, Rocket, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Share2': return <Share2 className="w-6 h-6 text-[#00ff66]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#00ff66]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#00ff66]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#00ff66]" />;
      case 'Video': return <Video className="w-6 h-6 text-[#00ff66]" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-[#00ff66]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00ff66]" />;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="ENTREPRENEURIAL VENTURE"
        title="Djangopixel"
        highlightTitle="Services"
        subtitle="Digital marketing, creative design, social media strategy, and web development services by Sagar Meena."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* BRAND INTRODUCTION CARD */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#189B3F]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#189B3F]/20 text-[#00ff66] text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL BRAND & CREATIVE STUDIO</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">About Djangopixel</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Djangopixel is my entrepreneurial brand initiative offering modern digital solutions for businesses, early-stage startups, and personal brands. From eye-catching creative post designs and short-form video reel edits to targeted digital marketing campaigns and high-performance web development.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-[#00ff66]/40 shadow-neon">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-black border border-[#00ff66]/40 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/djangopixel.png.png"
                  alt="Djangopixel Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Djangopixel</h3>
              <p className="text-xs text-gray-400">Creative Tech & Marketing</p>
              <div className="text-[11px] font-mono text-[#00ff66]">
                djangopixel.in@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Services Offered</h2>
            <p className="text-xs text-gray-400 mt-1">Full-spectrum creative & technical solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {djangopixelServices.map((srv) => (
              <TiltCard key={srv.title}>
                <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/30 flex items-center justify-center">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00ff66] font-mono hover:underline font-bold"
                    >
                      <span>Inquire Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NavLink>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="glass-panel p-10 rounded-3xl border border-[#189B3F]/40 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#189B3F]/20 blur-3xl rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white relative z-10">
            Let's Build Something Together
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto relative z-10">
            Have a project in mind, need social media creative designs, or want a custom web platform for your business? Reach out to collaborate!
          </p>

          <div className="pt-2 relative z-10">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#189B3F] hover:bg-[#00ff66] text-black font-bold text-xs uppercase tracking-wider shadow-neon transition-all hover:scale-105"
            >
              <span>Get Started With Djangopixel</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}
