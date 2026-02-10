"use client";

import { motion } from "framer-motion";

const stakeholders = [
  {
    title: "Educational\nInstitutions",
    icon: "/about/stakeholder/Stakeholder Ecosystem_01.svg",
  },
  {
    title: "Industry\nPartners",
    icon: "/about/stakeholder/Stakeholder Ecosystem_02.svg",
  },
  {
    title: "Government &\nRegulators",
    icon: "/about/stakeholder/Stakeholder Ecosystem_03.svg",
  },
  {
    title: "Media\n& Outreach",
    icon: "/about/stakeholder/Stakeholder Ecosystem_04.svg",
  },
];

export default function StakeholderEcosystem() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Stakeholder Ecosystem
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8">
          {stakeholders.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#0069b3] rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Circle */}
              <div className="w-28 md:w-40 h-28 md:h-40 rounded-full  flex items-center justify-center mb-6">
                <img
                  src={item.icon}
                  alt={item.title.replace("\n", " ")}
                  className="w-full h-ful"
                />
              </div>

              {/* Title */}
              <p className="text-white font-medium whitespace-pre-line  sm:text-xl  leading-tight">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
