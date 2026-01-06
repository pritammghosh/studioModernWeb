import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import FinalCTA from '../components/FinalCTA';

const ProcessPage: React.FC = () => {
  return (
    <>
      <section className="pt-48 pb-24 bg-black text-white px-6 md:px-12 min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32 border-b border-white/20 pb-12"
          >
            <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-8">
              The<br/>Methodology
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              We believe great products happen when design rigor meets engineering discipline. Our process is linear but flexible, ensuring we move fast without breaking things.
            </p>
          </motion.div>

          <div className="space-y-48">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                 <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6 }}
                       className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                    >
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>
                 </div>
                 <div className={`md:col-span-1 md:col-start-${idx % 2 === 1 ? '6' : '7'} hidden md:block border-l border-white/20 h-full mx-auto`} />
                 <div className={`md:col-span-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="text-sm font-mono text-gray-500 mb-6 block">0{step.number} — PHASE</span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">{step.title}</h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">{step.description}</p>
                    
                    <ul className="space-y-4 text-gray-300">
                      {['Stakeholder Interviews', 'Technical Feasibility', 'Component Architecture'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                          {item} for {step.title}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
};

export default ProcessPage;