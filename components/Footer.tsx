import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: NAV_LINKS,
        services: [
            { label: 'Product Strategy', href: '/services' },
            { label: 'UX/UI Design', href: '/services' },
            { label: 'Engineering', href: '/services' },
            { label: 'Growth & Scale', href: '/services' },
        ],
        social: [
            { label: 'LinkedIn', href: '#' },
            { label: 'Twitter', href: '#' },
            { label: 'Dribbble', href: '#' },
            { label: 'GitHub', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Main Footer Content */}
                <div className="py-20 md:py-28">

                    {/* Top Section - CTA */}
                    <div className="mb-20 md:mb-28">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                        >
                            <div>
                                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                                    Ready to start?
                                </p>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9]">
                                    Let's create<br />
                                    <span className="text-gray-500">something</span> great.
                                </h2>
                            </div>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300 self-start md:self-auto"
                            >
                                Start a Project
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-gray-800">

                        {/* Brand Column */}
                        <div className="col-span-2 md:col-span-4">
                            <Link to="/" className="inline-block text-3xl font-bold tracking-tighter mb-6 hover:text-gray-300 transition-colors">
                                Studio®
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                                Global creative studio partnering with ambitious brands to define what's next in culture and technology.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a href="mailto:hello@studio.design" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                    <Mail size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                                    hello@studio.design
                                </a>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <MapPin size={14} className="text-gray-600" />
                                    San Francisco, CA
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-span-1 md:col-span-2 md:col-start-6">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-span-1 md:col-span-2">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="col-span-1 md:col-span-2">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                                Connect
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.social.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500">
                            <span>© {currentYear} Studio®. All rights reserved.</span>
                            <div className="flex items-center gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </div>
                        </div>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                        >
                            Back to top
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                    <path d="M5 1L5 9M5 9L9 5M5 9L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
