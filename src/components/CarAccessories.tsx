import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import mocChiaKhoa from "../assets/images/CarAccessories/moc-chia-khoa.png";
import tuiDungLaptop from "../assets/images/CarAccessories/tui-chong-soc-laptop.png";
import dongHo from "../assets/images/CarAccessories/dongho.png";
import lyThepKhongRi from "../assets/images/CarAccessories/ly-thep-khong-gi.png";
import balo from "../assets/images/CarAccessories/balo.png";
import kinhMat from "../assets/images/CarAccessories/kinh.png";

const accessories = [
  {
    title: "TÚI CHỐNG SỐC LAPTOP 14.1 INCH TIỆN LỢI",
    price: "400.000 đ",
    image: tuiDungLaptop,
  },
  {
    title: "LY THÉP KHÔNG GỈ SUBARU 300ML",
    price: "520.000 đ",
    image: lyThepKhongRi,
  },
  {
    title: "MÓC CHÌA KHÓA SUBARU MÀU XANH DƯƠNG",
    price: "437.000 đ",
    image: mocChiaKhoa,
  },
  {
    title: "ĐỒNG HỒ ĐEO TAY PIN MẶT HIỂN THỊ CƠ HỌC",
    price: "2.400.000 đ",
    image: dongHo,
  },
  {
    title: "BALO SUBARU DU LỊCH THỜI THƯỢNG",
    price: "1.429.000 đ",
    image: balo,
  },
  {
    title: "KÍNH MẮT SUBARU HIEUJ TUNDRA 3030",
    price: "946.000 đ",
    image: kinhMat,
  },
  
];

const CarAccessories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center md:px-32">
      <h2 className="text-center text-2xl font-bold mb-4">
        PHỤ KIỆN XE SUBARU
      </h2>

      <div className="relative w-full max-w-screen-xl">
        {/* Nút scroll trái - ẩn ở mobile */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block p-2 bg-blue-800 text-white rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Danh sách phụ kiện */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth gap-8 px-10 py-4 hide-scrollbar"
        >
          {accessories.map((item, idx) => (
            <div
              key={idx}
              className="w-[calc(100%/1.2)] sm:w-[calc(100%/2)] md:w-[200px] flex-shrink-0 flex flex-col items-center border rounded shadow-md p-3 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain mb-3"
              />
              <h3 className="text-sm font-bold text-center text-blue-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Giá chỉ từ:{" "}
                <span className="text-red-600 font-bold">{item.price}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Nút scroll phải - ẩn ở mobile */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:block p-2 bg-blue-800 text-white rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarAccessories;
