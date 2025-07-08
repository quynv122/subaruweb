import { useState } from "react";
import { Phone, Mail } from "lucide-react";

import foresterGreen from "../assets/images/Forester-green.jpg";
import foresterBlue from "../assets/images/Forester-blue.jpg";
import foresterWhite from "../assets/images/Forester-white.jpg";
import { useNavigate } from 'react-router-dom';

type HomeProps = {
  onOpenPopup: () => void;
};

const Forester = ({ onOpenPopup }: HomeProps) => {
  const colorOptions = [
    { src: foresterGreen, name: "Green" },
    { src: foresterBlue, name: "Blue" },
    { src: foresterWhite, name: "White" },
  ];

  const [selectedColor, setSelectedColor] = useState(foresterGreen);

const navigate = useNavigate();

  return (
    <div>

    
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left - Image section */}
      <div className="flex flex-col items-center">
        <img
          src={selectedColor}
          alt="Subaru Forester"
          className="w-full max-w-md object-contain rounded-lg shadow"
        />
        <div className="flex justify-center gap-3 mt-4">
          {colorOptions.map((option) => (
            <img
              key={option.name}
              src={option.src}
              onClick={() => setSelectedColor(option.src)}
              className={`w-16 h-12 object-contain border cursor-pointer transition-all duration-200 rounded ${
                selectedColor === option.src
                  ? "border-2 border-black scale-105"
                  : "border border-gray-300 hover:border-black"
              }`}
              alt={`Forester ${option.name}`}
            />
          ))}
        </div>
      </div>

      {/* Right - Info section */}
      <div>
        <div className="text-sm flex items-center text-gray-500 mb-1 space-x-1">
          <button onClick={() => navigate("/")}
           className="hover:underline text-blue-700">TRANG CHỦ</button>
          <span>/</span>
          <button
            onClick={() => navigate("/CarLists")}
           className="hover:underline text-blue-700">
            CÁC MẪU XE SUBARU
          </button>
        </div>
        <h1 className="text-3xl font-bold text-blue-800">Subaru Forester</h1>

        <div className="mt-4 border border-gray-300 rounded bg-gray-100 px-3 py-2 text-sm font-semibold">
          | BẢNG GIÁ XE SUBARU FORESTER THÁNG 07/2025
        </div>

        <ul className="mt-4 space-y-1 text-sm">
          <li>
            Subaru Forester 2.0 i-L:{" "}
            <span className="text-blue-700 font-semibold">799.000.000 VNĐ</span>
          </li>
          <li>
            Subaru Forester 2.0 i-L EyeSight:{" "}
            <span className="text-blue-700 font-semibold">899.000.000 VNĐ</span>
          </li>
          <li>
            Subaru Forester 2.0 i-S EyeSight:{" "}
            <span className="text-blue-700 font-semibold">969.000.000 VNĐ</span>
          </li>
        </ul>

        <div className="mt-6 bg-blue-100 border border-blue-300 rounded px-4 py-3 text-sm">
          <strong>– KHUYẾN MÃI & ƯU ĐÃI</strong>
          <p className="mt-1 italic text-blue-900">
            * Quý khách vui lòng liên hệ Hotline tư vấn để nhận thông tin Ưu đãi
            & Khuyến mãi.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenPopup}
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            ĐĂNG KÝ LÁI THỬ
          </button>
          <a
            href="tel:0849996883"
            className="border border-blue-700 text-blue-800 px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 w-full sm:w-auto hover:bg-blue-300"
          >
            <Phone className="w-4 h-4" />
            084 999 6883
          </a>
        </div>
      </div>
      
    </div>
    <hr className=" border-t-4 border-gray-400" />
    <div>
    <p>Mô tả</p>

    </div>
    </div>
  );
};

export default Forester;
