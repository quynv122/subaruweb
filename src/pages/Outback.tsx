import { useState } from "react";
import { Phone, Mail } from "lucide-react";

import img1 from "../assets/images/OB1.jpg";
import img2 from "../assets/images/OB2.jpg";
import img3 from "../assets/images/OB3.jpg";
import img4 from "../assets/images/OB4.jpg";
import img5 from "../assets/images/OB5.jpg";

import { useNavigate } from "react-router-dom";

type HomeProps = {
  onOpenPopup: () => void;
};

const Outback = ({ onOpenPopup }: HomeProps) => {
  const colorOptions = [
    { src: img1, name: "Green" },
    { src: img2, name: "Blue" },
    { src: img3, name: "White" },
    { src: img4, name: "Red" },
    { src: img5, name: "Black" },
  ];

  const [selectedColor, setSelectedColor] = useState(img1);

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
          <h1 className="text-3xl font-bold text-blue-800">Subaru Outback</h1>

          <div className="mt-4 border border-gray-300 rounded bg-gray-100 px-3 py-2 text-sm font-semibold">
            | BẢNG GIÁ XE SUBARU OUTBACK THÁNG 07/2025
          </div>

          <ul className="mt-4 space-y-1 text-sm">
            <li>
              SUBARU OUTBACK 2.5I-T EYESIGHT:{" "}
              <span className="text-blue-700 font-semibold">
                1.759.000.000 VNĐ
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
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 md:px-24">
          <div className="max-width-content">
            <p className="text-xl font-semibold">Chi tiết</p>
<br />
            <h2 className="text-2xl font-bold">ƯU ĐÃI THÁNG 5</h2>
            <br />
            <h2 className="text-2xl font-bold">
              <img
                src="https://drive.gianhangvn.com/image/1920x1080-2798843j32416.jpg"
                alt="Ưu đãi tháng 5"
                className="w-full"
              />
            </h2>
<br />
            <h2 className="text-2xl font-bold">Tổng quan</h2>
            <br />
            <p>
              Ngày 15/11/2021 - Motor Image Việt Nam (MIV) là đơn vị nhập khẩu
              và phân phối độc quyền các sản phẩm xe và dịch vụ Subaru tại Việt
              Nam chính thức giới thiệu và nhận đặt hàng cho mẫu xe Subaru
              Outback hoàn toàn mới. Outback mới này là thế hệ thứ 6 của dòng xe
              này được ra mắt thế giới từ tháng 04/2022
            </p>
<br />
            <p className="text-center">
              <img
                src="https://drive.gianhangvn.com/image/z4285003695286-e8d4308d81d8a509b71c91f64b71b5f8-2814076j32416.jpg"
                alt="Subaru Outback 2022"
                className="mx-auto"
              />
            </p>

            <p>
              Subaru Outback thế hệ mới được thay đổi đáng kể về thiết kế và
              trang bị công nghệ, trong khi nội thất được thiết kế lại hoàn toàn
              hiện đại và công nghệ hơn.
            </p>
<br />
            <p className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/subaru-outback-2022-7-rcnnqma.jpg"
                alt="Subaru Outback 2022"
                className="mx-auto"
              />
            </p>
<br />
            <p>
              Subaru Outback sử dụng nền tảng khung gầm toàn cầu SGP mới, bộ
              khung này tăng cường độ cứng thêm 70% so với thế hệ trước. Khả
              năng chịu lực va chạm trước và hông xe tăng 40%.
            </p>
<br />
            <h2 className="text-2xl font-bold">Nội thất</h2>
            <br />
            <p>
              Subaru Outback có hệ thống ghế ngồi được bọc da cao cấp. Hàng ghế
              trước có thêm tính năng chỉnh điện 10 hướng với ghế lái và 8 hướng
              với ghế phụ và thiết kế dạng ôm phần lưng tạo cảm giác thoải mái.
              Trong khi đó, hàng ghế thứ 2 được bố trí với khoảng để chân rộng
              rãi, chính giữa có thêm bệ tì tay to.
            </p>
<br />
            <p className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/subaru-outback-2022-3-rnutql7.jpg"
                alt="Nội thất Subaru Outback"
                className="mx-auto"
              />
            </p>
<br />
            <p>
              Thiết kế vô lăng xe được bọc da, tích hợp thêm nút bấm điều khiển
              chức năng như thoại rảnh tay hay kiểm soát hành trình. Phía sau có
              thêm lẫy chuyển số. Đi cùng với màn hình giải trí 11.6 inch cho
              phép kết nối Apple CarPlay và Android Auto không dây cùng tính
              năng ra lệnh bằng giọng nói được cải thiện nhờ việc sử dụng micro
              đôi.
            </p>
<br />
            <p className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/subaru-outback-2022-4-229zql8.jpg"
                alt="Vô lăng và màn hình Subaru Outback"
                className="mx-auto"
              />
            </p>
<br />
            <p>
              Subaru Outback còn được trang bị một số tiện ích khác như: Hệ
              thống âm thanh 12 loa Harman Kardon, khởi động thông minh nút bấm,
              hai chế độ lái I hoặc S, kiểm soát hành trình, phanh tay điện tử,
              điều hòa tự động 2 vùng độc lập, cốp đóng mở điện, cửa sổ trời
              chỉnh điện, gương chiếu hậu chỉnh, gập điện...
            </p>
<br />
            <p className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/subaru-outback-2022-1-27ytql9.jpg"
                alt="Tiện ích nội thất Subaru Outback"
                className="mx-auto"
              />
            </p>
<br />
            <h2 className="text-2xl font-bold">VẬN HÀNH</h2>
            <br />
            <p>
              Tại Việt Nam, Subaru Outback sử dụng động cơ Boxer cam đôi DOHC,
              Dual AVCS, dung tích 2.5L, hút khí tự nhiên, phun nhiên liệu trực
              tiếp cho công suất cực đại 169 mã lực tại 5.800 vòng/phút và mô
              men xoắn cực đại 245 Nm đạt được tại dải vòng tua 3.400 - 4.600
              vòng/phút. Sức mạnh được truyền xuống bốn bánh toàn thời gian
              (S-AWD), thông qua hộp số tự động biến thiên vô cấp
              CVT-Lineartronic.
            </p>
<br />
            <p className="text-center">
              <img
                src="https://drive.gianhangvn.com/image/z4285003214852-d4a18a3958354884ea2e0a51381bf9fa-2599214j32416.jpg"
                alt="Động cơ Subaru Outback"
                className="mx-auto"
              />
            </p>
<br />
            <h2 className="text-2xl font-bold">AN TOÀN</h2>
            <p>
              Outback thế hệ mới sở hữu hệ thống hỗ trợ người lái Eyesight 4.0,
              cùng nhiều tính năng an toàn hiện đại như: Tính năng phanh tự động
              phòng tránh va chạm trước, sau của EyeSight 4.0 tăng hiệu quả xử
              lý tình huống thường gặp tại giao lộ khi xe đang vào cua nhờ vào
              sự cải tiến của bộ stereo camera và góc quét rộng hơn.
            </p>
<br />
            <p>
              Hệ thống sẽ hỗ trợ người lái quan sát cả bên trái và bên phải, bao
              quát nhiều tình huống hơn để phòng tránh tai nạn xảy ra.
            </p>
<br />
            <p>
              Subaru Outback được trang bị tính năng đánh lái khẩn cấp
              (Autonomous Emergency Steering) cho phép đánh lái xe tránh khỏi xe
              hoặc vật cản phía trước để tránh va chạm. Hệ thống kiểm soát hành
              trình thích ứng (ACC) được nâng cấp bổ sung thêm chức năng định
              tâm làn đường.
            </p>
<br />
            <p>
              Hệ thống cảnh báo nguy hiểm sau xe Subaru (SRVD) nhằm đảm bảo xe
              được chuyển hướng và tiến lên phía trước trong phạm vi thông
              thoáng.
            </p>
<br />
            <p>
              ACC nâng cấp tích hợp thêm tiện ích hỗ trợ người lái khi có tình
              trạng kẹt xe bằng cách giúp người lái giữ xe ở khoảng cách an toàn
              với xe phía trước, hỗ trợ người lái giảm tốc độ hoặc tăng tốc tự
              động.
            </p>
<br />
            <p>
              Hệ thống giám sát người lái (DMS) trên xe Subaru Outback sử dụng
              một camera hồng ngoại và công nghệ nhận diện khuôn mặt để giám sát
              mắt người lái và đưa ra cảnh báo nếu phát hiện có sự xao nhãng,
              không nhìn đường khi đang điều khiển xe.
            </p>
<br />
            <p>
              Hệ thống cũng tích hợp chức năng ghi nhớ những cài đặt riêng về vị
              trí ghế, gương chiếu hậu, điều hòa của 5 người lái khác nhau và tự
              động điều chỉnh các cài đặt này theo từng người lái.
            </p>
<br />
            <p className="text-center">
              <img
                src="https://cdn.gianhangvn.com/image/danh-gia-xe-subaru-outback-2022-2-opt3qmk.jpg"
                alt="Tính năng an toàn Subaru Outback"
                className="mx-auto"
              />
            </p>
<br />
            <h2 className="text-2xl font-bold">Thông số kỹ thuật</h2>
            <table className="table-auto w-full border border-gray-300">
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Tên xe</td>
                  <td className="border px-2 py-1 font-bold">
                    Subaru Outback 2022
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Số chỗ ngồi</td>
                  <td className="border px-2 py-1">05</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Kiểu xe</td>
                  <td className="border px-2 py-1">SUV lai wagon</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Xuất xứ</td>
                  <td className="border px-2 py-1">Nhập khẩu từ Nhật Bản</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Kích thước DxRxC</td>
                  <td className="border px-2 py-1">4.870 x 1.875 x 1.675 mm</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Chiều dài cơ sở</td>
                  <td className="border px-2 py-1">2.745 mm</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Động cơ</td>
                  <td className="border px-2 py-1">Boxer 2.5L, 4 xy lanh</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Dung tích công tác</td>
                  <td className="border px-2 py-1">2.498cc</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Loại nhiên liệu</td>
                  <td className="border px-2 py-1">Xăng</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">
                    Dung tích bình nhiên liệu
                  </td>
                  <td className="border px-2 py-1">60 lít</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Công suất cực đại</td>
                  <td className="border px-2 py-1">
                    166 mã lực tại 5.000-5.800 vòng/phút
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Mô-men xoắn cực đại</td>
                  <td className="border px-2 py-1">
                    252 Nm tại 3.800 vòng/phút
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Hộp số</td>
                  <td className="border px-2 py-1">Vô cấp Lineartronic CVT</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Hệ dẫn động</td>
                  <td className="border px-2 py-1">
                    4 bánh toàn thời gian đối xứng SAWD
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Treo trước/sau</td>
                  <td className="border px-2 py-1">MacPherson/xương đòn kép</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Trợ lực lái</td>
                  <td className="border px-2 py-1">Điện</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Cỡ mâm</td>
                  <td className="border px-2 py-1">18 inch</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Khoảng sáng gầm xe</td>
                  <td className="border px-2 py-1">213 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outback;
