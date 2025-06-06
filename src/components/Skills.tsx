import React from 'react';
import SectionHeading from './ui/SectionHeading';

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3 (Tailwind, SASS)', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'RESTful APIs', level: 85 },
    ],
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'SQL', level: 78 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Collaboration', level: 90 },
    ],
  },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-dark-800 dark:text-dark-200 font-medium">{name}</span>
        <span className="text-dark-500 dark:text-dark-400 text-sm">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies I work with" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillsData.map((category, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white border-b border-dark-200 dark:border-dark-700 pb-2">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar 
                    key={skillIdx} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-dark-800 dark:text-white">
            My Development Approach
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'User-Centered',
                description: 'Creating intuitive interfaces that prioritize user experience and accessibility.'
              },
              {
                title: 'Performance-Driven',
                description: 'Optimizing applications for speed and efficiency across all platforms and devices.'
              },
              {
                title: 'Quality-Focused',
                description: 'Writing clean, maintainable code with thorough testing and documentation.'
              },
              {
                title: 'Continuous Learning',
                description: 'Constantly exploring new technologies and best practices to improve my skill set.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold mb-3 text-dark-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;