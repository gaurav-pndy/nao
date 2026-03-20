"use client";

import { motion } from "framer-motion";

export default function ImportantDates() {
  const dates = [
    { event: "School Registration Opens", date: "17 October 2025" },
    { event: "Mock Tests Available", date: "From 15 April 2026" },
    { event: "Student Registration Deadline", date: "31 July 2026" },
    { event: "Phase 1 — North Zone", date: "19 August 2026" },
    { event: "Phase 1 — East Zone", date: "20 August 2026" },
    { event: "Phase 1 — West Zone", date: "21 August 2026" },
    { event: "Phase 1 — South Zone", date: "22 August 2026" },
    { event: "Phase 1 — UT Zone", date: "23 August 2026" },
    { event: "Phase 1 Results", date: "15 September 2026" },
    { event: "Phase 2 — State/UT Rounds", date: "Third week of October 2026" },
    { event: "Phase 3 — National Finale", date: "7 December 2026" },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-2"
        >
          Important Dates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-700 mb-15"
        >
          All dates have been taken from the official guidebook. Plan ahead!
        </motion.p>

        {/* Cards grid -- calendar style fixed rows with explicit grouping */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {[
            // first row: school open, mock tests, registration deadline
            [dates[0], dates[1], dates[2]],
            // second row: 5 phase‑1 calendars
            dates.slice(3, 8),
            // third row: phase results and later rounds
            [dates[8], dates[9], dates[10]],
          ].map((row, ridx) => (
            <div
              key={ridx}
              className={`${ridx === 1 ? "grid grid-cols-5 justify-center gap-6 pt-8" : "flex justify-center flex-wrap gap-6"}`}
            >
              {row.map((item, idx) => {
                const [firstLine, secondLine] = item.date.split(/ (\d{4})$/).filter(Boolean);
                const colorClasses = [
                  "bg-orange-500",
                  "bg-green-500",
                  "bg-blue-500",
                  "bg-purple-500",
                  "bg-red-500",
                  "bg-teal-500",
                  "bg-pink-500",
                ];
                const globalIndex = ridx * 5 + idx;
                const bg = colorClasses[globalIndex % colorClasses.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (ridx * 5 + idx) * 0.1 }}
                    className={`${bg} relative rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-40 h-40 text-white hover:scale-105 transform transition`}
                  >
                    <div className="absolute -top-3 left-1/4 w-6 h-6 bg-yellow-400 rounded-b-full drop-shadow-md"></div>
                    <div className="absolute -top-3 right-1/4 w-6 h-6 bg-yellow-400 rounded-b-full drop-shadow-md"></div>

                    <p className="text-center text-xs uppercase tracking-wider">
                      {item.event}
                    </p>
                    <div className="border-t border-dashed border-white w-full my-1"></div>
                    <p className="text-center text-xl font-bold leading-tight">
                      {firstLine}
                    </p>
                    {secondLine && (
                      <p className="text-center text-xs mt-1">
                        {secondLine}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
