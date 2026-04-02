"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCheckCircle,
  FiXCircle,
  FiMinusCircle,
  FiAward,
  FiExternalLink,
  FiArrowLeft,
} from "react-icons/fi";

export default function ResultsDisplay({
  results,
  studentName,
  examName,
  isNewStudent,
}) {
  const { percentage } = results;

  const getGrade = (pct) => {
    return { label: "Congratulations!", color: "text-blue" };
  };

  const grade = getGrade(percentage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        {/* Score card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue to-blue/90 px-6 py-5 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 12 }}
              className="text-5xl mb-2"
            >
              {grade.emoji}
            </motion.div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              {grade.label}
            </h2>
            <p className="text-blue-100 text-sm">
              Great effort, {studentName}!
            </p>
          </div>

          {/* Confirmation Icon */}
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-16 h-16 bg-blue/5 rounded-2xl flex items-center justify-center border border-blue/10 shrink-0"
              >
                <FiAward className="text-3xl text-blue" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-slate-800 leading-tight">{examName}</h3>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">
                  Test Successfully Submitted
                </p>
              </div>
            </div>

            {/* Email notification */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-blue/5 border border-blue/10 rounded-xl p-3 mb-4 text-center"
            >
              <p className="text-sm text-blue">
                {isNewStudent
                  ? "Check your email to get your results and login credentials."
                  : "Check your email to get your results."}
              </p>
            </motion.div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="https://exam.thecso.in"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-gradient-to-r from-blue to-blue/90 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue/20 hover:shadow-lg transition-all"
              >
                Visit Exam Portal
                <FiExternalLink className="text-xs" />
              </a>

              <Link
                href="/practice-tests"
                className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
              >
                <FiArrowLeft />
                Take Another Test
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
