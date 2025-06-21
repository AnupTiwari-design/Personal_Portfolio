import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Database, Code, Users, Video, Rocket, Star } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const project = {
    title: "Online Test Management System",
    subtitle: "MERN Stack Application",
    description: "A comprehensive online test platform designed to facilitate both MCQ and coding assessments with role-based access for administrators and students.",
    techStack: ["MongoDB", "Express.js", "ReactJS", "Node.js"],
    features: [
      {
        icon: <Users className="w-5 h-5 text-cyan-400" />,
        text: "Admin and Student role management",
        color: "from-cyan-500/20 to-blue-500/20"
      },
      {
        icon: <Code className="w-5 h-5 text-purple-400" />,
        text: "MCQ and coding question support",
        color: "from-purple-500/20 to-pink-500/20"
      },
      {
        icon: <Database className="w-5 h-5 text-green-400" />,
        text: "Excel-based question upload system",
        color: "from-green-500/20 to-teal-500/20"
      },
      {
        icon: <ExternalLink className="w-5 h-5 text-orange-400" />,
        text: "Judge0 integration for code execution",
        color: "from-orange-500/20 to-red-500/20"
      },
      {
        icon: <Video className="w-5 h-5 text-yellow-400" />,
        text: "Video content integration",
        color: "from-yellow-500/20 to-orange-500/20"
      }
    ],
    highlights: [
      "Secure authentication and authorization",
      "Real-time code compilation and execution",
      "Comprehensive test analytics and reporting",
      "Responsive design for all devices"
    ]
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <Rocket className="text-cyan-400 animate-bounce" />
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className={`bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-2xl text-cyan-400 font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {project.subtitle}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="text-cyan-400 animate-spin" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer ${
                      isHovered ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Code className="text-purple-400 animate-pulse" />
                Key Features
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-r ${feature.color} backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group/feature`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="group-hover/feature:animate-bounce">
                        {feature.icon}
                      </div>
                      <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Database className="text-green-400 animate-pulse" />
                Project Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-300 ${
                      isHovered ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-gray-500/25 flex items-center gap-3 group/btn">
                <Github size={20} className="group-hover/btn:animate-spin" />
                View Code
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 group/btn">
                <ExternalLink size={20} className="group-hover/btn:animate-bounce" />
                Live Demo
              </button>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;