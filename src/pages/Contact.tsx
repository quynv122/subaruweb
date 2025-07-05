import { useEffect } from "react";
import { Phone } from "lucide-react";
import bgImage from "../assets/images/contact-bg.jpg";

const Contact = () => {
  

  return (
    <section className="relative w-full">
      {/* Ảnh nền */}
      <div className="relative">
        <img
          src={bgImage}
          alt="Showroom Subaru"
          className="w-full h-[400px] md:h-[600px] object-cover"
        />

        {/* Overlay nội dung */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0 bg-black bg-opacity-90 text-white p-6 md:p-10 rounded-lg md:rounded-2xl max-w-md md:max-w-xl w-[90%] md:w-auto shadow-lg md:shadow-2xl text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase mb-2 md:mb-4 leading-snug">
            Showroom <br /> Subaru Hà Nội
          </h2>
          <p className="text-sm md:text-lg mb-4 md:mb-6">
            Showroom 4S: Số 1 Mạc Thái Tông, Trung Hòa, Cầu Giấy, Hà Nội
          </p>
          <a
            href="tel:0985981331"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-lg font-semibold transition"
          >
            <Phone className="w-4 h-4 md:w-6 md:h-6 mr-2" />
            0985981331
          </a>
        </div>
      </div>

      {/* Phần ưu đãi bên dưới */}
      <div className="bg-blue-500 text-white text-center py-10 px-4">
        <h3 className="text-2xl font-bold uppercase mb-4">
          Ưu đãi & Khuyến mãi
        </h3>
        <p className="mb-2">
          Quà tặng dành cho khách hàng gửi yêu cầu báo giá Online.
        </p>
        <p className="italic">
          Quý khách vui lòng liên hệ Hotline tư vấn để nhận tin ưu đãi và khuyến
          mãi.
        </p>
        <div className="mt-4">
          <a
            href="tel:0985981331"
            className="inline-block border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-blue-600 transition"
          >
            HOTLINE: 0985981331
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
