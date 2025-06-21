import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, LinkedinIcon, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      label: "Phone",
      value: "6306137338",
      href: "tel:6306137338",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      label: "Email",
      value: "anupt6028@gmail.com",
      href: "mailto:anupt6028@gmail.com",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 text-green-400" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/anup-kumar-tiwari/",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-400" />,
      label: "Location",
      value: "Available for Remote Work",
      href: "#",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <MessageCircle className="text-cyan-400 animate-bounce" />
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to discuss your next project or training needs? I'd love to hear from you. 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-6 bg-gradient-to-r ${info.color} backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 group-hover:animate-bounce">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {info.label}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 group">
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                Available for:
              </h4>
              <ul className="space-y-3">
                {[
                  "Technical Training & Workshops",
                  "Full Stack Development Projects",
                  "Consulting & Code Reviews",
                  "Remote & On-site Opportunities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-semibold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:border-cyan-400/50"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:border-purple-400/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-green-400 transition-colors duration-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:border-green-400/50"
                  placeholder="What's this about?"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-vertical hover:border-orange-400/50"
                  placeholder="Tell me more about your project or training needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3 group ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} className={`${isSubmitting ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;