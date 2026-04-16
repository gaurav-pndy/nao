"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";

import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Select = dynamic(() => import("react-select"), { ssr: false });

export default function SchoolRegistrationPage() {
  const [formData, setFormData] = useState({
    schoolName: "",
    address1: "",
    address2: "",
    city: "",
    state: null,
    postalCode: "",
    // country: "",
    schoolPhone: "",
    schoolEmail: "",
    schoolType: "",
    authFirstName: "",
    authLastName: "",
    authPhone: "",
    authEmail: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

  const countryOptions = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔍 Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.schoolName.trim())
      newErrors.schoolName = "Please enter school name";

    if (!formData.address1.trim()) newErrors.address1 = "Please enter address";
    if (!formData.city.trim()) newErrors.city = "Please enter city";
    if (!formData.state) newErrors.state = "Please select state";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Please enter postal code";
    // if (!formData.country) newErrors.country = "Please select a country";

    if (!formData.schoolPhone || formData.schoolPhone.length < 8)
      newErrors.schoolPhone = "Please enter a valid phone number";

    if (!formData.schoolEmail) newErrors.schoolEmail = "Please enter email";
    else if (!/\S+@\S+\.\S+/.test(formData.schoolEmail))
      newErrors.schoolEmail = "Please enter a valid email";

    if (!formData.schoolType)
      newErrors.schoolType = "Please select school type";

    if (!formData.authFirstName.trim())
      newErrors.authFirstName = "Please enter first name";
    if (!formData.authLastName.trim())
      newErrors.authLastName = "Please enter last name";

    if (!formData.authPhone || formData.authPhone.length < 8)
      newErrors.authPhone = "Please enter a valid phone number";

    if (!formData.authEmail) newErrors.authEmail = "Please enter email";
    else if (!/\S+@\S+\.\S+/.test(formData.authEmail))
      newErrors.authEmail = "Please enter a valid email";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMsg("");
    // console.log(formData);

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/schools/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            schoolName: formData.schoolName,
            email: formData.schoolEmail,
            address1: formData.address1,
            address2: formData.address2,
            city: formData.city,
            state: formData.state?.value || "",
            postalCode: formData.postalCode,
            // country: formData.country,
            schoolPhone: formData.schoolPhone,
            schoolType: formData.schoolType,
            authFirstName: formData.authFirstName,
            authLastName: formData.authLastName,
            authPhone: formData.authPhone,
            authEmail: formData.authEmail,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(res);
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(
        "School registered successfully! Check email for credentials.",
      );

      // Optional: reset form
      setFormData({
        schoolName: "",
        address1: "",
        address2: "",
        city: "",
        state: null,
        postalCode: "",
        // country: "",
        schoolPhone: "",
        schoolEmail: "",
        schoolType: "",
        authFirstName: "",
        authLastName: "",
        authPhone: "",
        authEmail: "",
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
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange">
            School Registration
          </h1>

          <p className="mt-3 text-white md:text-lg">
            Register your school for the National Aviation Olympiad. Fill out
            the form below and our team will get in touch with you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6"
        >
          {/* School Name */}
          <div>
            <label>School Name *</label>
            <input
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.schoolName && (
              <p className={errorText}>{errors.schoolName}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label>School Address *</label>

            <input
              name="address1"
              placeholder="Street Address"
              value={formData.address1}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.address1 && <p className={errorText}>{errors.address1}</p>}

            <input
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleChange}
              className={`${inputClass} mt-2`}
            />

            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.city && <p className={errorText}>{errors.city}</p>}
              </div>

              <div>
                <Select
                  options={stateOptions}
                  value={formData.state}
                  onChange={(option) =>
                    setFormData({
                      ...formData,
                      state: option,
                    })
                  }
                  placeholder="Select State"
                />
                {errors.state && <p className={errorText}>{errors.state}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.postalCode && (
                  <p className={errorText}>{errors.postalCode}</p>
                )}
              </div>

              {/* <div>
                <Select
                  options={countryOptions}
                  onChange={(option) =>
                    setFormData({
                      ...formData,
                      country: option?.value || "",
                    })
                  }
                  placeholder="Country"
                />
                {errors.country && (
                  <p className={errorText}>{errors.country}</p>
                )}
              </div> */}
            </div>
          </div>

          {/* School Phone */}
          <div>
            <label>School Phone *</label>
            <PhoneInput
              country={"in"}
              value={formData.schoolPhone}
              onChange={(phone) =>
                setFormData({ ...formData, schoolPhone: phone })
              }
              inputClass="!w-full"
            />
            {errors.schoolPhone && (
              <p className={errorText}>{errors.schoolPhone}</p>
            )}
          </div>

          {/* School Email */}
          <div>
            <label>School Email *</label>
            <input
              type="email"
              name="schoolEmail"
              value={formData.schoolEmail}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.schoolEmail && (
              <p className={errorText}>{errors.schoolEmail}</p>
            )}
          </div>

          {/* School Type */}
          <div>
            <label>School Type *</label>
            <select
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select Type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="government">Government</option>
            </select>
            {errors.schoolType && (
              <p className={errorText}>{errors.schoolType}</p>
            )}
          </div>

          {/* Authorized Person */}
          <div>
            <label>Authorized Person *</label>

            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  name="authFirstName"
                  placeholder="First Name"
                  value={formData.authFirstName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.authFirstName && (
                  <p className={errorText}>{errors.authFirstName}</p>
                )}
              </div>

              <div>
                <input
                  name="authLastName"
                  placeholder="Last Name"
                  value={formData.authLastName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.authLastName && (
                  <p className={errorText}>{errors.authLastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Auth Phone */}
          <div>
            <label>Authorized Phone *</label>
            <PhoneInput
              country={"in"}
              value={formData.authPhone}
              onChange={(phone) =>
                setFormData({ ...formData, authPhone: phone })
              }
              inputClass="!w-full"
            />
            {errors.authPhone && (
              <p className={errorText}>{errors.authPhone}</p>
            )}
          </div>

          {/* Auth Email */}
          <div>
            <label>Authorized Email *</label>
            <input
              type="email"
              name="authEmail"
              value={formData.authEmail}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.authEmail && (
              <p className={errorText}>{errors.authEmail}</p>
            )}
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
    </section>
  );
}
