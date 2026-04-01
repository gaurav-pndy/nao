"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ExamInterface from "@/components/PracticeTests/ExamInterface";
import RegistrationModal from "@/components/PracticeTests/RegistrationModal";
import ResultsDisplay from "@/components/PracticeTests/ResultsDisplay";
import Link from "next/link";
import {
  FiClock,
  FiBookOpen,
  FiArrowLeft,
  FiLoader,
  FiAlertCircle,
  FiPlay,
  FiCheckCircle,
  FiInfo,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8082/api";

export default function TakeExamPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const examId = params.examId;
  const shouldAutoStart = searchParams.get("start") === "1";

  // ── States ──────────────────────────────────────────────
  const [phase, setPhase] = useState("loading");
  const [errorModal, setErrorModal] = useState({ show: false, title: "", message: "", type: "error" });
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [shuffledQuestionIds, setShuffledQuestionIds] = useState([]);
  const [examData, setExamData] = useState(null); // answers from exam
  const [previewStats, setPreviewStats] = useState(null);
  const [results, setResults] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [isNewStudent, setIsNewStudent] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (examId) fetchExam();
  }, [examId, shouldAutoStart]);

  const fetchExam = async () => {
    try {
      setPhase("loading");
      const res = await fetch(`${API_URL}/public/mock-exams/${examId}`);
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to load exam");
      }
      const data = await res.json();
      setExam(data.exam);
      setQuestions(data.questions);
      setShuffledQuestionIds(data.shuffledQuestionIds);
      setPhase(shouldAutoStart ? "exam" : "instructions");
    } catch (err) {
      console.error("Error fetching exam:", err);
      setError(err.message || "Failed to load exam");
      setPhase("error");
    }
  };

  const handleStartExam = () => {
    setPhase("exam");
  };

  const handleExamSubmit = async (data) => {
    try {
      setExamData(data);
      setPhase("loading"); // Show loading while calculating preview
      
      const res = await fetch(`${API_URL}/public/mock-exams/preview-score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId,
          answers: data.answers,
        }),
      });

      if (!res.ok) throw new Error("Failed to calculate preview score");
      
      const stats = await res.json();
      setPreviewStats(stats);
      setPhase("score_preview");
    } catch (err) {
      console.error("Error getting score preview:", err);
      // Fallback: Show blurred modal with generic stats if API fails
      setPreviewStats({ percentage: 0, totalQuestions: questions.length, answeredCount: 0 });
      setPhase("score_preview");
    }
  };

  const handleRegistrationSubmit = async (studentData) => {
    try {
      setIsSubmitting(true);

      const res = await fetch(`${API_URL}/public/mock-exams/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId,
          answers: examData.answers,
          student: studentData,
          shuffledQuestionIds: examData.shuffledQuestionIds,
          startedAt: examData.startedAt,
          deviceInfo: {
            browser: navigator.userAgent,
            os: navigator.platform,
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Submission failed");
      }

      const data = await res.json();
      setResults(data.results);
      setStudentName(data.student?.name || studentData.name);
      setIsNewStudent(Boolean(data.isNewStudent));
      setPhase("results");
    } catch (err) {
      console.error("Error submitting exam:", err);
      const isAlreadyRegistered = err.message?.toLowerCase().includes("registered") || err.message?.toLowerCase().includes("exists");
      
      setErrorModal({
        show: true,
        title: isAlreadyRegistered ? "Already Registered! 🔐" : "Submission Error",
        message: err.message || "Failed to submit. Please try again.",
        type: isAlreadyRegistered ? "warning" : "error",
        showPortalLink: isAlreadyRegistered
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Loading ──────────────────────────────────────────────
  if (phase === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <FiLoader className="text-4xl text-blue animate-spin mb-4" />
        <p className="text-slate-500 text-sm">Processing results...</p>
      </div>
    );
  }

  // ── Error ────────────────────────────────────────────────
  if (phase === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <FiAlertCircle className="text-4xl text-red mb-4" />
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Unable to Load Exam
        </h2>
        <p className="text-sm text-slate-500 mb-6 text-center">{error}</p>
        <Link
          href="/practice-tests"
          className="px-5 py-2.5 bg-blue text-white rounded-xl text-sm font-semibold hover:bg-blue/90 transition-all flex items-center gap-2"
        >
          <FiArrowLeft /> Back to Practice Tests
        </Link>
      </div>
    );
  }

  // ── Instructions ─────────────────────────────────────────
  if (phase === "instructions") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue/5 via-white to-orange/5 flex items-center justify-center px-4 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-blue/10 ring-1 ring-white/80 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue to-[#314a99] px-6 py-4.5 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FiBookOpen className="text-2xl text-white" />
            </div>
            <h1 className="text-2xl md:text-[1.75rem] font-bold text-white mb-1 leading-tight">
              {exam.name}
            </h1>
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
                    This is a practice test — no sign-up required to start.
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
                  <div className="bg-white rounded-xl p-2.5 text-center border border-slate-200">
                    <FiClock className="text-orange mx-auto mb-1 text-lg" />
                    <div className="text-2xl font-bold text-slate-800 leading-none">{exam.durationMinutes}</div>
                    <div className="text-xs text-slate-500 mt-1">Minutes</div>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 text-center border border-slate-200">
                    <FiBookOpen className="text-blue mx-auto mb-1 text-lg" />
                    <div className="text-2xl font-bold text-slate-800 leading-none">{questions.length}</div>
                    <div className="text-xs text-slate-500 mt-1">Questions</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartExam}
                  className="w-full py-2.5 bg-gradient-to-r from-orange to-red text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-orange/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <FiPlay />
                  Start Test
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Exam Interface ───────────────────────────────────────
  if (phase === "exam") {
    return (
      <ExamInterface
        exam={exam}
        questions={questions}
        shuffledQuestionIds={shuffledQuestionIds}
        onSubmit={handleExamSubmit}
      />
    );
  }

  // ── Score Preview (Blurred) ────────────────────────────────
  if (phase === "score_preview") {
    return (
      <div className="min-h-screen bg-slate-900/10 backdrop-blur-sm flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-pulse" />

        <motion.div
           initial={{ scale: 0.9, opacity: 0, y: 20 }}
           animate={{ scale: 1, opacity: 1, y: 0 }}
           className="bg-white rounded-2xl p-4 md:p-5 max-w-lg w-full shadow-2xl relative overflow-hidden border border-white/40"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue via-orange to-red" />

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 uppercase tracking-tight">
              Test Completed!
            </h3>

            {/* Blurred Result Card */}
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue to-indigo-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white rounded-2xl p-4 border border-slate-100 overflow-hidden">
                <div className="text-5xl font-black text-blue mb-1 blur-xl select-none">
                  {previewStats?.percentage}%
                </div>
                <p className="text-sm font-bold text-slate-400 blur-[2px] select-none">
                  Performance: Excellent!
                </p>
                <div className="flex justify-center gap-3 mt-2.5 blur-[4px] select-none">
                  <div className="w-8 h-8 bg-green-50 rounded-lg" />
                  <div className="w-8 h-8 bg-red/5 rounded-lg" />
                  <div className="w-8 h-8 bg-orange/5 rounded-lg" />
                </div>
                
                {/* Overlay text - Blurry Marks Preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/30 backdrop-blur-[2px] p-4 text-center">
                   <div className="blur-md select-none transform scale-110">
                      <p className="text-3xl font-black text-slate-800 tracking-tighter">
                        {previewStats?.score} <span className="text-xl text-slate-400">/ {previewStats?.total}</span>
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue mt-1">Marks Obtained</p>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white/90 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-blue shadow-sm border border-blue/10">
                       Results Locked
                     </span>
                   </div>
                </div>
              </div>
            </div>

            <p className="text-slate-500 mb-4 font-medium leading-relaxed text-sm">
              Register now to access your detailed marks and performance analysis.
            </p>

            <button
              onClick={() => setPhase("registration")}
              className="w-full py-3 bg-gradient-to-r from-blue to-indigo-700 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-blue/25 hover:shadow-xl transition-all cursor-pointer"
            >
              View Results →
            </button>
            
            <p className="text-[9px] text-slate-400 mt-2.5 leading-relaxed italic">
              Results will be emailed to you automatically upon registration.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Registration ──────────────────────────────────────────
  if (phase === "registration") {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
         <RegistrationModal
           onSubmit={handleRegistrationSubmit}
           isLoading={isSubmitting}
         />

         {/* Error Modal */}
         <AnimatePresence>
            {errorModal.show && (
              <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${errorModal.type === 'warning' ? 'bg-orange' : 'bg-red'}`} />
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${errorModal.type === 'warning' ? 'bg-orange/5' : 'bg-red/5'}`}>
                    {errorModal.type === 'warning' ? (
                      <FiAlertTriangle className="text-2xl text-orange" />
                    ) : (
                      <FiAlertCircle className="text-2xl text-red" />
                    )}
                  </div>

                  <h3 className="text-lg font-black text-slate-800 mb-3 uppercase tracking-tight">
                    {errorModal.title}
                  </h3>
                  <p className="text-slate-500 mb-8 text-xs font-medium leading-relaxed px-2">
                    {errorModal.message}
                  </p>

                  <div className="space-y-3">
                    {errorModal.showPortalLink && (
                      <a
                        href="https://exam.thecso.in"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 bg-blue text-white rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 shadow-lg shadow-blue/20 hover:bg-blue/90 transition-all font-bold"
                      >
                        Go to Student Portal <FiExternalLink className="text-sm" />
                      </a>
                    )}
                    <button
                      onClick={() => setErrorModal({ ...errorModal, show: false })}
                      className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      {errorModal.showPortalLink ? "Close" : "Try Again"}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
         </AnimatePresence>
      </div>
    );
  }

  // ── Full Results ─────────────────────────────────────────
  if (phase === "results" && results) {
    return (
      <ResultsDisplay
        results={results}
        studentName={studentName}
        examName={exam.name}
        isNewStudent={isNewStudent}
      />
    );
  }

  return null;
}
