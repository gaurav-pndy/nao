"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeeStructure() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#f8c600] rounded-xl p-6  md:p-10  text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-center font-bold text-[#0061e5] mb-8">
            Fee Structure
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium leading-tight text-black mb-8">
            Differentiated fees for government and private schools with special
            concessions for girls and disadvantaged groups.
          </p>

          {/* CTA Button */}
          <Link
            href="/participate/fee-structure"
            className="bg-red inline-block text-lg  hover:bg-[#ba2621] text-white font-medium px-6 min-w-60 text-center py-3 rounded-xl transition-colors"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
