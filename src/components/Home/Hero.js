"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nasalization } from "@/fonts/nasalization";

export default function Hero() {
  return (
    <section
      className="relative bg-cover "
      style={{
        backgroundImage: "url('/hero/Hero_BG.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
    >
      <div className="max-w-6xl  min-h-[calc(100vh-2rem)] md:min-h-[45vh] xl:min-h-[calc(100vh-3rem)] tab-height h-full mx-auto px-4 flex  items-end pt-20 md:pt-24 lg:pt-16  pb-20  relative">
        <div className="flex  h-full justify-between xs:gap-10 md:gap-0 flex-col lg:flex-row  w-full lg:items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 "
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-red leading-tight ">
              National Aviation Olympiad 2026
            </h1>

            <p className="mt-2 md:mt-4 text-lg md:text-xl xl:text-2xl font-semibold ">
              Igniting young minds, elevating India&apos;s skies
            </p>

            <div className="mt-2 md:mt-3 md:text-lg xl:text-xl">
              <p>Classes 8th – 12th</p>
              <p>August 2026 – December 2026</p>
            </div>

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

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex w-full lg:w-1/2 justify-start "
          >
            {/* Student 02 (Back) */}
            <div className="relative w-65 md:w-96 lg:w-80 xl:w-96 -translate-x-3 lg:-translate-x-10">
              <img
                src="/hero/Student_02.png"
                alt="Student holding aircraft model"
                className="relative z-10 w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Student 01 (Front) */}
            <div className="absolute -right-3 xl:-right-16 w-60 md:w-100 lg:w-84 xl:w-100 bottom-0  lg:right-0 mt-10">
              <img
                src="/hero/Student_01.png"
                alt="Student holding aircraft model"
                className="relative z-20 w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* STATS BAR */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-1/2 z-30 -bottom-20 md:bottom-0  translate-1/2  flex justify-center max-w-6xl w-full mx-auto px-4"
      >
        <div className="bg-[#2d333a] rounded-xl shadow-xl w-full p-4 md:p-6 lg:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center">
          {[
            {
              id: 1,
              value: "28/8",
              label: "States & UTs Participating",
              icon: "/hero/01.svg",
            },
            {
              id: 2,
              value: "1,00,000+",
              label: "Students Participating",
              icon: "/hero/02.svg",
            },
            {
              id: 3,
              value: "3",
              label: "Competition Phases",
              icon: "/hero/03.svg",
            },
            {
              id: 4,
              value: "145",
              label: "National Qualifiers",
              icon: "/hero/04.svg",
            },
          ].map((item, i) => (
            <div key={i} className="text-white">
              <div
                className={`mx-auto mb-4 md:mb-6  h-16 md:h-20 relative ${
                  item.id == 3 ? "w-12 md:w-16" : "w-28 md:w-36"
                } `}
              >
                <Image src={item.icon} alt="" fill />
              </div>
              <div
                className={`text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4  text-yellow ${nasalization.className}`}
              >
                {item.value}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-slate-300 ">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

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
