"use client";

import { motion } from "framer-motion";

export default function ExpertEligibility() {
  const criteria = [
    "Academic Experts: Faculty members / researchers from IITs, NITs, IIMs, IISc, universities, or CBSE/ICSE boards with expertise in aviation, aerospace, STEM, or education.",
    "Industry Professionals: Minimum 10 years of experience in aviation, airlines, MRO, airport operations, aerospace manufacturing, or allied sectors.",
    "Government & Regulatory: Serving or retired officials from DGCA, AAI, MoCA, DRDO, ISRO, NITI Aayog, NSDC, IAF, Indian Navy (aviation wing), or equivalent bodies.",
    "Drone & Emerging Tech: Professionals working in RPAS/drone technology, urban air mobility, space-tech startups, or AI/ML applications in aviation.",
    "STEM Educators: School principals, CBSE master trainers, Olympiad coaches, or educational content developers with demonstrated expertise.",
    "International Experts: Professionals associated with ICAO, IATA, EASA, FAA, or international aviation bodies with willingness to contribute remotely.",
  ];

  return (
    <section id="eligibility" className="py-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800">
            Expert Committee – Eligibility Criteria
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed text-center">
            NAO invites distinguished professionals to contribute to India’s
            aviation education mission. If you have the expertise and the
            passion, we want you on the team.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-yellow/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 text-left border-l-4 border-yellow"
            >
              <p className="text-gray-800 text-sm leading-relaxed font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/docs/NAO_2026_Registration_Eligibility.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow px-6 py-2 rounded-lg font-semibold text-black hover:bg-[#e6c400] transition-colors w-full sm:w-1/3 text-center"
          >
            Download Eligibility Criteria (PDF)
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/expert-registration"
            rel="noopener noreferrer"
            className="bg-orange px-6 py-2 rounded-lg font-semibold text-white hover:bg-orange-600 transition-colors w-full sm:w-1/3 text-center"
          >
            Apply to Join the Expert Committee
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
