import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import FinalCTA from '../components/FinalCTA';

const WorkPage: React.FC = () => {
  return (
    <>
      <section className="pt-48 pb-24 bg-white px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-black mb-8">
              Selected<br/>Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              A collection of digital products, platforms, and experiences defined by strategic clarity and craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-medium text-black mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-lg">{project.description}</p>
                  </div>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs font-mono uppercase tracking-wide mt-1">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
};

export default WorkPage;