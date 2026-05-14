import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Swords,
  Trophy,
  Sparkles,
  TrendingUp,
  Gift,
  User,
  Target,
  Atom,
  Home,
} from "lucide-react";
import { Logo } from "./Logo";
import { useUser } from "@/lib/user-store";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/challenges", label: "Challenges", icon: Swords },
  { to: "/missions", label: "Daily Missions", icon: Target },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { to: "/ai-tutor", label: "Nova AI", icon: Sparkles },
  { to: "/progress", label: "Analytics", icon: TrendingUp },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/simulator", label: "Physics Lab", icon: Atom },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { state: user, level, rank } = useUser();

  return (
    <div className="min-h-screen w-full flex">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col glass-strong border-r border-border sticky top-0 h-screen">
        <div className="p-5 border-b border-border">
          <Logo />
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all relative ${
                  active
                    ? "bg-primary/15 text-foreground glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r gradient-primary" />
                )}
                <Icon size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <Link
            to="/profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-sm font-bold text-primary-foreground glow">
              {user.avatar}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-xs text-muted-foreground">Lvl {level} · {rank}</div>
            </div>
          </Link>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="lg:hidden sticky top-0 z-40 glass-strong border-b border-border px-4 py-3 flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded-md gradient-primary text-primary-foreground font-bold">
              Lvl {level}
            </span>
            <span className="px-2 py-1 rounded-md glass">🔥 {user.streak}</span>
          </div>
        </div>
        <div className="lg:hidden border-b border-border overflow-x-auto">
          <div className="flex gap-1 px-2 py-2 min-w-max">
            {nav.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap ${
                    active ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
