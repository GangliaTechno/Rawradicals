import { useEffect, useRef, useState } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Badge from '@mui/material/Badge';
import Cart from './cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('ENGLISH');
  const [isBagsHovered, setIsBagsHovered] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [bannerHidden, setBannerHidden] = useState(false);
  const items = useSelector(state => state.cart.items);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const currencyDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const handleUserClick = () => navigate('/auth');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dynamicNavbarRoutes = ['/', '/ourteam'];
  const isDynamicNavbar = dynamicNavbarRoutes.includes(location.pathname);

  const currencyMap = {
    USD: { flag: 'USA', symbol: '$' },
    INR: { flag: 'INDIA', symbol: '₹' },
    EUR: { flag: 'EUR', symbol: '€' },
    DIR: { flag: 'UAE', symbol: 'د.إ' },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }

      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    const handleOnScroll = () => {
      if (isDynamicNavbar) {
        setIsScrolling(window.scrollY > 20);
      }
    };

    if (isDynamicNavbar) {
      window.addEventListener('scroll', handleOnScroll);
    }

    document.addEventListener('click', handleClickOutside);
    const handleBannerScroll = () => {
      setBannerHidden(window.scrollY > 26);
    };
    window.addEventListener('scroll', handleBannerScroll);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleOnScroll);
      window.removeEventListener('scroll', handleBannerScroll);
    };
  }, [isDynamicNavbar]);

  const isActive = isDynamicNavbar ? isScrolling : true;
  const logoSrc = (isActive || isLogoHovered)
    ? '/images/logo.png'
    : '/images/logo_2.png';
  return (
    <>
      <div style={{ fontFamily: "Montserrat, sans-serif" }} onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)} >
        <div
          /* only fontFamily here */
          className={`
    fixed top-0 left-0 w-full h-10
    bg-black/90                 
    text-white                 
    flex items-center justify-center
    font-normal           
    tracking-[0.15em] uppercase text-[11px]
    z-50
    transform transition-transform duration-300 ease-in-out
    ${bannerHidden ? "-translate-y-full" : "translate-y-0"}
  `}
        >
          SHOP EASTER SALE! ENJOY 15% OFF YOUR ORDER WITH CODE EASTER
        </div>
        <header
          className={`
    fixed w-full py-2 text-[15px] z-40
    transform transition-all duration-300 ease-in-out
    ${bannerHidden ? 'translate-y-0' : 'translate-y-8'}
    ${isActive || isLogoHovered ? 'bg-white text-gray-700 shadow-md' : 'bg-transparent text-white'}

    backdrop-blur-md
  `}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-25">
            {/* Left - Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                className={`flex items-center space-x-2 ${isActive || isLogoHovered ? 'text-gray-900' : 'text-white'
                  },  `}
              >
                <img
                  src={logoSrc}
                  alt="Raw Radicals Logo"
                  className="h-22 w-auto transition-all duration-300"
                />
              </Link>
            </div>

            {/* Center - Desktop Nav */}
            <nav className="hidden lg:flex space-x-20 text-[15px] font-normal absolute left-1/2 transform -translate-x-1/2">
              <Link
                to="/"
                className="relative hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-300"
              >
                HOME
              </Link>
              <Link
                to="/aboutbrand"
                className="relative hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-300"
              >
                ABOUT US
              </Link>
              <div
                onMouseEnter={() => setIsBagsHovered(true)}
                onMouseLeave={() => setIsBagsHovered(false)}
              >
                <Link
                  to="/Products"
                  className="relative hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-300"
                >
                  CATALOG
                </Link>
                {isBagsHovered && (
                  <div
                    className="absolute left-0 top-full mt-2 w-[1000px] h-[500px] bg-white shadow-xl  p-6 flex z-50"

                    onMouseEnter={() => setIsBagsHovered(true)}
                    onMouseLeave={() => setIsBagsHovered(false)}
                  >
                    {/* Left column - Text */}
                    <div className="w-1/2 pr-8">
                      <h3 className="font-normal mb-4 text-gray-800">BAGS</h3>
                      <ul className="space-y-3 text-gray-600 text-[15px]">
                        <li className="hover:text-black cursor-pointer">
                          Duffle Bag Garment Bag 2 in 1 | Garment Weekender Bag
                        </li>
                        <li className="hover:text-black cursor-pointer">Duffle Bag</li>
                      </ul>
                    </div>

                    {/* Right column - Image */}
                    <div className="w-1/2">
                      <img
                        src="images/luggage1.png"
                        alt="Bag"
                        className="w-full h-auto object-cover rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/contactus"
                className="relative hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-300"
              >
                CONTACT US
              </Link>
            </nav>

            {/* Right - Icons */}
            <div className="flex items-center space-x-8">
              <div className="relative hidden lg:flex space-x-8">
                {/* Currency Selector */}
                <div ref={currencyDropdownRef} className="relative text-[15px] font-normal ">
                  <button
                    className="flex items-center space-x-1 hover:text-gray-600"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <img
                      src={`/images/${currencyMap[currency]?.flag || 'USA'}.png`}
                      className="w-5 h-4 object-cover"
                      alt="Flag"
                    />
                    <span>{currencyMap[currency]?.symbol || '$'} {currency}</span>
                    <FaChevronDown size={12} />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute bg-white text-black shadow-md mt-2 z-10 text-[15px] font-normal lg:w-40">
                      {Object.keys(currencyMap).map((cur) => (
                        <button
                          key={cur}
                          onClick={() => {
                            setCurrency(cur);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                        >
                          <img
                            src={`/images/${currencyMap[cur].flag}.png`}
                            className="w-5 h-4 object-cover rounded-sm mr-2"
                            alt={cur}
                          />
                          <span>{currencyMap[cur].symbol} {cur}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Selector */}
                <div ref={languageDropdownRef} className="relative text-[15px] font-normal">
                  <button
                    className="flex items-center space-x-1 hover:text-gray-600"
                    onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
                  >
                    <span>{language}</span>
                    <FaChevronDown size={12} />
                  </button>
                  {isLanguageDropdownOpen && (
                    <div className="absolute bg-white text-black shadow-md mt-2 rounded-md w-32 text-[15px] font-normal">
                      {['ENGLISH', 'HINDI', 'KANNADA', 'FRENCH'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setIsLanguageDropdownOpen(false);
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

              {/* Desktop Icons */}
              <button className="hover:text-gray-600 hidden lg:block text-2xl"><CiSearch /></button>
              <button onClick={handleUserClick} className="hover:text-gray-600 hidden lg:block text-2xl"><CiUser /></button>
              <button onClick={openCart} className="hover:text-gray-600 hidden lg:block text-2xl">
                <Badge badgeContent={itemCount} color="error">
                  <PiShoppingCartSimpleLight />
                </Badge>
              </button>

              {/* Hamburger */}
              <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black/90 text-white flex flex-col items-center space-y-4 py-4 text-[15px] font-normal">
              <Link to="/" onClick={toggleMenu} className="hover:text-gray-400">HOME</Link>
              <button onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} className="hover:text-gray-400">ABOUT US</button>
              {isMobileDropdownOpen && (
                <div className="flex flex-col items-center space-y-2">
                  <Link to="/ourteam" onClick={toggleMenu} className="hover:text-gray-400">OUR TEAM</Link>
                  <Link to="/contactus" onClick={toggleMenu} className="hover:text-gray-400">CONTACT US</Link>
                </div>
              )}
              <button onClick={openCart} className="hover:text-gray-400">CART</button>
            </div>
          )}
        </header>

        {/* Cart */}
        <AnimatePresence>
          <Cart
            isOpen={isCartOpen}
            onClose={closeCart}
          />
        </AnimatePresence>
      </div >
    </>
  );
};

export default Navbar;
