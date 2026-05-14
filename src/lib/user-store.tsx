import React, { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { levelFromXp, levelProgress, rankForLevel } from "./level-system";
import { leaderboard as baseLeaderboard } from "./mock-data";

export interface ActivityEntry {
  id: string;
  type: "challenge" | "mission" | "boss" | "practice";
  label: string;
  xp: number;
  ts: number;
}

export interface UserState {
  name: string;
  username: string;
  avatar: string;
  joined: string;
  favoriteSubject: string;
  school: string;
  totalStudents: number;
  xp: number;
  streak: number;
  coins: number;
  problemsSolved: number;
  correctAnswers: number;
  totalAnswers: number;
  completedMissions: number[];
  defeatedBosses: string[];
  recentActivity: ActivityEntry[];
}

const INITIAL: UserState = {
  name: "Vale",
  username: "@vale",
  avatar: "VA",
  joined: "Sep 2025",
  favoriteSubject: "Physics",
  school: "Alessandro Volta",
  totalStudents: 200,
  xp: 720,
  streak: 3,
  coins: 240,
  problemsSolved: 34,
  correctAnswers: 23,
  totalAnswers: 34,
  completedMissions: [3],
  defeatedBosses: [],
  recentActivity: [],
};

type Action =
  | { type: "addXp"; xp: number; coins?: number; label: string; kind: ActivityEntry["type"]; correct?: number; total?: number }
  | { type: "completeMission"; missionId: number }
  | { type: "defeatBoss"; bossId: string }
  | { type: "spendCoins"; amount: number }
  | { type: "hydrate"; state: UserState }
  | { type: "reset" };

function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case "addXp": {
      const next: UserState = {
        ...state,
        xp: state.xp + action.xp,
        coins: state.coins + (action.coins ?? Math.floor(action.xp / 10)),
        problemsSolved: state.problemsSolved + (action.total ?? 0),
        correctAnswers: state.correctAnswers + (action.correct ?? 0),
        totalAnswers: state.totalAnswers + (action.total ?? 0),
        recentActivity: [
          { id: `${Date.now()}`, type: action.kind, label: action.label, xp: action.xp, ts: Date.now() },
          ...state.recentActivity,
        ].slice(0, 12),
      };
      return next;
    }
    case "completeMission":
      if (state.completedMissions.includes(action.missionId)) return state;
      return { ...state, completedMissions: [...state.completedMissions, action.missionId] };
    case "defeatBoss":
      if (state.defeatedBosses.includes(action.bossId)) return state;
      return { ...state, defeatedBosses: [...state.defeatedBosses, action.bossId] };
    case "spendCoins":
      return { ...state, coins: Math.max(0, state.coins - action.amount) };
    case "hydrate":
      return action.state;
    case "reset":
      return INITIAL;
  }
}

// Compute Volta rank (1..200) from XP using the seeded leaderboard as anchor.
export function computeVoltaRank(xp: number): number {
  const sorted = [...baseLeaderboard].sort((a, b) => b.xp - a.xp);
  for (let i = 0; i < sorted.length; i++) {
    if (xp > sorted[i].xp) return i + 1;
  }
  const min = sorted[sorted.length - 1].xp;
  if (xp >= min) return sorted.length + 1;
  const ratio = Math.max(0.0001, Math.min(1, xp / min));
  const adj = Math.pow(ratio, 0.4);
  return Math.min(200, Math.max(sorted.length + 1, Math.round(200 - adj * (200 - sorted.length))));
}

export interface XpToast {
  id: string;
  xp: number;
  label: string;
  levelUp?: boolean;
  rankClimb?: number;
  surpassed?: string;
}

interface UserContextValue {
  state: UserState;
  level: number;
  rank: string;
  voltaRank: number;
  progress: ReturnType<typeof levelProgress>;
  accuracy: number;
  toasts: XpToast[];
  addXp(args: { xp: number; label: string; kind: ActivityEntry["type"]; coins?: number; correct?: number; total?: number }): void;
  completeMission(missionId: number, xp: number, label: string): void;
  defeatBoss(bossId: string, xp: number, label: string, correct: number, total: number): void;
  spendCoins(amount: number): void;
  reset(): void;
  dismissToast(id: string): void;
}

const Ctx = createContext<UserContextValue | null>(null);

const STORAGE_KEY = "numerix-user-v1";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL);
  const [toasts, setToasts] = useState<XpToast[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on client mount only (avoids SSR mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as UserState;
        dispatch({ type: "hydrate", state: { ...INITIAL, ...parsed } });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state, hydrated]);

  const pushToast = useCallback((t: Omit<XpToast, "id">) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [...prev, { ...t, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 4500);
  }, []);

  const addXp: UserContextValue["addXp"] = useCallback(
    ({ xp, label, kind, coins, correct, total }) => {
      const beforeLevel = levelFromXp(state.xp);
      const beforeRank = computeVoltaRank(state.xp);
      dispatch({ type: "addXp", xp, coins, label, kind, correct, total });
      const newXp = state.xp + xp;
      const afterLevel = levelFromXp(newXp);
      const afterRank = computeVoltaRank(newXp);
      const sorted = [...baseLeaderboard].sort((a, b) => b.xp - a.xp);
      const surpassed = sorted.find((p) => p.xp <= newXp && p.xp > state.xp)?.name;
      pushToast({
        xp,
        label,
        levelUp: afterLevel > beforeLevel,
        rankClimb: beforeRank - afterRank > 0 ? beforeRank - afterRank : undefined,
        surpassed,
      });
    },
    [state.xp, pushToast]
  );

  const completeMission = useCallback<UserContextValue["completeMission"]>(
    (missionId, xp, label) => {
      if (state.completedMissions.includes(missionId)) return;
      dispatch({ type: "completeMission", missionId });
      addXp({ xp, label: `Mission: ${label}`, kind: "mission" });
    },
    [addXp, state.completedMissions]
  );

  const defeatBoss = useCallback<UserContextValue["defeatBoss"]>(
    (bossId, xp, label, correct, total) => {
      dispatch({ type: "defeatBoss", bossId });
      addXp({ xp, label: `Boss defeated: ${label}`, kind: "boss", correct, total });
    },
    [addXp]
  );

  const spendCoins = useCallback((amount: number) => dispatch({ type: "spendCoins", amount }), []);
  const reset = useCallback(() => {
    dispatch({ type: "reset" });
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);
  const dismissToast = useCallback((id: string) => setToasts((p) => p.filter((t) => t.id !== id)), []);

  const progress = levelProgress(state.xp);
  const accuracy = state.totalAnswers > 0 ? Math.round((state.correctAnswers / state.totalAnswers) * 100) : 0;

  const value: UserContextValue = {
    state,
    level: progress.level,
    rank: rankForLevel(progress.level),
    voltaRank: computeVoltaRank(state.xp),
    progress,
    accuracy,
    toasts,
    addXp,
    completeMission,
    defeatBoss,
    spendCoins,
    reset,
    dismissToast,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUser(): UserContextValue {
  const v = useContext(Ctx);
  if (!v) throw new Error("useUser must be used inside <UserProvider>");
  return v;
}
