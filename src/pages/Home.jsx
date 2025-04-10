import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  return (
    <div className="bg-black">
      {/* Carousel Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-[500px] mt-10"
      >
        <SwiperSlide>
          <img
            src="/images/carousels_2.png"
            alt="Slide 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/carousels_1.png"
            alt="Slide 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>

      {/* Products Section */}
      <div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      All Products Collections
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
        >
          <img
            src={`/images/avurveda_${i}.png`}
            alt={`Product ${i}`}
            className="w-full h-72 object-cover"
          />
          <div className="p-4 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Product {i}</h3>
            <p className="text-gray-600">
              From ${i === 3 ? '885.00' : '395.00'} USD
            </p>

            {/* 🔘 Animated Shop Button */}
            <button
              type="button"
              className="relative w-full py-3 rounded-md text-lg overflow-hidden group border border-black bg-black mt-4"
            >
              <span className="absolute inset-0 bg-black transition-all duration-300 ease-in translate-x-0 group-hover:translate-x-full"></span>
              <span className="absolute inset-0 bg-gray-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 text-white group-hover:text-black transition duration-300">
                Shop Now
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Scrolling Marquee */}
      <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="marquee flex animate-marquee">
          {Array(16)
            .fill('RAW RADICALS')
            .map((text, idx) => (
              <span key={idx} className="mx-8 text-xl font-medium">
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[1, 2, 3].map((i) => (
    <div
      key={i}
      className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
    >
      <img
        src={`/images/avurveda_${i}.png`}
        alt={`Product ${i}`}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Product {i}</h3>
        <p className="text-gray-600">
          From ${i === 3 ? '885.00' : '395.00'} USD
        </p>

        {/* Animated Button */}
        <button
          type="button"
          className="relative w-full py-3 rounded-md text-lg overflow-hidden group border border-black bg-black mt-4"
        >
          <span className="absolute inset-0 bg-black transition-all duration-300 ease-in translate-x-0 group-hover:translate-x-full"></span>
          <span className="absolute inset-0 bg-gray-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 text-white group-hover:text-black transition duration-300">
            Shop Now
          </span>
        </button>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Wallpaper Image */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-7 sm:px-3 lg:px-3">
          <img
            src="/images/wallpaper_2.png"
            className="w-full h-[400px] object-cover rounded-lg"
            alt="Wallpaper"
          />
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          {[
            {
              title: 'FREE RETURNS',
              desc:
                "If you don't love it, send it back for a full refund and we'll cover the return shipping.",
            },
            {
              title: 'FREE SHIPPING',
              desc:
                'Enjoy free shipping on all orders to the contiguous US, Canada and most European countries.',
            },
            {
              title: 'LIFETIME WARRANTY',
              desc: 'Every product comes with a limited lifetime warranty.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  )
}

export default Home
