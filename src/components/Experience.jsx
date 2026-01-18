import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Machine Learning/Data Science Fellow',
      company: 'CUNY Tech Prep',
      period: 'Jul 2025 - Present',
      description: 'Selected for competitive data science fellowship across 11 CUNY senior colleges; completed weekly courses covering EDA, feature engineering, statistical modeling, and machine learning using Python, SQL, and Scikit-learn'
    },
    {
      id: 2,
      role: 'Google Software Engineer Programming Mentee',
      company: 'Google',
      period: 'Oct 2025 - Dec 2025',
      description: 'Completed 10-week intensive software engineering program with weekly 1:1 mentorship from Google Software Engineer, mastering data structures and algorithms for analyst and engineering roles'
    },
    {
      id: 3,
      role: 'Data Analysis & Administration Intern',
      company: 'Metropolitan Transportation Authority',
      period: 'Jun 2025 - Aug 2025',
      description: 'Supported the Office of the CAO to analyze 100,000+ rows of operational fleet data, identifying 25%+ vehicle misuse and $100K–$2M in underutilized assets to enable cross-department optimization'
    },
    {
      id: 4,
      role: 'TIP 102 Fellow',
      company: 'CodePath',
      period: 'Feb 2025 - May 2025',
      description: 'Trained in CodePath Technical Interview Prep (TIP 102), applying intermediate data structures and algorithms in Python to interview-style problems with complexity analysis and mock interviews'
    },
    {
      id: 5,
      role: 'Tutor',
      company: 'The City College of New York',
      period: 'Aug 2022 - Mar 2023',
      description: 'Taught students Calculus I and II as well as Chemistry and improved scoring result to over 90%'
    },
    {
      id: 6,
      role: 'Retail Sales Associate',
      company: 'Western Beef',
      period: 'Jul 2021 - Jan 2023',
      description: 'Delivered high-volume customer service in a fast-paced retail environment while accurately processing transactions and handling cash operations in conjunction with training new cashiers'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto flex flex-col gap-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 relative"
            >
              {/* Dot */}
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-zinc-800 border-4 border-zinc-700 items-center justify-center relative z-10 shadow-sm">
                <span className="text-green-500 font-bold">{experiences.length - index}</span>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-zinc-950 p-8 rounded-2xl shadow-lg hover:shadow-green-900/10 transition-shadow border border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-green-500 font-medium">{exp.company}</h4>
                  </div>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-semibold rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
