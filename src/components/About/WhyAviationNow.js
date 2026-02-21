"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaUserTie,
  FaTools,
  FaBriefcase,
  FaCalendarAlt,
  FaUsers,
  FaFingerprint,
} from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";

export default function WhyAviationWhyNow() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=""
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl  font-bold ">
              Why Aviation? Why Now?
            </h2>
          </div>

          {/* Top Grid */}
          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* Aviation Market Outlook */}
            <div className="lg:w-[60%] ">
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <div className="p-2 shrink-0 rounded-lg text-blue bg-blue/10 text-base">
                      <GrLineChart />
                    </div>
                    Aviation Market Outlook
                  </h3>
                  <span className="text-xs font-semibold bg-orange/10 text-orange px-3 py-1 rounded-full">
                    +111% Growth
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <ValueBox label="2023" value="USD 12.58B" muted />

                  <FaArrowRight className="text-gray-400" />

                  <ValueBox label="2030" value="USD 26.54B" highlight />
                </div>

                <div className="mt-6">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-blue rounded-full" />
                  </div>
                  <p className="mt-2 text-xs text-right text-gray-500">
                    Projected market valuation increase
                  </p>
                </div>
              </Card>
            </div>

            {/* Projected Demand */}
            <div className="flex flex-col h-full justify-between lg:w-[40%]">
              <h3 className="font-semibold text-lg flex items-center  gap-2 mb-4">
                <div className="p-2 shrink-0 rounded-lg text-orange bg-orange/10 text-base">
                  <FaUsers />
                </div>
                Projected Demand by 2030
              </h3>

              <div className="space-y-4 ">
                <DemandRow
                  icon={<FaFingerprint />}
                  value="31,000"
                  label="New Pilots"
                  tag="High Demand"
                  tagColor="bg-red-100 text-red-700"
                />

                <DemandRow
                  icon={<SlSettings />}
                  value="26,000"
                  label="Mechanics"
                  tag="Technical"
                  tagColor="bg-orange-100 text-orange-700"
                />
              </div>
            </div>
          </div>

          {/* Bottom Highlight Strip */}
          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-r from-blue/80 to-blue rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-6 rounded-full bg-white/20 flex items-center justify-center text-4xl">
                  <FaBriefcase />
                </div>
                <div>
                  <p className="text-4xl font-bold">1.1M+</p>
                  <p className=" opacity-90">New Jobs</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block w-28 lg:w-36 border-t border-white/40  border-dashed"></div>
                <p className="text-xs bg-blue-900 rounded-full px-4 py-1 leading-tight">
                  Generated through Aviation Initiatives
                </p>{" "}
                <div className="hidden md:block w-28 lg:w-36 border-t border-white/40  border-dashed"></div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs uppercase opacity-80">Target Year</p>
                  <p className="text-3xl font-bold">2040</p>
                </div>
                <div className="p-3 rounded-full bg-white text-blue flex items-center justify-center text-2xl">
                  <FaCalendarAlt />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function Card({ children }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm h-full">{children}</div>
  );
}

function ValueBox({ label, value, muted, highlight }) {
  return (
    <div
      className={`flex-1 rounded-lg p-4 text-center ${
        highlight ? "bg-blue text-white" : "bg-gray-100 "
      }`}
    >
      <p className="text-sm mb-1 opacity-80">{label}</p>
      <p className="text-xl md:text-2xl font-bold">{value}</p>
    </div>
  );
}

function DemandRow({ icon, value, label, tag, tagColor }) {
  return (
    <div className="flex items-center justify-between  bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg text-2xl bg-blue/10 text-blue flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-2xl leading-tight">{value}</p>
          <p className="text-xs uppercase text-gray-500">{label}</p>
        </div>
      </div>

      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColor}`}
      >
        {tag}
      </span>
    </div>
  );
}
