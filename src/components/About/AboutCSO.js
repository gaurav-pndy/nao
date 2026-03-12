"use client";

import { motion } from "framer-motion";

export default function AboutCSO() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-bottom md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/about/cso.png')",
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#964090]/85" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-orange">
          About Centre for Scientific Outreach (CSO)
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-sm lg:max-w-lg xl:max-w-xl mt-8 md:mt-16 pb-20 md:pb-0"
        >
          {/* Logo + Name */}
          <div className="flex flex-col lg:flex-row lg:items-center  mb-6">
            <img
              src="/about/cso-logo.svg"
              alt="CSO Logo"
              className="h-14 w-fit"
            />
            <h2 className="text-2xl md:text-3xl font-bold">
              Centre for Scientific Outreach
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg font-medium ">
            The Centre for Scientific Outreach (CSO) is a Not-for-Profit
            organization dedicated to promoting scientific awareness and
            education across India. Through NAO, CSO aims to create a
            sustainable platform for aviation education and career development
            across India, contributing to India’s position as a global aviation
            leader.
          </p>

          {/* Motto */}
          <p className="mt-6 italic text-center">
            सा विद्या या विमुक्तये  — That is knowledge which liberates.
          </p>
          {/* CTA */}
          <div className="mt-4 text-center">
            <a
              href="https://www.thecso.in"
              target="_blank"
              className="inline-block bg-yellow text-black font-medium px-6 py-2 rounded-lg hover:bg-[#e6c400] transition-colors"
            >
              Visit CSO Website
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
