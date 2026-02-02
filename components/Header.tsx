"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const leftNav = [
  { label: 'RESIDENTIAL', href: '#services' },
  { label: 'MANAGEMENT', href: '#services' },
];

const rightNav = [
  { label: 'THE STANDARD', href: '#standard' },
  { label: 'INQUIRY', href: '#contact' },
];

const allNav = [...leftNav, ...rightNav];

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 px-6 md:px-8 bg-black/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* DESKTOP LEFT NAV (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-end mr-12">
            {leftNav.map((item) => (
              <NavButton key={item.label} item={item} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} scrollToSection={scrollToSection} />
            ))}
          </nav>

          {/* CENTER LOGO (Always Visible) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer z-[60]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/img/Lux_Elite_Cleaning_White.png" 
              alt="Lux Elite"
              className="h-10 md:h-20 w-auto"
            />
          </motion.div>

          {/* DESKTOP RIGHT NAV (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-start ml-12">
            {rightNav.map((item) => (
              <NavButton key={item.label} item={item} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} scrollToSection={scrollToSection} />
            ))}
          </nav>

          {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
          <div className="md:hidden flex-1 flex justify-end">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-[60] p-2"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1.5">
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#D4AF37]"
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-[#D4AF37]"
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#D4AF37]"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {allNav.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-[#F5F5F0] text-lg tracking-[0.3em] font-light hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavButton({ item, hoveredItem, setHoveredItem, scrollToSection }: any) {
  return (
    <button
      onClick={() => scrollToSection(item.href)}
      onMouseEnter={() => setHoveredItem(item.label)}
      onMouseLeave={() => setHoveredItem(null)}
      className="relative uppercase tracking-[0.25em] text-[10px] font-light transition-colors duration-500"
      style={{
        color: hoveredItem === item.label ? '#D4AF37' : '#F5F5F0',
      }}
    >
      {item.label}
      {hoveredItem === item.label && (
        <motion.div 
          layoutId="underline"
          className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#D4AF37]" 
        />
      )}
    </button>
  );
}