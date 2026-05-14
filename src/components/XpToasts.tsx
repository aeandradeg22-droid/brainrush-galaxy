import { AnimatePresence, motion } from "framer-motion";
import { Zap, TrendingUp, Trophy, X } from "lucide-react";
import { useUser } from "@/lib/user-store";

export function XpToasts() {
  const { toasts, dismissToast } = useUser();
  return (
    <div className="fixed top-4 right-4 z-[60] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="glass-strong rounded-xl px-4 py-3 min-w-[220px] max-w-sm shadow-2xl pointer-events-auto border border-primary/30"
          >
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg gradient-primary grid place-items-center shrink-0 glow">
                {t.levelUp ? <Trophy size={16} className="text-primary-foreground" /> : <Zap size={16} className="text-primary-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                {t.xp > 0 && (
                  <div className="text-sm font-bold text-gradient">+{t.xp} XP</div>
                )}
                <div className="text-xs text-muted-foreground truncate">{t.label}</div>
                {t.levelUp && (
                  <div className="mt-1 text-xs font-semibold text-warning flex items-center gap-1">
                    <Trophy size={11} /> Level up!
                  </div>
                )}
                {t.surpassed && (
                  <div className="mt-1 text-xs font-semibold text-success flex items-center gap-1">
                    <TrendingUp size={11} /> You surpassed {t.surpassed}
                  </div>
                )}
                {t.rankClimb && !t.surpassed && (
                  <div className="mt-1 text-xs font-semibold text-success flex items-center gap-1">
                    <TrendingUp size={11} /> Climbed {t.rankClimb} {t.rankClimb === 1 ? "position" : "positions"}
                  </div>
                )}
              </div>
              <button onClick={() => dismissToast(t.id)} className="text-muted-foreground hover:text-foreground transition shrink-0">
                <X size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
