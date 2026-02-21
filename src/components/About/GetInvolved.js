"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="py-12 md:pt-36  bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative  "
        >
          {/* Background Image */}
          <img
            src="/about/get-involved/bg.png"
            alt=""
            className="absolute inset-0 rounded-2xl w-full h-full object-cover"
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-10 pb-0 md:pb-10 lg:py-12 lg:px-16">
            {/* Left Content */}
            <div className="text-white max-w-md">
              <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                Get Involved
              </h3>

              <ul className="text-lg md:text-xl  leading-tight font-light mb-6 list-disc pl-6">
                <li> Schools register students. </li>
               <li> Sponsors support initiatives. </li>
               <li> Experts contribute questions and mentorship.</li>
               <li>  Volunteers support outreach.</li>
              </ul>

              <Link
                href="/participate"
                className="inline-block bg-yellow hover:bg-[#e6c400] text-black font-medium px-6 min-w-40 text-center py-2.5 rounded-lg transition-colors"
              >
                Join Us
              </Link>
            </div>

            {/* Right Image */}
            <div className="md:absolute md:right-8 lg:right-16 bottom-0">
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src="/about/get-involved/person.png"
                alt="Get involved"
                className="max-h-80 md:max-h-104 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
