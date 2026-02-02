"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const trustItems = [
  'Insured & Bonded',
  'Professional Staff',
  'Luxury Residences',
  'Reliable Scheduling',
];

export function TrustSignals() {
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

    const element = document.getElementById('trust-signals');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust-signals" className="py-20 px-8" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Top gold divider */}
      <div className="w-full mb-16" style={{ height: '0.5px', backgroundColor: '#D4AF37' }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {trustItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
            >
              <p
                className="uppercase tracking-[0.12em]"
                style={{
                  color: '#000000',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gold divider */}
      <div className="w-full mt-16" style={{ height: '0.5px', backgroundColor: '#D4AF37' }}></div>
    </section>
  );
}