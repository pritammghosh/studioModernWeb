import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 md:px-12 bg-white overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-semibold tracking-tighter text-black">
              WE BUILD
              <br />
              <span className="text-gray-400">DIGITAL</span>
              <br />
              FUTURE.
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 border-t border-gray-200 pt-8">
          <div className="md:col-span-5">
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="text-xl md:text-2xl text-black font-medium leading-snug"
             >
               Global creative studio partnering with ambitious brands to define what's next in culture and technology.
             </motion.p>
          </div>
          <div className="md:col-span-3 md:col-start-10 flex flex-col justify-between">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Capabilities</p>
              <ul className="text-sm font-medium text-black space-y-1">
                <li>Strategy & Positioning</li>
                <li>Product Design (UX/UI)</li>
                <li>Full-Stack Engineering</li>
                <li>Brand Identity</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;