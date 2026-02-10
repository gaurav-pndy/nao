"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    title: "Immediate",
    description: "Introduce aviation careers to thousands of students.",
    icon: "/about/impact/Expected Impact_01.svg",
  },
  {
    title: "Medium-term",
    description: "Build alumni pursuing aviation education.",
    icon: "/about/impact/Expected Impact_02.svg",
  },
  {
    title: "Long-term",
    description: "Contribute to 1.1M workforce requirement.",
    icon: "/about/impact/Expected Impact_03.svg",
  },
];

export default function ExpectedImpact() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Expected Impact
        </motion.h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#dbe5f2] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-center pt-10 pb-6">
                <div className="w-48 h-48 flex items-center justify-center ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Bottom Band */}
              <div className="bg-[#964090] text-white px-6 py-5 mt-auto">
                <h4 className="font-semibold text-xl mb-1">{item.title}:</h4>
                <p className="leading-tight text-lg md:text-base lg:text-lg font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
