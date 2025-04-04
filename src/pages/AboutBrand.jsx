import React from "react";
import { motion } from "framer-motion";

const AboutBrand = () => {
  return (
    <div
      className="min-h-screen bg-black bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/backgroundimage.jpeg')" }}
    >
      <div className="bg-black/70 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-center uppercase tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Raw Radicals
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="text-gray-300 text-lg mt-6 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Rooted in tradition, powered by nature. Raw Radicals brings you premium <b>chyawanprash</b>, blending 
            ancient Ayurvedic wisdom with modern quality standards. Our commitment to purity, wellness, and authenticity 
            drives us to create a product that nurtures health and strengthens immunity.
          </motion.p>

          {/* Animated Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-white/10 backdrop-blur-lg border border-gray-600 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-white">Our Philosophy</h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We believe in the power of nature to heal and strengthen. Every ingredient in our chyawanprash is 
                carefully selected to ensure maximum benefits, with no compromises on quality.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white/10 backdrop-blur-lg border border-gray-600 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-white">Why Choose Us?</h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Purity, transparency, and effectiveness define our brand. We source the finest herbs and prepare 
                our chyawanprash using time-honored methods, ensuring a product that enhances overall well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
