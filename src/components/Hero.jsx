import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-green-900/40 to-transparent -z-10 rounded-bl-[100px] opacity-60 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-900/30 to-transparent -z-10 rounded-tr-[100px] blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-green-900/30 text-green-400 text-sm font-semibold mb-6 border border-green-800/50"
          >
            Undergraduate Student at The City College of New York
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">digital experiences</span> that matter.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed"
          >
            I'm Mohammed Al-Muqsit, an upcoming May 2026 graduate at The City College of New York focused on data science, software development, and emerging technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 items-center"
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView()}
              className="px-8 py-3 bg-green-600 text-black font-bold rounded-full hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
            >
              View Projects
            </button>
            <div className="flex gap-4 ml-4">
              <SocialIcon Icon={FaGithub} href="https://github.com/almuqsitm" />
              <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/in/mohammed-al-muqsit/" />
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full blur-[2px] opacity-80" /> {/* Ring */}
            <div className="absolute inset-1 bg-zinc-900 rounded-full p-2">
               <img 
                src={profileImg} 
                alt="Mohammed Al-Muqsit" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-zinc-500 hover:text-green-500 transition-colors"
  >
    <Icon />
  </a>
);

export default Hero;
