"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Academic Partners",
    cards: ["#a4d6d4", "#c9e6e9", "#ffe495"],
  },
  {
    title: "Industry Partners",
    cards: ["#ffe495", "#c9e6e9", "#a4d6d4"],
  },
  {
    title: "Government Partners",
    cards: ["#a4d6d4", "#c9e6e9", "#ffe495"],
  },
  {
    title: "Media Partners",
    cards: ["#ffe495", "#c9e6e9", "#a4d6d4"],
  },
];

export default function PartnerOrganizations() {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Partner Organizations
        </motion.h2>

        {/* Sections */}
        <div className="space-y-10 mt-8">
          {sections.map((section, sIndex) => (
            <div key={section.title}>
              <h3 className="text-center text-2xl font-semibold  mb-6">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {section.cards.map((color, cIndex) => (
                  <motion.div
                    key={cIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: cIndex * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="h-40 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
