import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck as CheckCircle, Circle as XCircle, ChevronRight, ChevronLeft, X, BookOpen, Lightbulb, Zap, Sparkles } from "lucide-react";
import { practiceTopics, type PracticeTopic } from "@/lib/practice-data";
import { useUser } from "@/lib/user-store";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function PracticeMode({ open, onClose }: Props) {
  const [topicId, setTopicId] = useState<string | null>(null);
  const topic = topicId ? practiceTopics.find((t) => t.id === topicId) ?? null : null;

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ y: 20, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        className="glass-strong rounded-3xl w-full max-w-3xl my-8 max-h-[92vh] flex flex-col overflow-hidden"
      >
        {!topic ? (
          <TopicList onSelect={setTopicId} onClose={onClose} />
        ) : (
          <TopicPlayer topic={topic} onBack={() => setTopicId(null)} onClose={() => { setTopicId(null); onClose(); }} />
        )}
      </motion.div>
    </motion.div>
  );
}

function TopicList({ onSelect, onClose }: { onSelect: (id: string) => void; onClose: () => void }) {
  const math = practiceTopics.filter((t) => t.subject === "Mathematics");
  const phys = practiceTopics.filter((t) => t.subject === "Physics");
  return (
    <>
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Practice Mode</div>
          <h2 className="text-2xl font-bold mt-1">Pick a topic to study</h2>
          <p className="text-sm text-muted-foreground mt-1">Theory · solved example · interactive practice. Earn XP for every correct answer.</p>
        </div>
        <button onClick={onClose} className="h-9 w-9 rounded-lg glass grid place-items-center hover:bg-secondary/50 transition">
          <X size={18} />
        </button>
      </div>
      <div className="overflow-y-auto p-6 space-y-6">
        <Section title="Mathematics" topics={math} onSelect={onSelect} />
        <Section title="Physics" topics={phys} onSelect={onSelect} />
      </div>
    </>
  );
}

