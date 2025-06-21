import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Full Stack Development",
      description: "Expertise in backend and frontend technologies including Java, Python, ReactJS, and Spring Boot",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Technical Training",
      description: "Experienced in delivering training on Data Science, Machine Learning, and Cloud Computing",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Innovation Focus",
      description: "Passionate about developing innovative solutions and staying current with emerging technologies",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <Zap className="text-cyan-400 animate-pulse" />
              Profile Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Full Stack Developer with expertise in backend and frontend technologies, 
              including Java, Python, ReactJS, and Spring Boot. Experienced technical trainer 
              proficient in Data Science, Machine Learning, and Cloud Computing. 
              Passionate about delivering high-quality training and developing innovative solutions.
            </p>
            
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={`group p-6 bg-gradient-to-r ${highlight.color} backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 group-hover:animate-bounce">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 group">
              <h3 className="text-2xl font-semibold mb-6 text-white group-hover:text-cyan-400 transition-colors duration-300">
                Quick Facts
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Role:", value: "Technical Trainer & Full Stack Developer" },
                  { label: "Education:", value: "B.E. Computer Science" },
                  { label: "Specialties:", value: "Java, Python, React, Cloud" },
                  { label: "Focus:", value: "Training & Development" }
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center group/item">
                    <span className="text-gray-400 group-hover/item:text-cyan-400 transition-colors duration-300">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-white group-hover/item:text-purple-400 transition-colors duration-300">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Animated Progress Bars */}
              <div className="mt-8 space-y-4">
                {[
                  { skill: "Full Stack Development", level: 95 },
                  { skill: "Technical Training", level: 98 },
                  { skill: "Cloud Computing", level: 85 },
                  { skill: "Machine Learning", level: 80 }
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300 group-hover/skill:text-cyan-400 transition-colors duration-300">
                        {skill.skill}
                      </span>
                      <span className="text-sm text-gray-400 group-hover/skill:text-purple-400 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;