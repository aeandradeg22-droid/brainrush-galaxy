import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { missions } from "@/lib/mock-data";
import { Check, Clock } from "lucide-react";

export const Route = createFileRoute("/missions")({
  head: () => ({ meta: [{ title: "Daily Missions — BrainRush" }] }),
  component: Missions,
});

function Missions() {
  const totalXp = missions.reduce((sum, m) => sum + m.xp, 0);
  const claimed = missions.filter((m) => m.done).reduce((s, m) => s + m.xp, 0);
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-6 max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Daily Missions</h1>
            <p className="mt-1 text-muted-foreground">Complete missions to earn XP and keep your streak alive.</p>
          </div>
          <div className="glass-strong rounded-xl px-5 py-3 flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span className="text-sm">Resets in <span className="font-bold">6h 24m</span></span>
          </div>
        </div>

        {/* Summary */}
        <div className="glass-strong rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full gradient-primary opacity-20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs text-muted-foreground">Daily progress</div>
                <div className="text-2xl font-bold">{claimed} / {totalXp} XP</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Bonus at 100%</div>
                <div className="text-gradient font-bold">+500 XP</div>
              </div>
            </div>
            <ProgressBar value={(claimed / totalXp) * 100} />
          </div>
        </div>

        {/* List */}
        <div className="space-y-3">
          {missions.map((m) => (
            <div
              key={m.id}
              className={`glass rounded-2xl p-5 flex items-center gap-4 hover:glow transition ${m.done ? "opacity-70" : ""}`}
            >
              <div className={`h-14 w-14 rounded-xl grid place-items-center text-2xl shrink-0 ${m.done ? "bg-success/20" : "gradient-primary glow"}`}>
                {m.done ? <Check className="text-success" size={26} /> : m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold">{m.title}</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1"><ProgressBar value={(m.progress / m.total) * 100} height="h-1.5" /></div>
                  <div className="text-xs text-muted-foreground shrink-0">{m.progress}/{m.total}</div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-bold text-gradient">+{m.xp}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">XP</div>
              </div>
              <button
                disabled={m.done}
                className="px-4 py-2 rounded-lg text-xs font-bold transition gradient-primary text-primary-foreground glow hover:glow-strong disabled:bg-none disabled:bg-secondary disabled:text-muted-foreground disabled:opacity-60"
              >
                {m.done ? "Claimed" : m.progress >= m.total ? "Claim" : "Start"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
