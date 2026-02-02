"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Contact',
    description: 'Reach out via phone or email',
  },
  {
    number: '02',
    title: 'Consult',
    description: 'We assess your needs',
  },
  {
    number: '03',
    title: 'Schedule',
    description: 'Choose your preferred time',
  },
  {
    number: '04',
    title: 'Service',
    description: 'Impeccable cleaning delivered',
  },
];

export function Process() {
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

    const element = document.getElementById('process');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 px-8" style={{ backgroundColor: '#000000' }}>
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
          How It Works
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              className="text-center"
            >
              {/* Step number */}
              <div
                className="mb-6 uppercase tracking-[0.2em]"
                style={{
                  color: '#D4AF37',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                }}
              >
                {step.number}
              </div>

              {/* Gold underline */}
              <div className="mx-auto mb-6" style={{ width: '60px', height: '0.5px', backgroundColor: '#D4AF37' }}></div>

              {/* Step title */}
              <h3
                className="uppercase tracking-[0.15em] mb-3"
                style={{
                  color: '#F5F5F0',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                {step.title}
              </h3>

              {/* Step description */}
              <p
                style={{
                  color: '#F5F5F0',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}