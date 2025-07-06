import CarList from "../components/CarList";


type HomeProps = {
  onOpenPopup: () => void;
};

const CarLists = ({ onOpenPopup }: HomeProps) => {
  

  return (
    <CarList onOpenPopup={onOpenPopup} />
  );
};

export default CarLists;
