"use client";

import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";

const links = [
  { label: "DGCA", href: "#" },
  { label: "Aerospace organizations", href: "#" },
  { label: "STEM platforms", href: "#" },
  { label: "Career guidance", href: "#" },
  { label: "Scholarships", href: "#" },
];

export default function ExternalLinks() {
  return (
    <section className="py-12">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold text-orange"
        >
          External Links
        </motion.h2>

        {/* Links */}
        <div className="space-y-2 mt-8">
          {links.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center justify-between bg-[#964090] hover:bg-[#652a61] text-white text-xl md:text-2xl p-4 rounded transition-all duration-300"
            >
              <span className="font-medium">{item.label}</span>
              <FiLink className="text-2xl md:text-3xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
