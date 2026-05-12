export const user = {
  name: "Alex Chen",
  username: "@alexc",
  level: 24,
  xp: 12480,
  xpToNext: 15000,
  streak: 17,
  rank: "Diamond III",
  coins: 2340,
  globalRank: 142,
  avatar: "AC",
  joined: "Sep 2025",
  favoriteSubject: "Physics",
};

export const stats = [
  { label: "Active Learners", value: "84,210" },
  { label: "Problems Solved", value: "12.4M" },
  { label: "Avg. Score Boost", value: "+38%" },
  { label: "Daily Streaks", value: "21,508" },
];

export const subjects = [
  { id: "algebra", name: "Algebra", icon: "ƒ", color: "from-blue-500 to-cyan-500", progress: 72 },
  { id: "geometry", name: "Geometry", icon: "△", color: "from-purple-500 to-pink-500", progress: 58 },
  { id: "calculus", name: "Calculus", icon: "∫", color: "from-emerald-500 to-teal-500", progress: 41 },
  { id: "kinematics", name: "Kinematics", icon: "→", color: "from-orange-500 to-red-500", progress: 84 },
  { id: "dynamics", name: "Dynamics", icon: "⚡", color: "from-yellow-500 to-orange-500", progress: 63 },
  { id: "forces", name: "Forces & Motion", icon: "↯", color: "from-rose-500 to-fuchsia-500", progress: 47 },
  { id: "energy", name: "Energy", icon: "⚛", color: "from-indigo-500 to-purple-500", progress: 55 },
  { id: "logic", name: "Logic Challenges", icon: "◇", color: "from-cyan-500 to-blue-500", progress: 33 },
];

export const challenges = [
  { id: 1, title: "Quadratic Mastery", subject: "Algebra", difficulty: "Medium", xp: 240, time: "8 min", completion: 78 },
  { id: 2, title: "Vector Decomposition", subject: "Kinematics", difficulty: "Hard", xp: 380, time: "12 min", completion: 54 },
  { id: 3, title: "Limits & Continuity", subject: "Calculus", difficulty: "Hard", xp: 420, time: "15 min", completion: 41 },
  { id: 4, title: "Triangle Theorems", subject: "Geometry", difficulty: "Easy", xp: 120, time: "5 min", completion: 92 },
  { id: 5, title: "Newton's Laws Drill", subject: "Dynamics", difficulty: "Medium", xp: 260, time: "10 min", completion: 67 },
  { id: 6, title: "Energy Conservation", subject: "Energy", difficulty: "Medium", xp: 280, time: "9 min", completion: 71 },
];

export const bossBattles = [
  { id: "newton", name: "Newton Boss Battle", subject: "Dynamics", hp: "12,000 XP", reward: "Legendary Badge", color: "from-orange-500 via-red-500 to-rose-600", icon: "🍎" },
  { id: "einstein", name: "Einstein Challenge", subject: "Relativity", hp: "18,000 XP", reward: "Cosmic Aura", color: "from-indigo-500 via-purple-600 to-fuchsia-600", icon: "✦" },
  { id: "calculus", name: "The Calculus Titan", subject: "Calculus", hp: "15,000 XP", reward: "Integral Crown", color: "from-emerald-500 via-teal-500 to-cyan-600", icon: "∫" },
  { id: "quantum", name: "Quantum Rush", subject: "Modern Physics", hp: "22,000 XP", reward: "Quantum Skin", color: "from-cyan-500 via-blue-500 to-purple-600", icon: "⚛" },
];

export const leaderboard = [
  { rank: 1, name: "Sofia Mendes", xp: 48210, level: 47, change: 0, avatar: "SM" },
  { rank: 2, name: "Liam Park", xp: 45890, level: 45, change: 1, avatar: "LP" },
  { rank: 3, name: "Yuki Tanaka", xp: 44320, level: 44, change: -1, avatar: "YT" },
  { rank: 4, name: "Carlos Rivera", xp: 39880, level: 41, change: 2, avatar: "CR" },
  { rank: 5, name: "Aisha Khan", xp: 37210, level: 39, change: 0, avatar: "AK" },
  { rank: 6, name: "Mateo Silva", xp: 34020, level: 37, change: 3, avatar: "MS" },
  { rank: 7, name: "Hannah Cohen", xp: 31700, level: 35, change: -2, avatar: "HC" },
  { rank: 8, name: "Diego Romero", xp: 29410, level: 33, change: 1, avatar: "DR" },
];

