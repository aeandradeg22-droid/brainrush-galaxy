import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { rewards, achievements } from "@/lib/mock-data";
import { useUser } from "@/lib/user-store";
import { fmt } from "@/lib/level-system";
import { Coins, Lock } from "lucide-react";

export const Route = createFileRoute("/rewards")({
  head: () => ({ meta: [{ title: "Rewards — NUMERIX" }] }),
  component: Rewards,
});

const rarityStyle: Record<string, string> = {
  Common: "from-slate-500 to-slate-700 text-slate-300",
  Rare: "from-blue-500 to-cyan-600 text-cyan-200",
  Epic: "from-purple-500 to-fuchsia-600 text-purple-200",
  Legendary: "from-orange-500 to-rose-600 text-orange-200",
  Mythic: "from-pink-500 via-purple-500 to-cyan-500 text-pink-200",
};

function Rewards() {
  const { state: user, spendCoins } = useUser();
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-8 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Rewards</h1>
            <p className="mt-1 text-muted-foreground">Spend your coins, flex your achievements.</p>
          </div>
          <div className="glass-strong rounded-xl px-5 py-3 flex items-center gap-2 glow">
            <Coins className="text-yellow-400" size={20} />
            <span className="text-2xl font-bold text-gradient">{fmt(user.coins)}</span>
            <span className="text-xs text-muted-foreground">coins</span>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-xl font-bold mb-4">Reward shop</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.map((r) => (
              <div key={r.id} className="relative glass rounded-2xl p-6 hover:-translate-y-1 transition-all hover:glow group overflow-hidden">
                <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${rarityStyle[r.rarity].split(" ").slice(0, 2).join(" ")} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
                <div className="relative">
                  <div className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${rarityStyle[r.rarity]}`}>
                    {r.rarity}
                  </div>
                  <div className="text-5xl mt-4">{r.icon}</div>
                  <div className="mt-3 font-semibold">{r.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Coins className="text-yellow-400" size={14} />
                      <span className="font-bold">{r.cost.toLocaleString()}</span>
                    </div>
                    <button
                      disabled={user.coins < r.cost}
                      className="px-4 py-1.5 rounded-lg gradient-primary text-primary-foreground text-xs font-bold glow hover:glow-strong transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {achievements.map((a) => (
              <div
                key={a.id}
                className={`glass rounded-2xl p-4 text-center relative ${
                  a.unlocked ? "hover:glow transition" : "opacity-50"
                }`}
              >
                {!a.unlocked && (
                  <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-secondary grid place-items-center">
                    <Lock size={10} />
                  </div>
                )}
                <div className={`text-4xl mb-2 ${!a.unlocked ? "grayscale" : ""}`}>{a.icon}</div>
                <div className="text-sm font-semibold">{a.name}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
