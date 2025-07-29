import React from 'react';
import { Trophy, Code, Heart, Star, Award, BookOpen } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'SUS Hackathon Winner',
      description: 'First place winner in sustainable solutions hackathon',
      color: 'yellow'
    },
    {
      icon: Code,
      title: '300+ LeetCode Problems',
      description: 'Solved complex algorithmic challenges consistently',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Heart Stroke Detection Research',
      description: 'Ongoing research in AI-powered medical diagnosis',
      color: 'red'
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      description: '100+ stars across multiple GitHub repositories',
      color: 'blue'
    }
  ];

  const certifications = [
    'Infosys Angular Development',
    'Postman API Fundamentals',
    'Cisco Python Essentials 1 & 2',
    'Cisco Networking Fundamentals',
    'GitHub Certfication'
  ];

  const colorClasses = {
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Achievements
              </h3>
            </div>
            
            <div className="grid gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${
                      colorClasses[achievement.color as keyof typeof colorClasses]
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-sm opacity-90">Years Coding</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};