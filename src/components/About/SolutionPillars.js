"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Early Identification",
    image: "/about/pillars/Pillar_01.svg",
  },
  {
    title: "Pan-India Outreach",
    image: "/about/pillars/Pillar_02.svg",
  },
  {
    title: "Comprehensive Evaluation",
    image: "/about/pillars/Pillar_03.svg",
  },
  {
    title: "Direct Career Pathways",
    image: "/about/pillars/Pillar_04.svg",
  },
];

export default function SolutionPillars() {
  return (
    <section className="py-12">
      <div className="max-w-340 mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Solution Pillars
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#f4f7fb] rounded-3xl p-6 flex flex-col items-center justify-between text-center  hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl lg:text-xl xl:text-2xl font-semibold text-[#297ae9] mb-4">
                {pillar.title}
              </h3>

              {/* Image */}
              <div className="h-60 flex items-end justify-center ">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
