import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

type HomeProps = {
  onOpenPopup: () => void;
};

const Header = ({ onOpenPopup }: HomeProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white shadow-sm relative z-50">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        {/* Menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-blue-800 text-2xl"
        >
          ☰
        </button>

        {/* Logo */}
        <button
          type="button"
          aria-label="Quay về trang chủ"
          onClick={() => navigate("/")}
          className="flex flex-col items-center"
        >
          <img src={logo} alt="Subaru Logo" className="h-10 w-auto" />
          <span className="text-xs font-bold text-gray-700 -translate-y-1">
            SUBARU
          </span>
        </button>

        {/* Placeholder phải */}
        <div className="w-6" />
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-blue-900 font-semibold">MENU</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-blue-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Menu content */}
        <nav className="flex flex-col space-y-4 p-4 text-base font-medium text-blue-900">
          <button
            onClick={() => navigate("/")}
            className=" font-bold hover:underline"
          >
            TRANG CHỦ
          </button>

          {/* Sub menu toggle */}
          <div>
            <button
              
              className="flex items-center justify-between w-full text-left font-bold"
            >
              <span onClick={() => navigate("/CarLists")}
              >CÁC MẪU XE SUBARU</span>
              <span onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
               className="text-xs">{isSubMenuOpen ? "▲" : "▼"}</span>
            </button>

            {/* Sub items */}
            <div
              className={`mt-2 ml-2 space-y-2 text-blue-900 text-sm transition-all duration-300 ease-in-out ${
                isSubMenuOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru Forester
              </a>
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru Crosstrek
              </a>
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru Outback
              </a>
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru BRZ
              </a>
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru WRX
              </a>
              <a href="#" className="block px-2 py-1 hover:underline">
                Subaru WRX Wagon
              </a>
            </div>
          </div>

          <button
            onClick={() => navigate("/Home")}
            className=" font-bold hover:underline"
          >
            TIN TỨC & SỰ KIỆN
          </button>
          <button
            onClick={() => navigate("/Home")}
            className=" font-bold hover:underline"
          >
            TRẢI NGHIỆM KHÁCH HÀNG
          </button>
          <button
            onClick={() => navigate("/Contact")}
            className=" font-bold hover:underline"
          >
            LIÊN HỆ
          </button>
          <button
            onClick={onOpenPopup}
            className="bg-blue-800 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700"
          >
            NHẬN BÁO GIÁ
          </button>
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-32 py-2 ">
        {/* Logo */}
        <button
          type="button"
          aria-label="Quay về trang chủ"
          onClick={() => navigate("/")}
          className="flex flex-col items-center"
        >
          <img src={logo} alt="Subaru Logo" className="h-16 w-auto" />
          <span className="transform -translate-y-3 font-bold text-sm text-gray-700">
            SUBARU
          </span>
        </button>

        {/* Menu */}
        <nav className="flex space-x-6 text-lg font-medium text-blue-900">
          <button onClick={() => navigate("/")} className="hover:underline">
            TRANG CHỦ
          </button>
          <button onClick={() => navigate("/CarLists")} className="hover:underline">
            CÁC MẪU XE SUBARU
          </button>
          <button onClick={() => navigate("/Home")} className="hover:underline">
            TIN TỨC & SỰ KIỆN
          </button>
          <button onClick={() => navigate("/Home")} className="hover:underline">
            TRẢI NGHIỆM KHÁCH HÀNG
          </button>
          <button
            onClick={() => navigate("/Contact")}
            className="hover:underline"
          >
            LIÊN HỆ
          </button>
        </nav>

        {/* Nút báo giá */}
        <button
          onClick={onOpenPopup}
          className="bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          NHẬN BÁO GIÁ
        </button>
      </div>
    </header>
  );
};

export default Header;
