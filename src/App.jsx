import React from 'react';
import { Navbar } from './components/organisms/Navbar';
import { HeroSection } from './components/organisms/HeroSection';
import { WhatIDoSection } from './components/organisms/WhatIDoSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { ExperienceSection } from './components/organisms/ExperienceSection';
import { AboutSection } from './components/organisms/AboutSection';
import { Footer } from './components/organisms/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
