import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Code, Monitor, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="card p-8 bg-white dark:bg-dark-900 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-white">Who I Am</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in creating responsive, performance-optimized applications with clean, maintainable code.
            </p>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              My approach to development combines technical excellence with a user-centered focus, ensuring applications that are not only technically sound but also intuitive and enjoyable to use.
            </p>
            <p className="text-dark-600 dark:text-dark-300">
              I thrive in collaborative environments and continuously expand my skills to stay at the forefront of web development trends, with particular interest in AI-integrated development, serverless computing, and progressive web apps.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-dark-900 dark:text-white">Languages</h4>
              <div className="flex gap-2 flex-wrap">
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  Malayalam (Native)
                </span>
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  English (Fluent)
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3 text-dark-900 dark:text-white">Interests</h4>
              <div className="flex gap-2 flex-wrap">
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  Cricket
                </span>
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  Football
                </span>
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  Music
                </span>
                <span className="py-1 px-3 bg-dark-100 dark:bg-dark-700 rounded-full text-dark-700 dark:text-dark-300 text-sm">
                  Movies
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-white">Frontend Development</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                Creating beautiful, responsive interfaces with modern frameworks and vanilla JS/CSS.
              </p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-full mb-4">
                <Server size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-white">Backend Development</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                Building robust server-side applications and APIs using Node.js and Java.
              </p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full mb-4">
                <Database size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-white">Database Management</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                Designing and optimizing databases with SQL and NoSQL technologies.
              </p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                <Code size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-white">Clean Code</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                Writing maintainable, well-structured code following best practices and patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;