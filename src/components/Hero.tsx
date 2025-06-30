import React from 'react';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Hi, I'm</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              EPILI ASHOK KUMAR
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Innovative Computer Science Engineer | AI/ML Enthusiast | Full-Stack Developer | 
            Turning Ideas into Scalable Tech Solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 group"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-colors duration-200 group"
            >
              <span>Get In Touch</span>
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/EPILIASHOKKUMAR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eppiliashok-kumar-5089712b0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
              <img
                src="/profile.jpg.jpg"
                alt="Epili Ashok Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;