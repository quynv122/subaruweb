import { Mail, Facebook, Youtube, Music } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import carBg from "../assets/images/heroImage.jpg"; // Đường dẫn đến ảnh xe của bạn

type HomeProps = {
  onOpenPopup: () => void;
};

const HeroSection = ({ onOpenPopup }: HomeProps) => {
  return (
    <section className="relative w-full">
      {/* Hình nền */}
      <div
        className="h-[600px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${carBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white text-left px-6 md:px-16 max-w-5xl">
          <h2 className="text-xl md:text-3xl font-light">The New</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase">
            SUBARU WRX tS{" "}
            <span className="text-base font-normal ml-2">2025</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-12">
            <button
              onClick={onOpenPopup}
              className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition"
            >
              <Mail size={24} />
              Đăng ký lái thử
            </button>
            <button className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition">
              <Mail size={24} />
              Xem đánh giá xe
            </button>
          </div>
        </div>
      </div>

      {/* Nội dung mô tả bên dưới */}
      <div className="bg-black text-white py-10 px-6 md:px-16 grid md:grid-cols-3 gap-8">
        {/* Bên trái: mô tả */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Subaru Hà Nội</h3>
          <p className="text-sm mb-1">
            Cập nhật thông tin bảng giá. Chương trình ưu đãi.
          </p>
          <p className="text-sm">
            Bài đánh giá. Cảm nhận khách hàng về xe ô tô Subaru.
          </p>
        </div>

        {/* Bên phải: danh sách + mạng xã hội */}
        <div className="md:col-span-1 space-y-2">
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Chương trình ưu đãi.</li>
            <li>Quà tặng giá trị từ hãng.</li>
            <li>Cập nhật bảng giá xe ô tô Subaru.</li>
          </ul>
          {/* Mạng xã hội */}
          <div className="flex gap-4 mt-4">
            {/* Facebook */}
            <div className="relative group">
              <a
                href="https://facebook.com/vinhautohanoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:scale-105 transition"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Follow on Facebook
              </span>
            </div>

            {/* TikTok */}
            <div className="relative group">
              <a
                href="https://www.tiktok.com/@thevinhx1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
              >
                <SiTiktok className="text-sm" />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Follow on TikTok
              </span>
            </div>

            {/* YouTube */}
            <div className="relative group">
              <a
                href=""
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
              >
                <FaYoutube className="text-sm" />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Subscribe on YouTube
              </span>
            </div>
          </div>
        </div>

        {/* Input đăng ký */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Số điện thoại (Nhận báo giá ưu đãi)"
            className="bg-neutral-800 text-white text-sm px-4 py-2 rounded-md placeholder:text-gray-400 focus:outline-none"
          />
          <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md font-semibold text-sm">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