export const missions = [
  { id: 1, title: "Solve 5 algebra problems", progress: 3, total: 5, xp: 150, icon: "ƒ" },
  { id: 2, title: "Complete 2 physics challenges", progress: 1, total: 2, xp: 220, icon: "⚛" },
  { id: 3, title: "Maintain a 3-day streak", progress: 3, total: 3, xp: 300, icon: "🔥", done: true },
  { id: 4, title: "Beat a timed challenge", progress: 0, total: 1, xp: 180, icon: "⏱" },
  { id: 5, title: "Win 1 ranked match", progress: 0, total: 1, xp: 250, icon: "⚔" },
];

export const rewards = [
  { id: 1, name: "Homework Recovery Pass", desc: "Restore 1 missed daily mission", cost: 600, icon: "📜", rarity: "Rare" },
  { id: 2, name: "Extra Hint Token", desc: "Reveal a hint on any challenge", cost: 200, icon: "💡", rarity: "Common" },
  { id: 3, name: "Focus Master Badge", desc: "Equip in your profile", cost: 1500, icon: "🎯", rarity: "Epic" },
  { id: 4, name: "Physics Champion", desc: "Show your physics dominance", cost: 3000, icon: "⚡", rarity: "Legendary" },
  { id: 5, name: "Math Streak Reward", desc: "+10% XP for 24h", cost: 800, icon: "🔥", rarity: "Rare" },
  { id: 6, name: "Quantum Skin", desc: "Profile cosmetic", cost: 5000, icon: "⚛", rarity: "Mythic" },
];

export const achievements = [
  { id: 1, name: "First Steps", desc: "Complete your first challenge", unlocked: true, icon: "🎓" },
  { id: 2, name: "Streak Starter", desc: "3-day streak", unlocked: true, icon: "🔥" },
  { id: 3, name: "Math Wizard", desc: "Solve 100 algebra problems", unlocked: true, icon: "🧙" },
  { id: 4, name: "Speed Demon", desc: "Finish a timed challenge under 60s", unlocked: true, icon: "⚡" },
  { id: 5, name: "Boss Slayer", desc: "Defeat a boss battle", unlocked: false, icon: "🗡" },
  { id: 6, name: "Top 100", desc: "Reach global top 100", unlocked: false, icon: "🏆" },
];

export const xpHistory = [
  { day: "Mon", xp: 320 }, { day: "Tue", xp: 510 }, { day: "Wed", xp: 280 },
  { day: "Thu", xp: 740 }, { day: "Fri", xp: 620 }, { day: "Sat", xp: 980 },
  { day: "Sun", xp: 850 },
];

export const accuracyHistory = [
  { week: "W1", accuracy: 62 }, { week: "W2", accuracy: 68 },
  { week: "W3", accuracy: 71 }, { week: "W4", accuracy: 74 },
  { week: "W5", accuracy: 79 }, { week: "W6", accuracy: 83 },
];

export const radarSkills = [
  { skill: "Algebra", value: 82 },
  { skill: "Geometry", value: 65 },
  { skill: "Calculus", value: 48 },
  { skill: "Kinematics", value: 88 },
  { skill: "Dynamics", value: 71 },
  { skill: "Energy", value: 60 },
];

export const aiMessages = [
  { role: "ai" as const, text: "Hey Alex 👋 I'm Nova, your AI tutor. Ask me anything about math or physics — I'll guide you step by step." },
  { role: "user" as const, text: "Can you explain how to solve a projectile motion problem?" },
  { role: "ai" as const, text: "Absolutely. Projectile motion splits into two independent components:\n\n1️⃣ **Horizontal:** constant velocity → x = v₀cos(θ)·t\n2️⃣ **Vertical:** uniformly accelerated → y = v₀sin(θ)·t − ½gt²\n\nWant me to walk through a worked example?" },
];
