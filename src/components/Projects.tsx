import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges?: string;
  github: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Expense-Tracker',
    description: 'A web application designed to help users track and manage their personal finances. It provides real-time data visualization of spending habits, enabling users to make informed financial decisions.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'User authentication and data security',
      'Expense categorization and filtering',
      'Interactive data visualization with charts',
      'Budget planning and alerts'
    ],
    challenges: 'Implementing real-time data updates and ensuring accurate visualization of financial metrics presented interesting challenges that required innovative solutions.',
    github: 'https://github.com/athul457/expense-tracker'
  },
  {
    id: 2,
    title: 'Mapt-App',
    description: 'An interactive mapping application that allows users to track and share their activities. Features include route tracking, statistics, and social sharing capabilities.',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'Leaflet.js', 'HTML', 'CSS', 'localStorage API'],
    features: [
      'Interactive maps with custom markers',
      'Activity tracking and statistics',
      'Geolocation services',
      'Offline capability with localStorage'
    ],
    challenges: 'Balancing performance with feature richness while maintaining compatibility across different browsers and devices.',
    github: 'https://github.com/athul457/mapt-app'
  },
  {
    id: 3,
    title: 'Forky-App',
    description: 'A recipe finding and meal planning application that helps users discover new recipes based on available ingredients and dietary preferences.',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'React.js', 'CSS', 'RESTful APIs'],
    features: [
      'Recipe search and filtering',
      'Ingredient-based recipe suggestions',
      'Meal planning calendar',
      'Nutritional information display'
    ],
    challenges: 'Designing an intuitive user interface while managing complex data relationships and API interactions.',
    github: 'https://github.com/athul457/forky-app',
    live: 'https://forky-app.example.com'
  },
  {
    id: 4,
    title: 'Twitch-Clone',
    description: 'A video streaming platform inspired by Twitch, allowing users to create channels, stream content, and interact with viewers through a chat system.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React.js', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
    features: [
      'Live video streaming',
      'Real-time chat functionality',
      'Channel subscription system',
      'User authentication and profiles'
    ],
    challenges: 'Implementing efficient real-time communication for both video streaming and chat while maintaining low latency and high performance.',
    github: 'https://github.com/athul457/twitch-clone'
  },
  {
  id: 5,
  title: 'MovieVerse',
  description: 'A responsive movie ratings website that showcases trending and top-rated movies with genres, ratings, and release details.',
  image: 'https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  technologies: ['HTML5', 'Tailwind CSS', 'Responsive Design'],
  features: [
    'Responsive design for all screen sizes',
    'Featured Movie section with detailed highlights',
    'Upcoming movies displayed in "Up Next" section',
    'Top Rated Movies showcased in a responsive grid layout',
    'Modern dark-themed UI with yellow accents',
    'Interactive hover effects on cards and buttons'
  ],
  challenges: 'Balancing performance and design while ensuring responsiveness across different devices and screen sizes.',
  github: 'https://github.com/athul457/movieApp',
  live: 'https://movies-rating-application.netlify.app/'
},
  {
  id: 6,
  title: 'DineEasy',
  description: 'A modern restaurant app for browsing menus, booking tables, and ordering food online, designed to enhance the dining experience for both users and restaurant owners.',
  image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
  features: [
    'Interactive digital menu with categories',
    'Online table reservation system',
    'Order food for dine-in or delivery',
    'Responsive UI for mobile and desktop',
    'Dark and light mode support',
    'Animated transitions and hover effects'
  ],
  challenges: 'Designing a smooth user flow while handling dynamic content and maintaining a responsive, visually appealing layout.',
  github: 'https://github.com/athul457/resApp',
  live: 'https://dineeasy.example.com'
}
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Recent work I've built" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="card overflow-hidden group project-card cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 bg-dark-900/70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="py-1 px-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="py-1 px-2 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-80 overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-dark-900/70 text-white p-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-dark-900 dark:text-white">
                {activeProject.title}
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                {activeProject.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="py-1 px-3 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-dark-600 dark:text-dark-300 space-y-2">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {activeProject.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                    Challenges & Solutions
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    {activeProject.challenges}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href={activeProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
                {activeProject.live && (
                  <a 
                    href={activeProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;