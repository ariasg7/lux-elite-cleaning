"use client";

import { motion } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24" style={{ backgroundColor: '#000000', paddingTop: '180px' }}>
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="space-y-8"
        >
          {/* Headline */}
          <h2 
            className="uppercase text-white tracking-[0.15em] leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, lineHeight: 1.1, color: '#F5F5F0' }}
          >
            Exceptional Service
            <br />
            For Exceptional Spaces
          </h2>

          {/* Subheadline */}
          <p 
            className="max-w-2xl" 
            style={{ color: '#F5F5F0', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.8 }}
          >
            Discreet, professional cleaning services tailored for luxury residences, 
            premium properties, and discerning clientele.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
            className="pt-8"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#000000',
                border: '1px solid #D4AF37',
                color: '#D4AF37',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Request Service
            </button>

            {/* Gold divider beneath CTA */}
            <div className="mt-12 w-24" style={{ height: '1px', backgroundColor: '#D4AF37' }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}