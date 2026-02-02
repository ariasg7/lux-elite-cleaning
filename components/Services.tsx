"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
  {
    name: 'Luxury Residential',
    description: 'Comprehensive cleaning for luxury apartments and penthouses',
  },
  {
    name: 'Premium Turnovers',
    description: 'Cleaning for rental properties and high-end residences',
  },
  {
    name: 'Short-Term Rentals',
    description: 'Fast, meticulous cleaning between guest stays',
  },
  {
    name: 'Move In/Move Out',
    description: 'Deep detailing for seamless transitions into your new Westchester home',
  },
];

export function Services() {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-20 uppercase tracking-[0.2em]"
          style={{
            color: '#F5F5F0',
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
          }}
        >
          Our Services
        </motion.h2>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              className="p-12 group transition-all duration-300"
              style={{
                border: '0.5px solid #D4AF37',
                backgroundColor: 'transparent',
              }}
            >
              <h3
                className="uppercase tracking-[0.15em] mb-4"
                style={{
                  color: '#F5F5F0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  color: '#F5F5F0',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}