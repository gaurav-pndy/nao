"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-stretch"
        >
          {/* Form Panel */}
          <div className="w-full lg:w-3/5 bg-[#f4f7fb] rounded-3xl p-6 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Contact Form</h3>

            <form className="space-y-6">
              {/* row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="fullname" label="Full Name" required />
                <Input name="phone" label="Phone Number" required />
              </div>

              {/* row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="email" label="Email Address" type="email" required />
                <Select
                  name="category"
                  label="I am a"
                  options={[
                    "School Principal/Teacher",
                    "Student",
                    "Parent",
                    "Expert/Professional",
                    "Partner/Sponsor",
                    "Media",
                    "Volunteer",
                    "Other",
                  ]}
                  required
                />
              </div>

              {/* row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="organization" label="School / Organization Name" />
                <Select
                  name="state"
                  label="State"
                  options={[
                    "Andhra Pradesh",
                    "Arunachal Pradesh",
                    "Assam",
                    "Bihar",
                    "Chhattisgarh",
                    "Goa",
                    "Gujarat",
                    "Haryana",
                    "Himachal Pradesh",
                    "Jharkhand",
                    "Karnataka",
                    "Kerala",
                    "Madhya Pradesh",
                    "Maharashtra",
                    "Manipur",
                    "Meghalaya",
                    "Mizoram",
                    "Nagaland",
                    "Odisha",
                    "Punjab",
                    "Rajasthan",
                    "Sikkim",
                    "Tamil Nadu",
                    "Telangana",
                    "Tripura",
                    "Uttar Pradesh",
                    "Uttarakhand",
                    "West Bengal",
                    "Andaman & Nicobar",
                    "Chandigarh",
                    "Dadra & Nagar Haveli",
                    "Daman & Diu",
                    "Delhi",
                    "Jammu & Kashmir",
                    "Ladakh",
                    "Lakshadweep",
                  ]}
                  required
                />
              </div>

              {/* subject */}
              <Input name="subject" label="Subject" required />

              {/* message */}
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <p className="text-[11px] text-gray-400 text-right mt-1">
                  400 words Max
                </p>
              </div>

              <button
                type="submit"
                className="bg-yellow w-full md:w-auto font-medium px-6 py-2.5 rounded-lg hover:bg-[#e6c400] transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="w-full lg:w-1/2 flex">
            <div className="flex-1 h-full rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=NAO+Secretariat,+B-1+Third+Floor,+Greater+Kailash+Enclave+II,+New+Delhi+110048&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */
function Input({ label, name, type = "text", required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm mb-1 block text-gray-500"
      >
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b bg-transparent font-medium py-1 focus:outline-none focus:border-blue-500 border-gray-300"
      />
    </div>
  );
}

/* ---------- Select Component ---------- */
function Select({ label, name, options, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm mb-1 block text-gray-500"
      >
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full border-b bg-transparent font-medium py-1 focus:outline-none focus:border-blue-500 border-gray-300"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
