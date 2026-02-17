"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    title: "Market Demand",
    image: "/why/01.png",
    desc: "India is the world's 3rd largest aviation market and is projected to be the fastest growing over the next two decades.",
  },
  {
    title: "Personnel Shortage",
    image: "/why/02.png",
    desc: "India needs 1.1 million aviation professionals by 2040. Recent disruptions have exposed critical gaps in crew availability, compliance readiness, and workforce planning.",
  },
  {
    title: "Minimal Exposure",
    image: "/why/03.png",
    desc: "Aviation awareness has yet to reach rural India, leaving a vast, diverse talent pool at the grassroots completely untapped.",
  },
  {
    title: "Beyond the Cockpit",
    image: "/why/04.jpg",
    desc: "Over 150 career paths exist in aviation, yet public awareness rarely extends beyond pilots and cabin crew.",
  },
];

export default function WhyAviation() {
  return (
    <section className="py-12 pt-16">
      <div className="max-w-340 mx-auto px-4">
        {/* Outer Soft Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#edf2f8] rounded-2xl p-10 pb-15"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
          >
            Why India needs Aviation Olympiad
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => {
              const [isFlipped, setIsFlipped] = useState(false);
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl overflow-hidden perspective-1000"
                  onMouseEnter={() => setIsFlipped(true)}
                  onMouseLeave={() => setIsFlipped(false)}
                >
                  <motion.div
                    className="relative w-full h-full "
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 80,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Image */}
                    <div
                      className="relative bg-yellow rounded-[2.5rem] overflow-hidden h-full"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <h3 className="text-center absolute left-1/2 -translate-x-1/2 top-8 w-full text-2xl lg:text-xl xl:text-2xl font-semibold text-blue">
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className="absolute inset-0 rounded-3xl md:rounded-[3.5rem] overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Background image (same image, low opacity) */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30  "
                      />

                      {/* Dark overlay for contrast */}
                      <div className="absolute inset-0 bg-black/60" />

                      {/* Text */}
                      <div className="relative z-10 p-6 xl:py-10 xl:px-10 text-white flex h-full justify-center items-center text-center">
                        <p className="md:text-lg xl:text-xl leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
