import { useState } from "react";
import { Phone, Mail } from "lucide-react";

import img1 from "../assets/images/crosstrek1.jpg";
import img2 from "../assets/images/crosstrek2.jpg";
import img3 from "../assets/images/crosstrek3.jpg";
import { useNavigate } from 'react-router-dom';

type HomeProps = {
  onOpenPopup: () => void;
};

const Crosstrek = ({ onOpenPopup }: HomeProps) => {
  const colorOptions = [
    { src: img1, name: "Green" },
    { src: img2, name: "Blue" },
    { src: img3, name: "White" },
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
          <button onClick={() => navigate("/")}
           className="hover:underline text-blue-700">TRANG CHỦ</button>
          <span>/</span>
          <button
            onClick={() => navigate("/CarLists")}
           className="hover:underline text-blue-700">
            CÁC MẪU XE SUBARU
          </button>
        </div>
        <h1 className="text-3xl font-bold text-blue-800">Subaru Crosstrek</h1>

        <div className="mt-4 border border-gray-300 rounded bg-gray-100 px-3 py-2 text-sm font-semibold">
          | BẢNG GIÁ XE SUBARU CROSSTREK THÁNG 07/2025
        </div>

        <ul className="mt-4 space-y-1 text-sm">
          <li>
            Subaru Crosstrek 2.0 i-S EyeSight:{" "}
            <span className="text-blue-700 font-semibold">999.000.000 VNĐ</span>
          </li>
          <li>
            Subaru Crosstrek 2.0 i-S EyeSight e-Boxer Hybrid:{" "}
            <span className="text-blue-700 font-semibold">1.129.000.000 VNĐ</span>
          </li>
        </ul>

        <div className="mt-6 bg-blue-100 border border-blue-300 rounded px-4 py-3 text-sm">
          <strong>– KHUYẾN MÃI & ƯU ĐÃI</strong>
          <p className="mt-1 italic text-blue-900">
            * Quý khách vui lòng liên hệ Hotline tư vấn để nhận thông tin Ưu đãi
            & Khuyến mãi.
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
    <div className="box box-border article">
      <div className="max-w-screen-xl mx-auto p-4 md:px-64">
        <p className="text-xl font-bold mb-4">Chi tiết</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Bật cá tính</h2>
          <p className="mb-4">
            Bừng cháy đam mê và thỏa sức phiêu lưu trên đường phố với Subaru Crosstrek Hoàn Toàn Mới. Mẫu xe đặc biệt từ Subaru mang đậm phong cách sống đầy năng động, trẻ trung và thời thượng trong một diện mạo cá tính và thu hút trên mọi cung đường bên cạnh khả năng vận hành ưu việt và sự an toàn xuất sắc đậm chất Subaru.
          </p>
          <p className="font-semibold mb-4">
            Subaru Crosstrek - Bật chất cá tính, Phấn khích tột bật!
          </p>
          <div className="text-center mb-2">
            <img
              src="https://cdn.gianhangvn.com/image/subaru-crosstrek-01-olloxjs.jpg"
              alt="Subaru Crosstrek"
              className="mx-auto"
            />
          </div>
          <p className="text-center text-sm italic mb-4">
            Bật chất cá tính, Phấn khích tột bật
          </p>
          <p className="mb-4">
            Subaru Crosstrek sẽ luôn là người bạn đồng hành đáng tin cậy trong mọi hành trình phiêu lưu! Được trang bị đầy đủ bộ công nghệ cốt lõi của Subaru để mang đến những chuyến đi trọn vẹn sự thoải mái, thú vị và an toàn trong mọi kế hoạch du lịch, khám phá của bạn.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Sự Phấn Khích từ những công nghệ cốt lõi Subaru!
          </h2>

          <p className="mb-2">
            Tận hưởng sự phấn khích tột bậc với Crosstrek, trang bị đầy đủ những công nghệ
            cốt lõi tiên tiến nhất của Subaru
          </p>

          {[
            {
              title: "Hệ dẫn động Bốn Bánh Toàn Thời Gian Đối Xứng SAWD",
              description:
                "Hệ dẫn động SAWD đảm bảo khả năng kiểm soát và lực kéo trên bất kì địa hình nào, mang đến sự tự tin trong mọi tình huống lái xe.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-02-9d8lxjq.jpg"
            },
            {
              title: "Động cơ BOXER",
              description:
                "Thiết kế mang đến trọng tâm xe thấp để tăng sự kiểm soát và phản ứng lái. Động cơ Boxer cải thiện khả năng xử lý và ổn định xe, đồng thời giảm thiểu rung động trong khi vận hành.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-03-bwq5xjr.jpg"
            },
            {
              title: "Hệ khung gầm toàn cầu Subaru",
              description:
                "Được ứng dụng Hệ Khung Gầm Toàn Cầu Subaru cho phép cải thiện sự an toàn, hiệu suất vận hành và sự thoải mái cùng với sự ổn định tốt hơn, ít rung động và tiếng ồn hơn.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-04-oeqtxjt.jpg"
            },
            {
              title: "Công nghệ EyeSight 4.0",
              description:
                "Trang bị với hàng loạt các tính năng an toàn cải tiến để giúp bạn quan sát tốt hơn.Việc lái xe sẽ trở nên thực sự an toàn trên mọi hành trình.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-05-bddkxjp.jpg"
            },
            {
              title: "Phanh Tránh Va Chạm",
              description:
                "Cầm lái với sự tự tin nhất khi hệ thống luôn quan sát và phòng tránh khỏi những va chạm tiềm ẩn trực diện với người đi bộ và các phương tiên khác.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-06-2sxcxj0.jpg"
            },
            {
              title: "Đánh Lái Tự Động Khẩn Cấp",
              description:
                "Cảm nhận được sự bảo vệ cao hơn khi xe có thể tự đánh lái tránh khỏi chướng ngại vật tiềm ẩn phía trước.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-07-r9msxju.jpg"
            },
            {
              title: "Kiểm Soát Hành Trình Thích Ứng ACC",
              description:
                "Tận hưởng những chuyến đi thư thái hơn trong cả tình huống giao thông đông đúc nhờ hệ thống tự động điều chỉnh được khoảng cách và vận tốc xe ưa thích.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-08-24m0xjy.jpg"
            },
            {
              title: "Định Tâm Làn Đường",
              description:
                "An tâm khi biết rằng EyeSight sẽ giữ xe di chuyển an toàn ở giữa làn đường.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-09-rxk8xjz.jpg"
            },
            {
              title: "Tránh Chệch Làn Đường",
              description:
                "Đảm bảo sự ổn định khi biết rằng xe sẽ không bị đi lệnh ra khỏi làn đường.",
              image:
                "https://cdn.gianhangvn.com/image/subaru-crosstrek-10-oi9rxjx.jpg"
            }
          ].map(({ title, description, image }) => (
            <div className="mb-8" key={title}>
              <p className="font-bold mb-2">{title}</p>
              <p className="mb-2">{description}</p>
              <div className="text-center mb-2">
                <img src={image} alt={title} className="mx-auto" />
              </div>
              <p className="text-center text-sm italic mb-4">{title}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Kiểm soát vượt trội</h2>
          <p className="mb-4">
            Nâng tầm trải nghiệm lái đầy khác biệt trên Crosstrek với X-MODE 2 cấp độ cải tiến và Chế độ lái SI-Drive. Cả hai tính năng đều đóng vai trò quan trọng đến khả năng vận hành và tính linh hoạt tổng thể của Crosstrek
          </p>
          <p className="mb-2">
            <strong>X-Mode</strong>: là một hệ thống chuyên dụng được thiết kế để mang lại khả năng kiểm soát và lực kéo cân bằng hơn trong những điều kiện lái xe thách thức và khắc nghiệt..
          </p>
          <p className="mb-2">
            <strong>X-Mode 2 chế độ cải tiến</strong>: với tính năng Hỗ trợ đổ đèo - giúp duy trì tốc độ được kiểm soát mà không cần phanh liên tục, rất hữu ích khi xe xuống dốc hoặc di chuyển trên địa hình không bằng phẳng.
          </p>
          <p className="mb-4">
            <strong>SI Drive</strong>: Chế độ lái thông minh Subaru, cho phép người lái lựa chọn chuyển đổi giữa các chế độ lái khác nhau nhằm phù hợp với điều kiện mặt đường và sở thích cá nhân.
          </p>
          <div className="text-center mb-2">
            <img
              src="https://cdn.gianhangvn.com/image/subaru-crosstrek-11-20d3xjv.jpg"
              alt="Kiểm soát vượt trội"
              className="mx-auto"
            />
          </div>
          <p className="text-center text-sm italic mb-4">Kiểm soát vượt trội</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Ngoại hình cá tính - Tiện ích vượt trội
          </h2>
          <p className="mb-4">
            Crosstrek thể hiện cá tính nổi bật của chủ nhân thông qua thiết kế đầy bóng bẩy và cá tính. Thiết kế phần đầu được kéo dài, khoang cabin gọn, và nhẹ hơn mang lại cảm giác lái linh hoạt trong khi vẫn thu hút mọi ánh nhìn. Xe cũng có dung tích khoang hành lý lớn để tự tin mang theo mọi vật dụng cho hành trình cá nhân!
          </p>
          <div className="text-center mb-2">
            <img
              src="https://cdn.gianhangvn.com/image/subaru-crosstrek-12-rgxuxjw.jpg"
              alt="Ngoại hình cá tính"
              className="mx-auto"
            />
          </div>
          <p className="text-center text-sm italic mb-4">
            Ngoại hình cá tính - Tiện ích vượt trội
          </p>
        </section>
      </div>
    </div>

    </div>
    </div>
  );
};

export default Crosstrek;
