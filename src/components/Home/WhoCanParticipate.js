"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "School Registration",
    image: "/participate/school.png",
    bg: "bg-[#2894d1]",
    text: "text-white",
    button: "Register School",
    href: "https://zfrmz.in/nvuK30qA6ivVvwe2YfG7",
    steps: [
      {
        title: "School Authorization",
        desc: "Principal or authorized teacher register the school as an Examination center with official documentation.",
      },
      {
        title: "Student Enrollment",
        desc: "Schools enroll eligible students from Classes 8–12 with required documentation and consent forms.",
      },
      {
        title: "Examination Setup",
        desc: "Schools receive examination materials and guidelines for conducting Stage 1 examinations.",
      },
    ],
  },
  {
    title: "Expert Registration",
    image: "/participate/expert.png",
    bg: "bg-yellow",
    text: "text-blue",
    button: "Register as an Expert",
    href: "https://zfrmz.in/aaJiXotostGRiyitai9U",
    steps: [
      {
        title: "Eligibility & Profile Submission",
        desc: "Professionals from academia, industry, or policy/regulatory sectors can apply. Submit a brief profile highlighting expertise in aviation, aerospace, STEM education, or policy.",
      },
      {
        title: "Review & Invitation",
        desc: "Applications will be carefully reviewed by the NAO team. Selected experts will be warmly invited to participate in the committee.",
      },
      {
        title: "Committee Involvement",
        desc: "Collaborate on curriculum planning, examination design, and evaluation guidelines.",
      },
    ],
  },
  {
    title: "Individual Registration",
    image: "/participate/school.png",
    bg: "bg-[#0061e5]",
    text: "text-white",
    button: "Register as an Individual",
    href: "/",
    steps: [
      {
        title: "School Authorization",
        desc: "Principal or authorized teacher register the school as an Examination center with official documentation.",
      },
      {
        title: "Student Enrollment",
        desc: "Schools enroll eligible students from Classes 8–12 with required documentation and consent forms.",
      },
      {
        title: "Examination Setup",
        desc: "Schools receive examination materials and guidelines for conducting Stage 1 examinations.",
      },
    ],
  },
];

export default function WhoCanParticipate() {
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
          Who can participate?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${card.bg} ${card.text} rounded-4xl px-6 py-10 flex flex-col`}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl  font-semibold mb-6">{card.title}</h3>

                <img
                  src={card.image}
                  alt={card.title}
                  className="mx-auto h-32"
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
