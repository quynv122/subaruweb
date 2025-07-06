const About = () => {
  return (
    <section className="bg-gray-50 text-sm text-gray-800 py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Cột 1: Subaru Hà Nội */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">Subaru Hà Nội</h3>
          <p className="italic">Đại lý Subaru</p>
          <p className="mt-2">
            <span className="font-semibold">Địa Chỉ:</span> Số 1 Mạc Thái Tông, Trung Hòa, Cầu Giấy, Hà Nội
          </p>
          <p>
            <span className="font-semibold">Hotline:</span> 084 999 6883
          </p>
        </div>

        {/* Cột 2: Thông tin chung */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">Thông tin chung</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">» Tin Tức & Sự Kiện</li>
            <li className="hover:underline cursor-pointer">» Giới Thiệu</li>
            <li className="hover:underline cursor-pointer">» Liên Hệ</li>
          </ul>
        </div>

        {/* Cột 3: Sản phẩm */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">Sản phẩm</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">» Subaru Forester</li>
            <li className="hover:underline cursor-pointer">» Subaru Outback</li>
            <li className="hover:underline cursor-pointer">» Subaru BRZ</li>
          </ul>
        </div>

        {/* Cột 4: Sản phẩm tiếp theo */}
        <div>
          <ul className="mt-8 md:mt-6 space-y-1">
            <li className="hover:underline cursor-pointer">» Subaru WRX</li>
            <li className="hover:underline cursor-pointer">» Subaru WRX Wagon</li>
            <li className="hover:underline cursor-pointer">» Nhận Báo Giá</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
