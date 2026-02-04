"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Prepare the data for Google Apps Script
    const queryString = new URLSearchParams();
    formData.forEach((value, key) => {
      queryString.append(key, value.toString());
    });

    try {
      // REPLACE THE URL BELOW WITH YOUR GOOGLE DEPLOYMENT URL
      await fetch("https://script.google.com/macros/s/AKfycbwSpOgVsIuEDnsIwUf7-N0hPd-4R6nqZlgumxQMjkSvJCDQeG1NsF3nZ6Wn6Aq0L3AAPQ/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: queryString.toString(),
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Inquiry failed to send. Please contact us via phone.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-black">
      <div className="w-full max-w-6xl mx-auto mb-20 h-[0.5px] bg-[#D4AF37]"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {!showForm ? (
            <motion.div exit={{ opacity: 0, y: -20 }} className="space-y-12">
              <h2 className="uppercase tracking-[0.15em] text-[#F5F5F0] text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight">
                Experience the Lux Elite Difference
              </h2>
              <p className="text-[#F5F5F0] text-lg font-light leading-relaxed">
                Bespoke cleaning solutions for Manhattan's most prestigious residences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#000" }}
                onClick={() => setShowForm(true)}
                className="px-12 py-4 uppercase tracking-[0.2em] text-[10px] border border-[#D4AF37] text-[#D4AF37] transition-all duration-500"
              >
                Begin Inquiry
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    <input name="name" required type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase" />
                    <input name="email" required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase" />
                    <input name="phone" required type="tel" placeholder="PHONE NUMBER" className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <input name="city" required type="text" placeholder="CITY" className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase" />
                    <input name="state" required type="text" placeholder="ST" maxLength={2} className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase text-center" />
                    <input name="zip" required type="text" placeholder="ZIP" className="w-full bg-transparent border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30 uppercase" />
                  </div>

                  <div className="relative">
                    <select name="service" className="w-full bg-black border-b border-white/20 py-3 text-[#F5F5F0] text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer uppercase">
                      <option value="residential">RESIDENTIAL PENTHOUSE</option>
                      <option value="management">PROPERTY MANAGEMENT</option>
                      <option value="commercial">ESTATE MAINTENANCE</option>
                    </select>
                  </div>

                  <motion.button
                    disabled={isSending}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#D4AF37] text-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-[#b8962d] transition-colors disabled:opacity-50"
                  >
                    {isSending ? "Processing..." : "Submit Application"}
                  </motion.button>

                  <button type="button" onClick={() => setShowForm(false)} className="text-white/40 text-[9px] tracking-[0.1em] uppercase hover:text-white transition-colors">
                    Back
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
                  <h3 className="text-[#D4AF37] tracking-[0.2em] text-sm mb-4 uppercase">Thank You</h3>
                  <p className="text-white/60 font-light text-sm italic">An Elite Consultant will review your inquiry within 4 hours.</p>
                </motion.div>
              )}
            </motion.div>
          )}

          <div className="pt-12 space-y-4 border-t border-white/5 max-w-xs mx-auto">
            <p className="text-white/50 text-[10px] tracking-widest uppercase">gianiarip2002@hotmail.com</p>
            <p className="text-white/50 text-[10px] tracking-widest uppercase">(212) 555-0100</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}