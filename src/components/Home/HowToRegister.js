"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "Schools",
    image: "/participate/school.png",
    bg: "bg-[#2894d1]",
    text: "text-white",
    button: "Register Your School",
    href: "",
    steps: [
      {
        title: "Authorization",
        desc: "Principal or authorized teacher registers the school as an Examination Centre with official documentation.",
      },
      {
        title: "Enrollment",
        desc: "School enrolls eligible students from Classes 8–12 with required documentation and consent forms.",
      },
      {
        title: "Examination",
        desc: "School receives examination materials and guidelines for conducting Phase 1 examination at their premises.",
      },
      {
        title: "Note",
        desc: "School onboarding is FREE OF COST. Schools receive a Unique School Code, Welcome Kit (handbook, posters, creatives), and a Portal to upload student registrations.",
      },
    ],
  },
  {
    title: "Experts",
    image: "/participate/expert.png",
    bg: "bg-yellow",
    text: "text-blue",
    button: "Register as an Expert",
    href: "",
    steps: [
      {
        title: "Eligibility",
        desc: "Professionals from academia (40%), industry (30%), or policy/regulatory sectors (30%) can apply.",
      },
      {
        title: "Review",
        desc: "Applications reviewed by NAO team. Selected experts invited to join the committee.",
      },
      {
        title: "Committee",
        desc: "Collaborate on curriculum planning, examination design, mentorship, and evaluation guidelines.",
      },
    ],
  },
  {
    title: "Individual Students",
    image: "/participate/school.png", 
    bg: "bg-[#0061e5]",
    text: "text-white",
    button: "Register as Individual",
    href: "", 
    steps: [
      {
        title: "Eligibility",
        desc: "For homeschooled students, NIOS students, international or embassy-nominated candidates, and students from non‑participating schools.",
      },
      {
        title: "Registration",
        desc: "Student registers individually with valid ID (Aadhaar/Passport), parent/guardian consent form, and IT undertaking form.",
      },
      {
        title: "Examination",
        desc: "Individual Registration students take NAO 2026 ONLY in Online Mode. Must ensure availability of personal mobile/laptop. Fee structure is different and higher—see Fee Structure section below.",
      },
    ],
  },
  {
    title: "Volunteers & Coordinators",
    image: "/participate/expert.png", 
    bg: "bg-green-500",
    text: "text-white",
    button: "Register as Volunteer",
    href: "", 
    steps: [
      {
        title: "Expression of Interest",
        desc: "Teachers, college students, and professionals can express interest in volunteering as regional/school-level coordinators.",
      },
      {
        title: "Orientation",
        desc: "Selected volunteers receive orientation on NAO processes, timelines, and responsibilities.",
      },
      {
        title: "Execution",
        desc: "Assist with school outreach, examination logistics, and event coordination in their region.",
      },
    ],
  },
];

export default function HowToRegister() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl mb-8 text-center font-bold text-orange"
        >
          How to Register
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${card.bg} ${card.text} rounded-4xl px-4 py-8 flex flex-col justify-between h-full`}
            >
              {/* Header */}
              <div className="text-center mb-6 flex flex-col items-center justify-center h-40">
                <h3 className="text-2xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-20 w-auto mt-3" 
                  onError={(e)=>{e.target.src='/participate/school.png';}} 
                />
              </div>

              {/* Steps */}
              <div className="space-y-5 flex-1">
                {card.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#dbe5f2] text-blue text-lg flex items-center justify-center font-semibold shrink-0 mt-1">
                      {i + 1}
                    </div>

                    <div>
                      <p className="font-semibold ">{step.title}</p>
                      <p className=" opacity-90 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={card.href}
                target="_blank"
                className="mt-8 text-center cursor-pointer bg-orange hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-3 rounded-2xl"
              >
                {card.button}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
