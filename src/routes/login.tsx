import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Particles } from "@/components/Particles";
import { Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen grid lg:grid-cols-2 relative overflow-hidden">
      <div className="hidden lg:flex relative gradient-primary overflow-hidden">
        <Particles count={50} />
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <Logo />
          <div>
            <h2 className="text-5xl font-bold tracking-tight">Welcome back, learner.</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              17-day streak waiting. Your weakest topic is calling. Let's get back into the rush.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { v: "Lvl 24", l: "Diamond III" },
                { v: "12,480", l: "Total XP" },
                { v: "#142", l: "Global" },
              ].map((s) => (
                <div key={s.l} className="bg-white/10 backdrop-blur rounded-xl p-3">
                  <div className="text-2xl font-bold">{s.v}</div>
                  <div className="text-xs opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs opacity-70">© 2025 NUMERIX</div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6 sm:p-12">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative w-full max-w-md">
          <div className="lg:hidden mb-8"><Logo /></div>
          <h1 className="text-3xl font-bold tracking-tight">
            {mode === "login" ? "Sign in" : "Create account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "login" ? "Welcome back. Pick up where you left off." : "Start your journey. It's free."}
          </p>

          <button className="mt-8 w-full flex items-center justify-center gap-3 glass-strong rounded-xl py-3 text-sm font-medium hover:bg-secondary/60 transition">
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <div className="mt-1.5 flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:glow transition">
                <Mail size={16} className="text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@brainrush.gg"
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Password</label>
              <div className="mt-1.5 flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:glow transition">
                <Lock size={16} className="text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="accent-primary" /> Remember me
              </label>
              <a className="text-primary hover:underline cursor-pointer">Forgot?</a>
            </div>
            <Link
              to="/dashboard"
              className="w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold py-3 rounded-xl glow hover:glow-strong transition"
            >
              {mode === "login" ? "Sign in" : "Create account"} <ArrowRight size={16} />
            </Link>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? "New here?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-primary hover:underline font-medium"
            >
              {mode === "login" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
