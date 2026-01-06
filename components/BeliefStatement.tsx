import React from 'react';
import { motion } from 'framer-motion';
import { BELIEF_STATEMENTS } from '../constants';

const BeliefStatement: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-black text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-24">
          {BELIEF_STATEMENTS.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 md:items-start border-t border-white/20 pt-8"
            >
              <span className="text-xs font-mono text-gray-500 mt-2">0{index + 1}</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
                {statement}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefStatement;