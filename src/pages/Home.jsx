import React from 'react';
import { NavLink } from 'react-router-dom';
import { personalDetails, projectsData, skillsData } from '../data/portfolioData';
import Hero3DObject from '../components/Hero3DObject';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, BarChart3, Code2, Globe, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-24 flex items-center justify-center overflow-hidden">
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#189B3F]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#189B3F]/40 text-xs font-mono text-[#00ff66] shadow-neon">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-ping" />
              <span>Open to Data Analytics & Python Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-gray-400 font-mono text-lg sm:text-xl tracking-wide">
                Welcome to my digital space
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <br />
                <span className="text-gradient-green">Sagar Meena</span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 font-mono">
              BCA-AIML Student <span className="text-[#189B3F]">|</span> Aspiring Data Analyst <span className="text-[#189B3F]">|</span> Python Developer
            </h2>

            {/* Short Intro */}
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about turning raw data into actionable business intelligence and crafting robust Python applications. Based in Bhopal, MP, India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <NavLink
                to="/projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#189B3F] to-[#108032] hover:from-[#00ff66] hover:to-[#189B3F] text-black font-bold tracking-wider uppercase text-xs shadow-neon transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>

              <NavLink
                to="/contact"
                className="px-6 py-3.5 rounded-xl glass-panel text-white font-semibold text-xs tracking-wider uppercase border border-[#189B3F]/40 hover:border-[#00ff66] transition-all hover:scale-105"
              >
                Contact Me
              </NavLink>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-gray-400">
              <span className="text-[#00ff66]">Core Stack:</span>
              <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/10">Python</span>
              <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/10">SQL</span>
              <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/10">Pandas</span>
              <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/10">Power BI</span>
              <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/10">Django</span>
            </div>
          </motion.div>

          {/* Hero Right Visual & Profile Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* 3D R3F Interactive Object Container */}
            <div className="w-full relative">
              <Hero3DObject />
            </div>

            {/* Premium Profile Image Avatar Glass Card */}
            <div className="mt-[-40px] relative z-20">
              <TiltCard>
                <div className="glass-panel p-4 rounded-2xl border border-[#189B3F]/40 shadow-neon flex items-center gap-4 max-w-sm">
                  {/* Circular Rounded Glowing Profile Image */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00ff66] shadow-neon flex-shrink-0 group">
                    <img
                      src={personalDetails.profileImage}
                      alt={personalDetails.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
                      {personalDetails.name}
                      <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                    </h3>
                    <p className="text-xs text-[#00ff66] font-mono">BCA-AIML Student</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SKILL HIGHLIGHTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl font-bold text-white mt-1">Technical Specializations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TiltCard>
            <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/40 flex items-center justify-center text-[#00ff66]">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Python Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Building automation tools, billing systems, voice assistants, and backend web logic with Django.
              </p>
              <NavLink to="/python" className="inline-flex items-center gap-1 text-xs text-[#00ff66] font-mono hover:underline">
                Explore Python →
              </NavLink>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/40 flex items-center justify-center text-[#00ff66]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Data Analytics</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Analyzing complex datasets with Pandas, NumPy, SQL, Excel, and creating Power BI dashboards.
              </p>
              <NavLink to="/analytics" className="inline-flex items-center gap-1 text-xs text-[#00ff66] font-mono hover:underline">
                View Analytics →
              </NavLink>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/40 flex items-center justify-center text-[#00ff66]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Web Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Designing clean, responsive web user interfaces with HTML, CSS, JavaScript, and Django framework.
              </p>
              <NavLink to="/projects" className="inline-flex items-center gap-1 text-xs text-[#00ff66] font-mono hover:underline">
                See Web Projects →
              </NavLink>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/40 flex items-center justify-center text-[#00ff66]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Djangopixel Venture</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Providing digital marketing, creative post design, social media management, and startup support.
              </p>
              <NavLink to="/services" className="inline-flex items-center gap-1 text-xs text-[#00ff66] font-mono hover:underline">
                Explore Brand →
              </NavLink>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">Portfolio Showcase</span>
            <h2 className="text-3xl font-bold text-white mt-1">Featured Projects</h2>
          </div>
          <NavLink
            to="/projects"
            className="text-xs font-mono text-[#00ff66] hover:text-white flex items-center gap-1"
          >
            View All 10 Projects →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.filter(p => p.featured).slice(0, 3).map((proj) => (
            <TiltCard key={proj.id}>
              <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#189B3F]/20 border border-[#189B3F]/30 text-[#00ff66]">
                      {proj.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff66]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <NavLink
                    to="/projects"
                    className="w-full py-2.5 rounded-xl bg-[#189B3F]/20 hover:bg-[#189B3F] text-[#00ff66] hover:text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    View Project Details
                  </NavLink>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* QUICK CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#189B3F]/40 relative overflow-hidden text-center space-y-6">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#189B3F]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build Data-Driven Solutions?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Whether you need a Data Analyst for data modeling & insights, a Python developer for automation, or digital marketing support via Djangopixel, let's connect.
          </p>
          <div className="pt-2">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#189B3F] hover:bg-[#00ff66] text-black font-bold text-xs uppercase tracking-wider shadow-neon transition-transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Get In Touch With Sagar
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
