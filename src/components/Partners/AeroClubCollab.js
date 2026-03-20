"use client";

import { motion } from "framer-motion";
import {
  FiBox,
  FiUsers,
  FiAward,
  FiGlobe,
  FiBriefcase,
  FiDownload,
  FiMail,
} from "react-icons/fi";
import { FaPlane, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";

export default function AeroClubCollab() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-orange mb-2 flex items-center justify-center gap-2"
        >
          College Aero Club & Aviation Society Collaboration
        </motion.h2>
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-700 mb-2 max-w-2xl mx-auto"
        >
          Empowering college Aero Clubs to drive grassroots aviation outreach across India
        </motion.p>

        {/* Overview card (highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-yellow/20 rounded-2xl p-6 md:p-10 shadow-lg mb-12 border-l-8 border-orange ring-2 ring-orange/20 flex flex-col justify-center"
        >
          <div className="flex items-center mb-4 justify-center">
            <FaPlane className="text-3xl text-orange mr-3" />
            <h3 className="text-xl md:text-2xl font-semibold text-orange">
              Aero Club Collaboration Overview
            </h3>
          </div>
          <p className="text-gray-800 leading-relaxed text-center">
            NAO collaborates with college-level Aero Clubs, Technical
            Associations and Aviation Societies to extend aviation awareness to
            school students through hands-on workshops, drone demonstrations,
            and career orientation sessions. Aero Clubs serve as regional
            outreach partners, delivering locally contextualized programs —
            including sessions in regional languages — to maximize student
            engagement.
          </p>
        </motion.div>

        {/* Types of Outreach Activities */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center text-slate-800 mb-4"
        >
          Types of Outreach Activities
        </motion.h3>
        <motion.div
          className="bg-white rounded-2xl p-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: FaPlane, label: "Aero-modelling & flight demos" },
            { icon: TbDrone, label: "Drone safety & regulation" },
            { icon: FaChalkboardTeacher, label: "Intro lectures" },
            { icon: FaBook, label: "Career awareness talks" },
            { icon: FiBox, label: "STEM activity programs" },
            { icon: FiGlobe, label: "NAO awareness drives" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue/20 mb-2">
                  <Icon className="text-3xl text-blue" />
                </div>
                <span className="text-sm font-medium text-gray-800">{item.label}</span>
              </motion.div>
            );
          })}
          </div>
        </motion.div>

        {/* Benefits cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            {
              icon: FiBriefcase,
              title: "Financial Support",
              text: "CSO provides event funding for conducting aviation outreach activities.",
            },
            {
              icon: FiUsers,
              title: "Official Recognition",
              text: "Visibility on CSO website and NAO social media as Official Outreach Partner.",
            },
            {
              icon: FiAward,
              title: "Certificates",
              text: "One-year valid certificate for Aero Club Coordinator + volunteering certificates for student organizers.",
            },
            {
              icon: FiGlobe,
              title: "Expert Network",
              text: "Connect with NAO’s Expert Committee of 100+ aviation professionals from IITs, airlines, DGCA, ISRO, HAL, DRDO.",
            },
            {
              icon: FiUsers,
              title: "Skill Development",
              text: "Outreach planning, public engagement, event management, and leadership skills.",
            },
            {
              icon: FiBox,
              title: "Exam Centre Opportunity",
              text: "Potential to serve as a local NAO examination centre.",
            },
          ].map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:bg-yellow/50"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow/20 mt-1">
                {b.icon && <b.icon className="text-2xl text-yellow-600" />}
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">{b.title}</p>
                <p className="text-gray-700">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/partners/NAO_2026_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="bg-yellow px-6 py-3 rounded-lg font-semibold hover:bg-[#e6c400] transition-colors flex items-center gap-2"
          >
            <FiDownload /> Download Brochure
          </motion.a>
          <motion.a
            href="mailto:nao@thecso.in?subject=Aero+Club+Partnership"
            whileHover={{ scale: 1.03 }}
            className="bg-blue px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FiMail /> Partner as Aero Club 
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}