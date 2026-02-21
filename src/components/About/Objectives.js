"use client";

import { motion } from "framer-motion";

export default function Objectives() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold "
        >
          Objectives
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Objective
            title="Inspiration"
            text="Inspire and nurture 100,000+ students in the first edition through a structured Olympiad, mentorship, and exposure programs "
          />
          <Objective
            title="Career Awareness"
            text="Introduce students to 150+ aviation pathways across flying, MRO, aerospace engineering, ATC, airport operations, drones, and space. "
          />
          <Objective
            title="Skill Building"
            text="Develop foundational competencies in aeronautics, problem-solving, systems thinking, safety, and innovation. "
          />
          <Objective
            title="Exposure"
            text="Provide students with experiential learning through workshops, airport visits, simulators, hangar tours, and industry interactions. "
          />
          <Objective
            title="National Workforce Pipeline"
            text="e.Build a structured feeder system supporting India’s growing need for aviation professionals."
            full
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function Objective({ title, text, full }) {
  return (
    <div
      className={`flex overflow-hidden w-full  text-white rounded-2xl  ${full ? "md:col-span-2" : ""}`}
    >
      {/* <div className="p-2 h-fit rounded-lg bg-0 text-blue flex items-center justify-center text-2xl shrink-0">
        {icon}
      </div> */}
      <div className="w-full h-full">
        <h4 className="font-semibold bg-[#303030] p-4 md:p-6 w-full   text-2xl">
          {title}
        </h4>
        <p className="text-lg  h-full bg-orange p-4 md:p-6 w-full ">{text}</p>
      </div>
    </div>
  );
}
