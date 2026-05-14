import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Trophy, Brain, Zap, Target, TrendingUp, Star } from "lucide-react";
import { Particles } from "@/components/Particles";
import { Logo } from "@/components/Logo";
import { stats, leaderboard, subjects } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUMERIX — Alessandro Volta Academic Arena" },
      {
        name: "description",
        content:
          "The exclusive gamified academic arena built for Alessandro Volta. Compete with classmates, climb the school rankings, and master Math and Physics.",
      },
      { property: "og:title", content: "NUMERIX — Alessandro Volta Academic Arena" },
      {
        property: "og:description",
        content:
          "Compete with your Volta classmates through Math and Physics challenges, weekly competitions, boss battles, and live school rankings.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Nav */}
      <header className="relative z-20 px-6 lg:px-10 py-5 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#ranks" className="hover:text-foreground transition-colors">Ranks</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Students</a>
          <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground hidden sm:inline">
            Log in
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold glow hover:glow-strong transition-shadow"
          >
            Start Learning
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 lg:px-10 pt-16 pb-32 text-center">
        <Particles count={40} />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            147 Volta students online · weekly reset in 6h
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.05]">
            Climb the <br />
            <span className="text-gradient">Volta Ladder.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            NUMERIX is the exclusive academic arena for Alessandro Volta. Battle your classmates in
            Mathematics and Physics, climb the school rankings, and earn your spot among the legends.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition-all"
            >
              Enter the Arena
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/leaderboard"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:bg-secondary/50 transition-colors"
            >
              <Trophy size={18} className="text-warning" />
              See School Ranking
            </Link>
          </div>

          {/* Floating preview cards */}
          <div className="mt-20 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <FloatCard icon="🔥" label="Your Streak" value="12 days" tint="from-orange-500/20 to-red-500/10" />
            <FloatCard icon="⚡" label="Weekly XP" value="+4,300" tint="from-blue-500/20 to-purple-500/10" />
            <FloatCard icon="🏆" label="Volta Rank" value="#19 / 200" tint="from-purple-500/20 to-pink-500/10" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 lg:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center hover:glow transition-shadow">
              <div className="text-3xl lg:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Why NUMERIX"
            title="Built for Volta. Ruled by you."
            subtitle="Every problem you solve fuels XP, school rank, streaks, and rewards. Studying becomes the loop you don't want to break — because your classmates are watching."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-4">
            <Feature icon={<Zap />} title="XP & Levels" desc="Earn XP for every solved problem. Climb levels and unlock higher tiers in the Volta arena." />
            <Feature icon={<Trophy />} title="School Rankings" desc="Compete against your 200 Volta classmates. Rookie to Volta Legend — prove who's really #1." />
            <Feature icon={<Brain />} title="Adaptive AI" desc="Nova AI spots your weakest topics and recommends the exact problems you need." />
            <Feature icon={<Target />} title="Daily Missions" desc="Quick quests keep your streak alive and your brain warm before every class." />
            <Feature icon={<Sparkles />} title="Boss Battles" desc="Defeat Newton, Einstein and the Calculus Titan — only a few Volta students ever beat them." />
            <Feature icon={<TrendingUp />} title="Deep Analytics" desc="Heatmaps, radar charts, and trends so you always know what to study next." />
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="Curriculum" title="Math + Physics, gamified." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {subjects.map((s) => (
              <div
                key={s.id}
                className="glass rounded-2xl p-5 hover:glow-purple transition-all group cursor-pointer"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} grid place-items-center text-2xl mb-3 group-hover:scale-110 transition-transform`}
                >
                  {s.icon}
                </div>
                <div className="font-semibold">{s.name}</div>
                <div className="mt-3 h-1 rounded-full bg-secondary overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranks preview */}
      <section id="ranks" className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader tag="Competitive" title="Climb the Volta ladder." align="left" />
            <p className="mt-4 text-muted-foreground">
              From Rookie to Volta Legend, every rank unlocks new visuals, badges, and bragging rights inside
              Alessandro Volta. Your weekly performance decides if you climb — or get knocked back down.
            </p>
            <div className="mt-8 flex gap-2 flex-wrap">
              {["Rookie", "Challenger", "Academic Warrior", "Elite Solver", "Quantum Mind", "Nova Master", "Galactic Scholar", "Volta Legend"].map((r, i) => (
                <span
                  key={r}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    i === 3 ? "gradient-primary text-primary-foreground glow" : "glass text-muted-foreground"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-strong rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Volta Top 5 · This Week</div>
              <span className="text-xs text-muted-foreground">Live · updated 2m ago</span>
            </div>
            <div className="space-y-2">
              {leaderboard.slice(0, 5).map((p) => (
                <div key={p.rank} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/40">
                  <div
                    className={`h-8 w-8 grid place-items-center rounded-lg text-sm font-bold ${
                      p.rank === 1
                        ? "gradient-fire text-primary-foreground"
                        : p.rank <= 3
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    {p.rank}
                  </div>
                  <div className="h-9 w-9 rounded-full bg-secondary grid place-items-center text-xs font-semibold">
                    {p.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">{p.name}</div>
                    <div className="text-xs text-muted-foreground">Level {p.level}</div>
                  </div>
                  <div className="text-sm font-bold text-gradient">{p.xp.toLocaleString()} XP</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="Students" title="Loved by the toughest critics." />
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { name: "Maya, 16", quote: "I went from failing physics to top of my class in two months. The boss battles are addictive.", avatar: "M" },
              { name: "Diego, 17", quote: "Honestly the only reason I open a math book anymore. Streaks hit different.", avatar: "D" },
              { name: "Aisha, 15", quote: "Nova AI explains things better than my textbook. And it never gets tired of my dumb questions.", avatar: "A" },
            ].map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 hover:glow transition-shadow">
                <div className="flex gap-1 text-warning mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full gradient-primary grid place-items-center font-bold text-primary-foreground text-sm">
                    {t.avatar}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-10" />
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Your <span className="text-gradient">first level</span> is waiting.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Free forever. No credit card. Just your brain and a streak counter.
            </p>
            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold glow-strong hover:scale-105 transition-transform"
            >
              Enter the Arena <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 lg:px-10 py-10 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="text-xs text-muted-foreground">© 2025 NUMERIX. Built for curious minds.</div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  tag, title, subtitle, align = "center",
}: { tag: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      <div className={`inline-flex glass px-3 py-1 rounded-full text-xs text-muted-foreground`}>{tag}</div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass rounded-2xl p-6 hover:glow transition-all hover:-translate-y-1 duration-300">
      <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-primary-foreground mb-4 glow">
        {icon}
      </div>
      <div className="font-semibold text-lg">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function FloatCard({ icon, label, value, tint }: { icon: string; label: string; value: string; tint: string }) {
  return (
    <div className={`glass-strong rounded-2xl p-5 text-left hover:scale-105 transition-transform bg-gradient-to-br ${tint}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-xl font-bold mt-0.5">{value}</div>
    </div>
  );
}
