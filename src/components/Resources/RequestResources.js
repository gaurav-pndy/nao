"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RequestResources() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    resourceType: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (
    e
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "rr-name"
        ? "name"
        : id === "rr-email"
        ? "email"
        : id === "rr-role"
        ? "role"
        : id === "rr-type"
        ? "resourceType"
        : id === "rr-message"
        ? "message"
        : ""]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.role) return "Please select a role.";
    if (!formData.resourceType) return "Please select a resource type.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "submitting", message: "Submitting request..." });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted (mock):", formData);

      setStatus({
        type: "success",
        message:
          "Your request has been submitted. Our team will get back to you soon!",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        role: "",
        resourceType: "",
        message: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    }
  };

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
          <div className="bg-[#0061e5] p-3 md:p-8 flex flex-col justify-center">
            <h3 className="text-lg md:text-2xl text-white font-semibold mb-1">
              Request Resources
            </h3>

            <p className="md:text-base text-white mb-4">
              Request new resources as per your custom need. Our team will get
              back to you as soon as possible.
            </p>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              {/* Full name */}
              <div>
                <label
                  className="text-white/70 mb-0.5 block text-sm"
                  htmlFor="rr-name"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="rr-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-white/70 mb-0.5 block text-sm"
                  htmlFor="rr-email"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="rr-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Role */}
              <div>
                <label
                  className="text-white/70 mb-0.5 block text-sm"
                  htmlFor="rr-role"
                >
                  Role <span className="text-red-400">*</span>
                </label>
                <select
                  id="rr-role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                >
                  <option value="" disabled className="text-black">
                    Select role
                  </option>
                  <option className="text-black">School</option>
                  <option className="text-black">Student</option>
                  <option className="text-black">Coordinator</option>
                  <option className="text-black">Expert</option>
                  <option className="text-black">Media</option>
                  <option className="text-black">Other</option>
                </select>
              </div>

              {/* Resource type */}
              <div>
                <label
                  className="text-white/70 mb-0.5 block text-sm"
                  htmlFor="rr-type"
                >
                  Resource Type Needed <span className="text-red-400">*</span>
                </label>
                <select
                  id="rr-type"
                  required
                  value={formData.resourceType}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                >
                  <option value="" disabled className="text-black">
                    Select resource type
                  </option>
                  <option className="text-black">Study Material</option>
                  <option className="text-black">Branding</option>
                  <option className="text-black">Posters</option>
                  <option className="text-black">Presentation</option>
                  <option className="text-black">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="text-white/70 mb-0.5 block text-sm"
                  htmlFor="rr-message"
                >
                  Message / Specific Request
                </label>
                <textarea
                  id="rr-message"
                  rows={3}
                  placeholder="Optional details..."
                  className="w-full rounded-lg px-3 py-2 text-white bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`text-sm p-2 rounded ${
                    status.type === "error"
                      ? "bg-red-100 text-red-800"
                      : status.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === "submitting"}
                className="bg-yellow h-fit w-full font-medium px-3 py-2 rounded-lg hover:bg-[#e6c400] transition-all duration-300 cursor-pointer text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.type === "submitting" ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}