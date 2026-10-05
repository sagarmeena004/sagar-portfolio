import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ badge, title, highlightTitle, subtitle }) {
  return (
    <div className="relative pt-24 pb-12 text-center max-w-4xl mx-auto px-4">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[#189B3F]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-4"
      >
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#189B3F]/15 border border-[#189B3F]/40 text-[#00ff66] shadow-neon">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {title} {highlightTitle && <span className="text-gradient-green">{highlightTitle}</span>}
        </h1>

        {subtitle && (
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
