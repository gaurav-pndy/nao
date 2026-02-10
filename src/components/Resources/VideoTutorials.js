"use client";

import { motion } from "framer-motion";

const tutorials = [
  "Upload data (7 min)",
  "Access mock tests (4 min)",
  "Navigate dashboard (6 min)",
  "Exam day tips (5 min)",
  "Upload data (7 min)",
];

export default function VideoTutorials() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f8fafd] rounded-2xl p-6  lg:p-12"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl text-center font-bold text-orange">
            Video Tutorials
          </h2>

          {/* Content */}
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
            {/* Video Placeholder */}
            <div className="md:w-[60%] ">
              <img
                src="/resources/Video.png"
                alt="Video tutorial"
                className=" max-h-84 h-full rounded-lg"
              />

              <p className="mt-3 text-[#0061e5] text-lg  lg:text-2xl ">
                How to register (5 min)
              </p>
            </div>

            {/* Video List */}
            <ul className="w-full md:w-[40%] text-left text-[#0061e5] text-lg lg:text-2xl ">
              {tutorials.map((item, index) => (
                <li
                  key={index}
                  className="py-2.5 lg:py-4 xl:py-5 last:pb-0 first:pt-0 border-b-2 border-dashed border-slate-400 last:border-none cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
