import React from "react";
import { motion } from "framer-motion";

const AboutBrand = () => {
  return (
    <div
      className="min-h-screen bg-black bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: "url('/images/backgroundimage.jpeg')" }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-center uppercase tracking-wide bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Raw Radicals
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="text-gray-300 text-lg mt-6 text-center leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Rooted in tradition, powered by nature. Raw Radicals brings you premium{" "}
            <b className="text-orange-400">chyawanprash</b>, blending ancient Ayurvedic wisdom with modern quality
            standards. Our commitment to purity, wellness, and authenticity drives us to create a product that nurtures
            health and strengthens immunity.
          </motion.p>

          {/* Animated Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            {[ 
              {
                title: "Our Philosophy",
                content:
                  "We believe in the power of nature to heal and strengthen. Every ingredient in our chyawanprash is carefully selected to ensure maximum benefits, with no compromises on quality.",
              },
              {
                title: "Why Choose Us?",
                content:
                  "Purity, transparency, and effectiveness define our brand. We source the finest herbs and prepare our chyawanprash using time-honored methods, ensuring a product that enhances overall well-being.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl hover:scale-105 transition duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
                <h2 className="text-3xl font-semibold text-white mb-4">{card.title}</h2>
                <p className="text-gray-300 leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
