"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCheck,
  FiAlertTriangle,
  FiSend,
} from "react-icons/fi";

export default function ExamInterface({
  exam,
  questions,
  shuffledQuestionIds,
  onSubmit,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [remainingTime, setRemainingTime] = useState(
    (exam.durationMinutes || 60) * 60
  );
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [startedAt] = useState(new Date().toISOString());

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAutoSubmit = useCallback(() => {
    const formattedAnswers = Object.entries(answers).map(
      ([questionId, selectedOptions]) => ({
        questionId,
        selectedOptions,
      })
    );
    onSubmit({
      answers: formattedAnswers,
      startedAt,
      shuffledQuestionIds,
    });
  }, [answers, startedAt, shuffledQuestionIds, onSubmit]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (key) => {
    const questionId = currentQuestion._id;
    const currentType = currentQuestion.type;

    setAnswers((prev) => {
      const existing = prev[questionId] || [];

      if (currentType === "MCQ") {
        // Single choice: replace
        return { ...prev, [questionId]: [key] };
      } else {
        // Multi choice: toggle
        if (existing.includes(key)) {
          return {
            ...prev,
            [questionId]: existing.filter((k) => k !== key),
          };
        } else {
          return { ...prev, [questionId]: [...existing, key] };
        }
      }
    });
  };

  const handleSubmit = () => {
    const formattedAnswers = Object.entries(answers).map(
      ([questionId, selectedOptions]) => ({
        questionId,
        selectedOptions,
      })
    );
    onSubmit({
      answers: formattedAnswers,
      startedAt,
      shuffledQuestionIds,
    });
  };

  const answeredCount = Object.keys(answers).filter(
    (qId) => answers[qId] && answers[qId].length > 0
  ).length;

  const isTimeLow = remainingTime < 300; // < 5 min

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 lg:pt-40 pb-12">
      {/* Premium Header / Status Bar for Mobile Only (Hidden on Desktop) */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time Remaining</span>
          <div className={`flex items-center gap-1.5 text-sm font-mono font-bold ${isTimeLow ? "text-red animate-pulse" : "text-[#1b3686]"}`}>
            <FiClock className="text-xs" />
            {formatTime(remainingTime)}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
            <span className="text-xs font-bold text-slate-700">{answeredCount}/{questions.length}</span>
          </div>
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="px-3 py-1.5 bg-[#1b3686] text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-5 items-start">

          {/* 1. LEFT SIDEBAR: Question Navigator - Compacted */}
          <aside className="w-full lg:w-48 order-2 lg:order-1 flex-shrink-0 lg:sticky lg:top-36">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              {/* Brand accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue via-orange to-red" />

              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue rounded-full"></span>
                  Navigator
                </h3>
              </div>

              <div className="p-4 bg-white">
                <div className="grid grid-cols-6 lg:grid-cols-4 gap-2">
                  {questions.map((q, i) => {
                    const isAnswered = answers[q._id] && answers[q._id].length > 0;
                    const isCurrent = i === currentIndex;
                    return (
                      <button
                        key={q._id}
                        onClick={() => setCurrentIndex(i)}
                        className={`group relative w-10 lg:w-full aspect-square lg:aspect-auto lg:h-8 rounded-lg text-[10px] transition-all duration-300 flex items-center justify-center cursor-pointer ${isCurrent
                            ? "bg-blue text-white shadow-lg shadow-blue/20 ring-2 ring-blue ring-offset-1 font-black"
                            : isAnswered
                              ? "bg-blue/15 text-blue border border-blue/40 hover:bg-blue/25 font-black shadow-sm"
                              : "bg-slate-50 text-slate-400 border border-slate-100 hover:border-slate-200 hover:bg-slate-100 font-bold"
                          }`}
                      >
                        {i + 1}
                        {isAnswered && !isCurrent && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
                    <div className="w-3 h-3 rounded-md bg-blue" />
                    <span>Current Position</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
                    <div className="w-3 h-3 rounded-md bg-blue/10 border border-blue/20" />
                    <span>Attempted</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* 2. CENTER: Main Question Card - Compacted */}
          <main className="flex-1 w-full order-1 lg:order-2 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 p-4 lg:p-5 min-h-[160px] flex flex-col relative overflow-hidden"
              >
                {/* Brand top bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1b3686] via-[#ee7500] to-[#d42c26]" />

                {/* Decorative logo background shadow */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-slate-50/50 rounded-full blur-3xl -z-10" />

                <div className="relative z-10 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-blue/5 text-blue text-[9px] font-bold uppercase tracking-wider rounded-md border border-blue/10">
                        Question {currentIndex + 1}
                      </span>
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${currentQuestion.type === "MCQ"
                          ? "bg-amber-50 text-amber-600 border-amber-100"
                          : "bg-purple-50 text-purple-600 border-purple-100"
                        }`}>
                        {currentQuestion.type === "MCQ" ? "Single Choice" : "Multiple Choice"}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-lg lg:text-xl font-bold text-slate-800 leading-relaxed mb-4">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid gap-2">
                    {currentQuestion.options.map((opt) => {
                      const isSelected = (answers[currentQuestion._id] || []).includes(opt.key);
                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleOptionSelect(opt.key)}
                          className={`group w-full flex items-center gap-4 p-3 lg:p-3.5 rounded-xl border-2 transition-all duration-300 transform cursor-pointer active:scale-[0.99] ${isSelected
                              ? "border-blue bg-blue/5 shadow-sm shadow-blue/5"
                              : "border-slate-100 hover:border-blue/30 hover:bg-slate-50"
                            }`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300 ${isSelected
                              ? "bg-blue text-white shadow-md shadow-blue/30"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}>
                            {opt.key}
                          </div>
                          <span className={`flex-1 text-left text-sm font-medium transition-colors ${isSelected ? "text-blue" : "text-slate-600"
                            }`}>
                            {opt.text}
                          </span>
                          {isSelected && (
                            <FiCheck className="text-blue text-lg" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Footer: Basic Prev/Next */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
                    disabled={currentIndex === 0}
                    type="button"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-500 hover:text-blue transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FiChevronLeft className="text-base" />
                    Previous
                  </button>

                  <button
                    onClick={() => setCurrentIndex((p) => Math.min(questions.length - 1, p + 1))}
                    disabled={currentIndex === questions.length - 1}
                    type="button"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-500 hover:text-blue transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Next
                    <FiChevronRight className="text-base" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 3. RIGHT SIDEBAR: Stats & Progress - Compacted */}
          <aside className="w-full lg:w-[270px] order-3 flex-shrink-0 lg:sticky lg:top-36 space-y-4">

            {/* Timer Card - Brand Styled */}
            <div className="bg-blue rounded-xl shadow-xl p-5 text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-xl" />

              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[9px] font-black uppercase tracking-widest text-yellow">Time Remaining</span>
                <FiClock className={`text-sm ${isTimeLow ? "text-yellow animate-pulse" : "text-white"}`} />
              </div>

              <div className={`text-4xl font-mono font-black mb-4 relative z-10 ${isTimeLow ? "text-yellow" : "text-white"}`}>
                {formatTime(remainingTime)}
              </div>

              {/* Progress Bar Visual */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex justify-between text-[9px] font-bold uppercase">
                  <span className="text-white/60">Execution Progress</span>
                  <span className="text-yellow">{Math.round((answeredCount / questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(answeredCount / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-yellow to-orange shadow-[0_0_8px_rgba(255,221,3,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* Actions Card - Brand Styled */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="h-1 bg-gradient-to-r from-blue via-orange to-red" />

              <div className="p-5 space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                    <span className="text-[9px] font-bold text-slate-500 uppercase">Completed</span>
                    <span className="text-base font-black text-blue">{answeredCount}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                    <span className="text-[9px] font-bold text-slate-500 uppercase">Questions Left</span>
                    <span className="text-base font-black text-orange">{questions.length - answeredCount}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="w-full group relative flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue to-[#0b5ed7] text-white rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-blue/20 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <FiSend className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span>Submit Exam</span>
                </button>

              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Confirm submit modal */}
      <AnimatePresence>
        {showConfirmSubmit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
            onClick={() => setShowConfirmSubmit(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 lg:p-10 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              {/* Brand top bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue via-orange to-red" />

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 border border-blue/10">
                  <FiAlertTriangle className="text-3xl text-orange" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tight">
                  Final Submission?
                </h3>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                  You have answered <span className="text-blue font-bold">{answeredCount}</span> out of <span className="text-slate-800 font-bold">{questions.length}</span> questions. Once submitted, your answers are final.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setShowConfirmSubmit(false);
                      handleSubmit();
                    }}
                    className="w-full py-4 px-8 bg-blue text-white rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-blue/20 hover:shadow-xl transition-all cursor-pointer"
                  >
                    Finish and Submit
                  </button>
                  <button
                    onClick={() => setShowConfirmSubmit(false)}
                    className="w-full py-3 px-8 bg-slate-50 text-slate-500 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    Return to Exam
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
