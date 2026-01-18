import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaJava, FaGithub } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, 
  SiCplusplus, SiMysql, SiHtml5, SiCss3, SiR, SiExpress, SiNextdotjs, 
  SiFlask, SiFastapi, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, 
  SiPlotly, SiTableau, SiGooglecloud, SiJupyter, SiHuggingface, SiLangchain, SiSupabase, SiTerraform
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      techs: [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'R', icon: <SiR />, color: '#276DC3' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      ]
    },
    {
      title: "Frontend & Backend",
      techs: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
        { name: 'Flask', icon: <SiFlask />, color: '#FFFFFF' },
        { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
        { name: 'REST APIs', icon: <TbApi />, color: '#FF5733' },
      ]
    },
    {
      title: "Data Science & AI",
      techs: [
        { name: 'Hugging Face', icon: <SiHuggingface />, color: '#FFD21E' },
        { name: 'LangChain', icon: <SiLangchain />, color: '#FFFFFF' }, // Using white for LangChain for visibility
        { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
        { name: 'Plotly', icon: <SiPlotly />, color: '#3F4F75' },
        { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
        { name: 'Tableau', icon: <SiTableau />, color: '#E97627' },
      ]
    },
    {
      title: "Database, Cloud & Tools",
      techs: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Azure', icon: <VscAzure />, color: '#0078D7' },
        { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Tech Stack
        </motion.h2>
        <p className="text-zinc-500 text-center mb-16 max-w-2xl mx-auto">
          
        </p>
        
        <div className="flex flex-col gap-16 text-center">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-green-500/80 uppercase tracking-[0.2em] mb-8 border-b border-zinc-800 pb-4 inline-block px-12">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                {category.techs.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group flex flex-col items-center"
                  >
                    <div 
                      style={{ color: tech.color }}
                      className="text-5xl md:text-6xl filter drop-shadow-2xl transition-all duration-300"
                    >
                      {tech.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-black bg-white px-2 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none z-20">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
