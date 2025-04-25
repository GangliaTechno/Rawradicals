import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa'
import Cart from './cart'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const navigate = useNavigate()

  const handleUserClick = () => {
    navigate('/auth')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <header className="group shadow-md fixed w-screen top-0 z-100 transition-all duration-300 bg-white hover:bg-white uppercase tracking-widest">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-30 sm:h-30">
            {/* Left - Logo */}
            <div className="flex-shrink-0 text-black font-serif leading-none text-[42px] md:text-[55px] uppercase tracking-tight font-black">
              <span className="block">RAW.</span>
              <span className="block font-light tracking-[0.70em] text-sm md:text-lg">
                RADICLES
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-black group-hover:text-black">
              <Link to="/" className="hover:text-black">
                HOME
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  className="hover:text-black hover:cursor-pointer uppercase tracking-widest"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p className="uppercase tracking-widest">ABOUT US</p>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                    <Link
                      to="/ourteam"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      OUR TEAM
                    </Link>
                    <Link
                      to="/aboutbrand"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      ABOUT TEAM
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/products" className="hover:text-black">
                PRODUCTS
              </Link>
              <Link to="/contactus" className="hover:text-black">
                CONTACT US
              </Link>
            </nav>

            {/* Right: Icons & Hamburger */}
            <div className="flex items-center space-x-7">
              <button className="text-black group-hovr:text-black">
                <FaSearch />
              </button>
              <button
                className="text-black group-hover:text-black"
                onClick={handleUserClick}
              >
                <FaUser />
              </button>
              <button
                onClick={openCart}
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

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="flex flex-col space-y-4 text-center bg-white py-4">
              <Link
                to="/"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                HOME
              </Link>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="text-sm font-medium text-black hover:text-gray-600"
                >
                  ABOUT US
                </button>
                {isMobileDropdownOpen && (
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link
                      to="/ourteam"
                      className="text-sm text-black hover:text-gray-600"
                    >
                      OUR TEAM
                    </Link>
                    <Link
                      to="/aboutbrand"
                      className="text-sm text-black hover:text-gray-600"
                    >
                      ABOUT BRAND
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/products"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                PRODUCTS
              </Link>
              <Link
                to="/contactus"
                className="text-sm font-medium text-black hover:text-gray-600"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </>
  )
}

export default Navbar
