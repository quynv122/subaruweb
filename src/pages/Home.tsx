import React from 'react';
import CarList from '../components/CarList';
import CarAccessories from '../components/CarAccessories';
import MixedSlider from '../components/MixedSlider';



type HomeProps = {
  onOpenPopup: () => void;
};

const Home = ( { onOpenPopup }: HomeProps ) => {
  return (
    <div className="bg-white text-gray-900">
      <MixedSlider onOpenPopup={onOpenPopup} />
      <CarList onOpenPopup={onOpenPopup} />
      <CarAccessories/>

    </div>
  );
};

export default Home;
