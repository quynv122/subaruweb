import { useState } from "react";
import popupImage from "../assets/images/Popup-logo.jpg";
import { X } from "lucide-react";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePopup = ({ isOpen, onClose }: QuotePopupProps) => {
  const [paymentType, setPaymentType] = useState("installment");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[95%] max-w-xl p-8 relative">
        {/* Nút đóng */}
        <button
          className="absolute top-0 right-0 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        {/* Logo */}
        <div className="mb-6">
          <img
            src={popupImage}
            alt="Subaru"
            className="h-20 mx-auto object-contain"
          />
        </div>

        {/* Tiêu đề */}
        <h2 className="text-center text-lg md:text-xl font-semibold mb-4 whitespace-nowrap">
          NHẬN BÁO GIÁ & LÁI THỬ XE
        </h2>

        {/* Radio chọn hình thức */}
        <div className="flex justify-center space-x-6 mb-6 text-base">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="installment"
              checked={paymentType === "installment"}
              onChange={() => setPaymentType("installment")}
            />
            Trả góp
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="full"
              checked={paymentType === "full"}
              onChange={() => setPaymentType("full")}
            />
            Trả thẳng
          </label>
        </div>

        {/* Form */}
        <form className="space-y-4 text-base">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600"
          />
          <select className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600">
            <option>Chọn dòng xe:</option>
            <option>Subaru Forester</option>
            <option>Subaru Outback</option>
            <option>Subaru BRZ</option>
            <option>Subaru WRX</option>
            <option>Subaru WRX Wagon</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded"
          >
            GỬI YÊU CẦU
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuotePopup;
