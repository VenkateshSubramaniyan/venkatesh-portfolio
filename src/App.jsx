import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './sections/About.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import MediumArticles from './sections/MediumArticles.jsx'
import NakerBackground from './components/NakerBackground.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import Achievements from './sections/Achievements.jsx'
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => 
  'dark'
);

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}, [theme]);


  return (
    <>
      {/* Show background only in dark mode */}
      {theme === 'dark' && <NakerBackground />}
      <main className="relative z-10">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Navbar />
        <Hero />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;