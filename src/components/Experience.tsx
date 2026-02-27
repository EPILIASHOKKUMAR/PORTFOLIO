import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Trainee",
      company: "Matrimony.com",
      location: "Remote",
      period: "Sep 2025 – Dec 2025",
      description: [
        "Completed structured full-stack development training covering HTML, CSS, JavaScript, Angular, Node.js, SQL, GraphQL, and Git.",
        "Built hands-on full-stack modules involving UI development, REST API integration, and backend routing.",
        "Collaborated with senior engineers to resolve issues and improve deployment workflows in a real corporate environment."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Angular", "Node.js", "SQL", "GraphQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-6 w-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700 text-purple-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
