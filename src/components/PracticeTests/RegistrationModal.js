"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiBook, FiMapPin, FiHash, FiSend, FiLoader, FiArrowRight, FiChevronLeft } from "react-icons/fi";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  // UTs
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry",
];

const grades = ["8", "9", "10", "11", "12"];

export default function RegistrationModal({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    state: "",
    grade: "",
  });
  const [step, setStep] = useState("email"); // email | details
  const [errors, setErrors] = useState({});
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8082/api";

  const validateDetails = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.schoolName.trim())
      newErrors.schoolName = "School name is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.grade) newErrors.grade = "Grade is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailCheck = async (e) => {
    e?.preventDefault();
    const email = formData.email?.trim();

    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: "Invalid email format" });
      return;
    }
    
    try {
      setIsCheckingEmail(true);
      setErrors({});
      const res = await fetch(`${API_URL}/public/check-email?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      
      if (data.exists) {
        // Automatically submit for existing user
        onSubmit({ email });
      } else {
        // Transition to details for new user
        setStep("details");
      }
    } catch (err) {
      console.error("Error checking email:", err);
      // Fallback: let them proceed to details if API is down
      setStep("details");
    } finally {
      setIsCheckingEmail(false);
    }
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    if (validateDetails()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto relative"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue to-blue/90 p-5 rounded-t-2xl text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <FiUser className="text-xl text-white" />
          </div>
          <h2 className="text-lg font-black text-white uppercase tracking-tight">
            {step === "email" ? "View Your Results! " : "One Last Step! ✨"}
          </h2>
          <p className="text-blue-100 text-[11px] mt-1 font-medium px-4 leading-relaxed">
            {step === "email" 
              ? "Enter your email address to see your test performance report." 
              : "We couldn't find an account for this email. Please provide your details to register."}
          </p>
        </div>

        {/* Step: Email (Initial View) */}
        <AnimatePresence mode="wait">
          {step === "email" ? (
            <motion.form
              key="email-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleEmailCheck}
              className="p-6 space-y-5"
            >
              <div>
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                  Email Address
                </label>
                <div className="relative group">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue transition-colors" />
                  <input
                    autoFocus
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@email.com"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 transition-all text-sm outline-none font-medium ${
                      errors.email
                        ? "border-red bg-red/5"
                        : "border-slate-100 focus:border-blue bg-slate-50/50 focus:bg-white"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] font-bold text-red mt-2 pl-1 italic">
                    {errors.email}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isCheckingEmail}
                className="w-full py-4 bg-blue text-white rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-blue/20 hover:bg-blue/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isCheckingEmail ? (
                  <>
                    <FiLoader className="animate-spin text-base" />
                    Checking Account...
                  </>
                ) : (
                  <>
                    <span>View Results</span>
                    <FiArrowRight className="text-base" />
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              key="details-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmitDetails}
              className="p-6 space-y-4"
            >
              {/* Back to email */}
              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-[10px] font-black text-blue uppercase tracking-widest flex items-center gap-1 mb-2 hover:opacity-70 transition-opacity"
              >
                <FiChevronLeft /> Change Email
              </button>

              {/* Name */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all text-sm outline-none font-medium ${
                    errors.name ? "border-red bg-red/5" : "border-slate-100 focus:border-blue bg-slate-50/50"
                  }`}
                />
              </div>

              {/* Phone + Grade */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="9876543210"
                    className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all text-sm outline-none font-medium ${
                      errors.phone ? "border-red bg-red/5" : "border-slate-100 focus:border-blue bg-slate-50/50"
                    }`}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">
                    Class/Grade
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => handleChange("grade", e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all text-sm outline-none appearance-none bg-slate-50/50 font-medium ${
                      errors.grade ? "border-red bg-red/5" : "border-slate-100 focus:border-blue"
                    }`}
                  >
                    <option value="">Select</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>Class {g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* School Name */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">
                  School Name
                </label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                  placeholder="Enter your school name"
                  className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all text-sm outline-none font-medium ${
                    errors.schoolName ? "border-red bg-red/5" : "border-slate-100 focus:border-blue bg-slate-50/50"
                  }`}
                />
              </div>

              {/* State */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">
                  State
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border-2 transition-all text-sm outline-none appearance-none bg-slate-50/50 font-medium ${
                    errors.state ? "border-red bg-red/5" : "border-slate-100 focus:border-blue"
                  }`}
                >
                  <option value="">Select State</option>
                  {indianStates.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-blue text-white rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-blue/20 hover:bg-blue/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <FiLoader className="animate-spin text-base" />
                    Registering...
                  </>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    <span>Complete & View Results</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-[9px] text-slate-400 text-center pb-6 px-10">
          Your test data is processed securely. By proceeding, you agree to our{" "}
          <a href="/privacy-policy" className="text-blue underline">Privacy Policy</a>.
        </p>
      </motion.div>
    </motion.div>
  );
}
