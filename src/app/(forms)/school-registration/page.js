"use client";

import { motion } from "framer-motion";

export default function SchoolRegistrationPage() {
  return (
    <section
      className="pt-24 md:pt-38 pb-12  bg-black"
      style={{
        backgroundImage: "url('/about/About_Hero.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange">
            School Registration
          </h1>

          <p className="mt-3 text-gray-600 md:text-lg">
            Register your school for the National Aviation Olympiad. Fill out
            the form below and our team will get in touch with you.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Responsive iframe wrapper */}
          <div className="w-full h-[600px] md:h-[700px]">
            <iframe
              aria-label="NAO School Registration"
              frameBorder="0"
              className="w-full h-full"
              src="https://forms.zohopublic.in/cso/form/SchoolRegistration/formperma/1J_uOYE_-VhFpRTTPK8kVbKrqNC6vCkB_rePksrxj-A"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
