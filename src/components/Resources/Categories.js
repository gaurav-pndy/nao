"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "For Schools",
    color: "bg-[#ea7d18]",
    items: [
      { name: "NAO Overview Brochure", href: "#", size: "TBD" },
      { name: "School Guidebook", href: "#", size: "TBD" },
      { name: "School Registration Guide", href: "#", size: "TBD" },
      { name: "MoU Template", href: "#", size: "TBD" },
      { name: "NAO Posters — A3 & A4 Printable", href: "#", size: "TBD" },
      { name: "School Presentation Deck", href: "#", size: "TBD" },
    ],
  },
  {
    title: "For Students",
    color: "bg-[#63b34b]",
    items: [
      { name: "Olympiad Syllabus", href: "/docs/NAO_2026_Olympiad_Syllabus.pdf", size: "TBD" },
      { name: "Examination Structure", href: "/docs/NAO_2026_Examination_Structure.pdf", size: "TBD" },
      { name: "Practice Questions Bank", href: "#", size: "TBD" },
      { name: "Aviation Glossary", href: "#", size: "TBD" },
      { name: "Recommended Reading List", href: "#", size: "TBD" },
    ],
  },
  {
    title: "For Coordinators",
    color: "bg-[#56a6b1]",
    items: [
      { name: "Coordinator Handbook", href: "#", size: "TBD" },
      { name: "Student Registration Template", href: "#", size: "TBD" },
      { name: "Data Upload Guidelines", href: "#", size: "TBD" },
      { name: "Communication Templates — Letters, Emails", href: "#", size: "TBD" },
      { name: "FAQ & Troubleshooting Guide", href: "#", size: "TBD" },
    ],
  },
  {
    title: "Media Resources",
    color: "bg-[#0061e5]",
    items: [
      { name: "NAO Logo Pack — All formats", href: "#", size: "TBD" },
      { name: "Brand Guidelines", href: "#", size: "TBD" },
      { name: "Event Photos — High Resolution", href: "#", size: "TBD" },
      { name: "NAO Fact Sheet", href: "#", size: "TBD" },
      { name: "Press Release Template", href: "#", size: "TBD" },
    ],
  },
];

export default function Categories() {
  return (
    <section id="downloadable-resources"  className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          Downloadable Resources
        </motion.h2>

        <p className="mt-4 max-w-3xl mx-auto md:text-lg font-medium">
          Choose a category and click the icon to download the file. Actual links
          will be populated once assets are available.
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
              <ul className="px-4 py-2 font-medium text-left">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="py-2.5 border-b-2 border-dashed border-slate-400 last:border-none"
                  >
                    <a
                      href={item.href}
                      className="flex justify-between items-center hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{item.name}</span>
                      <span className="flex items-center space-x-1 text-sm text-slate-600">
                        {/* download icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                          />
                        </svg>
                        <span>{item.size}</span>
                      </span>
                    </a>
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
