"use client";

import { motion } from "framer-motion";

export default function RequestResources() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg"
        >
          {/* Left Image */}
          <div
            className="min-h-55 bg-cover bg-center"
            style={{
              backgroundImage: "url('/resources/Request_Resources.png')",
            }}
          />

          {/* Right Content */}
          <div className="bg-[#0061e5]  p-3 md:p-4 flex flex-col justify-center">
            <h3 className="text-lg md:text-2xl text-white font-semibold mb-1">
              Request Resources
            </h3>

            <p className=" md:text-base text-white mb-4 ">
              Request new resources as per your custom need. Our team will get
              back to you as soon as possible.
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              {/* Full name */}
              <div>
                <label className="text-white/70 mb-0.5 block text-sm" htmlFor="rr-name">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="rr-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-white/70 mb-0.5 block text-sm" htmlFor="rr-email">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="rr-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-white/70 mb-0.5 block text-sm" htmlFor="rr-role">
                  Role <span className="text-red-400">*</span>
                </label>
                <select
                  id="rr-role"
                  required
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                >
                  <option value="" disabled selected>
                    Select role
                  </option>
                  <option>School</option>
                  <option>Student</option>
                  <option>Coordinator</option>
                  <option>Expert</option>
                  <option>Media</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Resource type */}
              <div>
                <label className="text-white/70 mb-0.5 block text-sm" htmlFor="rr-type">
                  Resource Type Needed <span className="text-red-400">*</span>
                </label>
                <select
                  id="rr-type"
                  required
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                >
                  <option value="" disabled selected>
                    Select resource type
                  </option>
                  <option>Study Material</option>
                  <option>Branding</option>
                  <option>Posters</option>
                  <option>Presentation</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-white/70 mb-0.5 block text-sm" htmlFor="rr-message">
                  Message / Specific Request
                </label>
                <textarea
                  id="rr-message"
                  rows={3}
                  placeholder="Optional details..."
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="bg-yellow h-fit w-full font-medium px-3 py-2 rounded-lg hover:bg-[#e6c400] transition-all duration-300 cursor-pointer text-sm"
              >
                Submit Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
