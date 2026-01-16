"use client";

import { motion } from "framer-motion";

const priorities = [
  {
    label: "NEP 2020",
    icon: "/priorities/01.svg",
  },
  {
    label: "Viksit Bharat @2047",
    icon: "/priorities/02.svg",
  },
  {
    label: "Skill India Mission",
    icon: "/priorities/03.svg",
  },
  {
    label: "Make in India",
    icon: "/priorities/04.svg",
  },
  {
    label: "UN SDG",
    icon: "/priorities/05.svg",
  },
];

export default function NationalPriorities() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl mb-8 text-center font-bold "
        >
          Aligned with national priorities
        </motion.h2>

        {/* Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {priorities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center"
            >
              {/* Icon box */}
              <div className="w-40 md:w-48 h-40 md:h-48">
                <img src={item.icon} alt={item.label} className="" />
              </div>

              {/* Label */}
              <p className="mt-4 font-semibold text-lg ">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
