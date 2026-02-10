"use client";

import { motion } from "framer-motion";

export default function ZonalCoordinators() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-orange">
            Zonal Coordinators
          </h2>
          <p className="mt-4 max-w-3xl mx-auto md:text-lg font-medium">
            Regional support across North, South, East, West, and Union
            Territories.
          </p>
        </motion.div>

        {/* Placeholder Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-64 md:h-80 rounded-xl bg-[#eff8f8]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
