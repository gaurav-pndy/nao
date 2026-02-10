"use client";

import { motion } from "framer-motion";

export default function NEPAlignment() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/about/NEP.svg"
              alt="NEP 2020 Alignment"
              className="max-w-lg w-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl  font-bold text-orange mb-4">
              NEP 2020 Alignment
            </h3>

            <p className=" max-w-lg text-xl font-medium">
              Multidisciplinary learning, experiential exposure, STEM
              orientation, inclusion, vocational pathways.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
