import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Settings, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring Data JPA", "ReactJS", "Node.js", "Express.js"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50"
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "Docker", "Jenkins"],
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/50"
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      title: "Cloud & Technologies",
      skills: ["Microsoft Azure", "AWS", "RESTful APIs", "HTML/CSS", "Bootstrap"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/50"
    }
  ];

  const technicalConcepts = [
    { name: "Object-Oriented Programming", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Database Management Systems", level: 90, color: "from-purple-400 to-pink-500" },
    { name: "Cloud Computing", level: 85, color: "from-green-400 to-teal-500" },
    { name: "Data Structures & Algorithms", level: 92, color: "from-orange-400 to-red-500" },
    { name: "Machine Learning", level: 80, color: "from-yellow-400 to-orange-500" },
    { name: "Data Science", level: 88, color: "from-pink-400 to-purple-500" }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <Zap className="text-cyan-400 animate-pulse" />
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-r ${category.color} backdrop-blur-sm rounded-xl p-6 border ${category.borderColor} hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex items-center gap-3 transition-all duration-300 ${
                      hoveredSkill === index ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <Star size={12} className="text-cyan-400 animate-pulse" />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Technical Concepts with Progress Bars */}
        <div className={`bg-gradient-to-r from-gray-800/80 to-black/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Star className="text-cyan-400 animate-spin" />
            Core Concepts & Specializations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalConcepts.map((concept, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {concept.name}
                  </span>
                  <span className="text-gray-400 text-sm group-hover:text-purple-400 transition-colors duration-300">
                    {concept.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${concept.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: isVisible ? `${concept.level}%` : '0%',
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;