"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const comparisons = [
  {
    title: 'Marble Excellence',
    before: 'https://images.unsplash.com/photo-1736506159814-25bcd056da22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=800',
    after: 'https://images.unsplash.com/photo-1736506159814-25bcd056da22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'From dulled surface to diamond honed perfection',
  },
  {
    title: 'Polished Brass',
    before: 'https://images.unsplash.com/photo-1663739314425-4b0d05a8a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=800',
    after: 'https://images.unsplash.com/photo-1663739314425-4b0d05a8a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Tarnished fixtures restored to their original luster',
  },
  {
    title: 'Premium Textiles',
    before: 'https://images.unsplash.com/photo-1639654768139-9fd59f1a8417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=800',
    after: 'https://images.unsplash.com/photo-1639654768139-9fd59f1a8417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Velvet and upholstery groomed to perfection',
  },
  {
    title: 'Countertop Detail',
    before: 'https://images.unsplash.com/photo-1768039049614-f3c2bae3f1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=800',
    after: 'https://images.unsplash.com/photo-1768039049614-f3c2bae3f1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
          <h2
            className="uppercase tracking-[0.2em] mb-4"
            style={{
              color: '#000000',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
            }}
          >
            The Standard
          </h2>
          <p
            style={{
              color: '#000000',
              fontSize: '1.25rem',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Details of Excellence
          </p>

          {/* Gold divider */}
          <div className="mx-auto mt-8" style={{ width: '80px', height: '0.5px', backgroundColor: '#D4AF37' }}></div>
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
              {/* Comparison Slider */}
              <div
                className="relative overflow-hidden mb-6"
                style={{
                  border: '0.5px solid #D4AF37',
                  aspectRatio: '4/3',
                }}
              >
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={comparison.before}
                      alt={`${comparison.title} - Before`}
                      style={{
                        objectFit: 'cover',
                        filter: 'brightness(0.7) contrast(0.9)',
                      }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={comparison.after}
                      alt={`${comparison.title} - After`}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                  position={50}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  handle={
                    <div
                      style={{
                        width: '2px',
                        height: '100%',
                        backgroundColor: '#D4AF37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: '2px solid #D4AF37',
                          backgroundColor: '#000000',
                          position: 'absolute',
                        }}
                      ></div>
                    </div>
                  }
                />
              </div>

              {/* Title and Description */}
              <div className="text-center">
                <h3
                  className="uppercase tracking-[0.15em] mb-3"
                  style={{
                    color: '#000000',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  {comparison.title}
                </h3>
                <p
                  style={{
                    color: '#000000',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
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
