import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { analyticsDemoData } from '../data/portfolioData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { BarChart3, TrendingUp, Database, Filter, Layers, PieChart, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DataAnalytics() {
  const [activeMetric, setActiveMetric] = useState('Sales');

  const analyticsStack = [
    { name: "Python", desc: "Scripting, ETL pipelines & ML modeling" },
    { name: "Pandas", desc: "Dataframes, cleaning & aggregations" },
    { name: "NumPy", desc: "Numerical matrices & array math" },
    { name: "Matplotlib", desc: "Static & animated chart plotting" },
    { name: "SQL", desc: "Relational queries, joins & aggregations" },
    { name: "Excel", desc: "Advanced formulas & pivot analytics" },
    { name: "Power BI", desc: "Interactive executive BI dashboards" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        badge="INTERACTIVE DATA DEMO"
        title="Data Analytics"
        highlightTitle="& BI Intelligence"
        subtitle="Exploring data workflows, statistical modeling, ETL data pipelines, and interactive dashboard mockups."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* DEMO DATA DISCLAIMER BADGE */}
        <div className="glass-panel p-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 flex items-center gap-3 text-xs text-amber-300">
          <Info className="w-5 h-5 flex-shrink-0 text-amber-400" />
          <div>
            <strong className="font-mono uppercase tracking-wider text-amber-400 block">[DEMO DATA - INTERACTIVE DASHBOARD MOCKUP]</strong>
            <span>The interactive visualizations below demonstrate analytical dashboard design capabilities using simulated sample datasets.</span>
          </div>
        </div>

        {/* KPI CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsDemoData.kpis.map((kpi) => (
            <TiltCard key={kpi.title}>
              <div className="glass-panel p-6 rounded-2xl space-y-2 glass-panel-hover">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>{kpi.title}</span>
                  <span className="px-2 py-0.5 rounded bg-[#189B3F]/20 text-[#00ff66]">{kpi.change}</span>
                </div>
                <div className="text-3xl font-extrabold text-white text-gradient-green">
                  {kpi.value}
                </div>
                <div className="text-[11px] text-gray-400 font-mono">
                  Live KPI performance metric
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* INTERACTIVE CHART DEMONSTRATION */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#189B3F]/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#00ff66]" />
                <h3 className="text-xl font-bold text-white">Monthly Business Trends Visualizer</h3>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Filter dataset attributes dynamically</p>
            </div>

            {/* Metric Selectors */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Metric:
              </span>
              {['Sales', 'Target', 'Visitors'].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMetric(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeMetric === m
                      ? 'bg-[#189B3F] text-black font-bold shadow-neon'
                      : 'bg-[#0d1117] text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Canvas */}
          <div className="h-[320px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsDemoData.monthlyRevenueTrends}>
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ff66" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#189B3F" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#8b949e" tick={{ fontSize: 12 }} />
                <YAxis stroke="#8b949e" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0d1117', borderColor: '#189B3F', borderRadius: '12px', color: '#fff' }}
                />
                <Area
                  type="monotone"
                  dataKey={activeMetric}
                  stroke="#00ff66"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#chartGlow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ANALYTICS TECH STACK MATRIX */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Data Analytics Stack</h2>
            <p className="text-xs text-gray-400 mt-1">Tools & libraries utilized in data pipelines</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {analyticsStack.map((item) => (
              <TiltCard key={item.name}>
                <div className="glass-panel p-5 rounded-2xl glass-panel-hover space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                    <h3 className="text-base font-bold text-white">{item.name}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
