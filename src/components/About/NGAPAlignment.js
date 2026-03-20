"use client";

import { motion } from "framer-motion";

export default function NGAPAlignment() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-8"
        >
          Aligned with ICAO’s Next Generation of Aviation Professionals (NGAP) Framework
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="leading-relaxed mb-4 text-center font-semibold italic"
        >
          NGAP is the global framework. NAO is India’s on-ground implementation mechanism.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="leading-relaxed mb-6 text-center"
        >
          NAO is envisioned as India’s flagship youth aviation program, designed to
          align seamlessly with ICAO’s NGAP framework. Where NGAP sets the global
          philosophy for addressing aviation workforce shortages across 193 member
          states, NAO converts it into actionable, grassroots implementation at the
          school level across India.
        </motion.p>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue text-white">
                <th className="p-3 text-left">Aspect</th>
                <th className="p-3 text-left">ICAO NGAP</th>
                <th className="p-3 text-left">NAO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Objective</td>
                <td className="p-3">Ensure sustainable global supply of qualified aviation professionals</td>
                <td className="p-3">Build early awareness and create a national talent pipeline</td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Scope</td>
                <td className="p-3">Global human capital development framework</td>
                <td className="p-3">National Olympiad-based awareness and selection system</td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Target Audience</td>
                <td className="p-3">University students, early-career professionals, aviation workforce</td>
                <td className="p-3">Students of Classes 8–12 across India</td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Nature</td>
                <td className="p-3">Policy-driven, strategic, long-term workforce planning</td>
                <td className="p-3">Educational, competitive, awareness-oriented with exams, workshops, school engagement</td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Implementation</td>
                <td className="p-3">Led by ICAO with CAAs, international bodies</td>
                <td className="p-3">Led by CSO with ministries, universities, industry</td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="p-3 align-top">Geographic Reach</td>
                <td className="p-3">193 ICAO member states</td>
                <td className="p-3">28 States, 8 UTs, 360+ cities across India</td>
              </tr>
            </tbody>
          </table>
          {/* Download CTA */}
          <div className="mt-6 text-center">
            <a
              href="/docs/NAO_NGAP_Alignment.pdf"
              target="_blank"
              className="inline-block bg-blue hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Download NGAP Alignment Document
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
