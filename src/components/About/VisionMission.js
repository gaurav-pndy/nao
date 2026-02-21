"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Vision & Mission
        </motion.h2>

        {/* Vision */}
        <HorizontalBlock
          title="Vision"
          image="/about/vision/Vision.svg"
          text="To make aviation education accessible, aspirational, and impactful for every Indian student, particularly in rural India"
        />

        {/* Mission */}
        <HorizontalBlock
          title="Mission"
          image="/about/vision/Mission.svg"
          text="To establish NAO as India’s premier aviation talent pipeline – empowering students with knowledge, exposure, skills, and opportunities to shape the future of aviation, aerospace, and emerging air mobility technologies while contributing to global aviation excellence"
        />
      </div>
    </section>
  );
}

function HorizontalBlock({ title, image, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-blue text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-sm"
    >
      <img src={image} alt={title} className="w-40 h-40 object-contain" />

      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 ">{title}</h3>
        <p className="text-lg  leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
