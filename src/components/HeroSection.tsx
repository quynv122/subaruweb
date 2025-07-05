import { Mail, Facebook, Youtube, Music } from 'lucide-react'
import carBg from '../assets/images/heroImage.jpg' // Đường dẫn đến ảnh xe của bạn

const HeroSection = () => {
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
          SUBARU WRX tS <span className="text-base font-normal ml-2">2025</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition">
              <Mail size={16} />
              Đăng ký lái thử
            </button>
            <button className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition">
              <Mail size={16} />
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
          <p className="text-sm mb-1">Cập nhật thông tin bảng giá. Chương trình ưu đãi.</p>
          <p className="text-sm">Bài đánh giá. Cảm nhận khách hàng về xe ô tô Subaru.</p>
        </div>

        {/* Bên phải: danh sách + mạng xã hội */}
        <div className="md:col-span-1 space-y-2">
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Chương trình ưu đãi.</li>
            <li>Quà tặng giá trị từ hãng.</li>
            <li>Cập nhật bảng giá xe ô tô Subaru.</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5" />
            <Music className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
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
  )
}

export default HeroSection
