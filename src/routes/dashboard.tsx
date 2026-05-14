import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { subjects, missions, xpHistory, challenges } from "@/lib/mock-data";
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
} from "recharts";
import { Flame, Trophy, Coins, Sparkles, ArrowRight, Target } from "lucide-react";
import { useUser } from "@/lib/user-store";
import { fmt } from "@/lib/level-system";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — NUMERIX" }] }),
  component: Dashboard,
});

function Dashboard() {
  const { state: user, level, rank, voltaRank, progress } = useUser();
  const xpPct = progress.pct;
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Welcome back to NUMERIX,</div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{user.name} ⚡</h1>
            <div className="mt-1 text-xs text-muted-foreground">Volta Rank #{voltaRank} / {user.totalStudents} · weekly reset in 6h 24m</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill icon={<Flame size={14} className="text-orange-400" />} label={`${user.streak}-day streak`} />
            <Pill icon={<Trophy size={14} className="text-warning" />} label={rank} />
            <Pill icon={<Coins size={14} className="text-yellow-400" />} label={`${fmt(user.coins)} coins`} />
          </div>
        </div>

        {/* Top XP card + ring */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass-strong rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full gradient-primary opacity-20 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-muted-foreground">Current Level</div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-gradient">{level}</span>
                  <span className="text-sm text-muted-foreground">{fmt(user.xp)} / {fmt(progress.next)} XP</span>
                </div>
              </div>
              <Link to="/challenges" className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold glow hover:glow-strong transition">
                Earn XP
              </Link>
            </div>
            <div className="mt-6"><ProgressBar value={xpPct} /></div>
            <div className="mt-2 text-xs text-muted-foreground">{fmt(progress.remaining)} XP to Level {level + 1} · Progressing toward {rank}</div>
          </div>

          <Ring percent={xpPct} label="Daily Goal" sub="380 / 500 XP" />
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-semibold">Weekly XP</div>
                <div className="text-xs text-muted-foreground">Last 7 days · +18% vs last week</div>
              </div>
              <Link to="/progress" className="text-xs text-primary hover:underline flex items-center gap-1">
                View analytics <ArrowRight size={12} />
              </Link>
            </div>
            <div className="h-56">
              <ResponsiveContainer>
                <AreaChart data={xpHistory}>
                  <defs>
                    <linearGradient id="xp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.7 0.2 265)" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="oklch(0.7 0.2 265)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                  <XAxis dataKey="day" stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="xp" stroke="oklch(0.7 0.2 265)" strokeWidth={2.5} fill="url(#xp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Daily Missions</div>
            <div className="text-xs text-muted-foreground mb-4">Resets in 6h 24m</div>
            <div className="space-y-3">
              {missions.slice(0, 3).map((m) => (
                <div key={m.id} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg glass grid place-items-center text-sm">{m.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{m.title}</div>
                    <div className="mt-1.5"><ProgressBar value={(m.progress / m.total) * 100} height="h-1.5" /></div>
                  </div>
                  <div className="text-xs font-bold text-gradient">+{m.xp}</div>
                </div>
              ))}
            </div>
            <Link to="/missions" className="mt-5 block text-center text-xs text-primary hover:underline">
              View all missions →
            </Link>
          </div>
        </div>

        {/* Subjects + recommended */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Your subjects</div>
              <span className="text-xs text-muted-foreground">8 active</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {subjects.map((s) => (
                <div key={s.id} className="glass rounded-xl p-4 hover:glow transition-all">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center text-xl mb-3`}>
                    {s.icon}
                  </div>
                  <div className="text-sm font-semibold truncate">{s.name}</div>
                  <div className="mt-2"><ProgressBar value={s.progress} height="h-1" glow={false} /></div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.progress}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full gradient-neon opacity-20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Target size={14} /> Weakest topic
              </div>
              <div className="mt-2 text-2xl font-bold">Calculus</div>
              <div className="text-xs text-muted-foreground">41% accuracy this week</div>
              <div className="mt-5 space-y-2 text-sm">
                <div className="text-xs text-muted-foreground">Nova recommends:</div>
                {challenges.slice(2, 5).map((c) => (
                  <Link
                    key={c.id}
                    to="/challenges"
                    className="flex items-center justify-between p-2.5 rounded-lg glass hover:glow transition"
                  >
                    <span className="truncate">{c.title}</span>
                    <span className="text-xs text-gradient font-bold shrink-0 ml-2">+{c.xp}</span>
                  </Link>
                ))}
              </div>
              <Link to="/ai-tutor" className="mt-5 inline-flex items-center gap-2 text-xs text-primary hover:underline">
                <Sparkles size={12} /> Ask Nova AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs font-medium">
      {icon} {label}
    </div>
  );
}

function Ring({ percent, label, sub }: { percent: number; label: string; sub: string }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center">
      <div className="relative h-36 w-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r={r} stroke="oklch(0.26 0.04 275)" strokeWidth="10" fill="none" />
          <circle
            cx="70" cy="70" r={r} stroke="url(#g)" strokeWidth="10" fill="none"
            strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px oklch(0.7 0.2 265 / 0.7))" }}
          />
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.7 0.2 265)" />
              <stop offset="100%" stopColor="oklch(0.6 0.25 295)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">{Math.round(percent)}%</div>
            <div className="text-[10px] text-muted-foreground">{sub}</div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm font-medium">{label}</div>
    </div>
  );
}

const tooltipStyle = {
  background: "oklch(0.18 0.025 270)",
  border: "1px solid oklch(1 0 0 / 0.1)",
  borderRadius: 12,
  fontSize: 12,
  color: "white",
};
