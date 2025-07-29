import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-3xl font-bold">
              M<span className="text-blue-500">A</span>U
            </span>
          </div>
          
          <p className="text-lg text-gray-300 mb-4">
            Full Stack Developer | Software Engineer
          </p>
          
          <div className="flex items-center justify-center text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 mx-2 text-blue-500" />
            <span>by Mohammad Afnaan Ulla</span>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Mohammad Afnaan Ulla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};