"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Title &\nCo-Presenting",
    color: "#0069b3",
  },
  {
    label: "Thematic\n(Girls, Rural,\nInnovation)",
    color: "#964090",
  },
  {
    label: "State-Level",
    color: "#d42c26",
  },
  {
    label: "Category-Specific\n(Exam, Mock,\nCertificates)",
    color: "#63b34b",
  },
];

export default function PartnershipCategories() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Partnership Categories
        </motion.h2>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {categories.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col  h-full text-center"
            >
              {/* Circle */}
              <div
                className="w-40 sm:w-44 h-40 sm:h-44 rounded-full mb-4"
                style={{ backgroundColor: item.color }}
              />

              {/* Text */}
              <p className="text-xl font-medium whitespace-pre-line">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
