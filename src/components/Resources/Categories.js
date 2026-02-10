"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "For Schools",
    color: "bg-[#ea7d18]",
    items: [
      "NAO Overview",
      "School Guidebook",
      "Registration Form",
      "MoU",
      "Posters",
      "Presentation",
    ],
  },
  {
    title: "For Students",
    color: "bg-[#63b34b]",
    items: [
      "Syllabus",
      "Sample papers",
      "Practice questions",
      "Aviation glossary",
      "Formula sheets",
    ],
  },
  {
    title: "For Coordinators",
    color: "bg-[#56a6b1]",
    items: [
      "Handbook",
      "Registration template",
      "Upload guidelines",
      "Communication templates",
      "Troubleshooting guide",
    ],
  },
  {
    title: "Media Resources",
    color: "bg-[#0061e5]",
    items: [
      "Logos",
      "Branding guidelines",
      "Photos",
      "Fact sheets",
      "Press release template",
    ],
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Categories
        </motion.h2>

        <p className="mt-4 max-w-3xl mx-auto md:text-lg font-medium">
          {" "}
          Download the resources here.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl overflow-hidden bg-[#edf2f8]"
            >
              {/* Header */}
              <div
                className={`${cat.color} text-white text-xl font-semibold py-2.5`}
              >
                {cat.title}
              </div>

              {/* List */}
              <ul className="px-4 py-2 font-medium ">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 border-b-2 border-dashed border-slate-400 last:border-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
