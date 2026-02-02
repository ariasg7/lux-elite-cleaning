"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 px-8" style={{ backgroundColor: '#000000' }}>
      {/* Top gold divider */}
      <div className="w-full max-w-6xl mx-auto mb-20" style={{ height: '0.5px', backgroundColor: '#D4AF37' }}></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Headline */}
          <h2
            className="uppercase tracking-[0.15em] leading-tight"
            style={{
              color: '#F5F5F0',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              lineHeight: 1.2,
            }}
          >
            Experience the Lux Elite Difference
          </h2>

          {/* Subtext */}
          <p
            style={{
              color: '#F5F5F0',
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Contact us today to schedule your first service
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300"
              style={{
                backgroundColor: '#000000',
                border: '0.5px solid #D4AF37',
                color: '#D4AF37',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Contact info */}
          <div className="pt-8 space-y-3">
            <p
              style={{
                color: '#F5F5F0',
                fontSize: '1rem',
                fontWeight: 300,
              }}
            >
              contact@luxelitecleaning.com
            </p>
            <p
              style={{
                color: '#F5F5F0',
                fontSize: '1rem',
                fontWeight: 300,
              }}
            >
              (212) 555-0100
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}