import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="My academic background" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={28} className="text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="ml-4">
              <div className="timeline-item">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-dark-800 dark:text-white">
                    Master of Computer Application
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    APJ Abdul Kalam Technical University
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mt-1">
                    2025
                  </p>
                  <p className="text-dark-600 dark:text-dark-300 mt-3">
                    Currently pursuing advanced studies in computer applications with a focus on modern software development methodologies and practices.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div>
                  <h4 className="text-xl font-semibold text-dark-800 dark:text-white">
                    Bachelor of Science, Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Calicut University
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mt-1">
                    Graduated August 2020
                  </p>
                  <p className="text-dark-600 dark:text-dark-300 mt-3">
                    Completed a comprehensive program in computer science, covering programming fundamentals, data structures, algorithms, database systems, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <Award size={28} className="text-secondary-600 dark:text-secondary-400 mr-3" />
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                Certifications
              </h3>
            </div>
            
            <div className="card p-6 bg-white dark:bg-dark-900 border-l-4 border-secondary-500 dark:border-secondary-600 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-dark-800 dark:text-white">
                Cloud Computing
              </h4>
              <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                National Programme on Technology Enhanced Learning (NPTEL), IIT
              </p>
              <div className="flex items-center mt-2 text-dark-500 dark:text-dark-400 text-sm">
                <span>Elite Certification</span>
                <span className="mx-2">•</span>
                <span>Scored 77/100</span>
                <span className="mx-2">•</span>
                <span>October 2024</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 mt-4">
                Comprehensive training in cloud computing concepts, architectures, service models, virtualization, security, and deployment strategies. The certification involved practical assignments and a final examination to demonstrate proficiency.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">
                Continuing Education
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                In addition to formal education and certifications, I regularly participate in online courses, workshops, and coding challenges to enhance my skills and stay current with industry trends and best practices.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {['Web Development', 'Mobile Development', 'UI/UX Design', 'DevOps'].map((area, idx) => (
                  <div 
                    key={idx} 
                    className="bg-dark-100 dark:bg-dark-700 p-3 rounded-lg text-center text-dark-700 dark:text-dark-300"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;