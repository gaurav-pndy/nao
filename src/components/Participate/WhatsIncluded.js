"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Exam participation in all three phases",
    icon: "/participate-page/included/What's Included_01.svg",
  },
  {
    label: "E-certificates for all participants",
    icon: "/participate-page/included/What's Included_05.svg",
  },
  {
    label: "Access to learning resources and study materials",
    icon: "/participate-page/included/What's Included_03.svg",
  },
  {
    label: "Mock test access (unlimited attempts)",
    icon: "/participate-page/included/What's Included_04.svg",
  },
  {
    label: "Lifetime access to NAO newsletters",
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
          What’s Included
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Every registered student receives:
        </motion.p>

        {/* Icons Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 gap-y-8 lg:gap-6">
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
