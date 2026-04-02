"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import ExamCard from "@/components/PracticeTests/ExamCard";
import {
  FiBookOpen,
  FiLoader,
  FiAlertCircle,
  FiClock,
  FiPlay,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8082/api";

export default function PracticeTestsPage() {
  const router = useRouter();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    fetchMockExams();
  }, []);

  const fetchMockExams = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/public/mock-exams`);
      if (!res.ok) throw new Error("Failed to fetch exams");
      const data = await res.json();
      setExams(data.exams || []);
    } catch (err) {
      console.error("Error fetching mock exams:", err);
      setError("Unable to load practice tests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenStartModal = (exam) => {
    setSelectedExam(exam);
  };

  const handleCloseStartModal = () => {
    setSelectedExam(null);
  };

  const handleStartExam = () => {
    if (!selectedExam?._id) return;
    const examId = selectedExam._id;
    setSelectedExam(null);
    router.push(`/practice-tests/${examId}?start=1`);
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue/10 via-white to-orange/10 pt-40 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange px-4 py-2 rounded-full text-sm font-semibold mt-2 mb-6">
              <FiBookOpen />
              Free Practice Tests
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Practice Makes <span className="text-blue">Perfect</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Take free mock tests created by NAO experts. No sign-up required
              — just pick a test and start practicing right away!
            </p>
          </motion.div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-gradient-to-r from-blue/10 to-orange/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Exams Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 bg-slate-50 border border-slate-200 rounded-2xl">
            <FiLoader className="text-3xl animate-spin mb-3 text-blue" />
            <p className="text-sm font-medium">Loading practice tests...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 bg-red/5 border border-red/20 rounded-2xl">
            <FiAlertCircle className="text-3xl text-red mb-3" />
            <p className="text-sm text-red">{error}</p>
            <button
              onClick={fetchMockExams}
              className="mt-4 px-4 py-2 bg-blue text-white rounded-lg text-sm font-semibold hover:bg-blue/90 transition-all cursor-pointer shadow-sm"
            >
              Try Again
            </button>
          </div>
        ) : exams.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 bg-slate-50 border border-slate-200 rounded-2xl">
            <FiBookOpen className="text-4xl mb-3 text-blue" />
            <p className="text-lg font-semibold text-slate-700 mb-1">
              No Practice Tests Available
            </p>
            <p className="text-sm">
              Check back soon — new practice tests are being prepared!
            </p>
          </div>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 pt-2.5 pb-2 rounded-full bg-blue/5 border border-blue/20 text-sm text-slate-600 font-medium mt-4 mb-6"
            >
              {exams.length} practice test{exams.length !== 1 ? "s" : ""}{" "}
              available
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.map((exam, i) => (
                <ExamCard
                  key={exam._id}
                  exam={exam}
                  index={i}
                  onStart={handleOpenStartModal}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <AnimatePresence>
        {selectedExam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
            onClick={handleCloseStartModal}
          >
            <motion.div
              initial={{ y: 16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-white rounded-3xl  shadow-2xl shadow-blue/10  overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue to-[#314a99] px-6 py-4 text-center">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2.5">
                  <FiBookOpen className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {selectedExam.name}
                </h2>
                <p className="text-blue-100 text-sm">Practice Test</p>
              </div>

              <div className="p-4 md:p-5 bg-gradient-to-b from-white to-slate-50/40">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 md:gap-4">
                  <div className="md:col-span-3 bg-gradient-to-b from-blue/5 to-white border border-blue/20 rounded-xl p-3.5 md:p-4">
                    <h3 className="text-sm font-semibold text-blue flex items-center gap-1.5 mb-2.5">
                      <FiInfo /> Instructions
                    </h3>
                    <ul className="space-y-1.5 text-[13px] leading-5 text-slate-600">
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        This is a practice test - no sign-up required to start.
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        You can navigate between questions freely.
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        The test will auto-submit when the timer runs out.
                      </li>
                    </ul>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-2.5 mb-3">
                      <div className="bg-white rounded-xl p-2.5 text-center border border-slate-200 shadow-sm shadow-slate-200/60">
                        <FiClock className="text-orange mx-auto mb-1 text-lg" />
                        <div className="text-2xl font-bold text-slate-800 leading-none">
                          {selectedExam.durationMinutes || 0}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Minutes</div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 text-center border border-slate-200 shadow-sm shadow-slate-200/60">
                        <FiBookOpen className="text-blue mx-auto mb-1 text-lg" />
                        <div className="text-2xl font-bold text-slate-800 leading-none">
                          {selectedExam.questionCount || 0}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Questions</div>
                      </div>
                    </div>

                    <button
                      onClick={handleStartExam}
                      className="w-full py-2.5 bg-gradient-to-r from-orange to-red text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-orange/20 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <FiPlay />
                      Start Test
                    </button>

                    <button
                      onClick={handleCloseStartModal}
                      className="w-full mt-2.5 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
