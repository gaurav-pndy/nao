"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex  flex-col md:flex-row gap-4 md:gap-0 rounded-2xl overflow-hidden "
        >
          {/* Left Illustration Panel */}
          <div className=" relative">
            <img
              src="/contact/Contact_Form.png"
              alt="Contact illustration"
              className="max-w-sm xl:max-w-full rounded-3xl md:rounded-none h-auto"
            />
          </div>

          {/* Form Panel */}
          <div className="p-4 md:p-6 rounded-3xl md:rounded-none lg:p-12 bg-[#f4f7fb] w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-8">Contact Form</h3>

            <form className="space-y-4 xl:space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full name" placeholder="" />
                <Input label="Phone number" placeholder="" />
              </div>

              {/* Email */}
              <Input label="E-mail address" placeholder="" active />

              {/* School */}
              <Input label="School" placeholder="" />

              {/* State */}
              <Input label="State" placeholder="" />

              {/* Subject */}
              <Input label="Subject" placeholder="" />

              {/* Message */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <p className="text-[11px] text-gray-400 text-right mt-1">
                  400 words Max
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-yellow h-fit min-w-44  font-medium px-4 py-2.5 rounded-lg hover:bg-[#e6c400] transition-all duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */
function Input({ label, placeholder, active }) {
  return (
    <div>
      <label
        className={`text-sm mb-1 block focus:text-blue-600 text-gray-500      }`}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={`w-full border-b bg-transparent font-medium py-1 focus:border-b! focus:border-blue-500! border-gray-300 
        `}
      />
    </div>
  );
}
