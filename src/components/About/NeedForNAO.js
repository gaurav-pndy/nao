"use client";

import { motion } from "framer-motion";

export default function NeedForNAO() {
  return (
    <section className="">
      <div className="bg-yellow  space-y-10">
        {/* Need for NAO */}
        <div className="max-w-7xl mx-auto  rounded-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse lg:flex-row items-center xl:items-start lg:justify-between gap-10"
          >
            {" "}
            {/* Text */}{" "}
            <div className="py-6 md:py-12">
              {" "}
              <h3 className="text-3xl lg:text-4xl mb-8 font-bold ">
                {" "}
                Why NAO Exists{" "}
              </h3>{" "}
              <p className="  leading-tight lg:max-w-2xl font-medium mb-2">
                {" "}
                India is entering a transformative era in aviation. With
                unprecedented growth in air travel, projected fleet expansion,
                emerging drone ecosystems, and increasing global interest in
                aerospace, the nation faces an urgent need to develop a skilled,
                future-ready aviation workforce.{" "}
              </p>{" "}
              <p className="  leading-tight lg:max-w-2xl font-medium mb-2">
                The National Aviation Olympiad (NAO) is conceived as India’s
                most comprehensive youth aviation initiative – aligning with
                global ICAO NGAP (Next Generation Aviation Professionals)
                objectives and the national vision for India@2047.{" "}
              </p>{" "}
              <p className=" leading-tight lg:max-w-2xl font-medium">
                NAO aims to inspire, educate, and prepare students from Classes
                8th–12th to pursue careers across more than 150+ aviation,
                aerospace, drone, and airport roles. It is positioned not merely
                as a competition, but as a National Aviation Movement to create
                India’s next generation of aviators, engineers, technologists,
                innovators, and leaders.
              </p>{" "}
            </div>{" "}
            {/* Illustration */}{" "}
            <div className="flex justify-center  md:justify-end">
              {" "}
              <img
                src="/about/vision/Why_NAO_Exists.svg"
                alt="Why NAO Exists"
                className="max-h-100 md:max-h-60 lg:max-h-80 xl:max-h-full "
              />{" "}
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
