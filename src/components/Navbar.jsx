import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks, personalDetails } from '../data/portfolioData';
import { Menu, X, Code, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a0c]/85 backdrop-blur-xl border-b border-[#189B3F]/25 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#189B3F] to-[#00ff66]/80 flex items-center justify-center text-black font-mono font-black shadow-neon group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-mono text-xl tracking-wider">
            SAGAR<span className="text-[#00ff66] animate-pulse">.MEENA</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0d1117]/80 p-1.5 rounded-full border border-[#189B3F]/20 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-[#189B3F] shadow-neon font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <NavLink
            to="/contact"
            className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#189B3F] to-[#108032] hover:from-[#00ff66] hover:to-[#189B3F] text-black shadow-neon transition-all hover:scale-105 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-[#0d1117] border border-[#189B3F]/30 text-gray-200 hover:text-[#00ff66] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0d1117]/95 backdrop-blur-2xl border-b border-[#189B3F]/30 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#189B3F] text-black font-semibold shadow-neon'
                        : 'text-gray-300 hover:bg-white/5 hover:text-[#00ff66]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-white/10">
                <NavLink
                  to="/contact"
                  className="w-full py-3 rounded-lg text-center text-xs font-bold uppercase tracking-wider bg-[#189B3F] text-black block shadow-neon"
                >
                  Contact Sagar
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
