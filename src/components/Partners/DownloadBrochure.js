"use client";

import { motion } from "framer-motion";

export default function DownloadBrochure() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="bg-linear-to-r from-[#d42c25] to-[#e97c19]  p-4 md:p-6 flex flex-col justify-center">
            <h3 className="text-xl md:text-3xl text-white font-semibold mb-2">
              Download the Sponsorship Brochure
            </h3>

            <p className=" md:text-lg text-white mb-6 ">
              Download detailed partnership options and deliverables.
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end gap-3 ">
              <div className="w-full">
                {" "}
                <p className="text-white/60 mb-2">Your Email</p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 rounded-lg w-full px-4 py-2.5  text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                />
              </div>

              <button className="bg-yellow h-fit min-w-44  font-medium px-4 py-2.5 rounded-lg hover:bg-[#e6c400] transition-all duration-300 cursor-pointer">
                Download Now
              </button>
            </div>
          </div>

          <div
            className="min-h-55 bg-cover bg-center"
            style={{
              backgroundImage: "url('/partners/Download_Brochure.png')",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
