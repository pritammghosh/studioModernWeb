import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';

const SelectedWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="work" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
         <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-black">Selected Work</h2>
      </div>

      <div className="pl-6 md:pl-12 overflow-x-auto no-scrollbar pb-12 w-full">
        <div className="flex gap-6 md:gap-12 w-max">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="group relative w-[85vw] md:w-[800px] shrink-0 cursor-pointer"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-gray-100 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-gray-200 pt-6">
                <div>
                   <h3 className="text-3xl font-medium text-black mb-1">{project.title}</h3>
                   <p className="text-gray-500 text-lg">{project.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-1 rounded-full border border-gray-200 text-xs font-mono uppercase text-black">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="w-12 shrink-0" /> 
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;