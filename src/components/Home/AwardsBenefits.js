"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const awards = [
  { icon: "/awards/01.svg", label: "Scholarships" },
  { icon: "/awards/02.svg", label: "Career Mentorship" },
  { icon: "/awards/03.svg", label: "Industry Exposure" },
  { icon: "/awards/04.svg", label: "National Recognition" },
  { icon: "/awards/05.svg", label: "Skill Development" },
  { icon: "/awards/06.svg", label: "Free Drone Pilot licence" },
  { icon: "/awards/06.svg", label: "Place Holder" },
  { icon: "/awards/06.svg", label: "Place Holder" },
  { icon: "/awards/06.svg", label: "Place Holder" },
];

export default function AwardsBenefits() {
  return (
    <section className="py-12  overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Awards &amp; Benefits
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 font-medium md:text-lg "
        >
          What students and schools gain
        </motion.p>
      </div>

      {/* Carousel */}
      <div className=" relative">
        <div className="absolute h-full left-0 w-0 lg:w-60 xl:w-80 bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute h-full right-0 w-0 lg:w-60 xl:w-80 bg-linear-to-l from-white to-transparent z-10"></div>
        <Marquee speed={40} pauseOnHover className="mt-8">
          {awards.map((item, index) => (
            <div
              key={index}
              className="mx-3 md:mx-6 flex flex-col items-center"
            >
              {/* Circle */}
              <div
                className={`w-36 md:w-44 h-36 md:h-44 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 shadow-lg`}
              >
                <img src={item.icon} alt={item.label} className={` `} />
              </div>

              {/* Label */}
              <p
                className={`mt-4 md:text-lg font-medium  text-wrap            `}
              >
                {item.label}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
