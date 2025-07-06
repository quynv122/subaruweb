import React from "react";
import { Phone } from "lucide-react";
import zaloIcon from "../assets/images/Icon_of_Zalo.svg.png";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-8 flex flex-col items-center gap-4 z-50">
      {/* Nút Zalo */}
      <a
        href="https://zalo.me/0849996883" // thay số điện thoại tại đây
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulseShakeCombo bg-blue-400 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src={zaloIcon} alt="Zalo" className="w-10 h-10" />
      </a>

      {/* Nút gọi */}
      <a
        href="tel:0849996883"
        className="animate-pulseShakeCombo bg-red-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Phone size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;
