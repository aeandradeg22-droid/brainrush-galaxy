import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { challenges, bossBattles, subjects } from "@/lib/mock-data";
import { useState } from "react";
import { Clock, Users, Zap, Swords, Flame, Crown } from "lucide-react";

export const Route = createFileRoute("/challenges")({
  head: () => ({ meta: [{ title: "Challenges — BrainRush" }] }),
  component: Challenges,
});

const modes = [
  { id: "practice", name: "Practice Mode", desc: "No pressure. Build skill.", color: "from-emerald-500 to-cyan-500", icon: Zap },
  { id: "ranked", name: "Ranked Mode", desc: "Climb the global ladder.", color: "from-blue-500 to-purple-600", icon: Crown },
  { id: "boss", name: "Boss Battles", desc: "Epic multi-round duels.", color: "from-orange-500 to-rose-600", icon: Swords },
  { id: "timed", name: "Timed Challenges", desc: "Beat the clock for big XP.", color: "from-purple-500 to-pink-500", icon: Clock },
];

function diffColor(d: string) {
  return d === "Easy" ? "text-success" : d === "Medium" ? "text-warning" : "text-destructive";
}

function Challenges() {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", ...subjects.map((s) => s.name)];
  const list = filter === "All" ? challenges : challenges.filter((c) => c.subject === filter);
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-8 max-w-7xl">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Challenges</h1>
          <p className="mt-1 text-muted-foreground">Pick your fight. Earn XP. Climb ranks.</p>
        </div>

        {/* Modes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="glass-strong rounded-2xl p-6 hover:glow-strong transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden group"
              >
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${m.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
                <div className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${m.color} grid place-items-center mb-4`}>
                  <Icon className="text-white" size={22} />
                </div>
                <div className="font-semibold text-lg">{m.name}</div>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Boss Battles */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="text-orange-400" size={20} />
            <h2 className="text-xl font-bold">Boss Battles</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/20 text-destructive font-bold uppercase tracking-wider">Epic</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {bossBattles.map((b) => (
              <div
                key={b.id}
                className="relative rounded-2xl p-6 overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color}`} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative text-white">
                  <div className="flex items-start justify-between">
                    <div className="text-6xl">{b.icon}</div>
                    <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider">
                      Boss
                    </span>
                  </div>
                  <div className="mt-6 text-2xl font-bold">{b.name}</div>
                  <div className="text-sm opacity-80">{b.subject}</div>
                  <div className="mt-5 flex items-center justify-between text-xs">
                    <div>
                      <div className="opacity-70">HP</div>
                      <div className="font-bold text-base">{b.hp}</div>
                    </div>
                    <div>
                      <div className="opacity-70">Reward</div>
                      <div className="font-bold text-base">{b.reward}</div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:scale-105 transition">
                      Engage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter chips */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">All challenges</h2>
          </div>
          <div className="flex gap-2 flex-wrap mb-5">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  filter === c ? "gradient-primary text-primary-foreground glow" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((c) => (
              <div key={c.id} className="glass rounded-2xl p-5 hover:glow transition-all hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">{c.subject}</div>
                    <div className="font-semibold text-lg mt-0.5">{c.title}</div>
                  </div>
                  <div className={`text-xs font-bold ${diffColor(c.difficulty)}`}>{c.difficulty}</div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
                  <div className="glass rounded-lg p-2 text-center">
                    <div className="text-gradient font-bold">+{c.xp}</div>
                    <div className="text-muted-foreground text-[10px] mt-0.5">XP</div>
                  </div>
                  <div className="glass rounded-lg p-2 text-center flex flex-col items-center">
                    <div className="font-bold flex items-center gap-1"><Clock size={10} /> {c.time}</div>
                    <div className="text-muted-foreground text-[10px] mt-0.5">Time</div>
                  </div>
                  <div className="glass rounded-lg p-2 text-center flex flex-col items-center">
                    <div className="font-bold flex items-center gap-1"><Users size={10} /> {c.completion}%</div>
                    <div className="text-muted-foreground text-[10px] mt-0.5">Completed</div>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold glow hover:glow-strong transition">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
