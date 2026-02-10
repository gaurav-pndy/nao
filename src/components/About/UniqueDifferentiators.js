"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Aviation + STEM\nIntegration",
    icon: "/about/differentiators/1.svg",
  },
  {
    label: "Expert-Led\nDesign",
    icon: "/about/differentiators/2.svg",
  },
  {
    label: "Real-World\nFocus",
    icon: "/about/differentiators/3.svg",
  },
  {
    label: "Support Beyond\nResults",
    icon: "/about/differentiators/4.svg",
  },
  {
    label: "Policy\nAlignment",
    icon: "/about/differentiators/5.svg",
  },
];

export default function UniqueDifferentiators() {
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
          Unique Differentiators
        </motion.h2>

        {/* Icons Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6  lg:gap-8">
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
                  className="w-40 h-40"
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
