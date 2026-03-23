"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBookOpen,
  FaCogs,
  FaPlaneDeparture,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

const pillars = [
  {
    title: "Awareness & Education",
    icon: FaBookOpen,
    items: [
      "Nation-wide Olympiad exam",
      "Aviation Learning Modules",
      "Career Counselling Sessions",
      "Teacher Orientation Workshops",
      "Handbooks and Digital Content",
      "Dedicated YouTube Channel",
    ],
  },
  {
    title: "Skills Development",
    icon: FaCogs,
    items: [
      "Logical reasoning",
      "Aeronautics Fundamentals",
      "Situational Judgment",
      "STEM reinforcement",
      "Innovation & problem-solving challenges",
    ],
  },
  {
    title: "Industry Exposure",
    icon: FaPlaneDeparture,
    items: [
      "Airport & ATC tower visits",
      "MRO Hangar Tours",
      "Drone Flying Training",
      "Pilot & Engineer Interactions",
      "Industry Expert Webinars",
    ],
  },
  {
    title: "Talent Identification & Indexing",
    icon: FaChartLine,
    items: [
      "National aviation aptitude ranking system",
      "NAO Aviation Talent Registry",
      "Aviation Talent Progression Support",
    ],
  },
  {
    title: "Academic & Industry Collaboration",
    icon: FaHandshake,
    items: [
      "Partnerships with educational institutions",
      "Partnerships with Skill Development bodies",
      "Partnership with DGCA approved institutes",
      "Pathway alignment with NSQF, EASA, ICAO competency models",
    ],
  },
  {
    title: "Scholarships & Inclusion",
    icon: FaGraduationCap,
    items: [
      "NAO Scholarship Fund",
      "Girl-child aviation scholarships",
      "Support for economically disadvantaged students",
    ],
  },
  {
    title: "Innovation & Research",
    icon: FaLightbulb,
    items: [
      "Innovation challenges",
      "Mini Design contests",
      "Sustainable aviation projects",
      "AI/Data-driven aviation solutions",
    ],
  },
];

export default function SolutionPillars() {
  return (
    <section className="py-12">
      <div className="max-w-340 mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-12"
        >
          NAO Strategic Framework
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <HoverCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Hover Card ------------------ */

function HoverCard({ pillar, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-3xl h-80 md:h-90 relative text-white bg-blue overflow-hidden">
        {/* Front */}
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-3xl font-semibold">{pillar.title}</h3>
          <div className="flex justify-end">
            <Icon className="text-7xl" />
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="space-y-2 list-disc pl-4 overflow-y-auto max-h-full">
            {pillar.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Icon className="text-7xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
