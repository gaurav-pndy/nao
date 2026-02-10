"use client";

import { motion } from "framer-motion";

export default function ImportantDates() {
  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Important Dates
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col items-center gap-10">
          {/* Top Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <img
              src="/participate-page/important-dates/Important_Date_01.png"
              alt="Registration Opens"
              className="w-32 md:w-64"
            />
            <img
              src="/participate-page/important-dates/Important_Date_02.png"
              alt="Last Date"
              className="w-32 md:w-64"
            />
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <img
              src="/participate-page/important-dates/Important_Date_03.png"
              alt="Phase 1"
              className="w-32 md:w-64"
            />
            <img
              src="/participate-page/important-dates/Important_Date_04.png"
              alt="Phase 2"
              className="w-32 md:w-64"
            />
            <img
              src="/participate-page/important-dates/Important_Date_05.png"
              alt="Phase 3"
              className="w-32 md:w-64"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
