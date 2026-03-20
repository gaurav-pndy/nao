"use client";

import { motion } from "framer-motion";

export default function CTAStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-10"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        <p className="text-center lg:text-left text-2xl font-bold">
          Be part of India’s aviation education revolution.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/participate"
            className="bg-white text-orange-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-center w-full md:w-auto"
          >
            Register Your School
          </a>
          <a
            href="https://zfrmz.in/aaJiXotostGRiyitai9U"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-center w-full md:w-auto"
          >
            Join as Expert
          </a>
          <a
            href="/partners"
            className="bg-white text-orange-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 text-center w-full md:w-auto"
          >
            Partner with NAO
          </a>
        </div>
      </div>
    </motion.section>
  );
}
