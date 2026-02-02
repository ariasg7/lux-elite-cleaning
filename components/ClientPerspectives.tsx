"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "The level of discretion and professionalism is unmatched. Our residence has never looked better.",
    attribution: "M.W. — Central Park South",
  },
  {
    quote: "They understand that luxury is in the details. Every surface, every corner, absolutely pristine.",
    attribution: "A.K. — Tribeca Penthouse",
  },
  {
    quote: "Our property management company won't use anyone else. Lux Elite sets the standard.",
    attribution: "R.S. — Brooklyn Heights",
  },
  {
    quote: "Impeccable service delivered with the utmost respect for privacy and schedule.",
    attribution: "J.L. — Upper East Side",
  },
];

export function ClientPerspectives() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="testimonials" className="py-32 px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16 uppercase tracking-[0.2em]"
          style={{
            color: '#F5F5F0',
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
          }}
        >
          Client Perspectives
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center space-y-8"
            >
              {/* Quote */}
              <blockquote
                className="leading-relaxed"
                style={{
                  color: '#F5F5F0',
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  fontFamily: 'Georgia, serif',
                }}
              >
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Attribution */}
              <p
                className="uppercase tracking-[0.2em]"
                style={{
                  color: '#D4AF37',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                }}
              >
                {testimonials[currentIndex].attribution}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="transition-all duration-300"
              style={{
                width: currentIndex === index ? '40px' : '8px',
                height: '1px',
                backgroundColor: currentIndex === index ? '#D4AF37' : '#F5F5F0',
                opacity: currentIndex === index ? 1 : 0.4,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
