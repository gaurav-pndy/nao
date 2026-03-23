"use client";

import { motion } from "framer-motion";
import { FiLink, FiGlobe } from "react-icons/fi";
import {
  FaGavel,
  FaPlane,
  FaUniversity,
  FaGlobeAmericas,
  FaPlaneDeparture,
  FaCity,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";

const links = [
  {
    label: "DGCA",
    href: "https://www.dgca.gov.in",
    desc: "Directorate General of Civil Aviation",
    icon: FaGavel,
  },
  {
    label: "AAI",
    href: "https://www.aai.aero",
    desc: "Airports Authority of India",
    icon: FaPlane,
  },
  {
    label: "MOCA",
    href: "https://www.civilaviation.gov.in",
    desc: "Ministry of Civil Aviation",
    icon: FaCity,
  },
  {
    label: "IATA",
    href: "https://www.iata.org",
    desc: "International Air Transport Association",
    icon: FaPlaneDeparture,
  },
  {
    label: "ICAO",
    href: "https://www.icao.int",
    desc: "International Civil Aviation Organization",
    icon: FaGlobeAmericas,
  },
  {
    label: "NSDC",
    href: "https://nsdcindia.org",
    desc: "National Skill Development Corporation",
    icon: FaGraduationCap,
  },
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
        <p className="mt-2 text-lg text-center text-slate-700">
          Useful references for aviation enthusiasts
        </p>

        {/* Links */}
        <div className="mt-8 space-y-1">
          {links.map((item, index) => {
            const Icon = item.icon || FiLink;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col justify-center bg-[#964090] hover:bg-[#652a61] text-white rounded-md transition-all duration-300 border border-transparent hover:border-white/30"
              >
                <div className="flex items-center w-full px-4 py-4 gap-4">
                  <div className="flex items-center space-x-1 shrink-0">
                    <div className="bg-white/20 rounded-full p-0.5">
                      <Icon className="text-base text-white" />
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>

                  <p className="text-sm font-semibold italic text-white flex-1 mx-3">
                    {item.desc}
                  </p>

                  <FiLink className="text-base shrink-0 ml-auto" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
