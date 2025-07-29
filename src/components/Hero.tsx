import React from 'react';
import { Github, Linkedin, Download, Mail, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">MA</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg scale-110"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Mohammad Afnaan Ulla
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            <span className="text-blue-500 font-semibold">Full Stack Developer</span> | 
            <span className="text-purple-500 font-semibold"> Software Engineer</span>
          </div>

          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-6 font-light">
            "Turning Ideas into Scalable Code"
          </p>

          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Visakhapatnam, India</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com/afnaanulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mdafnaan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};