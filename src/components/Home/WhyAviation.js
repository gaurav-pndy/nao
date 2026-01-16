"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Aviation Talent Gap",
    image: "/why/01.png",
  },
  {
    title: "Early Inspirations",
    image: "/why/02.png",
  },
  {
    title: "Rural Inclusion",
    image: "/why/03.png",
  },
  {
    title: "Place Holder",
    image: "/why/04.jpg",
  },
];

export default function WhyAviation() {
  return (
    <section className="py-12 pt-16">
      <div className="max-w-340 mx-auto px-4">
        {/* Outer Soft Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#edf2f8] rounded-2xl p-10 pb-15"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
          >
            Why India needs Aviation Olympiad
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-xl overflow-hidden "
              >
                {/* Image */}
                <div className="relative bg-yellow rounded-[2.5rem] overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <h3 className="text-center absolute left-1/2 -translate-x-1/2 top-8 w-full text-2xl lg:text-xl xl:text-2xl font-semibold text-blue">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
