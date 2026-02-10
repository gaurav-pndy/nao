"use client";

import { motion } from "framer-motion";

const items = [
  "Pan-India\nreach",
  "Brand\nvisibility",
  "Strong CSR\nalignment",
  "Talent\ninsights",
  "Network\nAccess",
];

export default function Features() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {items.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#c9e6e9] rounded-2xl px-4 xs:px-6 py-8 flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div className="w-28 h-28 xs:w-30 xs:h-30 rounded-full bg-[#a4d6d4] mb-4" />

              {/* Text */}
              <p className="text-blue text-2xl font-semibold  whitespace-pre-line">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
