import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-white">Athul</span>
              <span className="text-accent-500">.</span>
            </h2>
            <p className="text-dark-300 mt-2 max-w-md">
              Full-stack developer passionate about creating responsive, performant web applications.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-dark-300 flex items-center justify-center md:justify-end">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Athul Sukumaran
            </p>
            <p className="text-dark-400 text-sm mt-2">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700">
          <div className="text-center text-dark-400 text-sm">
            <p>Thank you for visiting my portfolio. Let's connect and build something amazing together!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;