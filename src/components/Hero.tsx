import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="mb-4 inline-block">
              <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 py-1 px-3 rounded-full text-sm font-medium">
                Full-Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-900 dark:text-white animate-slide-down">
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                Athul Sukumaran
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-xl animate-slide-down" style={{ animationDelay: '0.1s' }}>
              Self-motivated full-stack developer with a passion for modern web technologies. Building responsive, performant, and scalable applications.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="btn-primary"
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="btn-outline"
              >
                View My Work
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-dark-600 dark:text-dark-300 animate-slide-down" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-600 dark:text-primary-400" />
                <a href="mailto:athulsukumara457@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  athulsukumaran457@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-600 dark:text-primary-400" />
                <a href="tel:+916282948616" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +91 6282948616
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl animate-fade-in">
              <img
                src="/images/myImage.jpg"
                alt="Athul Sukumaran"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="w-10 h-10 rounded-full bg-white dark:bg-dark-800 shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronDown className="text-primary-600 dark:text-primary-400" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;