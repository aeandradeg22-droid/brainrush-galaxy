export function ProgressBar({
  value,
  max = 100,
  glow = true,
  height = "h-2.5",
}: {
  value: number;
  max?: number;
  glow?: boolean;
  height?: string;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full ${height} rounded-full bg-secondary/60 overflow-hidden relative`}>
      <div
        className={`h-full rounded-full gradient-primary transition-all duration-700 ${glow ? "glow" : ""}`}
        style={{ width: `${pct}%` }}
      >
        <div className="h-full w-full shimmer rounded-full opacity-70" />
      </div>
    </div>
  );
}
