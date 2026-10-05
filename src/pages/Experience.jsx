import React from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="CAREER & INTERNSHIPS"
        title="Professional"
        highlightTitle="Experience"
        subtitle="Practical industry experience, web design internships, and practical Python developer training."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative border-l-2 border-[#189B3F]/40 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#00ff66] border-4 border-[#080a0c] shadow-neon" />

              <TiltCard>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#189B3F]/20 text-[#00ff66] border border-[#189B3F]/30">
                        {exp.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                      <p className="text-sm font-semibold text-[#00ff66]">{exp.company}</p>
                    </div>

                    <div className="text-left sm:text-right text-xs font-mono text-gray-400 space-y-1">
                      {exp.duration && (
                        <div className="flex items-center sm:justify-end gap-1 text-amber-400 font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      )}
                      {exp.location && (
                        <div className="flex items-center sm:justify-end gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#189B3F]" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Contributions & Learning:</h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <h4 className="text-[11px] font-mono text-gray-400 uppercase">Technologies Utilized:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0d1117] text-[#00ff66] border border-[#189B3F]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
