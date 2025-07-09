import React, { useRef } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import HeroSection from "./HeroSection";
import Slide2 from "../assets/images/silde/1.png";
import Slide3 from "../assets/images/silde/2.png";
import Slide4 from "../assets/images/silde/4.jpg";
import Slide5 from "../assets/images/silde/5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HomeProps = {
  onOpenPopup: () => void;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const MixedSlider = ({ onOpenPopup }: HomeProps) => {
  const isMobile = useIsMobile();
  const sliderDomRef = useRef<HTMLDivElement | null>(null);
  const sliderInstanceRef = useRef<KeenSliderInstance | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
    [
      (slider) => {
        sliderInstanceRef.current = slider; // lưu instance để dùng bên ngoài

        let timeout: ReturnType<typeof setTimeout>;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 10000); // 10 giây
        }

        slider.on("created", () => nextTimeout());
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  if (isMobile) {
    return <HeroSection onOpenPopup={onOpenPopup} />;
  }

  return (
    <div className="relative">
      {/* Slider */}
      <div
        ref={(ref) => {
          sliderDomRef.current = ref;
          sliderRef(ref);
        }}
        className="keen-slider rounded-xl overflow-hidden"
      >
        {/* Slide 1: HeroSection */}
        <div className="keen-slider__slide flex justify-center items-center">
          <HeroSection onOpenPopup={onOpenPopup} />
        </div>

        {[Slide2, Slide3, Slide4, Slide5].map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={src}
              alt={`Slide ${idx + 2}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Nút trái */}
      <button
        onClick={() => sliderInstanceRef.current?.prev()}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Nút phải */}
      <button
        onClick={() => sliderInstanceRef.current?.next()}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default MixedSlider;
