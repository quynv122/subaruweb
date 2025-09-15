import { useState } from "react";
import { Phone, Mail } from "lucide-react";

import foresterGreen from "../assets/images/Forester-green.jpg";
import foresterBlue from "../assets/images/Forester-blue.jpg";
import foresterWhite from "../assets/images/Forester-white.jpg";
import { useNavigate } from "react-router-dom";

type HomeProps = {
  onOpenPopup: () => void;
};

const Forester = ({ onOpenPopup }: HomeProps) => {
  const colorOptions = [
    { src: foresterGreen, name: "Green" },
    { src: foresterBlue, name: "Blue" },
    { src: foresterWhite, name: "White" },
  ];

  const [selectedColor, setSelectedColor] = useState(foresterGreen);

  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Image section */}
        <div className="flex flex-col items-center">
          <img
            src={selectedColor}
            alt="Subaru Forester"
            className="w-full max-w-md object-contain rounded-lg shadow"
          />
          <div className="flex justify-center gap-3 mt-4">
            {colorOptions.map((option) => (
              <img
                key={option.name}
                src={option.src}
                onClick={() => setSelectedColor(option.src)}
                className={`w-16 h-12 object-contain border cursor-pointer transition-all duration-200 rounded ${
                  selectedColor === option.src
                    ? "border-2 border-black scale-105"
                    : "border border-gray-300 hover:border-black"
                }`}
                alt={`Forester ${option.name}`}
              />
            ))}
          </div>
        </div>

        {/* Right - Info section */}
        <div>
          <div className="text-sm flex items-center text-gray-500 mb-1 space-x-1">
            <button
              onClick={() => navigate("/")}
              className="hover:underline text-blue-700"
            >
              TRANG CHỦ
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("/CarLists")}
              className="hover:underline text-blue-700"
            >
              CÁC MẪU XE SUBARU
            </button>
          </div>
          <h1 className="text-3xl font-bold text-blue-800">Subaru Forester</h1>

          <div className="mt-4 border border-gray-300 rounded bg-gray-100 px-3 py-2 text-sm font-semibold">
            | BẢNG GIÁ XE SUBARU FORESTER THÁNG 07/2025
          </div>

          <ul className="mt-4 space-y-1 text-sm">
            <li>
              Subaru Forester 2.0 i-L:{" "}
              <span className="text-blue-700 font-semibold">
                829.000.000 VND
              </span>
            </li>
            <li>
              Subaru Forester 2.0 i-L EyeSight:{" "}
              <span className="text-blue-700 font-semibold">
                899.000.000 VNĐ
              </span>
            </li>
            <li>
              Subaru Forester 2.0 i-S EyeSight:{" "}
              <span className="text-blue-700 font-semibold">
                969.000.000 VNĐ
              </span>
            </li>
          </ul>

          <div className="mt-6 bg-blue-100 border border-blue-300 rounded px-4 py-3 text-sm">
            <strong>– KHUYẾN MÃI & ƯU ĐÃI</strong>
            <p className="mt-1 italic text-blue-900">
              * Quý khách vui lòng liên hệ Hotline tư vấn để nhận thông tin Ưu
              đãi & Khuyến mãi.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenPopup}
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              ĐĂNG KÝ LÁI THỬ
            </button>
            <a
              href="tel:0849996883"
              className="border border-blue-700 text-blue-800 px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 w-full sm:w-auto hover:bg-blue-300"
            >
              <Phone className="w-4 h-4" />
              084 999 6883
            </a>
          </div>
        </div>
      </div>
      <hr className=" border-t border-gray-400" />
      <div>
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 md:px-32">
          <section>
            <h2 className="text-2xl font-bold">Tổng quan</h2>

            <p>
              Mới đây,{" "}
              <a
                className="text-blue-600 font-semibold"
                href="https://subaruhanoi3s.com.vn/subaru-forester-2-0-i-l-eyesight-2023-1416371.html"
              >
                Subaru Forester 2023 bản nâng cấp của thế hệ thứ 5
              </a>{" "}
              đã chính thức được trình làng tại thị trường quê nhà Nhật Bản.
              Ngoại trừ nâng cấp đắt giá về trang bị an toàn, các chi tiết còn
              lại gần như được giữ nguyên với bản tiền nhiệm.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-1-rfkssxv.jpg"
                alt="Subaru Forester 2023 ra mắt"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Subaru Forester 2023 bản nâng cấp của thế hệ thứ 5 đã chính thức
                được trình làng tại thị trường quê nhà Nhật Bản
              </p>
            </div>

            <p>
              Về cơ bản, Subaru Forester facelift không có quá nhiều thay đổi so
              với phiên bản đang có ngoài thị trường.
            </p>

            <p>
              Nâng cấp dễ thấy nhất có thể quan sát trên đầu xe khi cụm đèn pha
              được làm mới thẳng, cao hơn người tiền nhiệm. Cản trước cũng được
              tái thiết kế trong khi tản nhiệt sử dụng thiết kế hình chữ U
              phẳng, bên trong là logo Subaru được trang trí bằng ốp kim loại
              hai bên.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Ngoại thất</h2>

            <p>
              Nhìn tổng thể, diện mạo của{" "}
              <a
                className="text-blue-600 font-semibold"
                href="https://subaruhanoi3s.com.vn/subaru-forester-2-0-i-l-eyesight-2023-1416371.html"
              >
                Subaru Forester 2023
              </a>{" "}
              không có nhiều thay đổi so với bản tiền nhiệm. Dù vậy vẫn có một
              số chi tiết nhỏ đủ giúp khách hàng nhận ra phiên bản nâng cấp. Xe
              vẫn duy trì kích thước tổng thể DxRxC lần lượt là 4625 x 1815 x
              1715 mm.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-3-rbt7sxx.jpg"
                alt="Subaru Forester 2023"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Xe vẫn duy trì kích thước tổng thể DxRxC lần lượt là 4640 x 1815
                x 1715 mm.
              </p>
            </div>

            <p>
              Phần đầu xe là bộ lưới tản nhiệt được tinh chỉnh với cấu trúc gồm
              các thanh ngang có hoạt tiết lượn sóng. Phần viền crom bao quanh
              lưới tản nhiệt và hai bên logo đã được thay thế bởi viền sơn đen
              bóng mang đến cái nhìn nam tính hơn.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-2-rl9nsxw.jpg"
                alt="Lưới tản nhiệt mới"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Phần viền crom bao quanh lưới tản nhiệt và hai bên logo đã được
                thay thế bởi viền sơn đen bóng mang đến cái nhìn nam tính hơn.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-12-9cgusx4.jpg"
                alt="Đèn LED ban ngày"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Dải đèn LED ban ngày được làm lại gãy gọn hơn trước.
              </p>
            </div>

            <p>
              Cụm đèn trước Full-LED cũng được làm mới gọn gàng, sắc sảo hơn đi
              kèm là tính năng tự động điều chỉnh độ cao chùm sáng, liếc theo
              góc lái (SRH) và rửa đèn pha tự động kiểu pop-up.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-4-25b4sxy.jpg"
                alt="Đèn pha"
                className="mx-auto"
              />
            </div>

            <p>
              Hệ thống đèn sương mù bên dưới đã được nâng cấp lên dạng LED hỗ
              trợ tầm nhìn tốt hơn, đi kèm là mảng ốp trí mới.
            </p>

            <p>
              Ở bên hông và phía sau vẫn gần như giống đời cũ. Bộ mâm dạng phay
              có thiết kế điệu đà hơn, giữ nguyên kích thước 18 inch trên bản
              i-S và 17 inch trên bản i-L.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-9-bukysx1.jpg"
                alt="Mâm xe"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Bộ mâm dạng phay có thiết kế điệu đà hơn, giữ nguyên kích thước
                18 inch trên bản i-S và 17 inch trên bản i-L.
              </p>
            </div>

            <p>
              Xe Subaru Forester 2023 được trang bị cặp gương chiếu hậu tách rời
              khỏi trụ A giúp hạn chế điểm mù đi kèm là tính năng chỉnh điện,
              sấy kính và tích hợp đèn xi nhan dạng LED. Nếu cần mang nhiều hành
              lý cho chuyến dã ngoại, người dùng có thể tận dụng thanh baga mui
              phía trên để chất thêm đồ.
            </p>

            <div className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/forester-i-l-2023-bv-8-rjy5sx0.jpg"
                alt="Gương hậu và baga mui"
                className="mx-auto"
              />
              <p className="text-sm italic">
                Subaru Forester 2023 sở hữu cản sau thiết kế lại với màu bạc, đi
                cùng cặp đèn phản quang lớn hơn
              </p>
            </div>

            <p>
              Nhìn từ phía sau, Subaru Forester 2023 không khác gì phiên bản
              tiền nhiệm với điểm nhấn nổi bật nhất là cụm đèn hậu hình “càng
              cua” đặc trưng. Khá đáng tiếc khi hệ thống ống xả đôi vẫn chưa
              xuất hiện mà chỉ là ống xả đơn.
            </p>

            <p>
              Đi về cuối, Subaru Forester 2023 sở hữu cản sau thiết kế lại với
              màu bạc, đi cùng cặp đèn phản quang lớn hơn.
            </p>

            <p>
              Trong khi đó, các chi tiết khác vẫn giữ nguyên như cụm đèn hậu LED
              to bản, bậc lên xuống ở cửa hậu nhô ra, tạo cảm giác nam tính,
              mạnh mẽ.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Forester;
