"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";


export const tiers = [
  {
    name: "Lead Sponsorship",
    has: [true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Content Sponsorship",
    has: [true, true, true, true, true, false, false, false, false, false],
  },
  {
    name: "Demographic Sponsorship",
    has: [true, false, false, true, true, false, true, false, false, false],
  },
];
const combined = [
  "Logo on NAO website, materials & certificates",
  "Branding at all NAO events & examination centres",
  "Digital visibility across NAO social media channels",
  "Speaking & jury opportunities at Zonal & National rounds",
  "Co-branded content & press releases",
  "Access to NAO Talent Registry (for recruitment-oriented partners)",
  "Dedicated impact report with metrics",
  "Scholarship naming rights (for scholarship sponsors)",
  "Exhibition / booth space at National Finals",
  "Feature in NAO Annual Report & Newsletter",
].map((text, idx) => {
  const freq = tiers.reduce((sum, t) => sum + (t.has[idx] ? 1 : 0), 0);
  return { text, idx, freq };
});
combined.sort((a, b) => b.freq - a.freq);

export default function WhatYouGet() {
  const [hoveredCol, setHoveredCol] = useState(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-4"
        >
          Sponsorship Deliverables
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-700 mb-8"
        >
          Comprehensive engagement across digital, physical, and experiential touchpoints
        </motion.p>

        {/* comparison matrix */}
        <div className="relative overflow-x-auto rounded-lg shadow-md">
          <table className="w-full table-fixed border-collapse">
            <thead className="bg-white">
              <motion.tr
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <th className="text-left p-3"></th>
                {tiers.map((tier, idx) => (
                  <th
                    key={idx}
                    className="p-3 text-center font-medium whitespace-nowrap cursor-default"
                    onMouseEnter={() => setHoveredCol(idx)}
                    onMouseLeave={() => setHoveredCol(null)}
                    style={{ position: 'sticky', top: 0, zIndex: 10 }}
                  >
                    {tier.name}
                  </th>
                ))}
              </motion.tr>
            </thead>
            <motion.tbody>
              {combined.map((entry, row) => (
                <motion.tr
                  key={row}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: row * 0.03 }}
                  className={`border-t ${
                    row % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-yellow/10 cursor-default`}
                >
                  <td className="p-3 align-top text-sm text-left max-w-xs">
                    {entry.text}
                  </td>
                  {tiers.map((tier, col) => (
                    <td
                      key={col}
                      className={`p-3 text-center align-top ${
                        hoveredCol === col ? 'bg-yellow/20' : ''
                      }`}
                    >
                      {tier.has[entry.idx] ? (
                        <FaCheck className="text-green-600 mx-auto text-xl" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
