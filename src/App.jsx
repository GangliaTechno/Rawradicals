import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurTeam from "./pages/OurTeam";
import AboutBrand from "./pages/AboutBrand";
import Products from "./pages/ProductPage";
import Blog from './pages/Blogpage';
import ContactUs from "./pages/ContactUs";
import Cart from './components/cart';
import { useState } from 'react';
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar onCartClick={handleCartOpen} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/aboutbrand" element={<AboutBrand />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
