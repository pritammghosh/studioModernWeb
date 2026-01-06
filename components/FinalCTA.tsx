import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
          Let’s Build<br/>Something Real.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We partner with ambitious founders and teams ready to invest in quality. 
          Projects typically start at $25k.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center gap-3 group">
                Request Collaboration
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-gray-500 text-sm">or email hello@studio.design</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;