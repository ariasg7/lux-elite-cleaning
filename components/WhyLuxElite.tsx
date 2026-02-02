"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const values = [
  'Uncompromising attention to detail in every corner',
  'Background-checked, trained professionals',
  'Flexible scheduling that respects your time',
  'Discreet service with absolute confidentiality',
];

export function WhyLuxElite() {
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

    const element = document.getElementById('why-lux-elite');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-lux-elite" className="py-32 px-8" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left column - Heading */}
          <div className="md:col-span-5">
            <h2
              className="uppercase tracking-[0.15em] leading-tight"
              style={{
                color: '#000000',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                letterSpacing: '0.15em',
                lineHeight: 1.2,
              }}
            >
              Why Lux Elite
            </h2>
          </div>

          {/* Gold vertical divider */}
          <div className="hidden md:block md:col-span-1 relative">
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{ width: '0.5px', backgroundColor: '#D4AF37' }}
            ></motion.div>
          </div>

          {/* Right column - Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-6 space-y-8"
          >
            {values.map((value, index) => (
              <p
                key={index}
                style={{
                  color: '#000000',
                  fontSize: '1.125rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {value}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}