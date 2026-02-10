"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Phase 1 exam",
    icon: "/participate-page/included/What's Included_01.svg",
  },
  {
    label: "Phase 2/3 eligibility",
    icon: "/participate-page/included/What's Included_02.svg",
  },
  {
    label: "Study resources",
    icon: "/participate-page/included/What's Included_03.svg",
  },
  {
    label: "Sample papers",
    icon: "/participate-page/included/What's Included_04.svg",
  },
  {
    label: "E-certificates",
    icon: "/participate-page/included/What's Included_05.svg",
  },
  {
    label: "Newsletter access",
    icon: "/participate-page/included/What's Included_06.svg",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          What's Included
        </motion.h2>

        {/* Icons Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-8 lg:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <div className="   flex items-center justify-center ">
                <img
                  src={item.icon}
                  alt={item.label.replace("\n", " ")}
                  className="w-36 h-36"
                />
              </div>

              {/* Label */}
              <p className="mt-4 text-lg  lg:text-xl font-medium  leading-tight whitespace-pre-line">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
