import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <section className="min-h-screen pt-48 pb-24 bg-white px-6 md:px-12 flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left Col */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter text-black mb-12">
            Let's Start<br/>Something.
          </h1>
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-mono uppercase text-gray-400 mb-2">New Business</h3>
              <p className="text-2xl font-medium">hello@studio.design</p>
            </div>
            <div>
              <h3 className="text-sm font-mono uppercase text-gray-400 mb-2">Office</h3>
              <p className="text-2xl font-medium">
                109 North 12th Street<br/>
                Brooklyn, NY 11249
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Col - Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-gray-50 p-12 rounded-3xl"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black ml-1">What's your name?</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white border-none p-5 rounded-xl text-lg focus:ring-2 focus:ring-black/5 outline-none placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black ml-1">Your email address</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                className="w-full bg-white border-none p-5 rounded-xl text-lg focus:ring-2 focus:ring-black/5 outline-none placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black ml-1">Tell us about the project</label>
              <textarea 
                rows={4}
                placeholder="We need to build a new SaaS platform..." 
                className="w-full bg-white border-none p-5 rounded-xl text-lg focus:ring-2 focus:ring-black/5 outline-none placeholder:text-gray-300 resize-none"
              />
            </div>
            
            <div className="space-y-2">
               <label className="text-sm font-medium text-black ml-1">Budget Range (USD)</label>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {['< 25k', '25k-50k', '50k-100k', '100k+'].map((budget) => (
                   <button key={budget} className="px-4 py-3 bg-white rounded-xl text-sm font-medium hover:bg-black hover:text-white transition-colors border border-transparent hover:border-black/10">
                     {budget}
                   </button>
                 ))}
               </div>
            </div>

            <button className="w-full py-5 bg-black text-white text-xl font-medium rounded-full hover:bg-gray-800 transition-colors mt-8">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;