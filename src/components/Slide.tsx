// src/components/Slide.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/images/silde/1.png";
import slide2 from "../assets/images/silde/2.png";
import slide3 from "../assets/images/silde/3.jpg";
import slide4 from "../assets/images/silde/4.jpg";
import slide5 from "../assets/images/silde/5.jpg";
import slide6 from "../assets/images/silde/6.jpg";
import slide7 from "../assets/images/silde/7.jpg";





const images = [slide1, slide2,slide3,slide4,slide5,slide6,slide7];
type HomeProps = {
  onOpenPopup: () => void;
};
const Slide = ({ onOpenPopup }: HomeProps) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
                onClick={() => onOpenPopup()}
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
