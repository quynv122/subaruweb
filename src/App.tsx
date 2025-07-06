import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import QuotePopup from './components/QuotePopup';
import About from './components/About';


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <BrowserRouter>
      <Header onOpenPopup={openPopup} />
      
      <Routes>
        <Route path="/" element={<Home onOpenPopup={openPopup} />} />
        <Route path="/Contact" element={<Contact  />} />
      </Routes>
      <About />
      <Footer />

      {/* Popup luôn tồn tại ở App để dùng toàn cục */}
      <QuotePopup isOpen={isPopupOpen} onClose={closePopup} />
    </BrowserRouter>
  );
}

export default App;
