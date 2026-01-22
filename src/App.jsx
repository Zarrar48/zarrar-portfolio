import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState('');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

const handleOpenAiMatcher = () => {
    setTriggerMessage("I have a job description, can you see if Zarrar is a good fit?");
    setIsAiOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 relative`}>
      <ThreeBackground isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 flex flex-col items-center w-full overflow-x-hidden">
        <Hero onJobMatchClick={handleOpenAiMatcher} />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      
      <AiAssistant 
        isOpen={isAiOpen} 
        setIsOpen={setIsAiOpen} 
        triggerMessage={triggerMessage}
        setTriggerMessage={setTriggerMessage}
      />
      
      <Analytics />
    </div>
  );
}

export default App;