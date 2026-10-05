import React from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { personalDetails, achievementsData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Award, Terminal, BarChart2, Globe, Sparkles, CheckCircle, Briefcase, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Python Development", status: "Active Focus", icon: Terminal },
    { label: "SQL & Querying", status: "Working Knowledge", icon: BarChart2 },
    { label: "Data Analytics", status: "Core Passion", icon: Target },
    { label: "Web Development", status: "Hands-on Experience", icon: Globe },
    { label: "UI/UX Design", status: "Figma Wireframing", icon: Sparkles },
    { label: "Digital Marketing", status: "Djangopixel Brand", icon: Briefcase },
  ];

  const journeySteps = [
    {
      year: "Current Focus",
      title: "BCA-AIML Student & Tech Explorer",
      desc: "Pursuing BCA specializing in Artificial Intelligence & Machine Learning at JNCT College, Bhopal. Building statistical models & Python scripts."
    },
    {
      year: "Web Internship",
      title: "Junior Web Designer Intern at MSME Technology Centre",
      desc: "Hands-on design and development of web interfaces using HTML, CSS, JavaScript, and Figma wireframing."
    },
    {
      year: "Python Milestone",
      title: "15-Day Python Intensive Training",
      desc: "Completed dedicated practical training in Python fundamental programming, data structures, and CLI tool building."
    },
    {
      year: "Quiz Award",
      title: "2nd Position at Data Decode Academy",
      desc: "Achieved 2nd position in technical quiz competition testing Data Analytics knowledge, SQL queries, and Python logic."
    },
    {
      year: "Venture Launch",
      title: "Founder of Djangopixel Brand",
      desc: "Managing entrepreneurial brand offering digital marketing, social media creative design, post/reel editing, and web design for startups."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="BACKGROUND & JOURNEY"
        title="About"
        highlightTitle="Sagar Meena"
        subtitle="Aspiring Data Analyst, Python Developer, and BCA-AIML student dedicated to building intelligent solutions and data analytics."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Profile Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard className="w-full max-w-md">
              <div className="glass-panel p-6 rounded-3xl border border-[#189B3F]/40 shadow-neon space-y-6">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#00ff66] shadow-neon">
                  <img
                    src={personalDetails.profileImage}
                    alt={personalDetails.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-extrabold text-white">{personalDetails.name}</h3>
                  <p className="text-xs text-[#00ff66] font-mono">{personalDetails.tagline}</p>
                  <p className="text-xs text-gray-400">{personalDetails.location}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Degree:</span>
                    <span className="text-white font-medium">BCA-AIML</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">College:</span>
                    <span className="text-white font-medium">{personalDetails.college}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Brand:</span>
                    <span className="text-[#00ff66] font-medium">{personalDetails.brand}</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                My Story & Technical Philosophy
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                I am a passionate BCA-AIML student residing in Bhopal, Madhya Pradesh, India. My technical journey is driven by a deep fascination with how data can reveal hidden insights and power intelligent automated tools.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Over the past several years, I have systematically developed practical skills in <strong className="text-[#00ff66]">Python, SQL, Pandas, NumPy, Matplotlib, Excel, Power BI, Django, HTML, CSS, and Figma design</strong>. I believe in learning through execution — building real software projects like price predictors, billing platforms, voice assistants, and analytics dashboards.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                In addition to my technical pursuits, I also manage my digital marketing venture, <strong className="text-[#00ff66]">Djangopixel</strong>, which allows me to combine technology with creative design, social media strategy, and startup brand building.
              </p>
            </div>

            {/* Career Goal Card */}
            <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-[#00ff66] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00ff66]">
                <Target className="w-4 h-4" />
                <span>MY ULTIMATE CAREER GOAL</span>
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                "{personalDetails.goal}"
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS STATUS STATS GRID (REAL DATA ONLY) */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Core Competency Areas</h2>
            <p className="text-xs text-gray-400 mt-1">Realistic skill focus indicators</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((st) => {
              const IconComp = st.icon;
              return (
                <TiltCard key={st.label}>
                  <div className="glass-panel p-4 rounded-xl text-center space-y-2 glass-panel-hover">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-[#189B3F]/20 border border-[#189B3F]/30 flex items-center justify-center text-[#00ff66]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{st.label}</h4>
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#189B3F]/20 text-[#00ff66]">
                      {st.status}
                    </span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE DEVELOPMENT TIMELINE */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Development & Academic Journey</h2>
            <p className="text-xs text-gray-400 mt-1">Key milestones and learning evolution</p>
          </div>

          <div className="relative border-l-2 border-[#189B3F]/40 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Bullet Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#00ff66] border-4 border-[#080a0c] shadow-neon" />

                {/* Timeline Tag */}
                <span className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono text-[#00ff66] bg-[#189B3F]/20 px-2.5 py-1 rounded inline-block mb-2 sm:mb-0">
                  {step.year}
                </span>

                {/* Content Card */}
                <div className="glass-panel p-5 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="glass-panel p-8 rounded-3xl border border-[#189B3F]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#189B3F] to-[#00ff66] flex items-center justify-center text-black shadow-neon">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#00ff66]">HONOR & ACHIEVEMENT</span>
              <h3 className="text-xl font-bold text-white">2nd Position in Quiz Competition</h3>
              <p className="text-xs text-gray-400">Awarded by Data Decode Academy in Data Analytics, SQL & Python.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#0d1117] border border-[#189B3F]/30 text-xs font-mono text-[#00ff66]">
            Runner-Up Winner
          </div>
        </div>
      </div>
    </div>
  );
}
