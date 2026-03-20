"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaBullseye, FaHandsHelping, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

const cards = [
  {
    icon: <FaGlobe className="text-3xl text-blue-600" />, 
    title: "Pan-India Reach",
    text: "Access 10,000+ schools and 1,50,000+ students across 36 States & UTs. More than 1 Million+ Outreach Engagements."
  },
  {
    icon: <FaBullseye className="text-3xl text-green-600" />, 
    title: "Brand Visibility",
    text: "Logo placement across all NAO materials, events, digital platforms, and media coverage."
  },
  {
    icon: <FaHandsHelping className="text-3xl text-yellow-600" />, 
    title: "CSR Alignment",
    text: "Direct contribution to India’s aviation workforce development and skill building initiatives."
  },
  {
    icon: <FaUsers className="text-3xl text-red-600" />, 
    title: "Talent Pipeline Access",
    text: "Early access to India’s top-performing aviation-aspiring students for future recruitment."
  },
  {
    icon: <FaLightbulb className="text-3xl text-purple-600" />, 
    title: "Thought Leadership",
    text: "Speaking opportunities, jury participation, and co-branded content at national events."
  },
  {
    icon: <FaChartLine className="text-3xl text-indigo-600" />, 
    title: "Impact Reporting",
    text: "Detailed impact reports with reach metrics, engagement data, and CSR documentation."
  },
];

export default function WhyPartner() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center text-orange font-bold mb-4"
        >
          Why Partner with NAO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-lg font-medium mb-10"
        >
          Explore partnership opportunities with India’s premier aviation education movement
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
              <p className="text-gray-700">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}