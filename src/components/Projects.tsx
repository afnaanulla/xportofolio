import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SymbiOS',
      subtitle: 'AI Native OS Interface',
      description: 'Revolutionary AI-powered operating system interface that redefines user interaction with modern computing environments.',
      tech: ['React', 'TypeScript', 'AI/ML', 'WebGL', 'Node.js'],
      liveUrl: 'https://symbi-os.vercel.app',
      githubUrl: '#',
      featured: true,
      status: 'Live'
    },
    {
      title: 'Handwritten Character Recognition',
      subtitle: 'Machine Learning Project',
      description: 'Advanced neural network system for recognizing handwritten characters with high accuracy using deep learning techniques.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Matplotlib'],
      githubUrl: 'https://github.com/afnaanulla/handwritten-recognition',
      featured: true,
      status: 'Open Source'
    },
    {
      title: 'Virtual Python Keyboard',
      subtitle: 'Interactive Development Tool',
      description: 'Innovative virtual keyboard interface designed specifically for Python development with smart code completion.',
      tech: ['Python', 'Tkinter', 'OpenCV', 'Computer Vision'],
      githubUrl: 'https://github.com/afnaanulla/virtual-python-keyboard',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Angular Custom Cursor Library',
      subtitle: 'UI/UX Enhancement Library',
      description: 'Lightweight Angular library for creating beautiful, customizable cursor animations and interactions.',
      tech: ['Angular', 'TypeScript', 'CSS3', 'Animation API'],
      githubUrl: 'https://github.com/afnaanulla/',
      liveUrl: 'https://codepen.io/afnaanulla/pen/cursor-demo',
      featured: true,
      status: 'Library'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-500 font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {project.featured && (
                      <div className="flex items-center px-2 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300 ml-1">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mb-4">
                  {project.status}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};