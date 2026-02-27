import { Code, Globe, Database, Cpu, GitBranch, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 88 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "Angular", level: 82 },
        { name: "React.js", level: 90 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: Database,
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Express.js", level: 85 },
        { name: "RESTful API Development", level: 88 },
        { name: "CRUD Operations", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "Generative AI",
      icon: Cpu,
      skills: [
        { name: "LLM Integration (OpenAI API)", level: 85 },
        { name: "Prompt Engineering", level: 82 },
        { name: "REST APIs", level: 88 }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Database Management Systems",
      issuer: "CodeChef",
      icon: Database
    },
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      icon: Cpu
    },
    {
      title: "Python Programming",
      issuer: "Skill India",
      icon: Code
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Certifications</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-400 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-purple-400 text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
