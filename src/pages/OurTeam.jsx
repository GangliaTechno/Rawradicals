import React from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Dr. Dasharathraj K Shetty',
    role: 'Mentor',
    image: '/images/dr.jpeg',
  },
  {
    name: 'Mr. Namesh Malarout',
    role: 'Chief Marketing Officer',
    image: '/images/namesh.jpeg',
  },
  {
    name: 'Shreepathy Ranga Bhatta',
    role: 'Managing Director',
    image: '/images/sree.jpeg',
  },
  {
    name: 'Ms. Staissy Salu',
    role: 'Chief Operating Officer',
    image: '/images/stais.jpeg',
  },
]

export default function OurTeam() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/backgroundimage.jpeg')" }}
    >
      <div className="bg-gradient-to-b from-black/80 to-black/90 min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            className="mt-12 text-5xl md:text-6xl font-extrabold text-white tracking-wide uppercase"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h2>

          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>

          <motion.p
            className="text-gray-300 text-lg mt-6 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The faces behind Raw Radicals who are redefining wellness with
            passion, expertise, and authenticity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden shadow-xl group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="relative z-20 p-6 text-center">
                <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
