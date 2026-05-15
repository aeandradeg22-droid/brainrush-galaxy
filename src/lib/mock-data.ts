export const user = {
  name: "Vale",
  username: "@vale",
  level: 28,
  xp: 14820,
  xpToNext: 17000,
  streak: 12,
  rank: "Elite Solver",
  coins: 2340,
  globalRank: 19,
  avatar: "VA",
  joined: "Sep 2025",
  favoriteSubject: "Physics",
  school: "Alessandro Volta",
  totalStudents: 200,
};

export const stats = [
  { label: "Volta Students", value: "200" },
  { label: "Problems Solved", value: "48,210" },
  { label: "Avg. Grade Boost", value: "+27%" },
  { label: "Active Streaks", value: "147" },
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

// Number of questions per difficulty tier — applies across all challenge modes.
export const DIFFICULTY_QUESTIONS = { Easy: 3, Medium: 6, Hard: 10, Boss: 15 } as const;

export const bossBattles = [
  { id: "newton", name: "Newton Boss Battle", subject: "Dynamics", hp: "12,000 XP", reward: "Legendary Badge + 600 XP", color: "from-orange-500 via-red-500 to-rose-600", icon: "🍎" },
  { id: "einstein", name: "Einstein Challenge", subject: "Relativity", hp: "18,000 XP", reward: "Cosmic Aura + 750 XP", color: "from-indigo-500 via-purple-600 to-fuchsia-600", icon: "✦" },
  { id: "alfonsito", name: "Alfonsito Boss Battle", subject: "Algebra & Logic", hp: "15,000 XP", reward: "Homework Recovery Pass + 700 XP", color: "from-emerald-500 via-teal-500 to-cyan-600", icon: "ƒ" },
  { id: "daniel", name: "Daniel Challenge", subject: "Kinematics & Forces", hp: "16,000 XP", reward: "+2 participation points and 800 XP", color: "from-cyan-500 via-blue-500 to-purple-600", icon: "⚡" },
];

export const ranks = [
  "Rookie",
  "Challenger",
  "Academic Warrior",
  "Elite Solver",
  "Quantum Mind",
  "Nova Master",
  "Galactic Scholar",
  "Volta Legend",
];

export const leaderboard = [
  { rank: 1, name: "Edu", xp: 48210, level: 47, change: 0, avatar: "ED" },
  { rank: 2, name: "Boarlos", xp: 45890, level: 45, change: 2, avatar: "BO" },
  { rank: 3, name: "Tamu", xp: 44320, level: 44, change: 1, avatar: "TA" },
  { rank: 4, name: "It's Mat", xp: 41880, level: 42, change: -2, avatar: "IM" },
  { rank: 5, name: "Tomy", xp: 39410, level: 40, change: 3, avatar: "TO" },
  { rank: 6, name: "Nacho te humillo", xp: 36720, level: 38, change: 0, avatar: "NA" },
  { rank: 7, name: "Gatha", xp: 34510, level: 36, change: 1, avatar: "GA" },
  { rank: 8, name: "Amelix", xp: 32180, level: 35, change: -1, avatar: "AM" },
  { rank: 9, name: "Aulestia", xp: 30240, level: 33, change: 2, avatar: "AU" },
  { rank: 10, name: "Villa", xp: 28910, level: 32, change: -1, avatar: "VI" },
  { rank: 11, name: "Giu Giu", xp: 27340, level: 31, change: 4, avatar: "GG" },
  { rank: 12, name: "Bolo", xp: 25820, level: 30, change: 0, avatar: "BL" },
  { rank: 13, name: "Mari", xp: 24110, level: 28, change: -2, avatar: "MA" },
  { rank: 14, name: "Emi", xp: 22580, level: 27, change: 1, avatar: "EM" },
  { rank: 15, name: "Paula M", xp: 20940, level: 26, change: 3, avatar: "PM" },
  { rank: 16, name: "Toledin", xp: 19620, level: 25, change: -1, avatar: "TL" },
  { rank: 17, name: "Dianita", xp: 17880, level: 23, change: 0, avatar: "DI" },
  { rank: 18, name: "Beca", xp: 16240, level: 22, change: 2, avatar: "BE" },
  { rank: 19, name: "Espe", xp: 14710, level: 20, change: -1, avatar: "ES" },
  { rank: 20, name: "Pauli", xp: 18420, level: 31, change: 1, avatar: "PA" },
];

export const missions = [
  { id: 1, title: "Solve 5 algebra problems", progress: 3, total: 5, xp: 150, icon: "ƒ" },
  { id: 2, title: "Complete 2 physics challenges", progress: 1, total: 2, xp: 220, icon: "⚛" },
  { id: 3, title: "Maintain a 3-day streak", progress: 3, total: 3, xp: 300, icon: "🔥" },
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

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface BossBattleQuiz {
  id: string;
  topic: string;
  purpose: string;
  reward: string;
  description: string;
  questions: QuizQuestion[];
}

export interface MissionQuiz {
  id: number;
  title: string;
  topic: string;
  description: string;
  reward: number;
  questions: QuizQuestion[];
  timed?: boolean;
}

export const bossBattleQuizzes: Record<string, BossBattleQuiz> = {
  newton: {
    id: "newton",
    topic: "Dynamics and Newton's Laws",
    purpose: "Strengthen your understanding of forces, motion, and acceleration while competing for an exam recovery opportunity.",
    reward: "Legendary Badge + 600 XP",
    description: "Complete this challenge to master Newton's laws and improve your force analysis skills.",
    questions: [
      { id: 1, question: "A 2 kg object experiences a net force of 10 N. What is its acceleration?", options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"], correct: 1, explanation: "F = ma → a = 10/2 = 5 m/s²." },
      { id: 2, question: "A 1000 kg car accelerates at 2 m/s². Net force?", options: ["500 N", "1000 N", "2000 N", "2500 N"], correct: 2, explanation: "F = ma = 1000·2 = 2000 N." },
      { id: 3, question: "Friction on a 5 kg block, μ = 0.2 (g = 10 m/s²)?", options: ["5 N", "10 N", "15 N", "25 N"], correct: 1, explanation: "f = μmg = 0.2·5·10 = 10 N." },
      { id: 4, question: "An object in equilibrium implies:", options: ["All forces are zero", "Net force is zero", "No forces act", "Forces unbalanced"], correct: 1, explanation: "ΣF = 0 in equilibrium." },
      { id: 5, question: "Push 50 N on 10 kg, a = 4 m/s². Friction force?", options: ["10 N", "40 N", "50 N", "90 N"], correct: 0, explanation: "Net = ma = 40 N, so friction = 50 − 40 = 10 N." },
      { id: 6, question: "Newton's third law states:", options: ["F = ma", "Inertia keeps motion", "Every action has an equal opposite reaction", "Gravity is universal"], correct: 2, explanation: "Action–reaction pairs are equal in magnitude, opposite in direction." },
      { id: 7, question: "Weight of a 12 kg box on Earth (g = 9.8 m/s²)?", options: ["1.2 N", "12 N", "117.6 N", "120 N"], correct: 2, explanation: "W = mg = 12·9.8 = 117.6 N." },
      { id: 8, question: "An object moves at constant velocity. The net force is:", options: ["Equal to weight", "Zero", "Equal to friction", "Maximum"], correct: 1, explanation: "Constant velocity ⇒ ΣF = 0 (Newton 1)." },
      { id: 9, question: "A 4 kg cart pulled with 20 N (frictionless). Acceleration?", options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"], correct: 2, explanation: "a = F/m = 20/4 = 5 m/s²." },
      { id: 10, question: "Inertia depends on:", options: ["Velocity", "Mass", "Force applied", "Acceleration"], correct: 1, explanation: "Inertia is proportional to mass." },
      { id: 11, question: "Two forces 6 N right and 4 N left act on a body. Net force?", options: ["10 N right", "2 N left", "2 N right", "0 N"], correct: 2, explanation: "6 − 4 = 2 N to the right." },
      { id: 12, question: "Astronaut mass 70 kg on Moon (g = 1.6 m/s²). Weight?", options: ["70 N", "112 N", "686 N", "11.2 N"], correct: 1, explanation: "W = 70·1.6 = 112 N." },
      { id: 13, question: "Tension in a rope holding a 5 kg block at rest (g = 10)?", options: ["5 N", "10 N", "50 N", "0 N"], correct: 2, explanation: "T = mg = 50 N for equilibrium." },
      { id: 14, question: "Net force needed to stop a 1500 kg car decelerating at 5 m/s²:", options: ["300 N", "750 N", "3000 N", "7500 N"], correct: 3, explanation: "|F| = ma = 1500·5 = 7500 N." },
      { id: 15, question: "When a horse pulls a cart, why does the cart move forward?", options: ["Cart pulls back weaker", "Action and reaction act on different bodies", "Friction pushes cart", "Newton's 1st law"], correct: 1, explanation: "The reaction acts on the horse, not the cart — net force on cart is forward." },
    ],
  },
  einstein: {
    id: "einstein",
    topic: "Relativity, Energy, and Modern Physics",
    purpose: "Improve your scientific reasoning and Physics analysis skills while competing for extra academic points.",
    reward: "Cosmic Aura + 750 XP",
    description: "Test your conceptual Physics understanding and modern physics knowledge.",
    questions: [
      { id: 1, question: "What does E = mc² describe?", options: ["Energy equals mass", "Mass converts to enormous energy", "Light has mass", "Energy beats mass"], correct: 1, explanation: "Mass-energy equivalence: tiny mass ⇔ huge energy because c² is huge." },
      { id: 2, question: "Speed of light in vacuum:", options: ["100,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"], correct: 1, explanation: "c ≈ 3 × 10⁸ m/s." },
      { id: 3, question: "Momentum is:", options: ["Force on an object", "p = mv", "Ability to do work", "Rate of energy transfer"], correct: 1, explanation: "Momentum p = m·v." },
      { id: 4, question: "Higher frequency wave has:", options: ["Longer λ", "Shorter λ", "More amplitude", "Less energy"], correct: 1, explanation: "c = fλ, so larger f ⇒ smaller λ." },
      { id: 5, question: "Conservation of momentum applies when:", options: ["Friction acts", "External force is zero", "Mass changes", "Speed of light is reached"], correct: 1, explanation: "Σp is constant when no net external force acts." },
      { id: 6, question: "Time dilation means:", options: ["Time is absolute", "Moving clocks tick slower", "Light slows down", "Mass disappears"], correct: 1, explanation: "Special relativity: clocks in motion run slower from a stationary frame." },
      { id: 7, question: "Photon energy formula:", options: ["E = mc²", "E = ½mv²", "E = hf", "E = qV"], correct: 2, explanation: "Planck: E = h·f for a photon." },
      { id: 8, question: "Photoelectric effect demonstrates:", options: ["Wave nature of light", "Particle nature of light", "Both", "Neither"], correct: 1, explanation: "Discrete photon energy explains the threshold frequency." },
      { id: 9, question: "1 eV equals about:", options: ["1.6 × 10⁻¹⁹ J", "9 × 10⁹ J", "6.6 × 10⁻³⁴ J", "3 × 10⁸ J"], correct: 0, explanation: "1 eV = 1.6 × 10⁻¹⁹ J." },
      { id: 10, question: "Frame of reference affects:", options: ["Mass only", "Measurements of time and length", "Charge", "Temperature"], correct: 1, explanation: "Relativity: time/length are observer-dependent." },
      { id: 11, question: "Wave–particle duality applies to:", options: ["Photons only", "Electrons only", "All matter and light", "Neutrinos only"], correct: 2, explanation: "De Broglie: λ = h/p applies to all matter." },
      { id: 12, question: "Higher temperature blackbody emits peak at:", options: ["Longer λ", "Shorter λ", "Same λ", "No light"], correct: 1, explanation: "Wien's law: λₘₐₓ ∝ 1/T." },
      { id: 13, question: "Relativistic mass increases as:", options: ["v decreases", "v approaches c", "Time stops", "Charge grows"], correct: 1, explanation: "m = m₀/√(1 − v²/c²) → ∞ as v → c." },
      { id: 14, question: "Heisenberg uncertainty links:", options: ["Force and time", "Position and momentum", "Energy and mass", "Charge and field"], correct: 1, explanation: "Δx·Δp ≥ ħ/2." },
      { id: 15, question: "A photon has rest mass:", options: ["m₀ = 9.1 × 10⁻³¹ kg", "Zero", "1 amu", "Same as electron"], correct: 1, explanation: "Photons are massless; they always travel at c." },
    ],
  },
  alfonsito: {
    id: "alfonsito",
    topic: "Algebra, Equations, Functions, Factorization, Logic",
    purpose: "Strengthen algebraic reasoning and mathematical problem-solving skills while competing for a homework recovery opportunity.",
    reward: "Homework Recovery Pass + 700 XP",
    description: "Bachillerato-level algebra and logic. Progressive difficulty across 15 questions.",
    questions: [
      { id: 1, question: "Solve: 2x + 5 = 13", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 1, explanation: "2x = 8 → x = 4." },
      { id: 2, question: "Factor: x² + 5x + 6", options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+2)²", "(x−2)(x−3)"], correct: 0, explanation: "2 + 3 = 5, 2·3 = 6." },
      { id: 3, question: "If f(x) = 3x − 2, what is f(4)?", options: ["10", "12", "14", "8"], correct: 0, explanation: "3·4 − 2 = 10." },
      { id: 4, question: "Simplify: (x²·x³) / x⁴", options: ["x", "x²", "x³", "1"], correct: 0, explanation: "x^(2+3−4) = x." },
      { id: 5, question: "Solve: x² − 9 = 0", options: ["x = 3", "x = ±3", "x = ±9", "x = 9"], correct: 1, explanation: "Difference of squares ⇒ x = ±3." },
      { id: 6, question: "Solve: 3(x − 2) = 2x + 4", options: ["x = 8", "x = 10", "x = 6", "x = 12"], correct: 1, explanation: "3x − 6 = 2x + 4 → x = 10." },
      { id: 7, question: "Domain of f(x) = 1/(x − 5):", options: ["All ℝ", "x ≠ 5", "x > 5", "x = 5"], correct: 1, explanation: "Denominator ≠ 0 ⇒ x ≠ 5." },
      { id: 8, question: "Factor: 4x² − 25", options: ["(2x−5)(2x+5)", "(4x−5)(x+5)", "(2x−5)²", "(4x+5)(x−5)"], correct: 0, explanation: "Difference of squares: (2x)² − 5²." },
      { id: 9, question: "Solve: x² − 5x + 6 = 0", options: ["x = 1, 6", "x = 2, 3", "x = −2, −3", "x = −1, 6"], correct: 1, explanation: "(x−2)(x−3) = 0." },
      { id: 10, question: "If log₂(x) = 5, then x =", options: ["10", "25", "32", "16"], correct: 2, explanation: "x = 2⁵ = 32." },
      { id: 11, question: "Solve the system: x + y = 7, x − y = 3", options: ["x = 5, y = 2", "x = 4, y = 3", "x = 6, y = 1", "x = 3, y = 4"], correct: 0, explanation: "Add: 2x = 10 → x = 5, y = 2." },
      { id: 12, question: "Simplify: (x² − 1) / (x − 1)", options: ["x", "x + 1", "x − 1", "1"], correct: 1, explanation: "(x−1)(x+1)/(x−1) = x + 1." },
      { id: 13, question: "Quadratic formula gives x = ?", options: ["(−b ± √(b² − 4ac))/(2a)", "(b ± √(b² + 4ac))/2", "−b/(2a)", "b² − 4ac"], correct: 0, explanation: "Standard quadratic formula." },
      { id: 14, question: "If 2ˣ = 64, then x =", options: ["4", "5", "6", "8"], correct: 2, explanation: "64 = 2⁶." },
      { id: 15, question: "Logic: If P→Q is true and P is true, then Q is:", options: ["False", "True", "Unknown", "Both"], correct: 1, explanation: "Modus ponens." },
    ],
  },
  daniel: {
    id: "daniel",
    topic: "Kinematics, Velocity, Acceleration, Newton's Laws, Forces",
    purpose: "Improve your understanding of motion and Physics problem-solving while competing for bonus academic points.",
    reward: "+2 participation points and 800 XP",
    description: "High school Physics. 15 realistic and solvable motion problems.",
    questions: [
      { id: 1, question: "A car covers 100 m in 10 s at constant speed. Velocity?", options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"], correct: 1, explanation: "v = d/t = 10 m/s." },
      { id: 2, question: "Object goes 0 → 20 m/s in 4 s. Acceleration?", options: ["2", "4", "5", "10"], correct: 2, explanation: "a = Δv/Δt = 5 m/s²." },
      { id: 3, question: "Free-fall after 3 s (g = 10), starting at rest. Velocity?", options: ["10 m/s", "20 m/s", "30 m/s", "60 m/s"], correct: 2, explanation: "v = gt = 30 m/s." },
      { id: 4, question: "Net force 12 N on 3 kg block. a = ?", options: ["3 m/s²", "4 m/s²", "9 m/s²", "36 m/s²"], correct: 1, explanation: "a = F/m = 4 m/s²." },
      { id: 5, question: "Distance from rest with a = 2 m/s² for 5 s:", options: ["10 m", "20 m", "25 m", "50 m"], correct: 2, explanation: "s = ½at² = ½·2·25 = 25 m." },
      { id: 6, question: "A ball is thrown up at 20 m/s (g = 10). Time to peak?", options: ["1 s", "2 s", "3 s", "4 s"], correct: 1, explanation: "v = v₀ − gt → 0 = 20 − 10t." },
      { id: 7, question: "Action–reaction pair acts on:", options: ["Same object", "Different objects", "Massless objects", "None"], correct: 1, explanation: "Newton's 3rd law: forces act on different bodies." },
      { id: 8, question: "Friction 6 N on 2 kg (g = 10). μ = ?", options: ["0.1", "0.2", "0.3", "0.6"], correct: 2, explanation: "μ = f/(mg) = 6/20 = 0.3." },
      { id: 9, question: "Average velocity 0 → 10 m/s uniform acceleration:", options: ["2.5 m/s", "5 m/s", "7.5 m/s", "10 m/s"], correct: 1, explanation: "(v₀ + v)/2 = 5 m/s." },
      { id: 10, question: "Object thrown horizontally falls 5 m (g = 10). Time?", options: ["0.5 s", "1 s", "1.5 s", "2 s"], correct: 1, explanation: "y = ½gt² → 5 = 5t² → t = 1 s." },
      { id: 11, question: "Centripetal acceleration v = 4, r = 2:", options: ["2", "4", "8", "16"], correct: 2, explanation: "a = v²/r = 16/2 = 8 m/s²." },
      { id: 12, question: "Force needed to accelerate 1500 kg car at 3 m/s²:", options: ["500 N", "1500 N", "3000 N", "4500 N"], correct: 3, explanation: "F = ma = 4500 N." },
      { id: 13, question: "Two forces 8 N and 6 N at 90°. Resultant?", options: ["10 N", "12 N", "14 N", "2 N"], correct: 0, explanation: "√(8² + 6²) = 10 N." },
      { id: 14, question: "An object slows uniformly from 30 to 0 in 6 s. Deceleration?", options: ["3 m/s²", "5 m/s²", "6 m/s²", "10 m/s²"], correct: 1, explanation: "a = (0−30)/6 = −5 m/s²." },
      { id: 15, question: "Newton's 1st law (inertia) says:", options: ["F = ma", "Object at rest stays at rest unless acted on", "Action = reaction", "Energy conserves"], correct: 1, explanation: "Law of inertia." },
    ],
  },
};

export const missionQuizzes: Record<number, MissionQuiz> = {
  1: {
    id: 1,
    title: "Solve 5 algebra problems",
    topic: "Algebra: Equations, Factoring, Functions",
    description: "Strengthen algebraic reasoning and equation-solving speed.",
    reward: 150,
    questions: [
      {
        id: 1,
        question: "Solve: 3x - 7 = 20",
        options: ["x = 5", "x = 7", "x = 9", "x = 13"],
        correct: 2,
        explanation: "3x = 27 → x = 9. Basic linear equation solving.",
      },
      {
        id: 2,
        question: "Factor: x² - 9",
        options: ["(x-3)(x-3)", "(x+3)(x-3)", "(x-9)(x+1)", "(x+9)(x-1)"],
        correct: 1,
        explanation: "This is a difference of squares: x² - 9 = (x+3)(x-3).",
      },
      {
        id: 3,
        question: "What is f(2) if f(x) = 2x² + 3?",
        options: ["7", "11", "13", "15"],
        correct: 1,
        explanation: "f(2) = 2(2)² + 3 = 2(4) + 3 = 8 + 3 = 11.",
      },
      {
        id: 4,
        question: "Expand: (x + 2)²",
        options: ["x² + 4", "x² + 2x + 4", "x² + 4x + 4", "x² + 2x + 2"],
        correct: 2,
        explanation: "(x+2)² = x² + 2(x)(2) + 2² = x² + 4x + 4.",
      },
      {
        id: 5,
        question: "If 2x + 5 = 3x - 2, what is x?",
        options: ["x = 3", "x = 5", "x = 7", "x = -7"],
        correct: 2,
        explanation: "2x + 5 = 3x - 2 → 5 + 2 = 3x - 2x → 7 = x.",
      },
    ],
  },
  2: {
    id: 2,
    title: "Complete 2 physics challenges",
    topic: "Physics: Velocity, Force, Acceleration",
    description: "Improve understanding of motion and fundamental Physics calculations.",
    reward: 220,
    questions: [
      {
        id: 1,
        question: "A car travels 150 m in 5 seconds. What is its average velocity?",
        options: ["25 m/s", "30 m/s", "35 m/s", "40 m/s"],
        correct: 1,
        explanation: "v = d/t = 150 m / 5 s = 30 m/s.",
      },
      {
        id: 2,
        question: "What is the acceleration of an object that goes from 0 to 20 m/s in 4 seconds?",
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
        correct: 2,
        explanation: "a = Δv/Δt = 20 m/s / 4 s = 5 m/s².",
      },
      {
        id: 3,
        question: "What force is needed to accelerate a 3 kg object at 4 m/s²?",
        options: ["7 N", "12 N", "15 N", "20 N"],
        correct: 1,
        explanation: "F = ma = 3 kg × 4 m/s² = 12 N.",
      },
      {
        id: 4,
        question: "If an object has mass 2 kg and experiences a friction force of 8 N, what is the coefficient of friction? (g = 10 m/s²)",
        options: ["0.2", "0.4", "0.6", "0.8"],
        correct: 1,
        explanation: "f = μN = μmg → 8 = μ(2)(10) → μ = 8/20 = 0.4.",
      },
      {
        id: 5,
        question: "An object moves with constant acceleration from rest and covers 50 m in 5 seconds. What is its acceleration?",
        options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
        correct: 1,
        explanation: "Using s = ½at² with s = 50 m and t = 5 s: 50 = ½a(25) → a = 4 m/s².",
      },
    ],
  },
  4: {
    id: 4,
    title: "Beat a timed challenge",
    topic: "Quick Calculations and Mental Math",
    description: "Train fast thinking and improve response speed under pressure.",
    reward: 180,
    timed: true,
    questions: [
      {
        id: 1,
        question: "What is 15 × 4?",
        options: ["40", "50", "60", "70"],
        correct: 2,
        explanation: "15 × 4 = 60. Quick multiplication skill.",
      },
      {
        id: 2,
        question: "Simplify: √144",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "√144 = 12 because 12² = 144.",
      },
      {
        id: 3,
        question: "What is 20% of 80?",
        options: ["12", "14", "16", "18"],
        correct: 2,
        explanation: "20% of 80 = 0.20 × 80 = 16.",
      },
      {
        id: 4,
        question: "A car travels at 60 km/h for 2 hours. How far does it go?",
        options: ["90 km", "100 km", "110 km", "120 km"],
        correct: 3,
        explanation: "distance = speed × time = 60 × 2 = 120 km.",
      },
      {
        id: 5,
        question: "What is the average of 10, 20, and 30?",
        options: ["15", "18", "20", "25"],
        correct: 2,
        explanation: "Average = (10 + 20 + 30) / 3 = 60 / 3 = 20.",
      },
    ],
  },
  5: {
    id: 5,
    title: "Win 1 ranked match",
    topic: "Mixed Mathematics and Physics Review",
    description: "Compete in a ranked academic challenge to improve consistency and earn ranking points.",
    reward: 250,
    questions: [
      {
        id: 1,
        question: "Solve: 4x² = 16",
        options: ["x = ±1", "x = ±2", "x = ±3", "x = ±4"],
        correct: 1,
        explanation: "4x² = 16 → x² = 4 → x = ±2.",
      },
      {
        id: 2,
        question: "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
        options: ["10 J", "20 J", "25 J", "50 J"],
        correct: 2,
        explanation: "KE = ½mv² = ½(2)(5)² = ½(2)(25) = 25 J.",
      },
      {
        id: 3,
        question: "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
        options: ["Acute", "Obtuse", "Right", "Equilateral"],
        correct: 2,
        explanation: "Since 3² + 4² = 9 + 16 = 25 = 5², it satisfies the Pythagorean theorem, making it a right triangle.",
      },
      {
        id: 4,
        question: "What is the work done by a force of 10 N over a distance of 5 m?",
        options: ["15 J", "25 J", "50 J", "75 J"],
        correct: 2,
        explanation: "Work = Force × Distance = 10 N × 5 m = 50 J.",
      },
      {
        id: 5,
        question: "Evaluate: 2³ + 3²",
        options: ["13", "17", "19", "22"],
        correct: 1,
        explanation: "2³ + 3² = 8 + 9 = 17.",
      },
    ],
  },
};

// ============================================================
// Challenge / Timed / Ranked question pools
// ============================================================

// Per-subject question pools used to size each challenge by difficulty.
const algebraPool: QuizQuestion[] = [
  { id: 1, question: "Solve: x + 7 = 12", options: ["3", "5", "7", "12"], correct: 1, explanation: "x = 12 − 7 = 5." },
  { id: 2, question: "Factor: x² + 7x + 12", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "(x−3)(x−4)"], correct: 0, explanation: "3 + 4 = 7, 3·4 = 12." },
  { id: 3, question: "Solve: 2x − 4 = 10", options: ["5", "6", "7", "8"], correct: 2, explanation: "2x = 14 → x = 7." },
  { id: 4, question: "Roots of x² − 4 = 0:", options: ["±1", "±2", "±4", "0"], correct: 1, explanation: "x = ±2." },
  { id: 5, question: "Expand: (x+3)²", options: ["x²+9", "x²+6x+9", "x²+3x+9", "x²+6x+3"], correct: 1, explanation: "(a+b)² = a² + 2ab + b²." },
  { id: 6, question: "Solve: 3x = 21", options: ["3", "5", "7", "21"], correct: 2, explanation: "x = 7." },
  { id: 7, question: "If f(x)=x²+1, f(3)=", options: ["7", "9", "10", "12"], correct: 2, explanation: "9 + 1 = 10." },
  { id: 8, question: "Solve: x/4 = 5", options: ["1", "9", "20", "25"], correct: 2, explanation: "x = 20." },
  { id: 9, question: "(2x)·(3x)=", options: ["5x²", "6x", "6x²", "5x"], correct: 2, explanation: "Coefficients multiply, exponents add." },
  { id: 10, question: "Simplify: 2(x+3) − x", options: ["x+3", "x+6", "3x+6", "x−6"], correct: 1, explanation: "2x + 6 − x = x + 6." },
];

const calculusPool: QuizQuestion[] = [
  { id: 1, question: "lim x→2 (x²−4)/(x−2) =", options: ["0", "2", "4", "undef"], correct: 2, explanation: "Factor: (x−2)(x+2)/(x−2) → x+2 → 4." },
  { id: 2, question: "d/dx(x³) =", options: ["x²", "2x²", "3x²", "x³/3"], correct: 2, explanation: "Power rule." },
  { id: 3, question: "d/dx(sin x) =", options: ["cos x", "−cos x", "−sin x", "tan x"], correct: 0, explanation: "Standard." },
  { id: 4, question: "∫ 2x dx =", options: ["x²", "x² + C", "2 + C", "x²/2 + C"], correct: 1, explanation: "Power rule for integrals." },
  { id: 5, question: "lim x→0 sin x / x =", options: ["0", "1", "∞", "x"], correct: 1, explanation: "Famous limit." },
  { id: 6, question: "d/dx(eˣ) =", options: ["eˣ", "x·eˣ⁻¹", "ln x", "1/x"], correct: 0, explanation: "Self-derivative." },
  { id: 7, question: "Continuity at a requires:", options: ["f(a) defined", "lim exists", "lim = f(a)", "All of the above"], correct: 3, explanation: "All three conditions." },
  { id: 8, question: "d/dx(ln x) =", options: ["1/x", "x", "ln x", "eˣ"], correct: 0, explanation: "Derivative of natural log." },
  { id: 9, question: "lim x→∞ 1/x =", options: ["0", "1", "∞", "−∞"], correct: 0, explanation: "Tends to 0." },
  { id: 10, question: "∫ 1 dx =", options: ["0", "x", "x + C", "1 + C"], correct: 2, explanation: "Antiderivative of 1." },
];

const geometryPool: QuizQuestion[] = [
  { id: 1, question: "Triangle angles sum to:", options: ["90°", "180°", "270°", "360°"], correct: 1, explanation: "Always 180°." },
  { id: 2, question: "Pythagorean triple:", options: ["(2,3,4)", "(3,4,5)", "(5,6,7)", "(6,7,8)"], correct: 1, explanation: "3² + 4² = 5²." },
  { id: 3, question: "Equilateral triangle each angle =", options: ["45°", "60°", "75°", "90°"], correct: 1, explanation: "180/3 = 60°." },
  { id: 4, question: "Area of triangle base 6, height 4:", options: ["10", "12", "24", "48"], correct: 1, explanation: "½·6·4 = 12." },
  { id: 5, question: "Hypotenuse for legs 6 and 8:", options: ["10", "12", "14", "100"], correct: 0, explanation: "√(36+64) = 10." },
];

const kinematicsPool: QuizQuestion[] = [
  { id: 1, question: "Vector 3→ + 4↑, magnitude:", options: ["5", "7", "12", "25"], correct: 0, explanation: "√(9+16) = 5." },
  { id: 2, question: "10 m/s east + 0 m/s = velocity:", options: ["10 east", "0", "−10", "20"], correct: 0, explanation: "Vector addition." },
  { id: 3, question: "Component of 10 N at 30° (cos):", options: ["5 N", "8.66 N", "10 N", "20 N"], correct: 1, explanation: "10·cos30 ≈ 8.66." },
  { id: 4, question: "Projectile range increases with:", options: ["Sin 2θ", "Cos θ", "Tan θ", "Mass"], correct: 0, explanation: "R = v²sin2θ/g." },
  { id: 5, question: "Displacement from 0→5 then 5→2:", options: ["7", "5", "2", "3"], correct: 2, explanation: "Final − initial = 2 − 0 = 2." },
  { id: 6, question: "Average velocity if total disp 30 m in 5 s:", options: ["3", "5", "6", "10"], correct: 2, explanation: "30/5 = 6 m/s." },
  { id: 7, question: "Uniform circular motion has:", options: ["Constant velocity", "Constant speed", "No acceleration", "Variable mass"], correct: 1, explanation: "Speed constant, direction changes." },
  { id: 8, question: "Two perpendicular vectors 6, 8. Resultant:", options: ["10", "14", "12", "100"], correct: 0, explanation: "√(36+64) = 10." },
  { id: 9, question: "Free-fall acceleration on Earth ≈", options: ["1.6", "5", "9.8", "20"], correct: 2, explanation: "g ≈ 9.8 m/s²." },
  { id: 10, question: "Velocity is a:", options: ["Scalar", "Vector", "Constant", "Force"], correct: 1, explanation: "Has magnitude and direction." },
];

const dynamicsPool: QuizQuestion[] = [
  { id: 1, question: "F = ma. If m = 5, a = 2 → F =", options: ["3", "7", "10", "25"], correct: 2, explanation: "10 N." },
  { id: 2, question: "Newton's 3rd law:", options: ["F = ma", "Equal opposite reaction", "Inertia", "Momentum"], correct: 1, explanation: "Action–reaction." },
  { id: 3, question: "Friction depends on:", options: ["Area", "Normal force", "Time", "Color"], correct: 1, explanation: "f = μN." },
  { id: 4, question: "An object at rest stays at rest by:", options: ["Newton 1st", "Newton 2nd", "Newton 3rd", "Energy law"], correct: 0, explanation: "Inertia." },
  { id: 5, question: "Weight on Earth of 10 kg:", options: ["10 N", "20 N", "98 N", "100 N"], correct: 2, explanation: "10·9.8 = 98 N." },
  { id: 6, question: "Net force 0 ⇒ velocity:", options: ["Increases", "Decreases", "Constant", "Zero only"], correct: 2, explanation: "Constant velocity." },
];

const energyPool: QuizQuestion[] = [
  { id: 1, question: "KE = ½mv². m=2, v=3 →", options: ["3", "6", "9", "18"], correct: 2, explanation: "½·2·9 = 9 J." },
  { id: 2, question: "Work = F·d. F=10, d=5 →", options: ["2", "15", "50", "100"], correct: 2, explanation: "50 J." },
  { id: 3, question: "PE = mgh, m=2, h=10, g=10 →", options: ["20", "100", "200", "2000"], correct: 2, explanation: "200 J." },
  { id: 4, question: "Energy is conserved when:", options: ["Friction acts", "System is isolated", "Mass changes", "Always false"], correct: 1, explanation: "Closed isolated system." },
  { id: 5, question: "Power units:", options: ["J", "W", "N", "Pa"], correct: 1, explanation: "Watt = J/s." },
  { id: 6, question: "If KE doubles when v doubles, that's:", options: ["True", "False", "Sometimes", "Depends on mass"], correct: 1, explanation: "KE quadruples (v²)." },
];

const subjectPool: Record<string, QuizQuestion[]> = {
  Algebra: algebraPool,
  Calculus: calculusPool,
  Geometry: geometryPool,
  Kinematics: kinematicsPool,
  Dynamics: dynamicsPool,
  Energy: energyPool,
};

export function questionsForChallenge(subject: string, difficulty: string): QuizQuestion[] {
  const counts: Record<string, number> = { Easy: 3, Medium: 6, Hard: 10, Boss: 15 };
  const n = counts[difficulty] ?? 5;
  const pool = subjectPool[subject] ?? algebraPool;
  // Repeat-pad with re-ids if pool too small.
  const out: QuizQuestion[] = [];
  for (let i = 0; i < n; i++) out.push({ ...pool[i % pool.length], id: i + 1 });
  return out;
}

// Timed Challenges — 5 quick mixed questions.
export const timedChallenge: MissionQuiz = {
  id: 999,
  title: "Timed Challenge",
  topic: "Quick Math, Physics & Logic",
  description: "Five fast questions, 15 seconds each. Speed bonuses apply.",
  reward: 250,
  timed: true,
  questions: [
    { id: 1, question: "12 × 8 = ?", options: ["86", "96", "108", "112"], correct: 1, explanation: "12·8 = 96." },
    { id: 2, question: "Sound travels fastest in:", options: ["Air", "Water", "Steel", "Vacuum"], correct: 2, explanation: "Solids > liquids > gases." },
    { id: 3, question: "If a = 5, t = 4 (from rest), v = ?", options: ["10", "15", "20", "25"], correct: 2, explanation: "v = at = 20 m/s." },
    { id: 4, question: "Next number: 2, 4, 8, 16, ?", options: ["20", "24", "30", "32"], correct: 3, explanation: "Doubling sequence." },
    { id: 5, question: "Square root of 169:", options: ["11", "12", "13", "14"], correct: 2, explanation: "13² = 169." },
  ],
};

// Ranked Mode — opponents pulled from leaderboard, with mixed Math/Physics pool.
export interface RankedOpponent {
  name: string;
  avatar: string;
  level: number;
  rankPoints: number;
  difficulty: "Easy" | "Medium" | "Hard";
  accuracyPct: number; // simulated opponent accuracy
  speedMs: number;     // average answer speed
}

export const rankedOpponents: RankedOpponent[] = [
  { name: "Edu", avatar: "ED", level: 47, rankPoints: 2400, difficulty: "Hard", accuracyPct: 92, speedMs: 2400 },
  { name: "Boarlos", avatar: "BO", level: 45, rankPoints: 2280, difficulty: "Hard", accuracyPct: 88, speedMs: 2700 },
  { name: "Tamu", avatar: "TA", level: 44, rankPoints: 2200, difficulty: "Hard", accuracyPct: 86, speedMs: 2900 },
  { name: "It's Mat", avatar: "IM", level: 42, rankPoints: 2050, difficulty: "Hard", accuracyPct: 84, speedMs: 3000 },
  { name: "Tomy", avatar: "TO", level: 40, rankPoints: 1900, difficulty: "Medium", accuracyPct: 80, speedMs: 3200 },
  { name: "Gatha", avatar: "GA", level: 36, rankPoints: 1620, difficulty: "Medium", accuracyPct: 76, speedMs: 3400 },
  { name: "Villa", avatar: "VI", level: 32, rankPoints: 1380, difficulty: "Medium", accuracyPct: 72, speedMs: 3600 },
  { name: "Emi", avatar: "EM", level: 27, rankPoints: 1100, difficulty: "Medium", accuracyPct: 68, speedMs: 3800 },
  { name: "Paula M", avatar: "PM", level: 26, rankPoints: 1050, difficulty: "Easy", accuracyPct: 64, speedMs: 4000 },
  { name: "Dianita", avatar: "DI", level: 23, rankPoints: 900, difficulty: "Easy", accuracyPct: 60, speedMs: 4200 },
];

export const rankedDivisions = [
  { name: "Bronze", min: 0, color: "from-amber-700 to-amber-900" },
  { name: "Silver", min: 400, color: "from-slate-300 to-slate-500" },
  { name: "Gold", min: 900, color: "from-yellow-400 to-amber-500" },
  { name: "Platinum", min: 1500, color: "from-cyan-300 to-teal-500" },
  { name: "Diamond", min: 2200, color: "from-sky-400 to-indigo-500" },
  { name: "Nova Rank", min: 3000, color: "from-fuchsia-500 to-purple-600" },
  { name: "Volta Elite", min: 4000, color: "from-rose-500 via-orange-500 to-yellow-400" },
];

export function divisionFor(points: number) {
  let div = rankedDivisions[0];
  for (const d of rankedDivisions) if (points >= d.min) div = d;
  return div;
}

export const rankedMatchPool: QuizQuestion[] = [
  { id: 1, question: "Solve: 3x = 27", options: ["6", "7", "9", "12"], correct: 2, explanation: "x = 9." },
  { id: 2, question: "F = ma; m=4, a=3 ⇒ F =", options: ["7", "12", "15", "21"], correct: 1, explanation: "12 N." },
  { id: 3, question: "d/dx(x²) =", options: ["x", "2", "2x", "x²"], correct: 2, explanation: "Power rule." },
  { id: 4, question: "KE of 2 kg at 4 m/s:", options: ["8 J", "12 J", "16 J", "32 J"], correct: 2, explanation: "½·2·16 = 16 J." },
  { id: 5, question: "(x+1)(x−1) =", options: ["x²", "x²+1", "x²−1", "x²+x−1"], correct: 2, explanation: "Difference of squares." },
  { id: 6, question: "Free-fall g ≈", options: ["3.7", "5", "9.8", "20"], correct: 2, explanation: "Earth surface." },
  { id: 7, question: "lim x→0 (1−cos x)/x =", options: ["0", "1", "−1", "∞"], correct: 0, explanation: "Standard limit." },
  { id: 8, question: "Pythag: 5,12,?", options: ["13", "15", "17", "20"], correct: 0, explanation: "5²+12²=169 ⇒ 13." },
  { id: 9, question: "Power = work/time. 100 J in 5 s:", options: ["10 W", "15 W", "20 W", "50 W"], correct: 2, explanation: "100/5 = 20 W." },
  { id: 10, question: "Solve: x² − 16 = 0", options: ["±2", "±4", "±8", "±16"], correct: 1, explanation: "x = ±4." },
  { id: 11, question: "Vector 3↑ + 4→ magnitude:", options: ["5", "7", "12", "25"], correct: 0, explanation: "√25." },
  { id: 12, question: "∫ 3x² dx =", options: ["x³", "x³ + C", "6x + C", "9x³"], correct: 1, explanation: "Power rule." },
];
