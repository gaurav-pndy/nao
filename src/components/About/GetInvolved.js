"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="py-12 md:pt-36  bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative  "
        >
          {/* Background Image */}
          <img
            src="/about/get-involved/bg.png"
            alt=""
            className="absolute inset-0 rounded-2xl w-full h-full object-cover"
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-10 pb-0 md:pb-10 lg:py-12 lg:px-16">
            {/* Left Content */}
            <div className="text-white max-w-md">
              <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                Be part of India’s largest Aviation Education Movement
              </h3>

              <div className="flex flex-col gap-3 mt-6">
                <a
                  href=""
                  target="_blank"
                  className="inline-block bg-yellow hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg text-center transition-colors"
                >
                  Register Your School
                </a>
                <Link
                  href="/partners"
                  className="inline-block bg-red hover:bg-[#b92520] text-white font-medium px-6 py-2.5 rounded-lg text-center transition-colors"
                >
                  Partner With Us
                </Link>
                <a
                  href="/docs/NAO_2026_Brochure.pdf"
                  target="_blank"
                  className="inline-block bg-blue hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-center transition-colors"
                >
                  Download Information Brochure
                </a>
                <a
                  href="https://forms.zohopublic.com/example/nominateExpert"
                  target="_blank"
                  className="inline-block bg-green hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-lg text-center transition-colors"
                >
                  Nominate an Expert
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:absolute md:right-8 lg:right-16 bottom-0">
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src="/about/get-involved/person.png"
                alt="Get involved"
                className="max-h-80 md:max-h-104 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
