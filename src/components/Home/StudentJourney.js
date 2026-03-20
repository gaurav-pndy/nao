"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "School Level Examination",
    date: "August 2026",
    details: "Online / Offline School Level Screening test (90 Minutes) – Top 3 from Group 1 + Top 2 from Group 2 qualify per school.",
    icon: "/journey/01.png",
  },
  {
    phase: "Phase 2",
    title: "State/UT Rounds",
    date: "October 2026",
    details: "Online / Offline State Level Screening Test – Top 3 from Group 1 + Top 2 from Group 2 per State / UT qualify for National Level.",
    icon: "/journey/02.png",
  },
  {
    phase: "Phase 3",
    title: "National Finals",
    date: "7 December 2026",
    details: "145 National Finalists in New Delhi: quizzes, viva with aviation experts, presentations, and aviation experience sessions.",
    icon: "/journey/03.png",
  },
];

export default function StudentJourney() {
  return (
    <section className="py-12 ">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Your journey with NAO
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-medium md:text-lg "
        >
          A structured three-phase Olympiad designed to identify, nurture, and
          celebrate aviation talent.
        </motion.p>

        {/* Journey */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-8">
          {phases.map((item, index) => (
            <div
              key={item.phase}
              className="flex flex-col lg:flex-row items-center"
            >
              {/* Phase Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className=" flex items-center justify-center gap-5 lg:gap-8">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-44 shrink-0 h-44"
                  />
                  {index !== phases.length - 1 && (
                    <div className="hidden md:flex  items-center ">
                      <span className="w-8 h-8 rounded-full bg-[#dbe5f2]" />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div
                  className={`mt-4 ${
                    index !== phases.length - 1 && "md:mr-12 lg:mr-16"
                  } `}
                >
                  <p className="text-blue font-semibold">{item.phase}</p>
                  <p className="text-lg leading-5 mt-2 font-semibold text-blue">
                    {item.title}
                  </p>
                  <p className="text-sm text-blue mt-1">{item.date}</p>
                  <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">
                    {item.details}
                  </p>
                </div>
                {index !== phases.length - 1 && (
                  <div className="md:hidden mt-4 flex  items-center ">
                    <span className="w-8 h-8 rounded-full bg-[#dbe5f2]" />
                  </div>
                )}
              </motion.div>

              {/* Connector Dot (desktop only) */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
