import React from 'react';
import { Heart, LinkedinIcon, Mail, Phone, Code, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="group">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse">
              Anup Kumar Tiwari
            </h3>
            <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
              Technical Trainer & Full Stack Developer passionate about education and innovation
            </p>
            <div className="flex space-x-4">
              {[
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/anup-kumar-tiwari/", color: "hover:text-blue-400" },
                { icon: Mail, href: "mailto:anupt6028@gmail.com", color: "hover:text-cyan-400" },
                { icon: Phone, href: "tel:6306137338", color: "hover:text-purple-400" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 group-hover:text-cyan-400 transition-colors duration-300">
              <Code className="animate-pulse" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="group">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300">
              <Zap className="animate-pulse" />
              Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Technical Training",
                "Full Stack Development",
                "Machine Learning Training",
                "Cloud Computing Consultation",
                "Code Reviews & Mentoring"
              ].map((service, index) => (
                <li 
                  key={index}
                  className="hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 hover:text-white transition-colors duration-300">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Anup Kumar Tiwari © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;