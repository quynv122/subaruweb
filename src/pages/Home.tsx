import React from 'react';
import HeroSection from '../components/HeroSection';
import CarList from '../components/CarList';
import CarAccessories from '../components/CarAccessories';



type HomeProps = {
  onOpenPopup: () => void;
};

const Home = ( { onOpenPopup }: HomeProps ) => {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection onOpenPopup={onOpenPopup} />
      <CarList onOpenPopup={onOpenPopup} />
      <CarAccessories/>

    </div>
  );
};

export default Home;
