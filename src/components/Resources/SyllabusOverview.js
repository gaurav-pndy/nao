"use client";

import { motion } from "framer-motion";

export default function SyllabusOverview() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-orange text-center mb-4"
        >
          Syllabus Overview
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-semibold mb-8"
        >
          Structured curriculum aligned with ICAO NGAP frameworks and STEM
          fundamentals
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Group 1 */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: '0 15px 25px rgba(0,0,0,0.15)'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6 bg-yellow/10 rounded-lg p-6 shadow-md border-l-4 border-yellow"
          >
            <h3 className="text-xl font-semibold text-yellow-700">Classes 8, 9 &amp; 10</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2 text-orange-500">Section A – Core Aviation</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  <li>Basics of Flight</li>
                  <li>Aircraft Types &amp; Engines</li>
                  <li>Airports</li>
                  <li>Regulators</li>
                  <li>Aviation History</li>
                  <li>Aviation Incidents</li>
                </ol>
              </div>
              <div>
                <p className="font-semibold mb-2 text-orange-500">Section B – STEM &amp; Reasoning</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Reasoning</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Group 2 */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: '0 15px 25px rgba(0,0,0,0.15)'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6 bg-orange/10 rounded-lg p-6 shadow-md border-l-4 border-orange"
          >
            <h3 className="text-xl font-semibold text-orange-700">Classes 11 &amp; 12</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2 text-orange-500">Section A – Core Aviation</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  <li>Flight Mechanics &amp; Aerodynamics</li>
                  <li>Aircraft Systems &amp; Engines</li>
                  <li>ATC &amp; Meteorology</li>
                  <li>Navigation &amp; UAV Rules</li>
                  <li>Aviation Law</li>
                  <li>Aviation History &amp; Case Studies</li>
                </ol>
              </div>
              <div>
                <p className="font-semibold mb-2 text-orange-500">Section B – STEM &amp; Reasoning</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Reasoning</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <a
            href="/docs/NAO_Detailed_Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Detailed Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}
