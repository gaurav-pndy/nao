"use client";

import { motion } from "framer-motion";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const benefits = [
  "Brand presence",
  "Event visibility",
  "Speaking opportunities",
  "Co-branded content",
  "Impact reports",
];

export default function WhatYouGet() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          What you will get
        </motion.h2>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left list */}
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-5"
          >
            {benefits.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                <div className="flex justify-center items-center p-1.5 bg-[#2cb72c] rounded-full shrink-0 mt-1">
                  <GiCheckMark className="text-white text-lg  shrink-0" />
                </div>
                <span className="text-2xl   font-medium">{item}</span>
              </li>
            ))}
          </motion.ul>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-sm"
          >
            <img
              src="/partners/What_You_Will_Get.png"
              alt="Partner benefits"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
