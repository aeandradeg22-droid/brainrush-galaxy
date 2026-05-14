import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { user, achievements, xpHistory, subjects } from "@/lib/mock-data";
import { Edit3, Trophy, Flame, Target, Calendar } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — NUMERIX" }] }),
  component: Profile,
});

function Profile() {
  const xpPct = (user.xp / user.xpToNext) * 100;
  const recent = xpHistory.slice().reverse();

  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-6 max-w-6xl">
        {/* Header card */}
        <div className="relative glass-strong rounded-3xl overflow-hidden">
          <div className="h-36 gradient-primary relative">
            <div className="absolute inset-0 grid-bg opacity-30" />
          </div>
          <div className="px-6 pb-6 -mt-14 flex flex-col sm:flex-row gap-6 sm:items-end">
            <div className="relative">
              <div className="h-28 w-28 rounded-2xl gradient-primary border-4 border-background grid place-items-center text-4xl font-bold text-primary-foreground glow-strong">
                {user.avatar}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-fire text-white text-xs font-bold glow animate-pulse-glow">
                Lv {user.level}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
                <span className="px-2 py-0.5 rounded-md gradient-neon text-neon-foreground text-xs font-bold">{user.rank}</span>
              </div>
              <div className="text-sm text-muted-foreground">{user.username} · joined {user.joined}</div>
              <div className="mt-3 max-w-md">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Lvl {user.level}</span>
                  <span>{user.xp.toLocaleString()} / {user.xpToNext.toLocaleString()} XP</span>
                  <span>Lvl {user.level + 1}</span>
                </div>
                <ProgressBar value={xpPct} />
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl glass-strong hover:bg-secondary/50 transition flex items-center gap-2 text-sm font-medium self-start">
              <Edit3 size={14} /> Edit profile
            </button>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={<Trophy className="text-warning" size={18} />} label="Global rank" value={`#${user.globalRank}`} />
          <Stat icon={<Flame className="text-orange-400" size={18} />} label="Streak" value={`${user.streak} days`} />
          <Stat icon={<Target className="text-success" size={18} />} label="Accuracy" value="83%" />
          <Stat icon={<Calendar className="text-primary" size={18} />} label="Favorite" value={user.favoriteSubject} />
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Achievements showcase */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Achievement showcase</div>
              <span className="text-xs text-muted-foreground">{achievements.filter((a) => a.unlocked).length} / {achievements.length}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.id}
                  className={`aspect-square rounded-xl glass grid place-items-center text-3xl ${a.unlocked ? "glow" : "opacity-30 grayscale"}`}
                  title={a.name}
                >
                  {a.icon}
                </div>
              ))}
            </div>

            <div className="mt-6 font-semibold mb-3">Top subjects</div>
            <div className="space-y-3">
              {subjects.slice(0, 4).map((s) => (
                <div key={s.id} className="flex items-center gap-3 text-sm">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center`}>{s.icon}</div>
                  <span className="font-medium w-32">{s.name}</span>
                  <div className="flex-1"><ProgressBar value={s.progress} height="h-1.5" glow={false} /></div>
                  <span className="text-xs text-muted-foreground w-10 text-right">{s.progress}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-4">Recent activity</div>
            <div className="space-y-3">
              {recent.map((r) => (
                <div key={r.day} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg glass grid place-items-center text-xs font-bold">{r.day}</div>
                    <span className="text-muted-foreground">Earned XP</span>
                  </div>
                  <span className="font-bold text-gradient">+{r.xp}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 font-semibold mb-3">Rank history</div>
            <div className="space-y-2 text-sm">
              {[
                { date: "Now", rank: "Elite Solver", color: "text-primary" },
                { date: "2w ago", rank: "Academic Warrior", color: "text-muted-foreground" },
                { date: "1mo ago", rank: "Challenger", color: "text-muted-foreground" },
                { date: "2mo ago", rank: "Rookie", color: "text-muted-foreground" },
              ].map((r) => (
                <div key={r.date} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                  <span className={`font-semibold ${r.color}`}>{r.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon} {label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}
