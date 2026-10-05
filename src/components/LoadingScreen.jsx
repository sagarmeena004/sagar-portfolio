import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 35);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-[#080a0c] flex flex-col items-center justify-center p-4 font-mono"
    >
      <div className="relative flex flex-col items-center space-y-6">
        {/* Glow backdrop */}
        <div className="absolute w-48 h-48 bg-[#189B3F]/20 rounded-full blur-2xl animate-pulse" />

        {/* Logo Text */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#189B3F] to-[#00ff66] flex items-center justify-center text-black font-black text-2xl shadow-neon">
            S
          </div>
          <span className="text-3xl font-extrabold text-white tracking-widest">
            SAGAR<span className="text-[#00ff66]">.DEV</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-64 space-y-2">
          <div className="h-1.5 w-full bg-[#0d1117] rounded-full overflow-hidden border border-[#189B3F]/30 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#189B3F] to-[#00ff66] rounded-full shadow-neon"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span className="text-[#00ff66] animate-pulse">Initializing System...</span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
