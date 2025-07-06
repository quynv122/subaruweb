import React from 'react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="border-t py-4 text-center text-sm text-gray-700 bg-white">
      <div className="flex justify-center gap-4 mb-1 text-[13px] font-medium text-gray-900">
        <button  className="hover:underline">GIỚI THIỆU</button>
        <button  className="hover:underline">CHÍNH SÁCH BẢO MẬT</button>
        <button onClick={() => navigate("/Contact")} className="hover:underline">LIÊN HỆ</button>
      </div>
      <div className="text-xs text-gray-600">
        Copyright 2024 © Subaru Hà Nội
      </div>
    </footer>
  );
};

export default Footer;
