"use client";

import { motion } from "framer-motion";
import {
  FiClock,
  FiUsers,
  FiArrowRight,
  FiBookOpen
} from "react-icons/fi";

export default function ExamCard({ exam, index, onStart }) {
  const groupLabel = exam.group === "A" ? "Classes 8–10" : "Classes 11–12";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-gradient-to-b from-white to-slate-50/40 rounded-2xl border border-slate-200/80 overflow-hidden shadow-md shadow-slate-200/60 ring-1 ring-white/80 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-2xl hover:shadow-blue/10 hover:ring-blue/15"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue via-orange to-red" />

      <div className="p-6">
        {/* Group badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/5 text-blue text-xs font-semibold tracking-wide uppercase">
            <FiUsers className="text-sm" />
            Group {exam.group} · {groupLabel}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {exam.questionCount} Qs
          </span>
        </div>

        {/* Exam name */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue transition-colors duration-300">
          {exam.name}
        </h3>

        {/* Exam code */}
        <p className="text-xs text-slate-400 font-mono mb-4">
          Code: {exam.code}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-orange" />
            <span>{exam.durationMinutes} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiBookOpen className="text-blue" />
            <span>{exam.questionCount} Questions</span>
          </div>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart(exam)}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue to-blue/90 hover:from-blue hover:to-blue text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 cursor-pointer"
        >
          Start Practice Test
          <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}
