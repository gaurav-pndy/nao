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
      "Drone Flying Zones",
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
      "Longitudinal tracking of aspirants",
    ],
  },
  {
    title: "Academic & Industry Collaboration",
    icon: FaHandshake,
    items: [
      "Partnerships with educational institutions",
      "Partnerships with Skill Development bodies",
      "Partnership with DGCA approved institutes",
      "Pathway alignment with NSQF, EASA, ICAO competency models ",
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
          Strategic Pillars
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <FlipCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Flip Card ------------------ */

function FlipCard({ pillar, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="rounded-3xl h-80 md:h-90 relative text-white flex flex-col justify-between bg-blue"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="flex absolute inset-0 p-6  flex-col justify-between h-full  gap-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-3xl font-semibold">{pillar.title}</h3>
          <div className="flex justify-end">
            <Icon className="text-7xl " />
          </div>
        </div>

        {/* Back */}
        <div
          className="flex absolute inset-0 p-6  flex-col justify-between h-full  gap-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ul className="space-y-2 list-disc pl-4 ">
            {pillar.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Icon className="text-7xl " />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
