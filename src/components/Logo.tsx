import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { box: "h-7 w-7", text: "text-base", icon: 14 },
    md: { box: "h-9 w-9", text: "text-lg", icon: 18 },
    lg: { box: "h-12 w-12", text: "text-2xl", icon: 24 },
  };
  const s = sizes[size];
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div
        className={`${s.box} rounded-xl gradient-primary grid place-items-center glow group-hover:glow-strong transition-shadow`}
      >
        <Zap className="text-primary-foreground" size={s.icon} strokeWidth={2.5} fill="currentColor" />
      </div>
      <span className={`${s.text} font-bold tracking-tight`}>
        Brain<span className="text-gradient">Rush</span>
      </span>
    </Link>
  );
}
