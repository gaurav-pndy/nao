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
                What is NAO?
              </h3>
              <p className="  leading-tight lg:max-w-2xl font-medium mb-2">
                The National Aviation Olympiad (NAO) is the 1st Pan-India Olympiad dedicated 
                exclusively to aviation for school students in Grades 8–12. Organized by the 
                Centre for Scientific Outreach (CSO) in collaboration with industry and academic 
                partners, NAO aims to introduce young minds to aviation, drones, and sustainability 
                while addressing the skill gap in India’s rapidly expanding aviation industry.
              </p>{" "}
              <p className="  leading-tight lg:max-w-2xl font-medium">
                NAO is not just a competition — it is a <strong>national capability-building mission</strong> that 
                aims to empower every child in India with the possibility of flight.
              </p>{""}
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
