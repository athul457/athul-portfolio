import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: 'hero', offset: -80 },
  { name: 'About', to: 'about', offset: -50 },
  { name: 'Projects', to: 'projects', offset: -50 },
  { name: 'Skills', to: 'skills', offset: -50 },
  { name: 'Education', to: 'education', offset: -50 },
  { name: 'Contact', to: 'contact', offset: -50 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer flex items-center z-50 relative"
          >
            <span className="font-bold">Athul</span>
            <span className="text-accent-500 ml-1">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass="active"
                className="nav-link cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/athul457"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/athul457"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-3 md:hidden z-50 relative">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="hamburger-button relative w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center transition-all duration-300 hover:bg-dark-200 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute block w-5 h-0.5 bg-dark-700 dark:bg-dark-200 transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-2' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block w-5 h-0.5 bg-dark-700 dark:bg-dark-200 transition-all duration-300 ease-in-out top-2 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block w-5 h-0.5 bg-dark-700 dark:bg-dark-200 transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-2' : 'top-3'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark-900 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-200 dark:border-dark-700">
          <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
            <span>Athul</span>
            <span className="text-accent-500">.</span>
          </div>
          <button
            onClick={closeMenu}
            className="w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              onClick={closeMenu}
              className="group flex items-center py-3 px-4 rounded-lg text-dark-800 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:translate-x-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-lg font-medium">{link.name}</span>
              <div className="ml-auto w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-200 dark:border-dark-700">
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/athul457"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-200 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/athul457"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-200 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-center text-dark-500 dark:text-dark-400 text-sm mt-4">
            Let's connect and build something amazing!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;