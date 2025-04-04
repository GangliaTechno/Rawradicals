import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="group shadow-md fixed w-screen top-0 z-50 transition-all duration-300 bg-white hover:bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">Raw Radicals</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-black group-hover:text-black">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Products</a>
            <a href="#" className="hover:text-black">Contact Us</a>
          </nav>

          {/* Icons */} 
          <div className="flex items-center space-x-4">
            <button className="text-black group-hover:text-black">
             <FaSearch /> {/* Fixed the icon name and closed the tag */}
            </button>
            <button className="text-black group-hover:text-black">
              <FaUser /> {/* Fixed the icon name and closed the tag */}
            </button>
            <button className="text-black group-hover:text-black relative">
              <FaShoppingCart />
            </button>
          </div>


          {/* Hamburger Icon (Mobile) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white group-hover:text-black"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
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
