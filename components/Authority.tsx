import React, { useState, useEffect, useRef, useCallback } from 'react';
import { METRICS, TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Authority: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
  }, [isPaused]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleManualNext = () => {
    nextTestimonial();
    startTimer(); // Reset timer
  };

  const handleManualPrev = () => {
    prevTestimonial();
    startTimer(); // Reset timer
  };

  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-32">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="border-l-2 border-black pl-8">
              <div className="text-7xl md:text-8xl font-bold mb-4 text-black tracking-tighter">
                {metric.value}<span className="text-4xl align-top ml-1 font-light text-gray-400">{metric.suffix}</span>
              </div>
              <div className="text-sm font-mono uppercase tracking-widest text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="border-t border-gray-200 pt-24 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-4xl mx-auto text-center relative">
            <Quote className="absolute -top-12 left-1/2 -translate-x-1/2 text-gray-100" size={80} />
            
            <div className="h-[350px] md:h-[300px] flex flex-col justify-center items-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-full px-4"
                >
                  <blockquote className="text-2xl md:text-4xl font-medium leading-tight text-black mb-8 tracking-tight">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </blockquote>
                  <cite className="not-italic flex flex-col items-center gap-1">
                    <span className="font-bold text-black uppercase tracking-wide text-sm">{TESTIMONIALS[currentIndex].author}</span>
                    <span className="text-gray-500 text-sm font-light">{TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}</span>
                  </cite>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={handleManualPrev}
                className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleManualNext}
                className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    startTimer();
                  }}
                  className={`h-1 transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Authority;