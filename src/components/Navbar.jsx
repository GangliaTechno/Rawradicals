import { useEffect, useRef, useState } from 'react'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { CiUser, CiSearch } from 'react-icons/ci'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Cart from './cart'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('English')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const handleUserClick = () => {
    navigate('/auth')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Determine if current route should have dynamic navbar effect
  const dynamicNavbarRoutes = ['/', '/ourteam']
  const isDynamicNavbar = dynamicNavbarRoutes.includes(location.pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    const handleOnScroll = () => {
      if (isDynamicNavbar) {
        setIsScrolling(window.scrollY > 20)
      }
    }

    if (isDynamicNavbar) {
      window.addEventListener('scroll', handleOnScroll)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [isDynamicNavbar])

  const isActive = isDynamicNavbar ? isScrolling || isHovered : true

  return (
    <>
      <header
        onMouseEnter={() => isDynamicNavbar && setIsHovered(true)}
        onMouseLeave={() => isDynamicNavbar && setIsHovered(false)}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isActive
            ? 'bg-white text-black shadow-md'
            : 'bg-transparent text-white'
        } backdrop-blur-md`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          {/* Left - Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/"
              className={`flex items-center space-x-2 ${
                isActive ? 'text-black' : 'text-white'
              }`}
            >
              <img
                src={isActive ? '/images/logo.png' : '/images/logo2.png'}
                alt="Raw Radicles Logo"
                className="h-10 w-auto transition-all duration-300"
              />
              <div className="flex flex-col leading-none font-serif font-black text-[28px] md:text-[32px]">
                <span className="normal-case">raw.</span>
                <span className="uppercase font-light text-[5px] md:text-[14px] tracking-[0.50em]">
                  RADICLES
                </span>
              </div>
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="hover:text-gray-600">
              HOME
            </Link>
            <Link to="/ourteam" className="hover:text-gray-600">
              SUITCASE
            </Link>
            <Link to="/products" className="hover:text-gray-600">
              BAGS
            </Link>
            <Link to="/contactus" className="hover:text-gray-600">
              CONTACT US
            </Link>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-5">
            <button className="hover:text-gray-600 hidden md:block text-xl">
              <CiSearch />
            </button>
            <button
              onClick={handleUserClick}
              className="hover:text-gray-600 hidden md:block text-xl"
            >
              <CiUser />
            </button>
            <button
              onClick={openCart}
              className="hover:text-gray-600 relative hidden md:block text-xl"
            >
              <PiShoppingCartSimpleLight />
            </button>

            {/* Currency */}
            <div className="relative hidden md:block group">
              <button className="flex items-center space-x-1 hover:text-gray-600">
                <img
                  src={`https://flagcdn.com/24x18/${
                    currency.toLowerCase() === 'usd'
                      ? 'us'
                      : currency.toLowerCase() === 'inr'
                      ? 'in'
                      : currency.toLowerCase() === 'eur'
                      ? 'eu'
                      : currency.toLowerCase() === 'jpy'
                      ? 'jp'
                      : 'us'
                  }.png`}
                  className="w-5 h-4 object-cover rounded-sm"
                  alt="Flag"
                />
                <span>{currency} $</span>
                <FaChevronDown size={12} />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-32 z-10">
                {['USD', 'INR', 'EUR', 'JPY'].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="relative hidden md:block group">
              <button className="flex items-center space-x-1 hover:text-gray-600">
                <span>{language}</span>
                <FaChevronDown size={12} />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-32">
                {['English', 'Hindi', 'Kannada', 'French'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="flex px-4 py-2 hover:bg-gray-100 w-full"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300">
            <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
              HOME
            </Link>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="hover:text-gray-400"
            >
              ABOUT US
            </button>
            {isMobileDropdownOpen && (
              <div className="flex flex-col items-center space-y-2">
                <Link
                  to="/ourteam"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  OUR TEAM
                </Link>
                <Link
                  to="/aboutbrand"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  ABOUT BRAND
                </Link>
              </div>
            )}
            <Link
              to="/products"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              PRODUCTS
            </Link>
            <Link
              to="/contactus"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </header>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </>
  )
}

export default Navbar
