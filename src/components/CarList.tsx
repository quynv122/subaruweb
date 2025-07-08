import { useEffect, useState } from "react";
import { Mail, Menu } from "lucide-react";

type Car = {
  "Tên xe": string;
  "Giá": string;
  "Link ảnh": string;
};

type CarListProps = {
  onOpenPopup: () => void;
};

const CarList = ({ onOpenPopup }: CarListProps) => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1O3LYWUq4K0jwUyKUR8og6FHIZSyf2wnyBleGz6EC5VY/Carlist"
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

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
              src={car["Link ảnh"]}
              alt={car["Tên xe"]}
              className="w-full h-[300px] object-contain mb-4"
            />
            <button className="font-semibold text-lg text-blue-800 mb-1 text-center hover:text-red-800">
              {car["Tên xe"]}
            </button>
            <p className="text-gray-700 text-sm mb-4">GIÁ: {car["Giá"]}</p>
            <div className="flex gap-2 md:gap-4 flex-wrap justify-center mt-auto mb-1">
              <button
                onClick={onOpenPopup}
                className="flex items-center bg-blue-700 hover:bg-blue-600 text-white text-sm md:text-base font-bold px-3 py-1.5 rounded transition"
              >
                <Mail size={18} className="mr-2" />
                ĐĂNG KÝ LÁI THỬ
              </button>
              <button 
                
                className="flex items-center border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 text-sm md:text-base font-bold px-3 py-1.5 rounded transition">
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
