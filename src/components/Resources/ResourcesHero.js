"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nasalization } from "@/fonts/nasalization";

export default function ResourcesHero() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/resources/Resources_Hero.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl  min-h-[calc(100vh-2rem)] md:min-h-[45vh] xl:min-h-[calc(100vh-3rem)]  h-full mx-auto px-4 flex  lg:items-end pt-20 md:pt-24 lg:pt-36  pb-36 xl:pb-48  relative">
        <div className="flex  h-full justify-between xs:gap-10 md:gap-0 flex-col lg:flex-row  w-full lg:items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 "
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight ">
              NAO Resources & Downloads
            </h1>

            {/* CTA BUTTONS */}
            <motion.div
              className="mt-4 md:mt-6 flex  flex-wrap gap-2 md:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-yellow w-full md:w-fit hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg transition-colors">
                Register as a Student
              </button>

              <button className="bg-red w-full md:w-fit hover:bg-[#b92520] text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
                Register as a School
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS BAR */}
      </div>

      {/* Bottom Gradient Strip */}
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundImage: "url('/hero/Hero_Strip.svg')",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}
