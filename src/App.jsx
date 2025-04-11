import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"; // Removed BrowserRouter and Router conflict
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
import ProductsDetails from "./components/ProductDetails"; // Make sure the filename is correct

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <BrowserRouter>
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
          <Route path="/productDetails/:id" element={<ProductsDetails />} /> {/* Ensure the path and component name match */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
