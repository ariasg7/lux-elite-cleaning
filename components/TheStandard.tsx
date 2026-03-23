"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const comparisons = [
  {
    title: 'Marble Excellence',
    before: '/img/before_after/marble_before.webp',
    after: '/img/before_after/marble_after.webp',
    description: 'From dulled surface to diamond honed perfection',
  },
  {
    title: 'Polished Windows',
    before: '/img/before_after/window_before.webp',
    after: '/img/before_after/window_after.webp',
    description: 'Clouded panes restored to crystal-clear transparency.',
  },
  {
    title: 'Premium Textiles',
    before: '/img/before_after/linen_before.webp',
    after: '/img/before_after/linen_after.webp',
    description: 'Velvet and upholstery groomed to perfection',
  },
  {
    title: 'Countertop Detail',
    before: '/img/before_after/counter_before.webp',
    after: '/img/before_after/counter_after.webp',
    description: 'Surfaces that reflect our commitment to detail',
  },
];

export function TheStandard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('standard');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="standard" className="py-32 px-8" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="uppercase tracking-[0.2em] mb-4 text-black text-sm font-medium">
            The Standard
          </h2>
          <p className="text-black text-xl font-light leading-relaxed">
            Details of Excellence
          </p>
          <div className="mx-auto mt-8 w-20 h-[0.5px] bg-[#D4AF37]"></div>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              className="group"
            >
              <div
                className="relative overflow-hidden mb-6 border-[0.5px] border-[#D4AF37] aspect-[4/3]"
              >
                {/* CRITICAL FIX: Only render the slider when the section is visible.
                   This prevents all 8 images from loading the moment the page starts.
                */}
                {isVisible && (
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src={comparison.before}
                        alt={`${comparison.title} - Before`}
                        style={{
                          objectFit: 'cover',
                          filter: 'brightness(0.7) contrast(0.9)',
                        }}
                        // Lazy load the images that aren't first in view
                        loading={index <= 1 ? "eager" : "lazy"} 
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={comparison.after}
                        alt={`${comparison.title} - After`}
                        style={{ objectFit: 'cover' }}
                        loading={index <= 1 ? "eager" : "lazy"}
                      />
                    }
                    position={50}
                    style={{ width: '100%', height: '100%' }}
                    handle={
                      <div className="w-[2px] h-full bg-[#D4AF37] flex items-center justify-center relative">
                        <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] bg-black absolute"></div>
                      </div>
                    }
                  />
                )}
              </div>

              <div className="text-center text-black">
                <h3 className="uppercase tracking-[0.15em] mb-3 text-sm font-medium">
                  {comparison.title}
                </h3>
                <p className="text-sm font-light leading-relaxed">
                  {comparison.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}