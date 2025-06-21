import React, { useEffect, useState } from 'react';
import { Download, Mail, Phone, LinkedinIcon, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["Technical Trainer", "Full Stack Developer", "Cloud Expert", "ML Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-gradient-x"></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-text">
                Anup Kumar
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text-delayed">
                Tiwari
              </span>
            </h1>
          </div>
          
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-cyan-400 animate-fade-in-out">
              {roles[currentRole]}
            </p>
          </div>
          
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Passionate about delivering high-quality training and developing innovative solutions
            with expertise in Java, Python, ReactJS, and Cloud Computing.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            {[
              { icon: Phone, text: "6306137338", href: "tel:6306137338" },
              { icon: Mail, text: "anupt6028@gmail.com", href: "mailto:anupt6028@gmail.com" },
              { icon: LinkedinIcon, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/anup-kumar-tiwari/" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <item.icon size={18} className="group-hover:animate-bounce" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 group">
              <Download size={20} className="inline mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
            <a 
              href="#contact" 
              className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-400/25"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;