import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import popupImage from "../assets/images/Popup-logo.jpg";
import { X } from "lucide-react";
import toast from "react-hot-toast";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePopup = ({ isOpen, onClose }: QuotePopupProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [paymentType, setPaymentType] = useState("installment");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    car?: string;
  }>({});

  const validateForm = (form: HTMLFormElement) => {
  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
  const car = (form.elements.namedItem("car") as HTMLSelectElement).value.trim();

  const phoneRegex = /^0\d{9}$/;

  const newErrors: typeof errors = {};

  if (!name) newErrors.name = "Họ và tên không được bỏ trống.";
  if (!phone) newErrors.phone = "Số điện thoại không được bỏ trống.";
  else if (!phoneRegex.test(phone)) newErrors.phone = "Số điện thoại không hợp lệ.";
  if (!car) newErrors.car = "Vui lòng chọn dòng xe.";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validateForm(formRef.current)) return;

    emailjs
      .sendForm(
        "service_fhnova5", // Thay bằng Service ID thật
        "template_s6kmwxl", // Thay bằng Template ID thật
        formRef.current,
        "ynIR7xeNg4VWNsXpb" // Thay bằng Public Key thật
      )
      .then(() => {
        toast.success("Gửi yêu cầu thành công!");
        onClose();
      })
      .catch(() => {
        toast.error("Đã xảy ra lỗi, vui lòng thử lại!");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[95%] max-w-xl p-8 relative shadow-lg">
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
        <div className="flex justify-center space-x-6 mb-6 text-xl">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="installment"
              checked={paymentType === "installment"}
              onChange={() => setPaymentType("installment")}
              className="w-5 h-5" // 👈 làm radio to hơn
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
              className="w-5 h-5" // 👈 làm radio to hơn
            />
            Trả thẳng
          </label>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 text-base"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <select
              name="car"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-blue-600"
            >
              <option value="">Chọn dòng xe:</option>
              <option>Subaru Forester</option>
              <option>Subaru Outback</option>
              <option>Subaru BRZ</option>
              <option>Subaru WRX</option>
              <option>Subaru WRX Wagon</option>
            </select>
            {errors.car && (
              <p className="text-red-500 text-sm mt-1">{errors.car}</p>
            )}
          </div>

          <input
            type="hidden"
            name="paymentType"
            value={paymentType === "installment" ? "Trả góp" : "Trả thẳng"}
          />

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
