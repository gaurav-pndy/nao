"use client";

import { motion } from "framer-motion";

export default function PaymentMethods() {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Payment Methods
        </motion.h2>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <img
            src="/participate-page/Payment_Method.svg"
            alt="Payment Methods"
            className="max-w-xs md:max-w-md w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" text-xl md:text-2xl font-medium leading-tight"
        >
          Online (UPI, net banking, cards)
          <br />
          Offline (bank transfer, DD)
        </motion.p>
      </div>
    </section>
  );
}
