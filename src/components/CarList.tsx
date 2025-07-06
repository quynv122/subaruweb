import { Mail } from "lucide-react";
import { Menu } from "lucide-react";
import imgForesterL from "../assets/images/SUBARU-FORESTER-2.0I-L.jpg";
import imgForesterLE from "../assets/images/SUBARU-FORESTER-2.0I-L-Eyesight.jpg";
import imgForesterSE from "../assets/images/SUBARU-FORESTER-2.0I-S-EYESIGHT-1201x800.jpg";
import imgCrostrekSE from "../assets/images/subaru-crosstrek-300x168.jpg";
import imgOutbackTE from "../assets/images/SUBARU-OUTBACK-300x169.jpg";
import imgBRZATE from "../assets/images/SUBARU-BRZ-2.4-AT-EYESIGHT-300x169.jpg";
import imgWRXCVTE from "../assets/images/SUBARU-WRX-2.4-CVT-EYESIGHT-300x169.jpg";
import imgWRXWAGONCVT from "../assets/images/SUBARU-WRX-WAGON-2.4-CVT-300x169.jpg";
import imgWRXMT from "../assets/images/SUBARU-WRX-2.4-MT-300x169.jpg";

const cars = [
  {
    name: "SUBARU FORESTER 2.0-L",
    price: "799.000.000 VND",
    image: imgForesterL,
  },
  {
    name: "SUBARU FORESTER 2.0-L EYESIGHT",
    price: "899.000.000 VND",
    image: imgForesterLE,
  },
  {
    name: "SUBARU FORESTER 2.0-S EYESIGHT",
    price: "969.000.000 VND",
    image: imgForesterSE,
  },
  {
    name: "SUBARU CROSSTREK 2.0I-S EYESIGHT",
    price: "999.000.000 VND",
    image: imgCrostrekSE,
  },
  {
    name: "SUBARU OUTBACK 2.5I-T EYESIGHT",
    price: "1.759.000.000 VND",
    image: imgOutbackTE,
  },
  {
    name: "SUBARU BRZ 2.4 AT EYESIGHT",
    price: "1.899.000.000 VND",
    image: imgBRZATE,
  },
  {
    name: "SUBARU WRX 2.4 CVT EYESIGHT",
    price: "2.049.000.000 VND",
    image: imgWRXCVTE,
  },
  {
    name: "SUBARU WRX WAGON 2.4 CVT",
    price: "2.029.000.000 VND",
    image: imgWRXWAGONCVT,
  },
  {
    name: "SUBARU WRX 2.4 MT",
    price: "1.999.000.000 VND",
    image: imgWRXMT,
  },
];

type CarListProps = {
  onOpenPopup: () => void;
};

const CarList = ({ onOpenPopup }: CarListProps) => {
  return (
    <section className="py-10 px-4 md:px-16 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-semibold uppercase mb-8">
        Các mẫu xe Subaru
      </h2>

      <div className="px-0 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
        {cars.map((car, index) => (
          <div
            key={index}
            className="flex flex-col h-full items-center border p-0 rounded-md shadow-sm"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[300px] object-contain mb-4"
            />
            <button className="font-semibold text-lg text-blue-800 mb-1 text-center hover:text-red-800">
              {car.name}
            </button>
            <p className="text-gray-700 text-sm mb-4">GIÁ: {car.price}</p>
            <div className="flex gap-4 flex-wrap justify-center mt-auto mb-1">
              <button
                onClick={onOpenPopup}
                className="flex items-center bg-blue-700 hover:bg-blue-600 text-white text-sm md:text-base font-bold px-3 py-1.5 rounded transition"
              >
                <Mail size={18} className="mr-2" />
                ĐĂNG KÝ
              </button>
              <button className="flex items-center border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 text-sm md:text-base font-bold px-3 py-1.5 rounded transition">
                <Menu size={18} className="mr-2" />
               XEM ĐÁNH GIÁ XE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
