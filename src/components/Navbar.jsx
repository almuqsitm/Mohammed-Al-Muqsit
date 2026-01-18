import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300 border-b',
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-3 shadow-lg' 
        : 'bg-transparent border-transparent py-5'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-sans tracking-tighter text-white">
          MA<span className="text-green-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-green-600 text-black text-sm font-bold rounded-full hover:bg-green-500 transition-all"
          >
            Contact
          </a>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-zinc-300 hover:text-green-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
