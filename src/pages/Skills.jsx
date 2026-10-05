import React from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { skillsData } from '../data/portfolioData';
import { Code2, BarChart3, Globe, Figma, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-[#00ff66]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#00ff66]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#00ff66]" />;
      case 'Figma': return <Figma className="w-6 h-6 text-[#00ff66]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00ff66]" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Current Focus':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#189B3F] text-black shadow-neon">CURRENT FOCUS</span>;
      case 'Learning':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">EXPANDING KNOWLEDGE</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#189B3F]/20 text-[#00ff66] border border-[#189B3F]/30">WORKING KNOWLEDGE</span>;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="TECHNICAL STACK"
        title="Skills &"
        highlightTitle="Competencies"
        subtitle="Detailed overview of technical tools, libraries, programming languages, and design skills."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {skillsData.map((cat, idx) => (
          <div key={cat.category} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div className="p-2 rounded-xl bg-[#189B3F]/20 border border-[#189B3F]/30">
                {getCategoryIcon(cat.icon)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{cat.category}</h2>
                <p className="text-xs text-gray-400">Core technologies in {cat.category.toLowerCase()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.skills.map((sk) => (
                <TiltCard key={sk.name}>
                  <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {sk.name}
                          <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                        </h3>
                        {getStatusBadge(sk.status)}
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        {sk.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                        <span>Proficiency Tier:</span>
                        <span className="text-white font-semibold">{sk.level}</span>
                      </div>
                      
                      {/* Non-numeric animated indicator */}
                      <div className="h-1.5 w-full bg-[#0d1117] rounded-full overflow-hidden border border-[#189B3F]/20 p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: sk.status === 'Current Focus' ? '90%' : sk.status === 'Learning' ? '65%' : '80%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-[#189B3F] to-[#00ff66] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        ))}

        {/* SUMMARY BADGE */}
        <div className="glass-panel p-8 rounded-3xl border border-[#189B3F]/40 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Continuous Growth & Learning</h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Skill levels are based on hands-on project implementations, academic coursework in BCA-AIML, and continuous self-driven learning.
          </p>
        </div>
      </div>
    </div>
  );
}
