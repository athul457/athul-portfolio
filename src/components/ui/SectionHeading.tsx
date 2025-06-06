import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-dark-900 dark:text-white">
        {title}
      </h2>
      <p className="text-dark-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 flex justify-center">
        <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;