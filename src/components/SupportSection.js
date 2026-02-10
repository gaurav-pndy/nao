"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function SupportSection() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#f7f7f7] rounded-2xl px-6 md:px-12 py-12 md:py-20 text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl text-center font-bold  ">
            Support
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-3xl mx-auto md:text-lg ">
            Get in touch with our team for any queries regarding registration,
            examination process, or general information about the National
            Aviation Olympiad.
          </p>

          {/* Contact Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#0061e5] flex items-center justify-center mb-4">
                <FiMail className=" text-4xl" />
              </div>
              <a href="mailto:suppot#nao.in" className="text-lg">
                support@nao.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#0061e5] flex items-center justify-center mb-4">
                {" "}
                <FiPhone className=" text-4xl" />
              </div>
              <a href="tel:+919211229927" className="text-lg">
                +91 92112 29927
              </a>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#0061e5] flex items-center justify-center mb-4">
                {" "}
                <FiMapPin className=" text-4xl" />
              </div>
              <p className="text-lg leading-tight">
                Hours: <br /> Mon–Sat, 10 AM–6 PM IST
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
