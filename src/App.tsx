import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import CVDownload from './components/CVDownload';
import Footer from './components/Footer';
import Loader from './components/ui/Loader';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <CVDownload />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;