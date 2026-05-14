import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck as CheckCircle, Circle as XCircle, Zap, ChevronRight, Hop as Home } from "lucide-react";
import type { QuizQuestion } from "@/lib/mock-data";

interface QuizInterfaceProps {
  title: string;
  questions: QuizQuestion[];
  reward: number | string;
  topic?: string;
  timed?: boolean;
  onComplete: (score: number, xpEarned: number) => void;
  onExit: () => void;
}

export function QuizInterface({ title, questions, reward, topic, timed, onComplete, onExit }: QuizInterfaceProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timed ? 15 : null);

  const question = questions[current];
  const isCorrect = selected === question.correct;
  const totalQuestions = questions.length;
  const progress = ((current + 1) / totalQuestions) * 100;
  const xpPerQuestion = typeof reward === "number" ? Math.floor(reward / totalQuestions) : 100;
  const totalXp = timed ? xpPerQuestion * score * 1.5 : xpPerQuestion * score;

  useEffect(() => {
    if (!timed || completed) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft! - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, completed, timed]);

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  }

  function handleNext() {
    if (current < totalQuestions - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
      setTimeLeft(timed ? 15 : null);
    } else {
      setCompleted(true);
    }
  }

  if (completed) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const remark = percentage === 100 ? "Perfect!" : percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good job!" : "Keep practicing!";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="glass-strong rounded-3xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 grid place-items-center"
          >
            <CheckCircle className="text-black" size={40} />
          </motion.div>
          <h2 className="text-3xl font-bold mb-2">{remark}</h2>
          <p className="text-muted-foreground mb-6">{topic || "Challenge"} mastered!</p>

          <div className="space-y-4 mb-8">
            <div className="glass rounded-xl p-4">
              <div className="text-4xl font-bold text-gradient">{score}/{totalQuestions}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Correct Answers</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2">
                <Zap size={20} className="text-yellow-400" />
                <div className="text-3xl font-bold">+{Math.round(totalXp)}</div>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">XP Earned</div>
            </div>
            {typeof reward !== "number" && (
              <div className="glass rounded-xl p-4 border border-primary/50">
                <div className="font-semibold text-sm">{reward}</div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={onExit}
              className="flex-1 px-4 py-3 rounded-lg glass text-muted-foreground hover:text-foreground transition flex items-center justify-center gap-2"
            >
              <Home size={16} />
              Exit
            </button>
            <button
              onClick={() => {
                onComplete(score, Math.round(totalXp));
                onExit();
              }}
              className="flex-1 px-4 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition"
            >
              Claim Reward
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="glass-strong rounded-3xl p-8 w-full max-w-2xl"
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm text-muted-foreground uppercase tracking-wider">{title}</h3>
              <h2 className="text-2xl font-bold mt-1">Question {current + 1}/{totalQuestions}</h2>
            </div>
            {timed && (
              <div className={`text-3xl font-bold ${timeLeft! <= 5 ? "text-destructive" : "text-primary"}`}>
                {timeLeft}s
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-primary to-cyan-400"
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl font-semibold leading-relaxed"
            >
              {question.question}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <AnimatePresence>
            {question.options.map((option, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === question.correct;
              let bgClass = "glass hover:glow";

              if (answered) {
                if (isCorrectOption) bgClass = "bg-success/20 border border-success";
                else if (isSelected && !isCorrect) bgClass = "bg-destructive/20 border border-destructive";
              }

              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className={`w-full p-4 rounded-lg text-left font-medium transition ${bgClass} ${
                    answered ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {answered && isCorrectOption && <CheckCircle className="text-success" size={20} />}
                    {answered && isSelected && !isCorrect && <XCircle className="text-destructive" size={20} />}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 rounded-lg bg-secondary/50 border border-primary/30"
            >
              <div className="text-sm">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle size={16} className="text-success" />
                      Correct!
                    </>
                  ) : (
                    <>
                      <XCircle size={16} className="text-destructive" />
                      Not quite right.
                    </>
                  )}
                </div>
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gradient">{score}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Correct</div>
          </div>

          <button
            onClick={handleNext}
            disabled={!answered}
            className="px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {current === totalQuestions - 1 ? "See Results" : "Next"}
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
