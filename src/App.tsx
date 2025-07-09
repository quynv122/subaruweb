import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import QuotePopup from "./components/QuotePopup";
import About from "./components/About";
import FloatingButtons from "./components/FloatingButtons";
import CarLists from "./pages/CarLists";
import { Toaster } from "react-hot-toast";
import NewsEvents from "./pages/NewsEvents";
import Forester from "./pages/Forester";
import NewCarReview from "./pages/NewCarReview";
import Crosstrek from "./pages/Crosstrek";
import Outback from "./pages/Outback";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5000ms = 5s

    return () => clearTimeout(timer); // cleanup nếu rời trang trước 30s
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Header onOpenPopup={openPopup} />

      <Routes>
        <Route path="/" element={<Home onOpenPopup={openPopup} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/CarLists"
          element={<CarLists onOpenPopup={openPopup} />}
        />
        <Route
          path="/News-Events"
          element={<NewsEvents onOpenPopup={openPopup} />}
        />
        <Route
          path="/Detail-Forester"
          element={<Forester onOpenPopup={openPopup} />}
        />
        <Route
          path="/Detail-Crosstrek"
          element={<Crosstrek onOpenPopup={openPopup} />}
        />
        <Route
          path="/Detail-Outback"
          element={<Outback onOpenPopup={openPopup} />}
        />
        <Route path="/NewCarReview" element={<NewCarReview />} />
      </Routes>
      <About onOpenPopup={openPopup} />
      <Footer />

      {/* Popup luôn tồn tại ở App để dùng toàn cục */}
      <QuotePopup isOpen={isPopupOpen} onClose={closePopup} />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
