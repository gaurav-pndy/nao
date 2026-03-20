"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const domains = [
  "Academia & Research",
  "Aviation Industry & Airlines",
  "Aerospace & Defence",
  "Government & Regulatory",
  "STEM Education & Skill Development",
  "Drones & Emerging Technologies",
];

const domainColors = {
  Academia: '#3b82f6',
  Aviation: '#f59e0b',
  Aerospace: '#10b981',
  Government: '#6366f1',
  STEM: '#ec4899',
  Drones: '#14b8a6',
};

export default function ExpertCommittee() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);

  const members = [
    {
      name: "Prof. Ramesh Iyer",
      designation: "HOD, Aerospace Engineering",
      organisation: "IIT Bombay",
      location: "Mumbai",
      domain: "Academia & Research",
    },
    {
      name: "Capt. Anil Kapoor",
      designation: "Senior Commander",
      organisation: "Airline Name",
      location: "Delhi",
      domain: "Aviation Industry & Airlines",
    },
    {
      name: "Dr. Seema Gupta",
      designation: "Scientist ‘G’",
      organisation: "DRDO",
      location: "Chennai",
      domain: "Aerospace & Defence",
    },
    {
      name: "Shri. Vinod Rao",
      designation: "Joint Director General",
      organisation: "DGCA",
      location: "New Delhi",
      domain: "Government & Regulatory",
    },
    {
      name: "Dr. Anuradha Sen",
      designation: "Head, Aviation Division",
      organisation: "NSDC",
      location: "Noida",
      domain: "STEM Education & Skill Development",
    },
    {
      name: "Mr. Prakash Mehra",
      designation: "CEO",
      organisation: "DroneCo",
      location: "Bengaluru",
      domain: "Drones & Emerging Technologies",
    },
    {
      name: "Prof. Kavita Singh",
      designation: "Principal",
      organisation: "NIT Name",
      location: "Pune",
      domain: "Academia & Research",
    },
    {
      name: "Ms. Rhea Chawla",
      designation: "VP, Engineering",
      organisation: "Airbus India",
      location: "Hyderabad",
      domain: "Aviation Industry & Airlines",
    },
  ];

  const filtered = members.filter((m) => m.domain === activeDomain);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            NAO Expert Committee
          </h2>
          <div className="mt-4 bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto text-center space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A 100+ member Expert Committee ensuring world-class academic and
              professional credibility. Leading academicians from IITs, NITs,
              CBSE, professional experts from DRDO, ISRO, HAL, Airbus, Boeing,
              seasoned bureaucrats from DGCA, AAI, NITI Aayog, NSDC, IAF and more
              constitute NAO’s Expert Committee.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Expert Committee is responsible for curriculum design,
              examination framework, question paper setting, evaluation standards,
              mentorship programmes, and academic quality assurance across all
              phases of the Olympiad.
            </p>
          </div>
        </motion.div>

        {/* domain tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDomain(d)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeDomain === d
                  ? "bg-blue-600 text-white scale-105 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* grid of filtered members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-lg p-6 shadow-sm text-center flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 min-h-[260px] relative border-l-4"
            >
              {/* domain colour border and badge */}
              <span
                className="absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 text-xs font-semibold rounded-full text-white"
                style={{
                  backgroundColor:
                    domainColors[m.domain.split(' ')[0]] || '#3b82f6',
                }}
              >
                {m.domain.split(' ')[0]}
              </span>
              <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400">👤</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg leading-tight">{m.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.designation}</p>
                <p className="text-sm text-gray-500">{m.organisation}</p>
              </div>
              <p className="text-xs text-gray-400 mt-2">{m.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
