// Realistic level progression — slow start, harder scaling.
// Index 0 = XP needed for Level 1 (always 0).
export const LEVEL_THRESHOLDS: number[] = (() => {
  const t: number[] = [0, 150, 350, 600, 900, 1300, 1800, 2400, 3100, 3900];
  // From level 11 onward: each level adds ~+850 then grows by 50 each step.
  let last = 3900;
  let step = 850;
  for (let lvl = 11; lvl <= 60; lvl++) {
    last += step;
    t.push(last);
    step += 50;
  }
  return t;
})();

export function levelFromXp(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function xpForLevel(level: number): number {
  return LEVEL_THRESHOLDS[Math.max(0, Math.min(LEVEL_THRESHOLDS.length - 1, level - 1))];
}

export function nextLevelXp(level: number): number {
  return xpForLevel(level + 1);
}

export function levelProgress(xp: number) {
  const level = levelFromXp(xp);
  const cur = xpForLevel(level);
  const next = nextLevelXp(level);
  const span = Math.max(1, next - cur);
  const into = Math.max(0, xp - cur);
  const pct = Math.min(100, (into / span) * 100);
  return { level, cur, next, into, span, pct, remaining: Math.max(0, next - xp) };
}

export function rankForLevel(level: number): string {
  if (level >= 40) return "Volta Legend";
  if (level >= 32) return "Galactic Scholar";
  if (level >= 25) return "Nova Master";
  if (level >= 18) return "Quantum Mind";
  if (level >= 12) return "Elite Solver";
  if (level >= 7) return "Academic Warrior";
  if (level >= 3) return "Challenger";
  return "Rookie";
}

// Locale-stable number formatter (avoids SSR/CSR hydration mismatch).
export function fmt(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
