import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black mb-6">Capabilities</h2>
          <p className="text-lg text-gray-500">
            Comprehensive design and engineering services tailored for ambitious brands looking to dominate their market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white p-8 lg:p-10 rounded-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
               {/* Numbering */}
               <div className="mb-12">
                 <span className="inline-block text-lg font-mono font-medium text-gray-300 group-hover:text-indigo-600 transition-colors duration-300 border-b border-gray-100 pb-1">
                   0{idx + 1}
                 </span>
               </div>

              <h3 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Decorative corner accent on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-50 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;