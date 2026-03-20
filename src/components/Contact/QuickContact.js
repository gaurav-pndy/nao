"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function QuickContact() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
          style={{ letterSpacing: '0.5px' }}
        >
          Quick Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card
            icon={<FaEnvelope className="text-2xl text-blue" />}
            label="Email"
            detail={<a href="mailto:nao@thecso.in" className="underline">nao@thecso.in</a>}
          />

          <Card
            icon={<FaPhone className="text-2xl text-blue" />}
            label="Phone"
            detail={<a href="tel:+919211229927" className="underline">+91 92112 29927</a>}
          />

          <Card
            icon={<FaMapMarkerAlt className="text-2xl text-blue" />}
            label="Address"
            detail={
              <div className="space-y-1">
                <span className="block">
                  NAO Secretariat, 
                </span>
                <span className="block">
                   B–1, Third Floor,
                </span>
                <span className="block">
                  Greater Kailash Enclave II,
                </span>
                <span className="block">
                  New Delhi – 110 048, India
                </span>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon, label, detail }) {
  return (
    <motion.div whileHover={{ scale: 1.04, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} transition={{ type: "spring", stiffness: 140 }} className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex items-start gap-4 border border-transparent hover:border-blue-200">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{label}</p>
        <div className="mt-1 text-gray-700 leading-tight">{detail}</div>
      </div>
    </motion.div>
  );
}
