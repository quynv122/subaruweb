
import Slide from './../components/Slide';
import BRZ from './../components/BRZ';

type HomeProps = {
  onOpenPopup: () => void;
};

const NewsEvents = ({ onOpenPopup }: HomeProps) => {
  

  return (
    <><Slide onOpenPopup={onOpenPopup} />
    <BRZ />
    </>
    
  );
};

export default NewsEvents;
