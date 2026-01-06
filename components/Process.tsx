import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end pb-8 border-b border-white/20">
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter">Process</h2>
          <p className="text-gray-400 max-w-md text-right mt-6 md:mt-0">
            Our methodology is designed to reduce risk and maximize speed to market without compromising on craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className="group relative h-[450px] border border-white/10 p-6 flex flex-col justify-between rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 bg-zinc-900/30"
            >
              {/* Background Image Reveal */}
              <div className="absolute inset-2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover rounded-xl filter brightness-[0.4]"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl" />
              </div>

              {/* Step Number */}
              <div className="relative z-10 border-b border-white/20 pb-4 group-hover:border-white/50 transition-colors duration-500">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block text-sm font-mono text-gray-400 group-hover:text-white transition-colors"
                >
                  0{step.number}
                </motion.span>
              </div>

              {/* Content */}
              <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-medium mb-4 text-white group-hover:scale-[1.02] origin-left transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;