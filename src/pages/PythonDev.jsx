import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { pythonTerminalSnippets, projectsData } from '../data/portfolioData';
import { Terminal, Copy, Check, Play, Cpu, Server, Code2, Sparkles, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PythonDev() {
  const [activeTab, setActiveTab] = useState(pythonTerminalSnippets[0].id);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLog, setExecutionLog] = useState(null);

  const activeSnippet = pythonTerminalSnippets.find(s => s.id === activeTab) || pythonTerminalSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setExecutionLog("Compiling Python script & initializing environment...");
    setTimeout(() => {
      setIsRunning(false);
      if (activeSnippet.id === 'bitcoin') {
        setExecutionLog("SUCCESS: Model trained on 1,200 rows. Feature weights: MA_10=0.62, MA_50=0.31, Volume=0.07. Predicted Price: $65,420.00");
      } else if (activeSnippet.id === 'jarvis') {
        setExecutionLog("SUCCESS: Voice Recognition listener running on port 8080. Assistant ready for voice command input.");
      } else {
        setExecutionLog("SUCCESS: Invoice generated for Sagar Meena. Subtotal: ₹125,000.00 | GST: ₹22,500.00 | Total Due: ₹147,500.00");
      }
    }, 900);
  };

  const pythonSkills = [
    { title: "Core Python & OOP", desc: "Object-oriented design, modular scripts, exceptions, file I/O." },
    { title: "Django Framework", desc: "MVT pattern, ORM database queries, REST API endpoints." },
    { title: "Automation Scripts", desc: "Web scraping, automated file processing & task scheduling." },
    { title: "Data Processing", desc: "Pandas data cleaning, NumPy array transformations." },
    { title: "Backend Systems", desc: "Database models, server routing, and CLI software tools." },
    { title: "Problem Solving", desc: "Algorithmic logic, data structure utilization, and debugging." },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="PYTHON SPECIALIZATION"
        title="Python"
        highlightTitle="Development"
        subtitle="Exploring Python software engineering, Django backend development, script automation, and AI logic."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* INTERACTIVE PYTHON CODE TERMINAL SIMULATOR */}
        <div className="glass-panel rounded-3xl border border-[#189B3F]/40 overflow-hidden shadow-2xl">
          {/* Terminal Window Top Bar */}
          <div className="bg-[#0b0e12] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5 ml-2">
                <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
                python_environment_v3.12.exe
              </span>
            </div>

            {/* Code Snippet Tabs */}
            <div className="flex items-center gap-2">
              {pythonTerminalSnippets.map((snip) => (
                <button
                  key={snip.id}
                  onClick={() => {
                    setActiveTab(snip.id);
                    setExecutionLog(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === snip.id
                      ? 'bg-[#189B3F] text-black font-bold shadow-neon'
                      : 'bg-[#0d1117] text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  {snip.title}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Code Display Area */}
          <div className="p-6 bg-[#080a0c] font-mono text-xs overflow-x-auto relative">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5">
              <span className="text-gray-400 text-[11px]"># File: src/{activeSnippet.title}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-3 py-1.5 rounded-lg bg-[#189B3F]/20 hover:bg-[#189B3F] text-[#00ff66] hover:text-black font-bold text-xs transition-colors flex items-center gap-1.5 border border-[#189B3F]/40"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? "Executing..." : "Run Script"}</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-[#0d1117] text-gray-400 hover:text-white border border-white/10"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <pre className="text-gray-300 leading-relaxed overflow-x-auto">
              <code>{activeSnippet.code}</code>
            </pre>

            {/* Execution Log Output Box */}
            {executionLog && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-[#0d1117] border border-[#189B3F]/40 text-[#00ff66] font-mono text-xs space-y-1"
              >
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">[Terminal Console Output]</div>
                <div>{executionLog}</div>
              </motion.div>
            )}
          </div>
        </div>

        {/* PYTHON SKILL DOMAINS GRID */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Python Core Capacities</h2>
            <p className="text-xs text-gray-400 mt-1">Specialized engineering disciplines</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonSkills.map((sk) => (
              <TiltCard key={sk.title}>
                <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-2">
                  <div className="flex items-center gap-2 text-[#00ff66]">
                    <Code2 className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-white">{sk.title}</h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{sk.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* PYTHON PROJECTS GRID */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Python Projects Showcase</h2>
            <p className="text-xs text-gray-400 mt-1">Applications built with Python & Django</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.filter(p => p.tech.includes('Python')).slice(0, 3).map((p) => (
              <TiltCard key={p.id}>
                <div className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#189B3F]/20 text-[#00ff66]">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-3">{p.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
