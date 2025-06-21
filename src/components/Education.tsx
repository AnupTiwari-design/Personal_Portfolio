import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      title: "Academic Qualification",
      subtitle: "Bachelor of Engineering",
      description: "Computer Science Engineering",
      institution: "Noida Institute of Engineering and Technology",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Certifications",
      subtitle: "Microsoft Azure DP-900",
      description: "Azure Data Fundamentals",
      institution: "Multiple institutions",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      title: "Continuous Learning",
      subtitle: "Ongoing Development",
      description: "Modern Technologies",
      institution: "Self-directed & Professional",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/50"
    }
  ];

  const learningAreas = [
    "Data Science & Machine Learning",
    "Cloud Computing Technologies", 
    "Modern Web Development",
    "Competitive Programming"
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <Star className="text-cyan-400 animate-spin" />
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-xl p-8 border ${item.borderColor} hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-lg font-semibold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                  {item.subtitle}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {item.institution}
                </p>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Learning Areas */}
        <div className={`bg-gradient-to-r from-gray-800/80 to-black/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="text-purple-400 animate-pulse" />
            Continuous Learning Focus
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {learningAreas.map((area, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg p-4 border-l-4 border-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;