import { ExternalLink, Github, Calendar, Code2, Zap, TrendingUp, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online House Rental System",
      tagline: "Property Management & Tenant Platform",
      year: "2026",
      category: "Full-Stack Application",
      overview: "A comprehensive property management solution connecting property owners with tenants through an intelligent platform.",
      challenge: "Creating a seamless rental experience with real-time communication and AI-powered assistance.",
      solution: "Built a scalable platform with role-based authentication, real-time notifications, and AI chatbot integration.",
      impact: [
        "3 distinct user roles with tailored dashboards",
        "Real-time Socket.io notifications for instant updates",
        "AI-powered chatbot using Google Gemini",
        "Geolocation-based property search"
      ],
      technologies: {
        frontend: ["React.js", "TailwindCSS", "Leaflet.js"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        features: ["Socket.io", "Google OAuth", "Gemini AI", "JWT"]
      },
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
      liveUrl: "https://houserental-theta.vercel.app",
      githubUrl: "https://github.com/EPILIASHOKKUMAR/Online-House-Rental-Tenant-Management-System",
      featured: true
    },
    {
      id: 2,
      title: "SkyBook",
      tagline: "Flight Booking System with Dynamic Pricing",
      year: "2025",
      category: "E-Commerce Platform",
      overview: "Production-ready flight booking application with intelligent surge pricing and comprehensive booking management.",
      challenge: "Implementing dynamic pricing that responds to demand while maintaining user trust and transparency.",
      solution: "Developed a surge pricing algorithm with real-time countdown timers and integrated wallet system for seamless transactions.",
      impact: [
        "200+ flights in searchable database",
        "10% surge pricing after 3 bookings in 5 minutes",
        "Integrated wallet system with ₹50,000 balance",
        "Automated PDF ticket generation with PNR"
      ],
      technologies: {
        frontend: ["React.js", "TailwindCSS"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        features: ["PDF Generation", "Real-time Pricing", "Wallet System"]
      },
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200",
      liveUrl: "https://flight-booking-system-7iug.vercel.app/",
      githubUrl: "https://github.com/EPILIASHOKKUMAR",
      featured: false
    },
    {
      id: 3,
      title: "SmartClinic AI",
      tagline: "Healthcare Management Platform",
      year: "2025",
      category: "Healthcare Technology",
      overview: "Comprehensive healthcare platform streamlining doctor appointments and patient care with AI assistance.",
      challenge: "Reducing emergency response time and providing instant health guidance to patients.",
      solution: "Created an AI-powered health assistant with geo-location services and role-based dashboards for all stakeholders.",
      impact: [
        "150+ medical queries processed monthly",
        "30% improvement in operational efficiency",
        "100+ hospitals mapped with geo-location",
        "40% reduction in emergency navigation time"
      ],
      technologies: {
        frontend: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
        backend: ["Python", "Flask", "PostgreSQL"],
        features: ["AI Assistant", "Real-time Slots", "Geo-location"]
      },
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
      liveUrl: "https://doctor-appointment-system-chi-gilt.vercel.app/",
      githubUrl: "https://github.com/EPILIASHOKKUMAR",
      featured: false
    },
    {
      id: 4,
      title: "Civic Issue Reporter",
      tagline: "AI-Powered Smart City Solution",
      year: "2025",
      category: "Smart City Platform",
      overview: "Platform enabling citizens to report civic issues with AI-powered analysis and automated categorization.",
      challenge: "Streamlining civic issue reporting and resolution with minimal manual intervention.",
      solution: "Integrated OpenAI Vision API for automatic issue detection and categorization with real-time tracking.",
      impact: [
        "AI-powered image analysis using OpenAI Vision",
        "JWT-based secure authentication",
        "Real-time geolocation tracking",
        "Automated issue categorization and routing"
      ],
      technologies: {
        frontend: ["React.js", "TailwindCSS", "Leaflet.js"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        features: ["OpenAI Vision API", "JWT", "Cloudinary", "Geolocation"]
      },
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      liveUrl: "https://capstone-project-three-brown.vercel.app",
      githubUrl: "https://github.com/EPILIASHOKKUMAR/CAPSTONE-PROJECT",
      featured: false
    },
    {
      id: 5,
      title: "OpenContentOrbit",
      tagline: "Open-Source Content Sharing Platform",
      year: "2024",
      category: "Social Platform",
      overview: "Full-stack content-sharing platform enabling users to create, manage, and discover content.",
      challenge: "Building a scalable platform that handles high traffic while maintaining fast load times.",
      solution: "Optimized rendering and data handling strategies reducing page load time by 35%.",
      impact: [
        "2,000+ active users",
        "35% reduction in page load time",
        "7,000+ total content views",
        "Personalized content spaces"
      ],
      technologies: {
        frontend: ["EJS", "HTML", "CSS"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        features: ["Content Management", "User Spaces", "Categorization"]
      },
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
      liveUrl: "https://kannected.onrender.com",
      githubUrl: "https://github.com/EPILIASHOKKUMAR",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">PORTFOLIO</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Innovative solutions built with modern technologies, delivering measurable impact and real-world value
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-2 relative overflow-hidden h-80 lg:h-full min-h-[400px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle gradient only at the edge for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-800/30 lg:to-slate-800/60" />
                    
                    {/* Badges on Image */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {project.featured && (
                        <motion.div
                          className="px-3 py-1.5 bg-amber-500 rounded-full shadow-lg"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-white text-xs font-bold flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            LATEST
                          </span>
                        </motion.div>
                      )}
                      <div className="px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm rounded-full border border-slate-700">
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-purple-300 font-medium text-lg flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        {project.tagline}
                      </p>
                    </div>

                    {/* Overview */}
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {project.overview}
                    </p>

                    {/* Impact Metrics */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        Key Impact
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.impact.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-purple-400" />
                        Tech Stack
                      </h4>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="text-gray-500 text-xs font-semibold">Frontend:</span>
                          {project.technologies.frontend.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-gray-500 text-xs font-semibold">Backend:</span>
                          {project.technologies.backend.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-300 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-gray-500 text-xs font-semibold">Features:</span>
                          {project.technologies.features.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Project Link */}
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm group/link"
                            >
                              View Live Demo
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 font-semibold text-sm group/link"
                          >
                            View Code
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/EPILIASHOKKUMAR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
