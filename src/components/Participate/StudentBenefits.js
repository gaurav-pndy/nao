"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiAward, FiBookOpen, FiBriefcase, FiStar, FiCodesandbox, FiTrendingUp, FiUsers, FiGift, FiMap, FiCamera, FiGlobe, FiLayers, FiHeart, FiShield, FiClipboard, FiZap } from "react-icons/fi";

const benefits = [
  {
    icon: FiAward,
    label: "Participation",
    color: "bg-orange-100 text-orange-800",
    desc: "E-certificate for all registered participants. Lifetime access to NAO newsletters and 20% discount in next editions.",
    level: "All Participants",
  },
  {
    icon: FiBookOpen,
    label: "Academic Recognition",
    color: "bg-blue-100 text-blue-800",
    desc: "Awarded to top 3 (Middle) and top 3 (Higher) students from each school. Signed by 100+ expert committee members.",
    level: "Phase 1 – School Level",
  },
  {
    icon: FiShield,
    label: "Performance Recognition",
    color: "bg-green-100 text-green-800",
    desc: "Top 5 winners from each State/UT Zone; includes up to ₹10,000 prize and media coverage.",
    level: "Phase 2 – State/UT Round",
  },
  {
    icon: FiBriefcase,
    label: "Internship Opportunity",
    color: "bg-purple-100 text-purple-800",
    desc: "Top 5 winners from each State/UT Zone; internship coupon valid till end of Grade 12. Opportunities in aviation firms, airports, and aerospace institutions in India & abroad.",
    level: "Phase 2– State/UT Round",
  },
  {
    icon: FiStar,
    label: "National Honour",
    color: "bg-red-100 text-red-800",
    desc: "Top 5 National winners from each grade; prize up to ₹1,00,000 and national-level felicitation.",
    level: "National Finale",
  },
  {
    icon: FiCodesandbox,
    label: "Drone Pilot License",
    color: "bg-teal-100 text-teal-800",
    desc: "Fully paid drone pilot license training by DGCA-approved RPTO to all 145 finalists of National Finale.",
    level: "State/National Finalists",
  },
  {
    icon: FiTrendingUp,
    label: "Career Mentorship",
    color: "bg-yellow-100 text-yellow-800",
    desc: "One-on-one and group sessions with aviation experts and committee members (valid for 5 years).",
    level: "State/National Winners",
  },
  {
    icon: FiUsers,
    label: "Networking Opportunities",
    color: "bg-pink-100 text-pink-800",
    desc: "Interaction with global aviation leaders, institutions, and policymakers during finale.",
    level: "National Finale",
  },
  {
    icon: FiGift,
    label: "Scholarships",
    color: "bg-indigo-100 text-indigo-800",
    desc: "Free College Education for Top 5 winners for aviation education programs through NAO partners.",
    level: "National Level",
  },
  {
    icon: FiMap,
    label: "Exposure Trips",
    color: "bg-lime-100 text-lime-800",
    desc: "Visits or virtual tours of airports, ATC towers, and aerospace manufacturing units.",
    level: "State/National Finalists",
  },
  {
    icon: FiCamera,
    label: "Aviation Learning Kits",
    color: "bg-cyan-100 text-cyan-800",
    desc: "RC-Modelling aircrafts; aerodynamics kits.",
    level: "State/National Finalists",
  },
  {
    icon: FiGlobe,
    label: "Media Visibility",
    color: "bg-amber-100 text-amber-800",
    desc: "Features in aviation magazines, digital platforms, and official NAO channels.",
    level: "State/National Winners",
  },
  {
    icon: FiClipboard,
    label: "Skill Development",
    color: "bg-rose-100 text-rose-800",
    desc: "Analytical & STEM Skills – Enhances conceptual, reasoning, and application skills through multi-level testing.",
    level: "All Phases",
  },
  {
    icon: FiZap,
    label: "Community Engagement",
    color: "bg-sky-100 text-sky-800",
    desc: "Access to NAO Learning Network - Membership in the national aviation student community with continuous learning resources.",
    level: "All Participants",
  },
];

export default function StudentBenefits() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange"
        >
          Benefits for Students
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-2 text-gray-700"
        >
          A rich package of rewards, recognition and opportunities across all phases
        </motion.p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transform transition w-full cursor-pointer ${b.color} ${hoverIndex===i ? 'scale-105 z-10' : ''}`}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2 text-2xl">
                <b.icon />
              </div>
              <p className="text-sm font-medium text-center leading-tight">
                {b.label}
              </p>

              {/* inline expansion */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  hoverIndex === i
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden w-full mt-2 text-xs text-left"
              >
                  <p className="mt-1">{b.desc}</p>
                  <p className="mt-1 italic text-[10px] font-bold">
                    <span className="inline-block bg-white bg-opacity-80 px-1 rounded text-blue-800">
                      {b.level}
                    </span>
                  </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}