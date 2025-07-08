import { useEffect, useState } from "react";
import { Mail, Menu } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useNavigate } from "react-router-dom";

type HeroData = {
  "Tên xe": string;
  "Năm": string;
  "Link ảnh": string;
};

type HomeProps = {
  onOpenPopup: () => void;
};

const HeroSection = ({ onOpenPopup }: HomeProps) => {
  const navigator = useNavigate();
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1O3LYWUq4K0jwUyKUR8og6FHIZSyf2wnyBleGz6EC5VY/Newcar"
    )
      .then((res) => res.json())
      .then((data) => setHero(data[0]))
      .catch((err) => console.error("Lỗi load Hero:", err));
  }, []);

  if (!hero) return null;

  return (
    <section className="relative w-full">
      {/* Hình nền */}
      <div
        className="h-[600px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${hero["Link ảnh"]})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white text-left px-6 md:px-16 max-w-5xl">
          <h2 className="text-xl md:text-3xl font-light">The New</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase">
            {hero["Tên xe"]}{" "}
            <span className="text-base font-normal ml-2">{hero["Năm"]}</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-4 md:gap-12">
            <button
              onClick={onOpenPopup}
              className="flex items-center gap-2 bg-yellow-300 text-black px-2  md:px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition"
            >
              <Mail size={24} />
              Đăng ký lái thử
            </button>
            <button
              onClick={() => navigator("/NewCarReview")}
             className="flex items-center gap-2 bg-yellow-300 text-black px-2  md:px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition">
              <Menu size={24} />
              Xem đánh giá xe
            </button>
          </div>
        </div>
      </div>

      {/* Nội dung mô tả */}
      <div className="bg-black text-white py-8 px-6 md:px-32 grid md:grid-cols-3 gap-8">
        {/* Mô tả bên trái */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-2">Subaru Hà Nội</h3>
          <p className="text-sm mb-1">
            Cập nhật thông tin bảng giá. Chương trình ưu đãi.
          </p>
          <p className="text-sm">
            Bài đánh giá. Cảm nhận khách hàng về xe ô tô Subaru.
          </p>
        </div>

        {/* Danh sách và mạng xã hội */}
        <div className="md:col-span-1 space-y-2">
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Chương trình ưu đãi.</li>
            <li>Quà tặng giá trị từ hãng.</li>
            <li>Cập nhật bảng giá xe ô tô Subaru.</li>
          </ul>

          <div className="flex gap-8 pt-4">
            <SocialIcon
              href="https://facebook.com/vinhautohanoi"
              icon={<FaFacebookF className="text-sm" />}
              tooltip="Follow on Facebook"
              bgClass="bg-blue-600"
            />
            <SocialIcon
              href="https://www.tiktok.com/@thevinhx1"
              icon={<SiTiktok className="text-sm" />}
              tooltip="Follow on TikTok"
              border
            />
            <SocialIcon
              href="https://www.youtube.com/@vinhx1"
              icon={<FaYoutube className="text-sm" />}
              tooltip="Subscribe on YouTube"
              border
            />
          </div>
        </div>

        {/* Đăng ký */}
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

const SocialIcon = ({
  href,
  icon,
  tooltip,
  border = false,
  bgClass = "",
}: {
  href: string;
  icon: React.ReactNode;
  tooltip: string;
  border?: boolean;
  bgClass?: string;
}) => (
  <div className="relative group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-9 h-9 rounded-full ${
        border ? "border border-white text-white" : `${bgClass} text-white`
      } hover:scale-105 hover:bg-white hover:text-black transition`}
    >
      {icon}
    </a>
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
      {tooltip}
    </span>
  </div>
);

export default HeroSection;
