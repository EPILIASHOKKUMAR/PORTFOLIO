import React, { useState } from 'react';
import { Code, Globe, Database, Users, Heart } from 'lucide-react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 92 },
        { name: "Collaboration", level: 95 },
        { name: "Communication", level: 90 }
      ]
    },
    {
      title: "Interests",
      icon: Heart,
      skills: [
        { name: "Data Analytics", level: 88 },
        { name: "Web Development", level: 95 },
        { name: "AI/ML", level: 85 }
      ]
    }
  ];

  const handleSkillClick = (skillName: string, level: number) => {
    setSelectedSkill(skillName);
    alert(`${skillName}: ${level}%`);
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-400 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div 
                        className="flex justify-between items-center mb-2 cursor-pointer hover:text-purple-400 transition-colors"
                        onClick={() => handleSkillClick(skill.name, skill.level)}
                      >
                        <span className="text-gray-300 hover:text-purple-400">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;