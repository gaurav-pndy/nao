"use client";

import { motion } from "framer-motion";

export default function Secretariat() {
  const contacts = [
    {
      function: "Overall Coordination",
      person: "TBD",
      email: "nao@thecso.in",
      phone: "+91 92112 29927",
    },
    {
      function: "School Registrations",
      person: "TBD",
      email: "schools@thecso.in",
      phone: "TBD",
    },
    {
      function: "Partnerships & Sponsorships",
      person: "TBD",
      email: "partnerships@thecso.in",
      phone: "TBD",
    },
    {
      function: "Expert Committee Coordination",
      person: "TBD",
      email: "experts@thecso.in",
      phone: "TBD",
    },
    {
      function: "Media & Communications",
      person: "TBD",
      email: "media@thecso.in",
      phone: "TBD",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            NAO Secretariat
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The NAO Secretariat is the operational backbone of the National
            Aviation Olympiad, responsible for end-to-end execution including
            school outreach, registrations, examination logistics,
            partnerships, communications, and event management. Based in New
            Delhi, the Secretariat coordinates with all stakeholders to ensure
            seamless delivery of NAO across India.
          </p>
        </motion.div>

        {/* contacts cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {contacts.map((c, idx) => (
            <motion.div
              style={{ flex: '0 1 calc(33.333% - 1rem)' }}
              className="max-w-sm bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-500 w-full"
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {c.function}
              </h3>
              <p className="mt-2 text-gray-600">
                <strong>Contact:</strong> {c.person}
              </p>
              <p className="mt-1 text-gray-600 flex items-center">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${c.email}`} className="underline text-orange">
                  {c.email}
                </a>
              </p>
              <p className="mt-1 text-gray-600 flex items-center">
                <strong>Phone:</strong> {c.phone}
              </p>
            </motion.div>
          ))}
        </div>

        {/* address and hours banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full bg-yellow/10 rounded-2xl p-6 md:p-8 mb-8 shadow-lg hover:shadow-xl ring-1 ring-yellow-200 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 items-center"
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center text-orange-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/>
              </svg>
            </div>
            <div className="text-gray-900">
              <p className="font-semibold uppercase text-sm">Office Address</p>
              <p className="text-sm leading-snug">
                NAO Secretariat, B–1, Third Floor, Greater Kailash Enclave II,
                New Delhi – 110 048, India
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-3 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center text-orange-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9V5h-2v6h6v-2h-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-gray-900">
              <p className="font-semibold uppercase text-sm">Working Hours</p>
              <p className="text-sm">Monday – Saturday, 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
