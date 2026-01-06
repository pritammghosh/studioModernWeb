import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import FinalCTA from '../components/FinalCTA';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="pt-48 pb-24 bg-slate-50 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-black mb-8">
              Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              We cover the entire digital product lifecycle. From day one strategy to day-to-day scaling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-12 md:p-16 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
                  <div className="md:w-1/3">
                    <span className="text-sm font-mono text-gray-400 mb-4 block">0{idx + 1}</span>
                    <h3 className="text-4xl font-bold text-black mb-4">{service.title}</h3>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                       {['Audit', 'Research', 'Execution', 'Handoff'].map((tag, t) => (
                         <span key={t} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  <div className="md:w-1/6 flex justify-end">
                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-black text-white rounded-3xl">
            <h3 className="text-3xl font-bold mb-6">Engagement Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <h4 className="text-xl font-medium mb-2">Project Based</h4>
                 <p className="text-gray-400">Fixed scope and timeline for defining specific outcomes. Best for MVPs and site redesigns.</p>
               </div>
               <div>
                 <h4 className="text-xl font-medium mb-2">Retainer Partnership</h4>
                 <p className="text-gray-400">Ongoing dedicated team integration. Best for product scaling and continuous improvement.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
};

export default ServicesPage;