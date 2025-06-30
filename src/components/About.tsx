import React from 'react';
import { User, Heart, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Professional Background</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Motivated Computer Science engineer with hands-on experience in AI/ML and Web Development. 
                Proven team leader with a track record of delivering scalable, innovative solutions through 
                team-based coding challenges and real-world projects.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Development Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I have solid skills in both frontend and backend development, building applications 
                that are functional, visually appealing, and user-friendly. My focus is on creating 
                seamless user experiences with modern technologies.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Epili Ashok Kumar</h4>
                <p className="text-purple-400">Full Stack Developer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Computer Science Engineering Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">AI/ML & Web Development Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;