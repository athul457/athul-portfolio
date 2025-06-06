import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute w-full h-full border-4 border-dark-200 dark:border-dark-700 rounded-full"></div>
          <div className="absolute w-full h-full border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-dark-900 dark:text-white">
          <span className="text-primary-600 dark:text-primary-400">Athul</span>
          <span className="text-accent-500">.</span>
        </h2>
        <p className="text-dark-600 dark:text-dark-300 mt-2">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default Loader;