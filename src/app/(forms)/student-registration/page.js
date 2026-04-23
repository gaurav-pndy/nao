"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Select = dynamic(() => import("react-select"), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StudentRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    grade: "",
    reason: "",

    address: {
      line1: "",
      line2: "",
      city: "",
      state: null,
    },

    school: {
      name: "",
      city: "",
      state: null,
    },

    aadharNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const stateOptions = [
    {
      label: "States",
      options: [
        { value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Chhattisgarh", label: "Chhattisgarh" },
        { value: "Goa", label: "Goa" },
        { value: "Gujarat", label: "Gujarat" },
        { value: "Haryana", label: "Haryana" },
        { value: "Himachal Pradesh", label: "Himachal Pradesh" },
        { value: "Jharkhand", label: "Jharkhand" },
        { value: "Karnataka", label: "Karnataka" },
        { value: "Kerala", label: "Kerala" },
        { value: "Madhya Pradesh", label: "Madhya Pradesh" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Manipur", label: "Manipur" },
        { value: "Meghalaya", label: "Meghalaya" },
        { value: "Mizoram", label: "Mizoram" },
        { value: "Nagaland", label: "Nagaland" },
        { value: "Odisha", label: "Odisha" },
        { value: "Punjab", label: "Punjab" },
        { value: "Rajasthan", label: "Rajasthan" },
        { value: "Sikkim", label: "Sikkim" },
        { value: "Tamil Nadu", label: "Tamil Nadu" },
        { value: "Telangana", label: "Telangana" },
        { value: "Tripura", label: "Tripura" },
        { value: "Uttar Pradesh", label: "Uttar Pradesh" },
        { value: "Uttarakhand", label: "Uttarakhand" },
        { value: "West Bengal", label: "West Bengal" },
      ],
    },
    {
      label: "Union Territories",
      options: [
        {
          value: "Andaman and Nicobar Islands",
          label: "Andaman and Nicobar Islands",
        },
        { value: "Chandigarh", label: "Chandigarh" },
        {
          value: "Dadra and Nagar Haveli and Daman and Diu",
          label: "Dadra and Nagar Haveli and Daman and Diu",
        },
        { value: "Delhi", label: "Delhi" },
        { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
        { value: "Ladakh", label: "Ladakh" },
        { value: "Lakshadweep", label: "Lakshadweep" },
        { value: "Puducherry", label: "Puducherry" },
      ],
    },
  ];

  const handleChange = (field, value, parent = null) => {
    if (parent) {
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,

        [field]: value,
      }));
    }
  };

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name required";
    if (!formData.gender) err.gender = "Gender required";
    if (!formData.phone) err.phone = "Phone required";
    if (!formData.email) err.email = "Email required";
    if (!formData.grade) err.grade = "Grade required";
    if (!formData.address.state?.value) err.state = "State required";
    if (!formData.school.state?.value)
      err.schoolState = "School state required";
    if (!formData.address.line1) err.address = "Address required";
    if (!formData.address.city) err.city = "City required";

    if (!formData.school.name) err.school = "School required";

    if (!/^[0-9]{12}$/.test(formData.aadharNumber)) {
      err.aadhar = "Aadhar must be 12 digits";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMsg("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/student/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,

          gender: formData.gender,
          grade: formData.grade,

          registeredBy: "individual",

          address: {
            line1: formData.address.line1,
            line2: formData.address.line2,
            city: formData.address.city,
            state: formData.address.state?.value,
            country: "IN",
          },

          school: {
            name: formData.school.name,
            city: formData.school.city,
            state: formData.school.state?.value,
            country: "IN",
          },

          aadharNumber: formData.aadharNumber,

          reason: formData.reason || "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || data.errors?.[0]?.msg || "Registration failed",
        );
      }

      setShowSuccessModal(true);

      // Reset form
      setFormData({
        name: "",
        gender: "",
        phone: "",
        email: "",
        grade: "",
        reason: "",
        address: {
          line1: "",
          line2: "",
          city: "",
          state: null,
        },
        school: {
          name: "",
          city: "",
          state: null,
        },
        aadharNumber: "",
      });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500";

  const errorText = "text-red-500 text-sm mt-1";

  return (
    <section
      className="pt-24 md:pt-38 pb-12"
      style={{
        backgroundImage: "url('/about/About_Hero.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange">
            Student Registration
          </h1>

          <p className="mt-3 text-white md:text-lg">
            Register individually for the National Aviation Olympiad.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label>Full Name *</label>
            <input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputClass}
            />
            {errors.name && <p className={errorText}>{errors.name}</p>}
          </div>

          {/* Gender */}
          <div>
            <label>Gender *</label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className={inputClass}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className={errorText}>{errors.gender}</p>}
          </div>

          {/* Address */}
          <div>
            <label>Address *</label>

            <input
              placeholder="Street Address"
              className={inputClass}
              onChange={(e) => handleChange("line1", e.target.value, "address")}
            />
            {errors.address && <p className={errorText}>{errors.address}</p>}

            <input
              placeholder="Address Line 2"
              className={`${inputClass} mt-2`}
              onChange={(e) => handleChange("line2", e.target.value, "address")}
            />

            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  placeholder="City"
                  className={inputClass}
                  onChange={(e) =>
                    handleChange("city", e.target.value, "address")
                  }
                />
                {errors.city && <p className={errorText}>{errors.city}</p>}
              </div>

              <div>
                <Select
                  options={stateOptions}
                  placeholder="Select State"
                  onChange={(opt) => handleChange("state", opt, "address")}
                  className="mt-1"
                />
                {errors.state && <p className={errorText}>{errors.state}</p>}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label>Phone Number *</label>
            <PhoneInput
              country={"in"}
              onChange={(phone) => handleChange("phone", phone)}
              inputClass="!w-full"
            />
            {errors.phone && <p className={errorText}>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label>Email Address *</label>
            <input
              type="email"
              className={inputClass}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          {/* Reason */}
          <div>
            <label>Reason for Individual Registration</label>
            <Select
              className="mt-1"
              options={[
                {
                  value: "Home Schooled Student",
                  label: "Home Schooled Student",
                },
                { value: "NIOS Student", label: "NIOS Student" },
                {
                  value: "International or Embassy-Nominated Candidate",
                  label: "International or Embassy-Nominated Candidate",
                },
                {
                  value: "Non-Participating School Student",
                  label: "Non-Participating School Student",
                },
              ]}
              onChange={(option) => handleChange("reason", option.value)}
            ></Select>
          </div>

          {/* Grade */}
          <div>
            <label>Class / Grade *</label>
            <Select
              className="mt-1"
              options={[
                {
                  value: "8",
                  label: "8",
                },
                { value: "9", label: "9" },
                {
                  value: "10",
                  label: "10",
                },
                {
                  value: "11",
                  label: "11",
                },
                {
                  value: "12",
                  label: "12",
                },
              ]}
              onChange={(option) => handleChange("grade", option.value)}
            >
              <option value="">Select Grade</option>
              {[8, 9, 10, 11, 12].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </Select>
            {errors.grade && <p className={errorText}>{errors.grade}</p>}
          </div>

          {/* School */}
          <div>
            <label>Name of School *</label>
            <input
              className={inputClass}
              onChange={(e) => handleChange("name", e.target.value, "school")}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="City of School"
              className={inputClass}
              onChange={(e) => handleChange("city", e.target.value, "school")}
            />

            <Select
              className="mt-1"
              options={stateOptions}
              placeholder="State of School"
              onChange={(opt) => handleChange("state", opt, "school")}
            />
          </div>

          {/* Aadhar */}
          <div>
            <label>Aadhar Number *</label>
            <input
              className={inputClass}
              onChange={(e) => handleChange("aadharNumber", e.target.value)}
            />
            {errors.aadhar && <p className={errorText}>{errors.aadhar}</p>}
          </div>

          {message && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md">
              {message}
            </div>
          )}

          {errorMsg && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md">
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow w-full hover:bg-[#e6c400] text-black font-medium px-6 py-3 rounded-md cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
            <h2 className="text-xl font-semibold text-green-600">
              Registration Successful !
            </h2>

            <p className="mt-3 text-gray-700">
              Your registration has been completed successfully.
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Please check your email inbox for credentials. If you don’t see
              it, check your
              <span className="font-medium"> Spam / Junk </span> folder as well.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-5 bg-yellow px-6 py-2 cursor-pointer rounded-md font-medium hover:bg-[#e6c400]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
