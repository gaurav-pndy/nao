"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GovernanceStructure() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section headline and tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-4"
        >
          NAO Governance Structure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-700 mb-8"
        >
          A structured governance model ensuring academic rigor, industry
          credibility, and operational excellence
        </motion.p>

        {/* Flowchart */}
        <div className="relative flex flex-col items-center">

          {/* top tier: advisory + expert side by side */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-blue-50 border border-blue-300 rounded-lg p-6 w-56 text-center shadow-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:w-px after:h-16 after:bg-gray-300 after:transform after:origin-top after:-translate-x-1/2 after:-rotate-45"
            >
              <p className="font-semibold">Advisory Committee</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-blue-50 border border-blue-300 rounded-lg p-6 w-56 text-center shadow-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:w-px after:h-16 after:bg-gray-300 after:transform after:origin-top after:-translate-x-1/2 after:rotate-45"
            >
              <p className="font-semibold">Expert Committee</p>
            </motion.div>
          </div>
          {/* connectors moved into card pseudo-elements (see classes on top tier divs) */}

          {/* bottom tier: secretariat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-300 rounded-lg p-6 w-64 text-center shadow-sm"
          >
            <p className="font-semibold">NAO Secretariat</p>
          </motion.div>


        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-700 text-center max-w-3xl mx-auto"
        >
          The National Aviation Olympiad is governed by a three-tier structure
          that brings together strategic vision, domain expertise, and
          operational execution. The NAO Council provides overarching
          direction, supported by an Advisory Council of distinguished leaders,
          a 100+ member Expert Committee for academic and technical guidance,
          and the NAO Secretariat for day-to-day operations.
        </motion.p>
      </div>
    </section>
  );
}
