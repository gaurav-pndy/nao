"use client";

import { motion } from "framer-motion";

export default function BecomeSponsor() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-[90%] bg-[#f8c600] rounded-2xl p-4 md:p-6 lg:p-10 flex flex-col md:flex-row items-center justify-between "
        >
          {/* Text */}
          <div className="text-left z-10">
            <h3 className="text-2xl md:text-4xl font-bold  mb-2">
              Become a Sponsor
            </h3>
            <p className=" md:text-lg">
              Submit Partnership Enquiry
              <br />
              Email:{" "}
              <a
                href="mailto:partnerships@thecso.in"
                className="text-blue-700 underline font-medium"
              >
                partnerships@thecso.in
              </a>
            </p>
          </div>

          {/* Icon */}
          <div className="md:absolute -right-18  mt-6 md:mt-0 md:ml-6">
            <div className="">
              <img
                src="/partners/Become_a_Supporter.png"
                alt="Become a sponsor"
                className="w-40 md:w-64 h-40 md:h-64  object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
