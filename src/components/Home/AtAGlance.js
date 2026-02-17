"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const stats = [
  {
    icon: "/glance/1.svg",
    text: "36 States & UTs participating",
  },
  {
    icon: "/glance/1.svg",
    text: "10,000+ Schools participating",
  },
  {
    icon: "/glance/1.svg",
    text: "1,00,000+ Students participating",
  },
  {
    icon: "/glance/1.svg",
    text: "145 National Finalists",
  },
  {
    icon: "/glance/1.svg",
    text: "100+ Expert Committee Members",
  },
  {
    icon: "/glance/1.svg",
    text: "₹5+ Crore Scholarships",
  },
  {
    icon: "/glance/1.svg",
    text: "1.1 Million Aviation Professionals Pipeline",
  },
  {
    icon: "/glance/1.svg",
    text: "TOP 5 Winners' education sponsored*",
  },
];

export default function NAOAtAGlance() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold "
        >
          NAO at a glance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-medium md:text-lg max-w-3xl mx-auto text-center "
        >
          The National Aviation Olympiad (NAO), organized by the Centre of
          Scientific Outreach (CSO), aims to build awareness about aviation
          while preparing students for a future-ready workforce. The Olympiad
          will also open doors for young people to explore new technologies and
          career opportunities in the aviation sector.
        </motion.p>
      </div>

      {/* Continuous Marquee */}
      <div className=" relative mt-8">
        <div className="absolute h-full left-0 w-0 lg:w-60 xl:w-80 bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute h-full right-0 w-0 lg:w-60 xl:w-80 bg-linear-to-l from-white to-transparent z-10"></div>
        <Marquee
          speed={40}
          pauseOnHover
          pauseOnClick
          gradient={false}
          className="flex  "
        >
          {stats.map((item, index) => (
            <div key={index} className="mx-2 ">
              <div className="w-60 h-64 rounded-3xl bg-[#964090] text-white p-6 flex flex-col  shadow-md">
                {/* Icon */}
                <div className="mb-6">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-14 rounded-2xl h-14"
                  />
                </div>

                {/* Text */}
                <p className="text-2xl font-medium leading-tight">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
