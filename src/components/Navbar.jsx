import { useEffect, useRef, useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cart from './cart'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('ENGLISH')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const currencyDropdownRef = useRef(null)
  const languageDropdownRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const handleUserClick = () => navigate('/auth')
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const dynamicNavbarRoutes = ['/', '/ourteam']
  const isDynamicNavbar = dynamicNavbarRoutes.includes(location.pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }

      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false)
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
        className={`fixed w-full top-0 z-50 transition-all duration-1300 ${
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

          {/* Center - Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
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
            {/* Currency & Language Dropdowns - Desktop Only */}
            <div className="relative hidden lg:flex space-x-4">
              {/* Currency Selector */}
              <div className="relative text-sm font-medium" ref={currencyDropdownRef}>
                <button
                  className="flex items-center space-x-1 hover:text-gray-600 text-sm font-medium"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <img
                    src={`/images/${
                      currency === 'USD'
                        ? 'USA'
                        : currency === 'INR'
                        ? 'INDIA'
                        : currency === 'EUR'
                        ? 'EUR'
                        : currency === 'DIR'
                        ? 'UAE'
                        : 'USA'
                    }.png`}
                    className="w-5 h-4 object-cover"
                    alt="Flag"
                  />
                  <span>{currency} $</span>
                  <FaChevronDown size={12} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute bg-white text-black shadow-md mt-2 z-10 text-sm font-medium">
                    {['USD', 'INR', 'EUR', 'DIR'].map((cur) => (
                      <button
                        key={cur}
                        onClick={() => {
                          setCurrency(cur)
                          setIsDropdownOpen(false)
                        }}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                      >
                        <img
                          src={`/images/${
                            cur === 'USD'
                              ? 'USA'
                              : cur === 'INR'
                              ? 'INDIA'
                              : cur === 'EUR'
                              ? 'EUR'
                              : cur === 'DIR'
                              ? 'UAE'
                              : 'USA'
                          }.png`}
                          className="w-5 h-4 object-cover rounded-sm mr-2"
                          alt="Flag"
                        />
                        {cur}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative text-sm font-medium" ref={languageDropdownRef}>
                <button
                  className="flex items-center space-x-1 hover:text-gray-600 text-sm font-medium"
                  onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
                >
                  <span>{language}</span>
                  <FaChevronDown size={12} />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute bg-white text-black shadow-md mt-2 rounded-md w-32 text-sm font-medium">
                    {['ENGLISH', 'HINDI', 'KANNADA', 'FRENCH'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsLanguageDropdownOpen(false)
                        }}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search, Cart & Account - Desktop Only */}
            <button className="hover:text-gray-600 hidden lg:block text-xl font-medium">
              <CiSearch />
            </button>
            <button
              onClick={handleUserClick}
              className="hover:text-gray-600 hidden lg:block text-xl font-medium"
            >
              <CiUser />
            </button>
            <button
              onClick={openCart}
              className="hover:text-gray-600 hidden lg:block text-xl font-medium"
            >
              <PiShoppingCartSimpleLight />
            </button>

            {/* Hamburger for Tablet & Mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 text-white flex flex-col items-center space-y-4 py-4 text-sm font-medium">
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

               {/* Currency & Account - Mobile with Two Columns */}
               <div className="flex justify-between w-full px-4 mt-4 text-sm font-medium">
              {/* Currency Column */}
              <div className="flex flex-col items-start space-y-2 text-sm font-medium">
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-white">
                    
                      
                    <span>{currency} $</span>
                    <FaChevronDown size={12} />
                  </button>
                  <div className="absolute hidden group-hover:block bg-black text-white shadow-md -mt-32 text-sm font-medium">
                    {['USD', 'INR', 'EUR', 'UAE'].map((cur) => (
                      <button
                        key={cur}
                        onClick={() => setCurrency(cur)}
                        className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-sm font-medium"
                      >
                       <img
                          src={`/images/${
                            cur === 'USD'
                              ? 'USA'
                              : cur === 'INR'
                              ? 'INDIA'
                              : cur === 'EUR'
                              ? 'EUR'
                              : cur === 'DIR'
                              ? 'UAE'
                              : 'UAE'
                          }.png`}
                          className="w-5 h-4 object-cover rounded-sm mr-2"
                          alt="Flag"
                        />
                          
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Account Column */}
              <div className="flex flex-col items-end space-y-2 text-sm font-medium">
                <button
                  onClick={handleUserClick}
                  className="flex items-center space-x-2 text-white hover:text-gray-400 text-sm font-medium"
                >
                  <CiUser />
                  <span>Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
          
        
      </header>

      {isCartOpen && <Cart onClose={closeCart} />}
    </>
  )
}

export default Navbar
