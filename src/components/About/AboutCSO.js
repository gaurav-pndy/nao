"use client";

import { motion } from "framer-motion";

export default function AboutCSO() {
  return (
    <section className=" py-12 overflow-hidden ">
      <div
        className="relative p-4 md:p-10 py-12 overflow-hidden min-h-140"
        style={{
          backgroundColor: "#964090",
        }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center font-bold "
          >
            About CSO{" "}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-medium md:text-lg "
          >
            Civil Society Organization specializes in large-scale education
            programs combining rigor with real-world relevance.{" "}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
