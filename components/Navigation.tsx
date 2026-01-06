import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-gray-100 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 z-50 relative text-black">
             <Link to="/" className="font-bold text-2xl tracking-tighter hover:opacity-70 transition-opacity">
              Studio®
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide relative
                  ${location.pathname === link.href ? 'text-black' : 'text-gray-500 hover:text-black'}
                `}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-black mt-1"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all hover:pr-8 duration-300"
            >
              Start Project
              <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link
                to="/"
                 onClick={() => setMobileMenuOpen(false)}
                 className="text-4xl font-medium tracking-tight text-black hover:text-gray-500 transition-colors"
              >
                Home
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-medium tracking-tight text-black hover:text-gray-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-black text-white text-xl font-medium rounded-full"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;