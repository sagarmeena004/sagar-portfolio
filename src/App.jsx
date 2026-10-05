import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import DataAnalytics from './pages/DataAnalytics';
import PythonDev from './pages/PythonDev';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#080a0c] text-[#e6edf3] font-sans antialiased overflow-x-hidden selection:bg-[#189B3F] selection:text-white">
      {/* Preloader */}
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* 3D WebGL Ambient Background */}
      <ThreeBackground />

      {/* Auto Scroll on Navigation */}
      <ScrollToTop />

      {/* Header Navbar */}
      <Navbar />

      {/* Page Content Routes with Animated Fade Transitions */}
      <main className="relative z-10 min-h-screen pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/analytics" element={<DataAnalytics />} />
              <Route path="/python" element={<PythonDev />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
