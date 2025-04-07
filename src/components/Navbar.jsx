import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="group shadow-md fixed w-screen top-0 z-50 transition-all duration-300 bg-white hover:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Raw Radicals Logo" 
              className="h-12 w-12 rounded-full bg-white p-1" 
            />
            <div className="text-lg font-bold leading-tight">
              RAW RADICALS<br />
              <span className="text-sm font-medium">TECHNOLOGIES PVT. LTD.</span>
            </div>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-black group-hover:text-black">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Products</a>
            <a href="#" className="hover:text-black">Contact Us</a>
          </nav>

          {/* Right: Icons & Hamburger */}
          <div className="flex items-center space-x-4">
            <button className="text-black group-hover:text-black">
              <FaSearch />
            </button>
            <button className="text-black group-hover:text-black">
              <FaUser />
            </button>
            <button className="text-black group-hover:text-black relative">
              <FaShoppingCart />
            </button>

            {/* Hamburger Icon (Mobile) */}
            <button onClick={toggleMenu} className="md:hidden">
              <FaBars className="text-black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <nav className="flex flex-col space-y-4 text-center bg-white py-4">
            <a href="#" className="text-sm font-medium text-black hover:text-gray-600">Home</a>
            <a href="#" className="text-sm font-medium text-black hover:text-gray-600">About Us</a>
            <a href="#" className="text-sm font-medium text-black hover:text-gray-600">Products</a>
            <a href="#" className="text-sm font-medium text-black hover:text-gray-600">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
