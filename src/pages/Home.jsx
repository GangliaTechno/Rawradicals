import { CiDeliveryTruck } from 'react-icons/ci'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { IoShieldHalfOutline } from 'react-icons/io5'
import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  return (
    <div className="bg-black">
      {/* Banner Section - No Aspect Ratio */}
      <div className="w-full overflow-hidden transition-all duration-500 ease-in-out">
        <img
          src="/images/homepage_background.png"
          alt="Homepage Banner"
          className="w-full h-auto object-cover rounded-lg transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Products Section */}
      <div className="bg-white py-16 px-0 sm:px-4 lg:px-8">
        <div className="max-w-full mx-auto">
          <h2 className="text-3xl text-center mb-12 uppercase tracking-widest font-montserrat font-bold">
            ALL PRODUCTS COLLECTION
          </h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <img
                    src={`/images/product_${i}.png`}
                    alt={`Product ${i}`}
                    className="w-full h-auto object-cover transition duration-300 hover:scale-95"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 font-montserrat">{`Product ${i}`}</h3>
                <p className="text-gray-600 font-roboto">
                  From ${i === 3 ? '885.00' : '395.00'} USD
                </p>
              </div>
            ))}
          </div>

          {/* SHOP NOW Button */}
          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="relative inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-black group"
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
      <div className="relative overflow-hidden bg-black text-white py-2">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {Array(200)
                .fill('RAW RADICALS')
                .map((text, idx) => (
                  <span
                    key={`${i}-${idx}`}
                    className="mx-8 text-xl font-semibold font-roboto"
                  >
                    {text}
                  </span>
                ))}
            </div>
          ))} 
        </div>
      </div>

      {/* Shop by Material Section */}
      <div className="bg-white py-16 px-0 sm:px-4 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 mb-12 font-montserrat">
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
      <div className="bg-white py-16 px-4 mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Secure Payment */}
          <PolicyItem
            icon={
              <IoShieldHalfOutline className="text-xl text-black mb-3 font-thin" />
            }
            title="Secure Payment"
            description="At Raw Radicals, we ensure secure payments with advanced encryption, protecting your financial details every step of the way."
          />

          {/* Fast Delivery */}
          <PolicyItem
            icon={
              <CiDeliveryTruck className="text-3xl text-black mb-1 font-thin" />
            }
            title="Fast Delivery"
            description="At Raw Radicals, we ensure fast and efficient shipping for a seamless experience."
          />

          {/* Easy Returns */}
          <PolicyItem
            icon={
              <HiArrowUturnLeft className="text-xl text-black mb-3 font-thin" />
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
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-sm uppercase tracking-wide font-roboto">{subtitle}</p>
      <h3 className="text-xl font-semibold font-montserrat">{title}</h3>
      <button className="relative mt-4 inline-block px-6 py-3 overflow-hidden text-sm font-medium text-white border border-white group bg-transparent">
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
    <h4 className="text-lg font-semibold font-montserrat">{title}</h4>
    <p className="text-gray-600 text-sm font-roboto">{description}</p>
  </div>
)

export default Home
