"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeeStructure() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-center font-bold text-orange mb-4">
            Fee Structure
          </h2>

          {/* Tagline */}
          <p className="max-w-3xl mx-auto text-lg font-medium leading-tight text-gray-700 mb-12 text-center">
            Affordable participation with special concessions for government
            schools, girl students, and economically disadvantaged groups.
          </p>

          {/* Comparison Table */}
          <div className="w-full rounded-lg overflow-hidden shadow">
            <table className="min-w-full table-auto bg-white rounded-lg shadow border-separate" style={{ borderSpacing: 0 }}>
              <thead>
                <tr className="bg-gradient-to-r from-[#12355b] to-[#1a3e6b] text-white sticky top-0 z-10">
                  <th className="p-4 text-left uppercase tracking-wide">Category</th>
                  <th colSpan={2} className="p-4 text-center uppercase tracking-wide">
                    Early Bird (Till 30 Apr 2026)
                  </th>
                  <th colSpan={2} className="p-4 text-center uppercase tracking-wide">
                    Regular (1 May – 15 Jul 2026)
                  </th>
                </tr>
                <tr className="bg-gradient-to-r from-[#1a3e6b] to-[#274d7f] text-white">
                  <th />
                  <th className="p-4 text-center font-semibold">Boys</th>
                  <th className="p-2 text-center font-semibold">Girls</th>
                  <th className="p-2 text-center font-semibold">Boys</th>
                  <th className="p-2 text-center font-semibold">Girls</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  {
                    cat: "Private Schools",
                    earlyBoys: "₹ 200",
                    earlyGirls: "₹ 160",
                    regBoys: "₹ 250",
                    regGirls: "₹ 200",
                    icon: "🏫"
                  },
                  {
                    cat: "Government & Aided Schools",
                    earlyBoys: "₹ 75",
                    earlyGirls: "₹ 50",
                    regBoys: "₹ 100",
                    regGirls: "₹ 75",
                    icon: "🏛️"
                  },
                  {
                    cat: "Individual Registration (Special Case)",
                    earlyBoys: "₹ 500",
                    earlyGirls: "₹ 400",
                    regBoys: "₹ 750",
                    regGirls: "₹ 600",
                    icon: "🧑‍🎓"
                  },
                ].map((row, idx, arr) => (
                  <motion.tr
                    key={row.cat}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 ${idx === arr.length-1? 'rounded-b-lg':''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <td className="p-4 font-medium flex items-center gap-2">
                      <span className="text-lg">{row.icon}</span>
                      {row.cat}
                    </td>
                    <td className="p-4 text-center bg-blue-50 text-sm font-semibold">{row.earlyBoys}</td>
                    <td className="p-4 text-center bg-blue-50 text-sm font-semibold">{row.earlyGirls}</td>
                    <td className="p-4 text-center bg-green-50 text-sm font-semibold">{row.regBoys}</td>
                    <td className="p-4 text-center bg-green-50 text-sm font-semibold">{row.regGirls}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden mt-6 space-y-4">
            {[
              {
                cat: "Private Schools",
                earlyBoys: "₹ 200",
                earlyGirls: "₹ 160",
                regBoys: "₹ 250",
                regGirls: "₹ 200",
              },
              {
                cat: "Government & Aided Schools",
                earlyBoys: "₹ 75",
                earlyGirls: "₹ 50",
                regBoys: "₹ 100",
                regGirls: "₹ 75",
              },
              {
                cat: "Individual Registration (Special Case)",
                earlyBoys: "₹ 500",
                earlyGirls: "₹ 400",
                regBoys: "₹ 750",
                regGirls: "₹ 600",
              },
            ].map((row, idx) => (
              <motion.div
                key={row.cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow p-4"
              >
                <h4 className="font-semibold mb-2">{row.cat}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium text-gray-700">Early Boys:</div>
                  <div>{row.earlyBoys}</div>
                  <div className="font-medium text-gray-700">Early Girls:</div>
                  <div>{row.earlyGirls}</div>
                  <div className="font-medium text-gray-700">Regular Boys:</div>
                  <div>{row.regBoys}</div>
                  <div className="font-medium text-gray-700">Regular Girls:</div>
                  <div>{row.regGirls}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-4 text-sm text-green-700 font-semibold align-middle text-center">
            Note: 20% Discount on Registration rates are provided for Female
            Candidates to encourage diversity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
