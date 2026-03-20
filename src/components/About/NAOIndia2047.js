"use client";

import { motion } from "framer-motion";

export default function NAOIndia2047() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-4"
        >
          NAO &amp; India @ 2047
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center italic mb-6"
        >
          NAO is not just a competition — it is a national capability-building mission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* 2030 Goals */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden border-l-8 border-orange-500"
          >
            <p className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full" />
              By 2030, NAO aims to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-900">
              <li>Reach 1 crore+ students</li>
              <li>Establish 10 NAO regional hubs</li>
              <li>Provide 10,000+ scholarships</li>
              <li>Become the largest youth aviation movement in Asia</li>
            </ul>
          </motion.div>

          {/* 2047 Goals */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden border-l-8 border-blue-500"
          >
            <p className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full" />
              By 2047, NAO aims to contribute to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-900">
              <li>Making India the world’s 3rd-largest aviation market</li>
              <li>Aviation and drone superpower status</li>
              <li>A globally recognised aerospace workforce</li>
              <li>Sustainable aviation leadership</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
