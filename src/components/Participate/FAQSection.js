"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in the National Aviation Olympiad?",
    answer:
      "NAO is open to all students enrolled in Classes 8 through 12 in any recognized school across India. Students are grouped into Group 1 (Classes 8, 9, 10) and Group 2 (Classes 11, 12).",
    highlighted: false,
  },
  {
    question: "What is the registration fee and process?",
    answer:
      "Schools register on the NAO portal and enroll their students. Fees range from ₹50 to ₹250 depending on school type and gender, with 20% discount for girl students. Individual registration is available for special cases at ₹400–₹750.",
    highlighted: false,
  },
  {
    question: "How are the examination centres selected?",
    answer:
      "Schools registered as examination centres conduct Phase 1 at their own premises. Schools need a computer lab and stable internet connection. Offline mode via OMR sheet is available for schools without IT infrastructure.",
    highlighted: false,
  },
  {
    question: "What study materials are provided?",
    answer:
      "All registered students receive access to the NAO syllabus, sample question papers, practice tests, aviation glossary, and digital learning resources via the Resources (Link Page) section of the website.",
    highlighted: false,
  },
  {
    question: "Can a student register individually without school involvement?",
    answer:
      "Yes. Homeschooled students, NIOS students, international/embassy-nominated candidates, and students from non-participating schools can register individually. Individual registrations are ONLINE MODE ONLY.",
    highlighted: false,
  },
  {
    question: "What are the three phases of NAO?",
    answer:
      "Phase 1 is a school-level screening examination (August 2026). Phase 2 consists of state/UT rounds (October 2026). Phase 3 is the National Finals in New Delhi on 7 December 2026 with 145 finalists.",
    highlighted: false,
  },
  {
    question: "Which zone does my state fall under?",
    answer:
      "India is divided into 5 zones for NAO: North (HP, Punjab, Haryana, Uttarakhand, UP), East (Bihar, Jharkhand, WB, Odisha + all NE states), West (Rajasthan, Gujarat, Maharashtra, Goa, MP, Chhattisgarh), South (AP, Telangana, Karnataka, TN, Kerala), and UT Zone (all 8 Union Territories). Check the Zone Map on this page for details.",
    highlighted: false,
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold  mb-8"
        >
          Frequently <span className="text-orange">Asked</span> Questions
        </motion.h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl overflow-hidden group transition-colors cursor-pointer h-full flex flex-col"
            >
              <h3
                className={`font-semibold p-6 text-2xl md:text-3xl rounded-t-xl
                  ${faq.highlighted ? "bg-[#303030] text-white" : "bg-[#f7f7f7] "}
                  group-hover:bg-[#303030] group-hover:text-white
                `}
              >
                {faq.question}
              </h3>

              <p
                className={`p-6 text-lg leading-tight rounded-b-xl flex-1
                  ${faq.highlighted ? "bg-orange text-white" : "bg-[#fefefe] "}
                  group-hover:bg-orange group-hover:text-white
                `}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
