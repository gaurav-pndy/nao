"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nasalization } from "@/fonts/nasalization";
import Link from "next/link";

export default function ParticipateHero() {
  return (
    <section
      className="relative bg-cover bg-bottom-left md:bg-center"
      style={{
        backgroundImage: "url('/participate-page/Participate_Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl min-h-[70vh] sm:min-h-[80vh] md:min-h-[45vh] xl:min-h-[calc(100vh-3rem)] h-full mx-auto px-4 flex items-center pt-20 md:pt-24 lg:pt-36 pb-24 md:pb-32 lg:pb-36 xl:pb-48 relative">
        <div className="flex h-full justify-between gap-8 md:gap-0 flex-col lg:flex-row w-full lg:items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-2/3 xl:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-yellow leading-tight">
              Participate in NAO 2026
            </h1>

            <p className="mt-3 md:mt-4 text-white text-base sm:text-lg md:text-xl xl:text-2xl font-semibold">
              Step-by-step guide for Schools, Students, Experts and Volunteers
            </p>

            {/* CTA BUTTONS */}
            <motion.div
              className="w-[50%] mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/school-registration"
                target="_blank"
                className="bg-yellow hover:bg-[#e6c400] text-black font-medium px-4 sm:px-6 py-2.5 rounded-lg transition-colors text-center text-sm sm:text-base flex-1 min-w-[140px]"
              >
                Register Your School
              </Link>

              <Link
                href="/expert-registration"
                target="_blank"
                className="bg-red hover:bg-[#b92520] text-black font-medium px-4 sm:px-6 py-2.5 rounded-lg transition-colors text-center text-sm sm:text-base flex-1 min-w-[140px]"
              >
                Register as an Expert
              </Link>

              <Link
                href="/student-registration"
                target="_blank"
                className="bg-orange hover:bg-[#e65c00] text-black font-medium px-4 sm:px-6 py-2.5 rounded-lg transition-colors text-center text-sm sm:text-base flex-1 min-w-[140px]"
              >
                Individual Register
              </Link>
            </motion.div>
          </motion.div>
        </div>
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
