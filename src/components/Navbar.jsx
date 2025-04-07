import { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import Cart from "./cart";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
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
                RAW RADICALS
                <br />
                <span className="text-sm font-medium">
                  TECHNOLOGIES PVT. LTD.
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-black group-hover:text-black">
              <a href="/" className="hover:text-black">
                Home
              </a>

              <div className="relative" ref={dropdownRef}>
                <button
                  className="hover:text-black hover:cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  About us
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                    <a
                      href="/ourteam"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Our Team
                    </a>
                    <a
                      href="/aboutbrand"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      About Brand
                    </a>
                  </div>
                )}
              </div>

              <a href="products" className="hover:text-black">
                Products
              </a>
              <a href="contactus" className="hover:text-black">
                Contact Us
              </a>
            </nav>

            {/* Right: Icons & Hamburger */}
            <div className="flex items-center space-x-4">
              <button className="text-black group-hover:text-black">
                <FaSearch />
              </button>
              <button className="text-black group-hover:text-black">
                <FaUser />
              </button>
              <button
                // onClick={openCart}
                onClick={() => {
                  openCart(); // You can keep this if you want to test cart open too
                }}
                className="text-black group-hover:text-black relative cursor-pointer"
              >
                <FaShoppingCart />
              </button>

              {/* Hamburger Icon (Mobile) */}
              <button onClick={toggleMenu} className="md:hidden">
                <FaBars className="text-black" />
              </button>
            </div>
          </div>

          {/* Mobile Menu (Hidden by default) */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <nav className="flex flex-col space-y-4 text-center bg-white py-4">
              <a
                href="/"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                Home
              </a>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="text-sm font-medium text-black hover:text-gray-600"
                >
                  About Us
                </button>
                {isMobileDropdownOpen && (
                  <div className="flex flex-col space-y-2 mt-2">
                    <a
                      href="/ourteam"
                      className="text-sm text-black hover:text-gray-600"
                    >
                      Our Team
                    </a>
                    <a
                      href="/aboutbrand"
                      className="text-sm text-black hover:text-gray-600"
                    >
                      About Brand
                    </a>
                  </div>
                )}
              </div>

              <a
                href="products"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                Products
              </a>
              <a
                href="contactus"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

export default Navbar;
