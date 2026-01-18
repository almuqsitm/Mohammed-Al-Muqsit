import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import proj1 from '../assets/p1.png';
import proj2 from '../assets/p2.png';
import proj3 from '../assets/p3.png';
import proj4 from '../assets/p4.jpg';
import proj5 from '../assets/p5.png';
import proj6 from '../assets/p6.png';
import proj7 from '../assets/p7.jpg';
import proj8 from '../assets/p8.png';
import proj9 from '../assets/p9.png';
const Projects = () => {
  const projects = [
    {
      title: 'MTA Transit Brain',
      description: 'An Enterprise-Grade Transit Analytics Platform built on Microsoft Azure',
      tags: ['Azure', 'Terraform', 'Plotly', 'Scitkit-learn'],
      image: proj1,
      github: 'https://github.com/almuqsitm/MTA-Transit-Brain',
      demo: 'https://github.com/almuqsitm/MTA-Transit-Brain'
    },
    {
      title: 'DocuMind',
      description: 'DocuMind is a Retrieval Augmented Generation (RAG) system designed to analyze highly complex financial and legal documents',
      tags: ['FastAPI', 'LangChain', 'OpenAI', 'Next.js', 'TypeScript'],
      image: proj2,
      github: 'https://github.com/almuqsitm/DocuMind',
      demo: 'https://github.com/almuqsitm/DocuMind'
    },
    {
      title: 'ForecastNYC',
      description: 'Understanding the financial tradoff of buying a house in NYC given $250,000',
      tags: ['Pandas', 'Prophet', 'Supabase', 'PostgreSQL', 'Tableau'],
      image: proj3,
      github: 'https://github.com/datasheng/csc46000-team-project-4727',
      demo: 'https://csc46000-team-project-4727-rent-vs-buying-comp.streamlit.app/'
    },
    
    {
      title: 'CAMP',
      description: 'A visual interface for viewing crimes throughout NYC',
      tags: ['React', 'Python', 'WebSocket', 'Docker','Google Cloud'],
      image: proj4,
      github: 'https://github.com/ColvinKopram/CAMP',
      demo: 'https://github.com/ColvinKopram/CAMP'
    },
    {
      title: 'FitCheck',
      description: 'A chrome extension that scrapes Amazon Orders and recommends items to by through sentiment analysis',
      tags: ['TensorFlow', 'Jest', 'Next.js', 'Chrome Extension', 'Gemini'],
      image: proj5,
      github: 'https://github.com/BaljinderHothi/FitCheck',
      demo: 'https://github.com/BaljinderHothi/FitCheck'
    },
    {
      title: 'CD Blocker',
      description: 'A Computer Vision app that blocks sensitive information such as credit or debit cards for live streamers',
      tags: ['OpenCV', 'Gemini', 'WebSocket','React', 'Tailwind'],
      image: proj6,
      github: 'https://github.com/sahed-saad/cd-blocker',
      demo: 'https://www.youtube.com/watch?v=HuIr3hJLkiU'
    },
    {
      title: 'CUNY PulseBoard',
      description: 'A real-time survey and dashboard tool that helps CUNY understand and respond to student needs',
      tags: ['React', 'Recharts.js', 'Tailwind','FastAPI','SQLite'],
      image: proj7,
      github: 'https://github.com/AlbertBagdos256/CUNY_PulseBoard_CTP-HACK-2025.',
      demo: 'https://cunypulse.netlify.app/'
    },
    {
      title: 'SiteSeekers',
      description: 'A hiring platform for construction workers',
      tags: ['Next.js', 'Tailwind', 'MySQL', 'Stored Procedures'],
      image: proj8,
      github: 'https://github.com/datasheng/csc336-teamproject-repo-missing-one',
      demo: 'https://github.com/datasheng/csc336-teamproject-repo-missing-one'
    },
    {
      title: 'Monopoly Simulation',
      description: 'A simulation of the game Monopoly accounting over 2 million rolls',
      tags: ['R'],
      image: proj9,
      github: 'https://github.com/almuqsitm/Monopoly-Simulation',
      demo: 'https://github.com/almuqsitm/Monopoly-Simulation'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/50 shadow-sm hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    <FaGithub className="text-xl text-zinc-300 group-hover:text-white" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    <FaExternalLinkAlt className="text-xl text-zinc-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-4 h-20 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-900 text-green-400 border border-zinc-800 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
