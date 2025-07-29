import React from 'react';
import { Code, Brain, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in the MEAN stack, 
              DevOps practices, and emerging technologies like AI/ML. I thrive on transforming 
              complex ideas into elegant, scalable solutions that make a real impact.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With expertise spanning from frontend development with Angular and React to backend 
              systems with Node.js and Python, I bring a comprehensive approach to software 
              development. My experience in cloud technologies and DevOps enables me to build 
              and deploy robust applications at scale.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm driven by problem-solving and love collaborating with teams to deliver 
              innovative solutions. Whether it's building AI-powered interfaces or optimizing 
              database performance, I'm always eager to tackle new challenges and learn 
              cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                MEAN Stack Expert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                MongoDB, Express, Angular, Node.js
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
                <Brain className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI/ML Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Machine Learning & AI Solutions
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mb-4">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Team Player
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Collaborative Development
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Creative Technical Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};