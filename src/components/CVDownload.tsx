import React from 'react';
import { Download, FileText } from 'lucide-react';

const CVDownload: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/Athul_Sukumaran_CV.pdf';
    link.download = 'Athul_Sukumaran_CV.pdf';
    link.click();
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <FileText size={40} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download My CV
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and projects in a downloadable format.
          </p>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-3" />
            Download CV (PDF)
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
              Updated January 2025
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
              Professional Format
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
              ATS Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;