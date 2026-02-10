"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in the National Aviation Olympiad?",
    answer:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    highlighted: false,
  },
  {
    question: "What is the registration fee and process?",
    answer:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    highlighted: true,
  },
  {
    question: "How are the examination centres selected?",
    answer:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
    highlighted: false,
  },
  {
    question: "What study materials are provided?",
    answer:
      "The National Aviation Olympiad is open to all students currently enrolled in Classes 8 through 12 in any recognized school across India. Students must be registered through their school or individually with proper documentation.",
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
              className={`rounded-xl overflow-hidden transition-colors`}
            >
              <h3
                className={`font-semibold p-6 min-h-32 md:min-h-40 text-2xl md:text-3xl  ${
                  faq.highlighted ? "bg-[#303030] text-white" : "bg-[#f7f7f7] "
                } `}
              >
                {faq.question}
              </h3>

              <p
                className={` p-6  text-lg leading-tight ${
                  faq.highlighted ? "bg-orange text-white" : "bg-[#fefefe] "
                } `}
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
