import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck as CheckCircle, Circle as XCircle, Zap, ChevronRight, Hop as Home, Swords, Trophy, Flame } from "lucide-react";
import { rankedOpponents, rankedMatchPool, divisionFor, type RankedOpponent } from "@/lib/mock-data";
import { useUser } from "@/lib/user-store";

interface Props {
  open: boolean;
  onClose: () => void;
}

const STORAGE_RP = "numerix-ranked-points-v1";
const STORAGE_STREAK = "numerix-ranked-streak-v1";

function getRP(): number {
  try {
    const raw = localStorage.getItem(STORAGE_RP);
    return raw ? Math.max(0, parseInt(raw, 10) || 0) : 0;
  } catch { return 0; }
}
function setRP(v: number) { try { localStorage.setItem(STORAGE_RP, String(Math.max(0, v))); } catch {} }
function getStreak(): number {
  try { return parseInt(localStorage.getItem(STORAGE_STREAK) || "0", 10) || 0; } catch { return 0; }
}
function setStreak(v: number) { try { localStorage.setItem(STORAGE_STREAK, String(v)); } catch {} }

export function RankedMatch({ open, onClose }: Props) {
  const { addXp } = useUser();
  const [stage, setStage] = useState<"select" | "match" | "result">("select");
  const [opponent, setOpponent] = useState<RankedOpponent | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [oppScore, setOppScore] = useState(0);
  const [questionStart, setQuestionStart] = useState<number>(0);
  const [totalSpeedMs, setTotalSpeedMs] = useState(0);
  const [rpHistory, setRpHistoryState] = useState({ before: 0, after: 0, delta: 0 });
  const [winStreak, setWinStreak] = useState(0);

  // 5 mixed questions per ranked match.
  const questions = useMemo(() => {
    const shuffled = [...rankedMatchPool].sort(() => Math.random() - 0.5).slice(0, 5);
    return shuffled.map((q, i) => ({ ...q, id: i + 1 }));
  }, [opponent]);

  useEffect(() => {
    if (open) {
      setStage("select");
      setOpponent(null);
      setCurrent(0);
      setSelected(null);
      setAnswered(false);
      setPlayerScore(0);
      setOppScore(0);
      setTotalSpeedMs(0);
    }
  }, [open]);

  useEffect(() => {
    if (stage === "match") setQuestionStart(Date.now());
  }, [stage, current]);

  if (!open) return null;

  function startMatch(o: RankedOpponent) {
    setOpponent(o);
    setStage("match");
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setPlayerScore(0);
    setOppScore(0);
    setTotalSpeedMs(0);
  }

  function handleSelect(idx: number) {
    if (answered || !opponent) return;
    setSelected(idx);
    setAnswered(true);
    const elapsed = Date.now() - questionStart;
    setTotalSpeedMs((s) => s + elapsed);
    const playerCorrect = idx === questions[current].correct;
    if (playerCorrect) setPlayerScore((p) => p + 1);
    // Opponent simulated: probability of correct based on accuracy
    const oppCorrect = Math.random() * 100 < opponent.accuracyPct;
    if (oppCorrect) setOppScore((p) => p + 1);
  }

  function nextQ() {
    if (!opponent) return;
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      finalizeMatch();
    }
  }

  function finalizeMatch() {
    if (!opponent) return;
    const won = playerScore > oppScore;
    const tied = playerScore === oppScore;
    const before = getRP();
    let delta = 0;
    if (won) delta = 80 + Math.floor(opponent.rankPoints / 60);
    else if (tied) delta = 15;
    else delta = -25;
    const after = Math.max(0, before + delta);
    setRP(after);
    setRpHistoryState({ before, after, delta });
    // Streak
    let s = getStreak();
    if (won) s += 1; else s = 0;
    setStreak(s);
    setWinStreak(s);
    // XP reward
    const accuracy = Math.round((playerScore / questions.length) * 100);
    const avgSpeed = Math.round(totalSpeedMs / questions.length);
    const speedBonus = avgSpeed < 4000 ? 40 : 0;
    const xp = (won ? 200 : tied ? 80 : 30) + Math.round(accuracy * 1.2) + speedBonus;
    addXp({
      xp,
      label: won ? `Ranked win vs ${opponent.name}` : tied ? `Ranked draw vs ${opponent.name}` : `Ranked loss vs ${opponent.name}`,
      kind: "challenge",
      correct: playerScore,
      total: questions.length,
    });
    setStage("result");
  }

  const beforeDiv = divisionFor(rpHistory.before);
  const afterDiv = divisionFor(rpHistory.after);
  const promoted = afterDiv.name !== beforeDiv.name && rpHistory.delta > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/85 backdrop-blur flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ y: 20, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        className="glass-strong rounded-3xl p-6 sm:p-8 w-full max-w-2xl my-8"
      >
        {/* SELECT STAGE */}
        {stage === "select" && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Swords className="text-primary" size={20} />
                <h2 className="text-2xl font-bold">Ranked Mode</h2>
              </div>
              <button onClick={onClose} className="text-xs text-muted-foreground hover:text-foreground">Cancel</button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Choose your opponent. Win to gain ranked points and climb divisions.</p>

            {/* Current division */}
            <div className="glass rounded-xl p-4 mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Your Division</div>
                <div className="font-bold text-lg">{divisionFor(getRP()).name}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Ranked Points</div>
                <div className="font-bold text-gradient text-xl">{getRP()} RP</div>
              </div>
            </div>

            <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
              {rankedOpponents.map((o) => (
                <button
                  key={o.name}
                  onClick={() => startMatch(o)}
                  className="w-full glass rounded-xl p-4 flex items-center gap-3 hover:glow transition text-left"
                >
                  <div className="h-12 w-12 rounded-full bg-secondary grid place-items-center font-bold text-sm">{o.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{o.name}</div>
                    <div className="text-xs text-muted-foreground">Lv {o.level} · {o.rankPoints} RP · {o.difficulty}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md gradient-primary text-primary-foreground font-bold">Challenge</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MATCH STAGE */}
        {stage === "match" && opponent && (
          <div>
            <div className="grid grid-cols-3 items-center mb-4 gap-2">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center font-bold text-xs text-primary-foreground glow">YOU</div>
                <div>
                  <div className="text-xs text-muted-foreground">You</div>
                  <div className="font-bold text-gradient text-2xl">{playerScore}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Q {current + 1}/{questions.length}</div>
                <div className="text-xs font-bold mt-0.5">VS</div>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{opponent.name}</div>
                  <div className="font-bold text-2xl">{oppScore}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-secondary grid place-items-center font-bold text-xs">{opponent.avatar}</div>
              </div>
            </div>

            <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-primary to-cyan-400"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl font-semibold leading-relaxed mb-6"
              >
                {questions[current].question}
              </motion.p>
            </AnimatePresence>

            <div className="space-y-3 mb-5">
              {questions[current].options.map((opt, idx) => {
                const isCorrect = idx === questions[current].correct;
                const isSel = selected === idx;
                let cls = "glass hover:glow";
                if (answered) {
                  if (isCorrect) cls = "bg-success/20 border border-success";
                  else if (isSel) cls = "bg-destructive/20 border border-destructive";
                }
                return (
                  <button
                    key={idx}
                    disabled={answered}
                    onClick={() => handleSelect(idx)}
                    className={`w-full p-4 rounded-lg text-left font-medium transition ${cls} ${answered ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt}</span>
                      {answered && isCorrect && <CheckCircle className="text-success" size={20} />}
                      {answered && isSel && !isCorrect && <XCircle className="text-destructive" size={20} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <button onClick={onClose} className="text-xs text-muted-foreground hover:text-foreground">Forfeit</button>
              <button
                disabled={!answered}
                onClick={nextQ}
                className="px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {current === questions.length - 1 ? "Finish Match" : "Next"}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* RESULT STAGE */}
        {stage === "result" && opponent && (
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-20 h-20 mx-auto mb-6 rounded-full grid place-items-center ${rpHistory.delta > 0 ? "bg-gradient-to-br from-emerald-400 to-cyan-400" : rpHistory.delta === 0 ? "bg-gradient-to-br from-slate-400 to-slate-600" : "bg-gradient-to-br from-rose-500 to-orange-500"}`}
            >
              {rpHistory.delta > 0 ? <Trophy className="text-black" size={36} /> : <Swords className="text-black" size={36} />}
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">
              {rpHistory.delta > 0 ? `Victory against ${opponent.name}!` : rpHistory.delta === 0 ? `Draw vs ${opponent.name}` : `Defeat against ${opponent.name}`}
            </h2>
            <p className="text-muted-foreground mb-6">{playerScore} – {oppScore} · Avg speed {Math.round(totalSpeedMs / questions.length / 100) / 10}s</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Ranked Points</div>
                <div className={`text-2xl font-bold ${rpHistory.delta > 0 ? "text-success" : rpHistory.delta < 0 ? "text-destructive" : ""}`}>
                  {rpHistory.delta >= 0 ? "+" : ""}{rpHistory.delta} RP
                </div>
                <div className="text-xs text-muted-foreground mt-1">{rpHistory.before} → {rpHistory.after}</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Division</div>
                <div className="font-bold text-lg">{afterDiv.name}</div>
                {promoted && <div className="text-xs text-success mt-1">You advanced to {afterDiv.name}!</div>}
              </div>
            </div>

            {winStreak > 1 && (
              <div className="glass rounded-xl p-3 mb-4 inline-flex items-center gap-2">
                <Flame size={16} className="text-orange-400" />
                <span className="text-sm font-semibold">Winning streak: {winStreak}</span>
              </div>
            )}

            <div className="flex gap-3 mt-2">
              <button onClick={onClose} className="flex-1 px-4 py-3 rounded-lg glass text-muted-foreground hover:text-foreground transition flex items-center justify-center gap-2">
                <Home size={16} /> Exit
              </button>
              <button
                onClick={() => { setStage("select"); setOpponent(null); }}
                className="flex-1 px-4 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition flex items-center justify-center gap-2"
              >
                <Zap size={16} /> Play Again
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
