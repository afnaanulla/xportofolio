import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Guardian AI',
      role: 'Full Stack Developer Intern',
      period: 'Jun 2025 – Present',
      location: 'Remote',
      description: 'Currently working on cutting-edge AI solutions and full-stack development.',
      highlights: [
        'Developing AI-powered applications using modern web technologies',
        'Implementing scalable backend solutions with Node.js and Python',
        'Contributing to machine learning model integration and deployment'
      ],
      isActive: true
    },
    {
      company: 'JPMorgan Chase & Co.',
      role: 'Software Engineering Virtual Experience',
      period: 'May 2025 – Jun 2025',
      location: 'Virtual',
      description: 'Completed comprehensive software engineering virtual experience program.',
      highlights: [
        'Implemented financial data visualization using React and TypeScript',
        'Worked with real-time data feeds and trading applications',
        'Applied software engineering best practices in financial technology'
      ],
      isActive: false
    },
    {
      company: 'Blackbird Australia',
      role: 'Software Development Intern',
      period: 'Apr 2025 – May 2025',
      location: 'Remote',
      description: 'Gained international experience in software development and project management.',
      highlights: [
        'Collaborated with international teams on web application development',
        'Implemented responsive frontend solutions using modern frameworks',
        'Participated in agile development processes and code reviews'
      ],
      isActive: false
    },
    {
      company: 'Electronic Arts (EA)',
      role: 'Full Stack Developer Intern',
      period: 'Mar 2025 – Apr',
      location: 'Remote',
      description: 'Currently working on cutting-edge AI solutions and full-stack development.',
      highlights: [
        'Completed a simulation focused on quantitative research methods', 
        'Analyzed a book of loans to estimate a customers probability of default',
        'Used dynamic programming to convert FICO scores into categorical data to predict defaults'
      ],
      isActive: false
    },
    {
      company: 'Uber India Systems Pvt. Ltd.',
      role: 'Full Stack Developer Intern',
      period: 'Feb 2025 – Apr 2025',
      location: 'Visakhapatnam COE',
      description: 'Worked on scalable backend and frontend systems as part of the full-stack development team.',
      highlights: [
        'Built and deployed features using Node.js, Express, and MongoDB in a microservice-based architecture',
        'Contributed to frontend modules using Angular and React for internal tools',
        'Collaborated with senior developers on API integrations and performance optimization',
        'Participated in agile sprints, planning sessions, and code reviews'
      ]
    }

  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey and key contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 ${
                    exp.isActive ? 'ring-2 ring-blue-500' : ''
                  }`}>
                    {exp.isActive && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mb-4">
                        Current Position
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-500 mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};