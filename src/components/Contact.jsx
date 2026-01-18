import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-400">
            Open to opportunities in Software Engineering and Data Science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-green-500 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:email@example.com" className="text-zinc-400 hover:text-green-400 transition-colors">
                  almuqsit101@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-green-500 text-xl">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-zinc-400">
                  (332)-200-7233
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-green-500 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-zinc-400">
                  Bronx, NY
                </p>
              </div>
            </div>
          </motion.div>

          {/* Resume & Message */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Looking for my resume?</h3>
            <p className="text-zinc-400 mb-8">
              Download my full resume to see my experience and qualifications in detail.
            </p>
            
            <a 
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-black font-bold rounded-full hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
