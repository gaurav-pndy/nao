"use client";

import { motion } from "framer-motion";

export default function GuidedBy() {
  return (
    <section className=" py-12 overflow-hidden">
      <div
        className="relative p-4 md:p-10 py-12 overflow-hidden"
        style={{
          backgroundColor: "#964090",
        }}
      >
        {/* Background Illustration */}
        <div
          className="absolute inset-0 max-w-2xl mx-auto pointer-events-none "
          style={{
            backgroundImage: "url('/guided/background.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center font-bold "
          >
            Guided by India&apos;s aviation community
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 font-medium md:text-lg "
          >
            What students and schools gain
          </motion.p>

          {/* Main Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8  flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-lg">
              <img src="/guided/01.svg" alt="Experts" className="" />
            </div>

            <p className="mt-4 tracking-wide text-5xl ">100+ Experts</p>
          </motion.div>

          {/* Breakdown */}
          <div className="mt-16 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                src: "/guided/02.svg",
                label: "40%\nAcademia",
              },
              {
                src: "/guided/03.svg",
                label: "30%\nIndustry",
              },
              {
                src: "/guided/04.svg",
                label: "30%\nBureaucracy",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col  items-center"
              >
                <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-md">
                  <img
                    src={item.src}
                    alt={item.label.replace("\n", " ")}
                    className=""
                  />
                </div>

                <p className="mt-4 text-2xl whitespace-pre-line leading-6.5 tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
