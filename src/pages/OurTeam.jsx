import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Dasharathraj K Shetty",
    role: "Mentor",
    image: "/images/dr.jpeg",
  },
  {
    name: "Mr. Namesh Malarout",
    role: "Chief Marketing Officer",
    image: "/images/namesh.jpeg",
  },
  {
    name: "Shreepathy Ranga Bhatta",
    role: "Managing Director",
    image: "/images/sree.jpeg",
  },
  {
    name: "Ms. Staissy Salu",
    role: "Chief Operating Officer (COO)",
    image: "/images/stais.jpeg",
  },
];

export default function OurTeam() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/backgroundimage.jpeg')" }}
    >
      <div className="bg-black/70 min-h-screen py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At Raw Radicals, we are committed to bringing the power of Ayurveda to modern lifestyles.
            Our team blends traditional wisdom with innovation to craft premium-quality chyawanprash.
          </motion.p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 text-white rounded-xl shadow-md overflow-hidden cursor-pointer flex flex-col items-center p-6 border border-gray-700"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Circular Profile Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated Text */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
                <p className="text-gray-400 text-sm md:text-base">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
