"use client";

import { motion } from "framer-motion";

export default function NewsSection() {
  return (
    <section className="mt-68 md:mt-32 py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">News and Articles</h2>
          <p className="mt-4 md:text-lg font-medium">
            More details about the news and articles + New section needed
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue rounded-2xl p-10 text-white"
        >
          <div className="flex flex-col md:flex-row gap-8   items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex  md:w-1/3"
            >
              <img
                src="/News.png"
                alt="Official Statement"
                className="max-h-110 w-auto  shadow-lg"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-2/3 max-w-xl"
            >
              <h3 className="text-2xl lg:text-4xl font-semibold text-yellow mb-4">
                An official Statement from the office of the Vice-President,
                Republic of India
              </h3>

              <p className=" lg:text-lg  leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
