import React from 'react';
import HeroSection from '../components/HeroSection';

import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