function Section({ title, topics, onSelect }: { title: string; topics: PracticeTopic[]; onSelect: (id: string) => void }) {
  return (
    <div>
      <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">{title}</div>
      <div className="grid sm:grid-cols-2 gap-3">
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className="text-left glass rounded-xl p-4 hover:glow transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              <div className={`h-11 w-11 rounded-lg bg-gradient-to-br ${t.color} grid place-items-center text-lg font-bold text-white shrink-0`}>
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                  <span>{t.questions.length} questions</span>
                  <span>·</span>
                  <span className={t.level === "Easy" ? "text-success" : t.level === "Medium" ? "text-warning" : "text-destructive"}>{t.level}</span>
                  <span>·</span>
                  <span className="text-gradient font-bold">+{t.xpPerQuestion} XP/q</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

type Stage = "theory" | "example" | "quiz" | "result";

function TopicPlayer({ topic, onBack, onClose }: { topic: PracticeTopic; onBack: () => void; onClose: () => void }) {
  const [stage, setStage] = useState<Stage>("theory");
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [earned, setEarned] = useState(0);
  const { addXp } = useUser();

  const q = topic.questions[qIndex];
  const total = topic.questions.length;

  function selectAnswer(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) {
      setCorrectCount((c) => c + 1);
      setEarned((e) => e + topic.xpPerQuestion);
      addXp({
        xp: topic.xpPerQuestion,
        label: `Practice: ${topic.name}`,
        kind: "practice",
        coins: Math.max(2, Math.floor(topic.xpPerQuestion / 8)),
        correct: 1,
        total: 1,
      });
    } else {
      addXp({
        xp: 0,
        label: `Practice: ${topic.name}`,
        kind: "practice",
        coins: 0,
        correct: 0,
        total: 1,
      });
    }
  }

  function nextQuestion() {
    if (qIndex < total - 1) {
      setQIndex(qIndex + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setStage("result");
    }
  }

  return (
    <>
      <div className="p-5 border-b border-border flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={onBack} className="h-9 w-9 rounded-lg glass grid place-items-center hover:bg-secondary/50 transition shrink-0">
            <ChevronLeft size={18} />
          </button>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{topic.subject} · {topic.level}</div>
            <div className="font-bold truncate">{topic.name}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {stage === "quiz" && (
            <div className="text-xs text-muted-foreground">Q {qIndex + 1}/{total}</div>
          )}
          <button onClick={onClose} className="h-9 w-9 rounded-lg glass grid place-items-center hover:bg-secondary/50 transition">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Stepper */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
          {(["theory", "example", "quiz"] as Stage[]).map((s, i) => {
            const active = stage === s;
            const done = ["theory", "example", "quiz"].indexOf(stage) > i || stage === "result";
            return (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`h-1.5 flex-1 rounded-full ${done || active ? "gradient-primary" : "bg-secondary/50"}`} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="overflow-y-auto p-6 flex-1">
        <AnimatePresence mode="wait">
          {stage === "theory" && (
            <motion.div key="theory" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <BookOpen size={18} />
                <h3 className="font-bold">Theory</h3>
              </div>
              {topic.theory.map((p) => (
                <div key={p.heading} className="glass rounded-xl p-4">
                  <div className="font-semibold mb-1">{p.heading}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
              {topic.formulas && (
                <div className="glass-strong rounded-xl p-4 border border-primary/30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key formulas</div>
                  <div className="space-y-1.5 font-mono text-sm">
                    {topic.formulas.map((f) => (
                      <div key={f} className="text-gradient font-bold">{f}</div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {stage === "example" && (
            <motion.div key="example" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              <div className="flex items-center gap-2 text-warning">
                <Lightbulb size={18} />
                <h3 className="font-bold">Worked example</h3>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Problem</div>
                <div className="mt-1 font-semibold text-lg">{topic.example.problem}</div>
              </div>
              <div className="space-y-2">
                {topic.example.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 glass rounded-xl p-3">
                    <div className="h-7 w-7 rounded-full gradient-primary grid place-items-center text-xs font-bold text-primary-foreground shrink-0">{i + 1}</div>
                    <div className="text-sm leading-relaxed pt-0.5">{step}</div>
                  </div>
                ))}
              </div>
              <div className="glass-strong rounded-xl p-4 border border-success/40">
                <div className="text-xs uppercase tracking-wider text-success mb-1">Answer</div>
                <div className="font-bold text-lg">{topic.example.answer}</div>
              </div>
            </motion.div>
          )}

          {stage === "quiz" && (
            <motion.div key={`q-${qIndex}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
              <div className="flex items-center gap-2 text-primary">
                <Zap size={18} />
                <h3 className="font-bold">Practice</h3>
              </div>
              <div className="text-xl font-semibold leading-relaxed">{q.question}</div>
              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  const isSel = selected === idx;
                  const isCorrect = idx === q.correct;
                  let cls = "glass hover:glow";
                  if (answered) {
                    if (isCorrect) cls = "bg-success/20 border border-success";
                    else if (isSel) cls = "bg-destructive/20 border border-destructive";
                    else cls = "glass opacity-60";
                  }
                  return (
                    <button
                      key={idx}
                      disabled={answered}
                      onClick={() => selectAnswer(idx)}
                      className={`w-full p-3.5 rounded-lg text-left font-medium transition ${cls}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {answered && isCorrect && <CheckCircle size={18} className="text-success" />}
                        {answered && isSel && !isCorrect && <XCircle size={18} className="text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-xl p-4 bg-secondary/40 border border-primary/30"
                  >
                    <div className="font-semibold mb-1 flex items-center gap-2">
                      {selected === q.correct ? (
                        <><CheckCircle size={16} className="text-success" /> Correct! +{topic.xpPerQuestion} XP</>
                      ) : (
                        <><XCircle size={16} className="text-destructive" /> Not quite — keep going.</>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{q.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {stage === "result" && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 grid place-items-center mb-4">
                <Sparkles className="text-black" size={36} />
              </div>
              <h3 className="text-2xl font-bold">Topic completed</h3>
              <p className="text-muted-foreground mt-1">{topic.name}</p>
              <div className="grid grid-cols-2 gap-3 mt-6 max-w-sm mx-auto">
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold text-gradient">{correctCount}/{total}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Correct</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold text-gradient">+{earned}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">XP earned</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer actions */}
      <div className="p-5 border-t border-border flex items-center justify-between gap-3">
        <div className="text-xs text-muted-foreground">
          {stage === "quiz" && <>Score so far: <span className="font-bold text-foreground">{correctCount}/{qIndex + (answered ? 1 : 0)}</span> · <span className="text-gradient font-bold">+{earned} XP</span></>}
          {stage !== "quiz" && stage !== "result" && <>Then you'll solve {total} interactive questions</>}
        </div>
        <div className="flex items-center gap-2">
          {stage === "theory" && (
            <button onClick={() => setStage("example")} className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition flex items-center gap-2">
              See example <ChevronRight size={16} />
            </button>
          )}
          {stage === "example" && (
            <>
              <button onClick={() => setStage("theory")} className="px-4 py-2.5 rounded-lg glass text-muted-foreground hover:text-foreground transition">Back</button>
              <button onClick={() => setStage("quiz")} className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition flex items-center gap-2">
                Start practice <ChevronRight size={16} />
              </button>
            </>
          )}
          {stage === "quiz" && (
            <button
              onClick={nextQuestion}
              disabled={!answered}
              className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {qIndex === total - 1 ? "Finish" : "Next question"} <ChevronRight size={16} />
            </button>
          )}
          {stage === "result" && (
            <>
              <button onClick={onBack} className="px-4 py-2.5 rounded-lg glass text-muted-foreground hover:text-foreground transition">Pick another topic</button>
              <button onClick={onClose} className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition">Done</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
