"use client";

import { motion } from "framer-motion";

export default function AdvisoryCommittee() {
  const members = [
    {
      salutation: "Shri.",
      name: "C. P. Radhakrishnan",
      designation: "Hon’ble Vice President of India",
      organisation: "Government of India",
      location: "New Delhi, India",
      domain: "Government / Policy",
    },
    {
      salutation: "Dr.",
      name: "Meera Nair",
      designation: "Member, NITI Aayog",
      organisation: "NITI Aayog",
      location: "New Delhi, India",
      domain: "Policy",
    },
    {
      salutation: "Air Marshal",
      name: "Rajiv Khanna (Retd.)",
      designation: "Former Air Officer Commanding-in-Chief",
      organisation: "Indian Air Force",
      location: "Bengaluru, India",
      domain: "Defence",
    },
    {
      salutation: "Dr.",
      name: "Asha Rao",
      designation: "Director General",
      organisation: "DGCA",
      location: "New Delhi, India",
      domain: "Aviation Regulation",
    },
    {
      salutation: "Shri.",
      name: "Karan Desai",
      designation: "Chairman",
      organisation: "Airports Authority of India",
      location: "New Delhi, India",
      domain: "Infrastructure",
    },
    {
      salutation: "Prof.",
      name: "Rita Singh",
      designation: "Director",
      organisation: "IIT Bombay",
      location: "Mumbai, India",
      domain: "Academia",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            NAO Advisory Committee
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            The NAO Advisory Council comprises eminent leaders from aviation,
            defence, aerospace, government, and academia who provide strategic
            direction and institutional credibility to the Olympiad. Their
            guidance shapes NAO’s vision, partnerships, and national impact.
          </p>
        </motion.div>

        {/* member grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* photo placeholder */}
              <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-lg">
                {m.salutation} {m.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{m.designation}</p>
              <p className="text-sm text-gray-500">{m.organisation}</p>
              <p className="text-xs text-gray-400 mt-1">{m.location}</p>
              <span className="mt-2 inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                {m.domain}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
