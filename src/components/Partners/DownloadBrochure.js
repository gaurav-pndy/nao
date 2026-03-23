"use client";

import { motion } from "framer-motion";
import { tiers } from "./WhatYouGet";

export default function DownloadBrochure() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      organization: form.organization.value,
      designation: form.designation.value,
      email: form.email.value,
      phone: form.phone.value,
      tier: form.tier.value,
    };
    const pdfUrl = "/partners/NAO_2026_Sponsorship_Brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NAO_2026_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download-brochure" className="py-12 scroll-mt-32">
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 mb-2">Full Name</p>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                  />
                </div>
                <div>
                  <p className="text-white/60 mb-2">Organization Name</p>
                  <input
                    type="text"
                    name="organization"
                    required
                    placeholder="Organization"
                    className="w-full rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                  />
                </div>
                <div>
                  <p className="text-white/60 mb-2">Designation</p>
                  <input
                    type="text"
                    name="designation"
                    required
                    placeholder="Your designation"
                    className="w-full rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                  />
                </div>
                <div>
                  <p className="text-white/60 mb-2">Email</p>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your Email"
                    className="w-full rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                  />
                </div>
                <div>
                  <p className="text-white/60 mb-2">Phone</p>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20"
                  />
                </div>
                <div>
                  <p className="text-white/60 mb-2">
                    Partnership Tier (optional)
                  </p>

                  <select
                    name="tier"
                    className="w-full rounded-lg px-4 py-2.5 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="" disabled className="text-black">
                      Select tier
                    </option>
                    {tiers.map((t, i) => (
                      <option key={i} value={t.name} className="text-black">
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-right md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-yellow font-medium px-4 py-2.5 rounded-lg hover:bg-[#e6c400] transition-all duration-300 cursor-pointer"
                >
                  Download Now
                </button>
              </div>
            </form>
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
