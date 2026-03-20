"use client";

import { motion } from "framer-motion";
import { FaSchool, FaUserGraduate } from 'react-icons/fa';

export default function WhoCanParticipate() {
  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl mb-4 font-bold text-orange"
        >
          Who Can Participate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto tracking-wide"
        >
          NAO is open to all Indian students enrolled in Classes 8 through 12 in any recognized school across India.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl cursor-pointer relative overflow-hidden transition-transform"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
            <div className="flex items-center justify-center mb-3 text-blue-600">
              <FaSchool size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Group 1: Classes 8, 9 &amp; 10
            </h3>
            <p className="text-sm opacity-90">
              Minimum participation: 35 students required per school for onboarding.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl cursor-pointer relative overflow-hidden transition-transform"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
            <div className="flex items-center justify-center mb-3 text-green-600">
              <FaUserGraduate size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Group 2: Classes 11 &amp; 12
            </h3>
            <p className="text-sm opacity-90">
              Minimum participation: 15 students required per school for onboarding.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-sm text-gray-600 max-w-3xl mx-auto tracking-wide"
        >
          Students participate through their registered school. Individual
          registrations are accepted for homeschooled, NIOS, international, and
          embassy-nominated students.
        </motion.p>
      </div>
    </section>
  );
}
