import { CiDeliveryTruck } from 'react-icons/ci'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { IoShieldHalfOutline } from 'react-icons/io5'
import { HiChevronDown } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useRef } from 'react';
import 'swiper/css'
import 'swiper/css/pagination'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import ProductScroller from "../components/ProductScroller"

const Home = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }} className="bg-black ">
      {/* Banner Section - No Aspect Ratio */}
      <div className="relative w-full overflow-visible transition-all duration-500 ease-in-out h-[120vh] bg-black">
        <img
          src="/images/homepage_background.png"
          alt="Homepage Banner"
          className="w-full h-full object-cover rounded-lg img-scale"
        />

        {/* ↓ Arrow button at bottom-center */}
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
          className="
    arrow-button           
    relative bottom-[25px] left-1/2 transform -translate-x-1/2
    bg-white text-black z-50 p-3 rounded-full shadow-xl
  "
          aria-label="Scroll Down"
        >
          <HiChevronDown
            className="
      arrow-icon              
      w-6 h-6
     
    "
            strokeWidth={0.1}
          />
        </button>
      </div>


      {/* Products Section */}
      <div style={{ fontFamily: "Montserrat, sans-serif" }} className="bg-[#efefef] py-16 px-0 sm:px-4 lg:px-8">
        <div className="max-w-full mx-auto">


          {/* Products Grid */}
          <ProductScroller />

          {/* SHOP NOW Button */}
          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="relative inline-block px-6 py-3 overflow-hidden text-sm font-normal text-white border border-black group"
            >
              <span className="absolute inset-0 bg-black transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white text-black transition duration-300">
                SHOP NOW
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="relative overflow-hidden marquee py-2 text-3xl font-normal"
      >
        <div className="marquee__content flex space-x-24 font-normal">
          {Array(40).fill("Luxury Ayurveda. Everyday You.").map((text, idx) => (
            <span key={idx} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* Shop by Material Section */}
      <div className="bg-white py-16 px-0 sm:px-4 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-normal tracking-wide text-gray-800 mb-12">
          SHOP BY MATERIAL
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto">
          {/* Aluminum Card */}
          <MaterialCard
            image="/images/collection_1.png"
            subtitle="SLEEK AND STRONG"
            title="ALUMINUM"

          />

          {/* Carbon Fiber Card */}
          <MaterialCard
            image="/images/collection_2.png"
            subtitle="LUXURIOUS AND UNBREAKABLE"
            title="CARBON FIBER"
          />

          {/* Polycarbonate Card */}
          <MaterialCard
            image="/images/collection_3.png"
            subtitle="LIGHTWEIGHT AND DURABLE"
            title="POLYCARBONATE"
          />
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-white py-16 px-8 mx-auto flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Secure Payment */}
          <PolicyItem
            icon={
              <IoShieldHalfOutline className="text-3xl text-black mb-3 font-normal" />
            }
            title="Secure Payment"
            description="At Raw Radicals, we ensure secure payments with advanced encryption, protecting your financial details every step of the way."
          />

          {/* Fast Delivery */}
          <PolicyItem
            icon={
              <CiDeliveryTruck className="text-4xl text-black mb-3 font-normal" />
            }
            title="Fast Delivery"
            description="At Raw Radicals, we ensure fast and efficient shipping for a seamless experience."
          />

          {/* Easy Returns */}
          <PolicyItem
            icon={
              <HiArrowUturnLeft className="text-3xl text-black mb-3 font-normal" />
            }
            title="Easy Returns"
            description="At Raw Radicals, we offer easy returns, making sure you can shop with confidence and return items hassle-free."
          />
        </div>
      </div>
    </div>
  )
}

// Reusable Material Card Component
const MaterialCard = ({ image, subtitle, title }) => (
  <div className="relative group overflow-hidden rounded-md shadow-lg aspect-[4/5]">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-120"
    />
    <div className="absolute bottom-6 left-6 text-white font-normal">
      <p style={{ fontFamily: "Montserrat, sans-serif" }} className="text-[0.675rem] uppercase tracking-[0.15em] font-normal">{subtitle}</p>
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="text-2xl font-normal tracking-[0.15em] mt-5">{title}</h3>
      <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-normal text-white border border-white group bg-transparent">
        <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
          VIEW PRODUCTS
        </span>
      </button>
    </div>
  </div>
)

// Reusable Policy Item Component
const PolicyItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    {icon}
    <h4 className="text-xl font-normal">{title}</h4>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
)

export default Home
