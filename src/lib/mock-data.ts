export const user = {
  name: "Pauli",
  username: "@pauli",
  level: 31,
  xp: 18420,
  xpToNext: 21000,
  streak: 12,
  rank: "Elite Solver",
  coins: 2340,
  globalRank: 24,
  avatar: "PA",
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

export const bossBattles = [
  { id: "newton", name: "Newton Boss Battle", subject: "Dynamics", hp: "12,000 XP", reward: "Legendary Badge", color: "from-orange-500 via-red-500 to-rose-600", icon: "🍎" },
  { id: "einstein", name: "Einstein Challenge", subject: "Relativity", hp: "18,000 XP", reward: "Cosmic Aura", color: "from-indigo-500 via-purple-600 to-fuchsia-600", icon: "✦" },
  { id: "calculus", name: "The Calculus Titan", subject: "Calculus", hp: "15,000 XP", reward: "Integral Crown", color: "from-emerald-500 via-teal-500 to-cyan-600", icon: "∫" },
  { id: "quantum", name: "Quantum Rush", subject: "Modern Physics", hp: "22,000 XP", reward: "Quantum Skin", color: "from-cyan-500 via-blue-500 to-purple-600", icon: "⚛" },
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
    reward: "Opportunity to retake one low exam grade.",
    description: "Complete this challenge to master Newton's laws and improve your force analysis skills.",
    questions: [
      {
        id: 1,
        question: "A 2 kg object experiences a net force of 10 N. What is its acceleration?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correct: 1,
        explanation: "Using F = ma, we get a = F/m = 10 N / 2 kg = 5 m/s². This is Newton's Second Law in action.",
      },
      {
        id: 2,
        question: "A car with mass 1000 kg accelerates at 2 m/s². What is the net force acting on it?",
        options: ["500 N", "1000 N", "2000 N", "2500 N"],
        correct: 2,
        explanation: "F = ma = 1000 kg × 2 m/s² = 2000 N. This shows how mass and acceleration relate to force.",
      },
      {
        id: 3,
        question: "What is the force of friction if a 5 kg block slides on a surface with μ = 0.2 (g = 10 m/s²)?",
        options: ["5 N", "10 N", "15 N", "25 N"],
        correct: 1,
        explanation: "f = μN = μmg = 0.2 × 5 × 10 = 10 N. Friction depends on the normal force and coefficient of friction.",
      },
      {
        id: 4,
        question: "An object is in equilibrium. What can we conclude about the forces acting on it?",
        options: ["All forces are zero", "The net force is zero", "There are no forces", "Forces are balanced but not zero"],
        correct: 1,
        explanation: "Equilibrium means the net force is zero (ΣF = 0), but individual forces can be non-zero if they cancel out.",
      },
      {
        id: 5,
        question: "If you apply 50 N force to push a 10 kg box and it accelerates at 4 m/s², what is the friction force?",
        options: ["10 N", "40 N", "50 N", "90 N"],
        correct: 0,
        explanation: "Net force = ma = 10 × 4 = 40 N. Since Applied force - Friction = 40, we get Friction = 50 - 40 = 10 N.",
      },
    ],
  },
  einstein: {
    id: "einstein",
    topic: "Relativity, Energy, and Modern Physics",
    purpose: "Improve your scientific reasoning and Physics analysis skills while competing for extra academic points.",
    reward: "Earn 1 or 2 extra points for a low assignment grade.",
    description: "Test your conceptual Physics understanding and modern physics knowledge.",
    questions: [
      {
        id: 1,
        question: "What does E=mc² tell us about the relationship between energy and mass?",
        options: ["Energy and mass are the same", "Mass can be converted into enormous amounts of energy", "Light travels at different speeds", "Energy moves faster than mass"],
        correct: 1,
        explanation: "Einstein's mass-energy equivalence shows that a small amount of mass can be converted to massive amounts of energy, since c² is enormous.",
      },
      {
        id: 2,
        question: "The speed of light in vacuum is approximately:",
        options: ["100,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        correct: 1,
        explanation: "The speed of light (c) is approximately 3 × 10⁸ m/s or 300,000 km/s. This is a universal constant.",
      },
      {
        id: 3,
        question: "What is momentum?",
        options: ["The force acting on an object", "Mass times velocity (p = mv)", "The ability to do work", "The rate of energy transfer"],
        correct: 1,
        explanation: "Momentum (p) is defined as mass multiplied by velocity. It's conserved in isolated systems, a fundamental principle in physics.",
      },
      {
        id: 4,
        question: "A wave with higher frequency has:",
        options: ["Longer wavelength", "Shorter wavelength", "Higher amplitude always", "Lower energy always"],
        correct: 1,
        explanation: "Frequency and wavelength are inversely related (c = fλ). Higher frequency means shorter wavelength. Energy also increases with frequency (E = hf).",
      },
      {
        id: 5,
        question: "What principle states that momentum is conserved when no external forces act?",
        options: ["Newton's First Law", "Law of Universal Gravitation", "Conservation of Momentum", "Hooke's Law"],
        correct: 2,
        explanation: "The Conservation of Momentum states that in an isolated system, total momentum before = total momentum after a collision or interaction.",
      },
    ],
  },
  calculus: {
    id: "calculus",
    topic: "Algebra and Introductory Calculus",
    purpose: "Master algebraic thinking and calculus fundamentals to earn a homework recovery opportunity.",
    reward: "Unlock a Homework Recovery Pass.",
    description: "Strengthen your algebraic reasoning and foundation for advanced mathematics.",
    questions: [
      {
        id: 1,
        question: "What is the derivative of f(x) = 3x²?",
        options: ["3x", "6x", "6x²", "3x² + C"],
        correct: 1,
        explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(3x²) = 3·2·x¹ = 6x.",
      },
      {
        id: 2,
        question: "Solve for x: 2x + 5 = 13",
        options: ["x = 4", "x = 6", "x = 3", "x = 9"],
        correct: 0,
        explanation: "2x + 5 = 13 → 2x = 8 → x = 4. This is basic linear algebra.",
      },
      {
        id: 3,
        question: "Factor: x² + 5x + 6",
        options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+2)(x+2)", "(x-2)(x-3)"],
        correct: 0,
        explanation: "We look for two numbers that multiply to 6 and add to 5: 2 and 3. So x² + 5x + 6 = (x+2)(x+3).",
      },
      {
        id: 4,
        question: "What is the integral of f(x) = 5x?",
        options: ["5", "5x²/2", "5x²/2 + C", "5x² + C"],
        correct: 2,
        explanation: "Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, so ∫5x dx = 5x²/2 + C.",
      },
      {
        id: 5,
        question: "What is the limit of f(x) = (x² - 1)/(x - 1) as x approaches 1?",
        options: ["0", "1", "2", "undefined"],
        correct: 2,
        explanation: "Factor: (x² - 1)/(x - 1) = (x+1)(x-1)/(x-1) = x+1. As x→1, the limit is 1+1 = 2.",
      },
    ],
  },
  quantum: {
    id: "quantum",
    topic: "Modern Physics and Logical Problem Solving",
    purpose: "Test your logic and scientific reasoning skills in this advanced futuristic challenge.",
    reward: "Unlock the Quantum Skin + 500 bonus XP.",
    description: "Master advanced Physics concepts and critical thinking for an exclusive reward.",
    questions: [
      {
        id: 1,
        question: "If an object travels 100 m in 10 seconds at constant velocity, what is its velocity?",
        options: ["1 m/s", "5 m/s", "10 m/s", "15 m/s"],
        correct: 2,
        explanation: "Velocity = distance / time = 100 m / 10 s = 10 m/s. This is constant velocity motion.",
      },
      {
        id: 2,
        question: "A ball is thrown upward with initial velocity 20 m/s. At what time does it reach maximum height? (g = 10 m/s²)",
        options: ["1 s", "2 s", "4 s", "5 s"],
        correct: 1,
        explanation: "At max height, v = 0. Using v = v₀ - gt: 0 = 20 - 10t → t = 2 s.",
      },
      {
        id: 3,
        question: "What happens to the volume of a gas when pressure increases (at constant temperature)?",
        options: ["Volume increases", "Volume decreases", "Volume stays the same", "Volume becomes negative"],
        correct: 1,
        explanation: "According to Boyle's Law (PV = constant), volume and pressure are inversely related at constant temperature.",
      },
      {
        id: 4,
        question: "The kinetic energy of an object is proportional to:",
        options: ["velocity", "velocity squared", "mass only", "height"],
        correct: 1,
        explanation: "KE = ½mv². Kinetic energy depends on the square of velocity, meaning doubling velocity quadruples kinetic energy.",
      },
      {
        id: 5,
        question: "What does the term 'wavelength' refer to?",
        options: ["The time for one complete oscillation", "The distance between consecutive crests or troughs", "The maximum displacement from equilibrium", "The frequency of a wave"],
        correct: 1,
        explanation: "Wavelength (λ) is the spatial distance between two consecutive points in phase (like crests). Related to frequency by c = fλ.",
      },
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
