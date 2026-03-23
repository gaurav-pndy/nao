"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    title: "Lead Sponsorship",
    details:
      "Primary branding across all NAO events and materials, exclusive logo placement, keynote speaking slots, and high‑visibility recognition throughout the year.",
  },
  {
    title: "Content Sponsorship",
    details:
      "Support specific segments such as workshops, webinars, or curriculum modules with co‑branding and content ownership opportunities.",
  },
  {
    title: "Demographic Sponsorship",
    details:
      "Target partnerships focused on particular groups (e.g. girls, rural schools, or higher‑education aspirants) with tailored programs and reporting.",
  },
];

export default function PartnershipCategories() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-4"
        >
          Partnership Categories
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-700 mb-8"
        >
          Flexible partnership models designed to align with your objectives
        </motion.p>

        {/* Accordion */}
        <div className="space-y-3">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full flex justify-between items-center p-4 bg-[#c9e6e9]"
              >
                <span className="font-semibold">{tier.title}</span>
                <span className="text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-4 bg-white text-gray-700">
                  {tier.details}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA to download brochure */}
        <div className="mt-8 text-center">
          <a
            href="/partners/NAO_2026_Sponsorship_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow px-6 py-3 rounded-lg font-semibold hover:bg-[#e6c400] transition-colors"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
