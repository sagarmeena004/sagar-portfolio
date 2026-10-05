import React from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { educationData, achievementsData, personalDetails } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="ACADEMICS & QUALIFICATIONS"
        title="Education &"
        highlightTitle="Academic Journey"
        subtitle="Formal education, specialization in AI & Machine Learning, and technical quiz competitions."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Education Timeline */}
        {educationData.map((edu, idx) => (
          <TiltCard key={idx}>
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#189B3F]/40 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#189B3F] to-[#00ff66] flex items-center justify-center text-black flex-shrink-0 shadow-neon">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00ff66] px-2.5 py-1 rounded bg-[#189B3F]/20 border border-[#189B3F]/30">
                      {edu.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{edu.degree}</h3>
                    <p className="text-base font-semibold text-[#00ff66]">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                  <MapPin className="w-4 h-4 text-[#189B3F]" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Academic Focus & Learning Scope:</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TiltCard>
        ))}

        {/* Achievements Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#00ff66]" />
            <h2 className="text-2xl font-bold text-white">Honors & Competition Achievements</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {achievementsData.map((ach, i) => (
              <TiltCard key={i}>
                <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      QUIZ COMPETITION WINNER
                    </span>
                    <h3 className="text-xl font-bold text-white">{ach.title}</h3>
                    <p className="text-xs font-mono text-[#00ff66]">{ach.organization}</p>
                    <p className="text-xs text-gray-400 pt-1">{ach.description}</p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#189B3F] text-black font-bold text-xs uppercase tracking-wider shadow-neon text-center">
                    2nd Place Position
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Integrity Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-[#0d1117] border border-white/10 text-center text-xs text-gray-400 font-mono flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
          <span>Academic records presented strictly adhere to real institutional credentials without unverified metrics.</span>
        </div>
      </div>
    </div>
  );
}
