"use client";

import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

export default function BecomeSponsor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      organization: form.organization.value,
      designation: form.designation.value,
      email: form.email.value,
      phone: form.phone.value,
      partnershipType: form.partnershipType.value,
      message: form.message.value,
    };
    console.log('enquiry', data);
  };

  return (
    <section id="partnership-enquiry" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-yellow/30 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 flex items-center justify-center gap-2 text-orange-800">
            <FiUsers /> Become a Partner
          </h3>
          <p className="text-center text-lg mb-6 text-orange-800">
            Interested in partnering? Let’s explore how we can work together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-orange-800 mb-1 text-sm">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-1 text-sm">Organization Name*</label>
                <input
                  type="text"
                  name="organization"
                  required
                  placeholder="School ABC"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-1 text-sm">Designation / Role*</label>
                <input
                  type="text"
                  name="designation"
                  required
                  placeholder="Club President"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-1 text-sm">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-1 text-sm">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 12345 67890"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-1">Partnership Type*</label>
                <select
                  name="partnershipType"
                  required
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select type</option>
                  <option>Title/Lead Sponsor</option>
                  <option>Podcast/Content Sponsor</option>
                  <option>State-Level Sponsor</option>
                  <option>Aero Club / Outreach Partner</option>
                  <option>Academic Partner</option>
                  <option>Media Partner</option>
                  <option>Knowledge Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-orange-800 mb-1">Brief Message (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Short message"
                  className="w-full rounded-lg px-3 py-2 text-sm text-gray-800 bg-white border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <button
                type="submit"
                className="bg-orange px-4 py-2 rounded-lg font-semibold text-white text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all w-full sm:w-auto"
              >
                Submit Enquiry
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-orange-800">
            Or email{' '}
            <a href="mailto:partner@thecso.in" className="underline font-semibold text-orange-900">
              partner@thecso.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
