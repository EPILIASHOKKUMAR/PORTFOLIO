import { ExternalLink, Github, Calendar, Users, Eye, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const tapEffect = {
    scale: 0.98,
    transition: { duration: 0.2 }
  };
  
  const projects = [
    {
      title: "OpenContentOrbit",
      subtitle: "Open-Source Content Sharing Platform",
      year: "2023",
      description: "Launched an open-source platform supporting 500+ posts in the first month. Enabled creators to upload and interact with content, achieving 60% user retention rate with 2,000+ users and 7,000+ content views.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { icon: Users, label: "Users", value: "2,000+" },
        { icon: TrendingUp, label: "Retention", value: "60%" },
        { icon: Eye, label: "Views", value: "7,000+" }
      ],
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB"],
      liveUrl: "https://kannected.onrender.com",
      githubUrl: "https://github.com/EPILIASHOKKUMAR"
    },
    {
      title: "AI Tab Manager",
      subtitle: "Chrome Extension for Safe Browsing",
      year: "2024",
      description: "Developed a Chrome extension that improves research productivity by summarizing and saving tab sessions. Used NLP for automatic content summarization, reducing reading time by 40%.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "JavaScript", "NLP", "Chrome API"],
      githubUrl: "https://github.com/EPILIASHOKKUMAR"
    },
    {
      title: "Doctor's Appointment System",
      subtitle: "Healthcare Management Platform",
      year: "2025",
      description: "Built and deployed a web app for managing clinic appointments, improving scheduling efficiency by 25%. Integrated real-time conflict detection and specialist filtering for 10+ doctors.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Flask", "SQLite", "JavaScript"],
      liveUrl: "https://epiliashokkumar.pythonanywhere.com",
      githubUrl: "https://github.com/EPILIASHOKKUMAR"
    }
  ];

  const handleProjectClick = (project: any) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };



  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 bg-slate-900/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 flex flex-col"
              variants={itemVariants}
              onClick={() => handleProjectClick(project)}
              whileHover={hoverEffect}
              whileTap={tapEffect}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <motion.div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-white text-sm">{project.year}</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-400 font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.stats.map((stat, statIndex) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={statIndex} className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <IconComponent className="h-4 w-4 text-purple-400" />
                          </div>
                          <div className="text-white font-bold text-sm">{stat.value}</div>
                          <div className="text-gray-400 text-xs">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-purple-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/EPILIASHOKKUMAR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 group"
          >
            <span>View More Projects</span>
            <Github className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;