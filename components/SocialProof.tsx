"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SocialProof() {
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

    const element = document.getElementById('social-proof');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-proof" className="py-32 px-8" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className="uppercase tracking-[0.2em] leading-relaxed"
            style={{
              color: '#000000',
              fontSize: '1.125rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              lineHeight: 2,
            }}
          >
            Serving premium residences across Manhattan, Brooklyn, and Queens
          </p>

          <div className="mt-12 mx-auto" style={{ width: '80px', height: '0.5px', backgroundColor: '#D4AF37' }}></div>
        </motion.div>
      </div>
    </section>
  );
}