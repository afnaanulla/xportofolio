import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: "Vignan's Institute of Information Technology",
      period: '2022 - 2026',
      location: 'Visakhapatnam, India',
      grade: 'CGPA: 8.1',
      description: 'Specializing in software development, data structures, algorithms, and emerging technologies.',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering',
        'Active member of coding club and technical societies',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sri Chaitanya Junior College',
      period: '2020 - 2022',
      location: 'Visakhapatnam, India',
      grade: '80%',
      description: 'Completed with Mathematics, Physics, and Chemistry as core subjects.',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Developed analytical and problem-solving skills',
        'Participated in science exhibitions and competitions'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic background and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-500 mb-3">
                        {edu.institution}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:text-right">
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-semibold">
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};