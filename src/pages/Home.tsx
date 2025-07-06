import React from 'react';
import HeroSection from '../components/HeroSection';
import CarList from '../components/CarList';

type HomeProps = {
  onOpenPopup: () => void;
};

const Home = ( { onOpenPopup }: HomeProps ) => {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection onOpenPopup={onOpenPopup} />
      <CarList onOpenPopup={onOpenPopup} />

    </div>
  );
};

export default Home;
