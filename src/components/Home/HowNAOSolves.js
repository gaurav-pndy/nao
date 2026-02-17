"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Pan-India\nAwareness",
    image: "/how/01.png",
  },
  {
    title: "Rigorous\nAssessment",
    image: "/how/02.png",
  },
  {
    title: "Career\nGuidance",
    image: "/how/03.png",
  },
  {
    title: "Scholarship\nAssistance",
    image: "/how/04.png",
  },
];

export default function HowNAOSolves() {
  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          How NAO solves this gap
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-medium md:text-lg "
        >
          NAO is more than just an Olympiad <br /> It is an ecosystem that
          connects students, workforce, industry, and policymakers.
        </motion.p>

        {/* Items */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center"
            >
              {/* Icon Circle */}
              <div className=" rounded-full  flex items-center justify-center ">
                <img
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  className="w-36 h-36"
                />
              </div>

              {/* Title */}
              <p className="mt-4 text-lg font-medium text-red leading-tight whitespace-pre-line">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
