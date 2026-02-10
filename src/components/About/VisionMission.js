"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="mt-68 md:mt-32 py-12 relative overflow-hidden">
      {/* Yellow Background Band */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl mb-88 md:mb-60 lg:mb-64 text-orange text-center font-bold "
      >
        Vision & Mission
      </motion.h2>
      <div className="bg-[#ffe000] relative pt-80 xs:pt-76 md:pt-50 lg:pt-54 pb-12 md:pb-0 ">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row md:justify-between gap-10 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-3xl lg:text-4xl mb-8   font-bold ">
                Why NAO Exists
              </h3>
              <p className=" text-xl md:text-base lg:text-xl leading-tight max-w-md font-medium">
                India’s aviation is growing rapidly. <br /> The sector needs
                skilled professionals. <br /> Schools lack systematic aviation
                awareness. <br /> NAO addresses this gap at scale.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/about/vision/Why_NAO_Exists.svg"
                alt="Why NAO Exists"
                className="max-h-100 md:max-h-72 lg:max-h-100"
              />
            </div>
          </motion.div>
        </div>
        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-1/2 -translate-1/2 w-[90%] max-w-280 bg-blue rounded-2xl shadow-xl px-8 py-10 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Divider */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-white/30" />

            {/* Vision */}
            <div className="flex flex-col items-center text-center px-4">
              <h4 className="font-semibold mb-2 md:mb-4 text-3xl">Vision</h4>

              <img
                src="/about/vision/Vision.svg"
                alt="Vision"
                className="w-32 md:w-40 lg:w-60 h-32 md:h-40 lg:h-60 mb-2 md:mb-4"
              />
              <p className=" text-white/90 md:text-lg max-w-sm">
                Make aviation education accessible and attainable for every
                interested student.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center text-center px-4">
              <h4 className="text-3xl font-semibold mb-6 md:mb-8 lg:mb-10">
                Mission
              </h4>
              <img
                src="/about/vision/Mission.svg"
                alt="Mission"
                className="w-26 md:w-32 lg:w-50 h-26 md:h-32 lg:h-50 mb-6 md:mb-8"
              />

              <p className=" text-white/90 md:text-lg max-w-sm">
                Support 100,000+ students through structured Olympiad,
                mentorship, and real-world exposure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
