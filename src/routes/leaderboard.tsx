import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { leaderboard } from "@/lib/mock-data";
import { useState, useMemo } from "react";
import { ArrowUp, ArrowDown, Minus, Trophy, Medal, TrendingUp } from "lucide-react";
import { useUser } from "@/lib/user-store";
import { fmt } from "@/lib/level-system";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — NUMERIX" }] }),
  component: Leaderboard,
});

const tabs = ["Volta School", "This Week", "My Class", "All-Time"];

function Leaderboard() {
  const [tab, setTab] = useState("This Week");
  const { state: user, level, voltaRank, progress } = useUser();
  // Inject the user into the leaderboard, sorted by XP, showing top 20.
  const merged = useMemo(() => {
    const all = [...leaderboard, { rank: 0, name: user.name, xp: user.xp, level, change: 0, avatar: user.avatar, isYou: true as const }];
    const sorted = [...all].sort((a, b) => b.xp - a.xp);
    return sorted.slice(0, 20).map((p, i) => ({ ...p, rank: i + 1 }));
  }, [user.xp, user.name, user.avatar, level]);
  const inTop20 = merged.some((p: any) => p.isYou);
  const nextAhead = useMemo(() => {
    const sorted = [...leaderboard].sort((a, b) => b.xp - a.xp);
    return sorted.find((p) => p.xp > user.xp);
  }, [user.xp]);
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-8 max-w-6xl">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Volta Ranking</h1>
          <p className="mt-1 text-muted-foreground">200 Alessandro Volta students. One ladder. You are currently <span className="text-foreground font-bold">#{voltaRank}</span>{nextAhead ? <> · only <span className="text-foreground font-bold">{fmt(nextAhead.xp - user.xp)} XP</span> until you surpass <span className="text-foreground font-bold">{nextAhead.name}</span></> : null}.</p>
        </div>

        {/* Podium */}
        <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto items-end">
          <Podium player={leaderboard[1]} place={2} height="h-32" />
          <Podium player={leaderboard[0]} place={1} height="h-44" />
          <Podium player={leaderboard[2]} place={3} height="h-28" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                tab === t ? "gradient-primary text-primary-foreground glow" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 px-5 py-3 text-xs uppercase tracking-wider text-muted-foreground border-b border-border bg-secondary/30">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Player</div>
            <div className="col-span-2 text-center">Level</div>
            <div className="col-span-2 text-right">XP</div>
            <div className="col-span-1 text-right">Δ</div>
          </div>
          {merged.map((p: any) => (
            <div
              key={p.name + p.rank}
              className={`grid grid-cols-12 px-5 py-3.5 items-center text-sm transition border-b border-border/50 last:border-0 ${p.isYou ? "bg-primary/10 border-l-4 border-l-primary" : "hover:bg-secondary/30"}`}
            >
              <div className="col-span-1 font-bold">{p.rank}</div>
              <div className="col-span-6 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full grid place-items-center font-bold text-xs ${p.isYou ? "gradient-primary text-primary-foreground glow" : "bg-secondary"}`}>
                  {p.avatar}
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    {p.name}
                    {p.isYou && <span className="text-xs px-1.5 py-0.5 rounded bg-primary/30 text-primary-foreground">YOU</span>}
                  </div>
                  <div className="text-xs text-muted-foreground">@{p.name.toLowerCase().replace(/\s+/g, "")}</div>
                </div>
              </div>
              <div className="col-span-2 text-center">
                <span className="px-2 py-0.5 rounded-md gradient-primary text-primary-foreground text-xs font-bold">Lv {p.level}</span>
              </div>
              <div className="col-span-2 text-right font-bold text-gradient">{fmt(p.xp)}</div>
              <div className="col-span-1 text-right">
                {p.change > 0 ? (
                  <span className="inline-flex items-center text-success text-xs font-bold"><ArrowUp size={12} />{p.change}</span>
                ) : p.change < 0 ? (
                  <span className="inline-flex items-center text-destructive text-xs font-bold"><ArrowDown size={12} />{Math.abs(p.change)}</span>
                ) : (
                  <Minus size={12} className="text-muted-foreground inline" />
                )}
              </div>
            </div>
          ))}

          {!inTop20 && (
            <div className="grid grid-cols-12 px-5 py-4 items-center text-sm bg-primary/10 border-t-2 border-primary/30">
              <div className="col-span-1 font-bold">#{voltaRank}</div>
              <div className="col-span-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center font-bold text-xs text-primary-foreground glow">
                  {user.avatar}
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    {user.name} <span className="text-xs px-1.5 py-0.5 rounded bg-primary/30 text-primary-foreground">YOU</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{user.username}</div>
                </div>
              </div>
              <div className="col-span-2 text-center">
                <span className="px-2 py-0.5 rounded-md gradient-primary text-primary-foreground text-xs font-bold">Lv {level}</span>
              </div>
              <div className="col-span-2 text-right font-bold text-gradient">{fmt(user.xp)}</div>
              <div className="col-span-1 text-right">
                {nextAhead ? <span className="inline-flex items-center text-success text-xs font-bold"><TrendingUp size={12} /></span> : <Minus size={12} className="text-muted-foreground inline" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function Podium({ player, place, height }: { player: any; place: number; height: string }) {
  const colors = {
    1: "gradient-fire",
    2: "bg-gradient-to-br from-slate-300 to-slate-500",
    3: "bg-gradient-to-br from-amber-700 to-amber-900",
  } as const;
  const Icon = place === 1 ? Trophy : Medal;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative h-16 w-16 rounded-full ${colors[place as 1 | 2 | 3]} grid place-items-center text-xl font-bold text-white ${place === 1 ? "glow-strong" : ""}`}>
        {player.avatar}
        <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-background grid place-items-center">
          <Icon size={14} className={place === 1 ? "text-warning" : "text-muted-foreground"} />
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-sm">{player.name}</div>
        <div className="text-xs text-gradient font-bold">{player.xp.toLocaleString()} XP</div>
      </div>
      <div className={`w-full ${height} rounded-t-xl glass-strong grid place-items-center font-bold text-3xl ${place === 1 ? "text-gradient" : "text-muted-foreground"}`}>
        {place}
      </div>
    </div>
  );
}
