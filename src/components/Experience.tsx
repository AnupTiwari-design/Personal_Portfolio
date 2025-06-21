import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const experiences = [
    {
      title: "Technical Trainer",
      company: "Bizotic",
      location: "Remote",
      period: "Current",
      responsibilities: [
        "Conducted training on DSA and Competitive Coding with Java, Python, and C++",
        "Delivered hands-on training in Data Science and Machine Learning using Pandas, NumPy, and scikit-learn"
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50"
    },
    {
      title: "Technical Trainer",
      company: "Audaz",
      location: "Reva University",
      period: "Previous",
      responsibilities: [
        "Led workshops in Java, Python, C++, and DSA at Reva University",
        "Mentored students in competitive programming and software development"
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50"
    },
    {
      title: "Technical Trainer",
      company: "Edvise",
      location: "Remote",
      period: "Previous",
      responsibilities: [
        "Delivered Microsoft Azure DP-900 certification training",
        "Prepared students for cloud computing certifications"
      ],
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/50"
    },
    {
      title: "Technical Trainer",
      company: "Skill Aura",
      location: "Adhiyamaan College",
      period: "Previous",
      responsibilities: [
        "Delivered Computer Networks lectures and practical labs",
        "Designed curriculum for networking fundamentals"
      ],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/50"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <Briefcase className="text-cyan-400 animate-bounce" />
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto animate-pulse"></div>
        </div>

        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center transition-all duration-1000 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black shadow-lg z-10 animate-pulse hover:animate-spin transition-all duration-300"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div 
                    className={`bg-gradient-to-r ${exp.color} backdrop-blur-sm rounded-xl p-6 border ${exp.borderColor} hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        exp.period === 'Current' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-200'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center gap-2 text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                      <MapPin size={16} className="group-hover:animate-bounce" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li 
                          key={respIndex} 
                          className={`text-gray-300 flex items-start gap-3 group-hover:text-white transition-all duration-300 ${
                            activeCard === index ? 'translate-x-2' : ''
                          }`}
                          style={{ transitionDelay: `${respIndex * 100}ms` }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
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

export default Experience;