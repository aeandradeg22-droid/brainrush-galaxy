import type { QuizQuestion } from "./mock-data";

export interface PracticeTopic {
  id: string;
  subject: "Mathematics" | "Physics";
  name: string;
  icon: string;
  color: string;
  level: "Easy" | "Medium" | "Hard";
  theory: { heading: string; body: string }[];
  formulas?: string[];
  example: { problem: string; steps: string[]; answer: string };
  questions: QuizQuestion[];
  xpPerQuestion: number;
}

export const practiceTopics: PracticeTopic[] = [
  {
    id: "algebra-equations",
    subject: "Mathematics",
    name: "Algebra · Linear Equations",
    icon: "ƒ",
    color: "from-blue-500 to-cyan-500",
    level: "Easy",
    theory: [
      { heading: "What is a linear equation?", body: "A linear equation is an equality between two expressions where the unknown variable appears with exponent 1. The goal is to isolate the variable on one side of the equals sign." },
      { heading: "Golden rule", body: "Whatever operation you do on one side, you must do on the other. This keeps the equation balanced." },
    ],
    formulas: ["a·x + b = c   →   x = (c − b) / a"],
    example: {
      problem: "Solve  3x + 5 = 20",
      steps: [
        "Subtract 5 from both sides:  3x = 20 − 5  =  15",
        "Divide both sides by 3:  x = 15 / 3",
        "Result:  x = 5",
      ],
      answer: "x = 5",
    },
    xpPerQuestion: 25,
    questions: [
      { id: 1, question: "Solve:  4x − 8 = 12", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 2, explanation: "Add 8: 4x = 20, then divide by 4 → x = 5." },
      { id: 2, question: "Solve:  2(x + 3) = 14", options: ["x = 2", "x = 4", "x = 6", "x = 7"], correct: 1, explanation: "Distribute: 2x + 6 = 14 → 2x = 8 → x = 4." },
      { id: 3, question: "Solve:  5x + 2 = 3x + 10", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 2, explanation: "Move x: 2x = 8 → x = 4." },
      { id: 4, question: "Solve:  x/3 = 7", options: ["x = 14", "x = 21", "x = 24", "x = 28"], correct: 1, explanation: "Multiply both sides by 3 → x = 21." },
      { id: 5, question: "Solve:  −2x + 9 = 1", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 2, explanation: "Subtract 9: −2x = −8 → x = 4." },
    ],
  },
  {
    id: "algebra-factoring",
    subject: "Mathematics",
    name: "Algebra · Factoring",
    icon: "x²",
    color: "from-purple-500 to-pink-500",
    level: "Medium",
    theory: [
      { heading: "Why factor?", body: "Factoring rewrites a polynomial as a product. It is essential to solve quadratic equations and simplify expressions." },
      { heading: "Most common patterns", body: "Common factor, difference of squares, and the trinomial x² + bx + c = (x + p)(x + q) where p + q = b and p · q = c." },
    ],
    formulas: ["a² − b² = (a − b)(a + b)", "x² + (p+q)x + pq = (x + p)(x + q)"],
    example: {
      problem: "Factor  x² + 7x + 12",
      steps: [
        "Find two numbers that multiply to 12 and add to 7.",
        "3 and 4 work:  3·4 = 12, 3+4 = 7.",
        "Therefore  x² + 7x + 12 = (x + 3)(x + 4).",
      ],
      answer: "(x + 3)(x + 4)",
    },
    xpPerQuestion: 30,
    questions: [
      { id: 1, question: "Factor: x² − 25", options: ["(x − 5)(x − 5)", "(x − 5)(x + 5)", "(x + 25)(x − 1)", "x(x − 25)"], correct: 1, explanation: "Difference of squares: a² − b² = (a − b)(a + b)." },
      { id: 2, question: "Factor: x² + 5x + 6", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 6)(x − 1)", "(x − 2)(x − 3)"], correct: 0, explanation: "2 · 3 = 6 and 2 + 3 = 5." },
      { id: 3, question: "Factor: 3x² + 6x", options: ["3(x² + 2)", "3x(x + 2)", "x(3x + 6)", "(3x + 2)(x)"], correct: 1, explanation: "Common factor 3x → 3x(x + 2)." },
      { id: 4, question: "Factor: x² − 9x + 20", options: ["(x − 4)(x − 5)", "(x − 2)(x − 10)", "(x + 4)(x − 5)", "(x − 4)(x + 5)"], correct: 0, explanation: "−4 · −5 = 20 and −4 + −5 = −9." },
      { id: 5, question: "Factor: x² + 2x − 15", options: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x + 5)(x + 3)", "(x − 5)(x − 3)"], correct: 0, explanation: "5 · −3 = −15 and 5 + (−3) = 2." },
    ],
  },
  {
    id: "functions-linear",
    subject: "Mathematics",
    name: "Linear Functions",
    icon: "/",
    color: "from-emerald-500 to-teal-500",
    level: "Easy",
    theory: [
      { heading: "Form  y = mx + b", body: "Every linear function is a straight line. m is the slope (steepness) and b is the y-intercept (where the line cuts the y axis)." },
      { heading: "Slope between two points", body: "Given (x₁, y₁) and (x₂, y₂), the slope is m = (y₂ − y₁) / (x₂ − x₁)." },
    ],
    formulas: ["y = m·x + b", "m = (y₂ − y₁) / (x₂ − x₁)"],
    example: {
      problem: "Find the equation of the line passing through (1, 2) and (3, 8).",
      steps: [
        "Slope:  m = (8 − 2) / (3 − 1) = 6 / 2 = 3.",
        "Use a point in y = mx + b:  2 = 3·1 + b  →  b = −1.",
        "Equation:  y = 3x − 1.",
      ],
      answer: "y = 3x − 1",
    },
    xpPerQuestion: 25,
    questions: [
      { id: 1, question: "What is the slope of  y = 4x + 7 ?", options: ["4", "7", "−4", "11"], correct: 0, explanation: "In y = mx + b the coefficient of x is the slope." },
      { id: 2, question: "Slope between (0, 1) and (2, 5)", options: ["1", "2", "3", "4"], correct: 1, explanation: "(5 − 1) / (2 − 0) = 4/2 = 2." },
      { id: 3, question: "If f(x) = 2x − 3, what is f(4)?", options: ["3", "5", "8", "11"], correct: 1, explanation: "f(4) = 2·4 − 3 = 8 − 3 = 5." },
      { id: 4, question: "Y-intercept of y = −x + 6", options: ["−1", "1", "−6", "6"], correct: 3, explanation: "The constant term b is the y-intercept." },
      { id: 5, question: "Which line is parallel to y = 3x + 2?", options: ["y = −3x + 2", "y = 3x − 5", "y = (1/3)x", "y = x + 3"], correct: 1, explanation: "Parallel lines share the same slope (3)." },
    ],
  },
  {
    id: "geometry-triangles",
    subject: "Mathematics",
    name: "Geometry · Triangles",
    icon: "△",
    color: "from-rose-500 to-fuchsia-500",
    level: "Easy",
    theory: [
      { heading: "Sum of interior angles", body: "The interior angles of every triangle add up to 180°." },
      { heading: "Pythagorean theorem", body: "In a right triangle with legs a and b and hypotenuse c:  a² + b² = c²." },
    ],
    formulas: ["α + β + γ = 180°", "a² + b² = c²", "Area = (base × height) / 2"],
    example: {
      problem: "A right triangle has legs of 3 and 4. Find the hypotenuse.",
      steps: [
        "Apply Pythagoras:  c² = 3² + 4² = 9 + 16 = 25.",
        "Take the square root:  c = √25.",
        "Result:  c = 5.",
      ],
      answer: "c = 5",
    },
    xpPerQuestion: 25,
    questions: [
      { id: 1, question: "Two angles of a triangle measure 60° and 70°. The third is:", options: ["40°", "50°", "60°", "70°"], correct: 1, explanation: "180 − 60 − 70 = 50°." },
      { id: 2, question: "Hypotenuse of a right triangle with legs 6 and 8:", options: ["10", "12", "14", "16"], correct: 0, explanation: "√(36 + 64) = √100 = 10." },
      { id: 3, question: "Area of a triangle with base 10 and height 4:", options: ["14", "20", "40", "80"], correct: 1, explanation: "Area = (10 × 4) / 2 = 20." },
      { id: 4, question: "An equilateral triangle has each angle equal to:", options: ["45°", "60°", "90°", "120°"], correct: 1, explanation: "180° / 3 = 60°." },
      { id: 5, question: "A triangle with sides 5, 12, 13 is:", options: ["Acute", "Right", "Obtuse", "Equilateral"], correct: 1, explanation: "5² + 12² = 25 + 144 = 169 = 13² → right triangle." },
    ],
  },
  {
    id: "trig-basics",
    subject: "Mathematics",
    name: "Trigonometry · Basics",
    icon: "θ",
    color: "from-indigo-500 to-purple-500",
    level: "Medium",
    theory: [
      { heading: "Trig ratios in a right triangle", body: "For an angle θ:  sin θ = opposite / hypotenuse,  cos θ = adjacent / hypotenuse,  tan θ = opposite / adjacent." },
      { heading: "Notable values", body: "sin 30° = 1/2,  cos 60° = 1/2,  sin 45° = cos 45° = √2/2,  tan 45° = 1." },
    ],
    formulas: ["sin² θ + cos² θ = 1", "tan θ = sin θ / cos θ"],
    example: {
      problem: "In a right triangle the hypotenuse is 10 and angle θ = 30°. Find the opposite side.",
      steps: [
        "Use sin θ = opposite / hypotenuse.",
        "sin 30° = opposite / 10  →  0.5 = opposite / 10.",
        "Result:  opposite = 5.",
      ],
      answer: "opposite = 5",
    },
    xpPerQuestion: 30,
    questions: [
      { id: 1, question: "sin 30° equals:", options: ["0", "1/2", "√2/2", "1"], correct: 1, explanation: "Standard value of sin 30° = 1/2." },
      { id: 2, question: "If cos θ = 0.8, then sin² θ = ", options: ["0.16", "0.36", "0.64", "0.8"], correct: 1, explanation: "sin² + cos² = 1 → sin² = 1 − 0.64 = 0.36." },
      { id: 3, question: "tan 45° equals:", options: ["0", "1/2", "1", "√3"], correct: 2, explanation: "tan 45° = sin 45° / cos 45° = 1." },
      { id: 4, question: "In a right triangle, opposite = 3, hypotenuse = 5. sin θ =", options: ["3/4", "3/5", "4/5", "5/3"], correct: 1, explanation: "sin θ = opposite / hypotenuse = 3/5." },
      { id: 5, question: "Which is always true?", options: ["sin θ + cos θ = 1", "sin² θ + cos² θ = 1", "tan θ = sin θ × cos θ", "sin 90° = 0"], correct: 1, explanation: "The Pythagorean identity is fundamental." },
    ],
  },
  {
    id: "calculus-intro",
    subject: "Mathematics",
    name: "Calculus · Derivatives",
    icon: "∂",
    color: "from-cyan-500 to-blue-500",
    level: "Hard",
    theory: [
      { heading: "What is a derivative?", body: "The derivative f′(x) measures the instantaneous rate of change of f at x. Geometrically, it is the slope of the tangent line." },
      { heading: "Power rule", body: "For f(x) = xⁿ:  f′(x) = n · xⁿ⁻¹. Constants disappear and constant multipliers are preserved." },
    ],
    formulas: ["d/dx [xⁿ] = n · xⁿ⁻¹", "d/dx [c] = 0", "(f + g)′ = f′ + g′"],
    example: {
      problem: "Compute the derivative of  f(x) = 3x² + 5x − 7",
      steps: [
        "Derivative of 3x²:  3 · 2 · x = 6x.",
        "Derivative of 5x:  5.",
        "Derivative of −7:  0.",
        "Result:  f′(x) = 6x + 5.",
      ],
      answer: "f′(x) = 6x + 5",
    },
    xpPerQuestion: 35,
    questions: [
      { id: 1, question: "Derivative of f(x) = x³", options: ["x²", "2x²", "3x²", "3x³"], correct: 2, explanation: "Power rule: 3 · x^(3−1) = 3x²." },
      { id: 2, question: "Derivative of f(x) = 7", options: ["0", "1", "7", "x"], correct: 0, explanation: "The derivative of any constant is 0." },
      { id: 3, question: "Derivative of f(x) = 4x² + 2x", options: ["4x + 2", "8x + 2", "8x", "2x + 2"], correct: 1, explanation: "8x from 4x² and 2 from 2x." },
      { id: 4, question: "Slope of f(x) = x² at x = 3", options: ["3", "6", "9", "12"], correct: 1, explanation: "f′(x) = 2x → f′(3) = 6." },
      { id: 5, question: "Derivative of f(x) = 5x³ − 2x", options: ["15x² − 2", "5x² − 2", "15x − 2", "5x³ − 2"], correct: 0, explanation: "5 · 3x² − 2 = 15x² − 2." },
    ],
  },
  {
    id: "kinematics-velocity",
    subject: "Physics",
    name: "Kinematics · Velocity",
    icon: "→",
    color: "from-orange-500 to-red-500",
    level: "Easy",
    theory: [
      { heading: "Average velocity", body: "Velocity is the rate at which position changes. With uniform motion: v = Δx / Δt, where Δx is displacement and Δt is elapsed time." },
      { heading: "Units", body: "In the SI system velocity is measured in m/s. 1 m/s = 3.6 km/h." },
    ],
    formulas: ["v = Δx / Δt", "x = x₀ + v · t"],
    example: {
      problem: "A car travels 200 m in 10 s at constant velocity. Find v.",
      steps: [
        "Apply v = Δx / Δt.",
        "v = 200 m / 10 s.",
        "Result:  v = 20 m/s.",
      ],
      answer: "v = 20 m/s",
    },
    xpPerQuestion: 25,
    questions: [
      { id: 1, question: "A runner covers 100 m in 20 s. Average velocity?", options: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"], correct: 1, explanation: "v = 100 / 20 = 5 m/s." },
      { id: 2, question: "Convert 72 km/h to m/s", options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"], correct: 2, explanation: "Divide by 3.6: 72 / 3.6 = 20 m/s." },
      { id: 3, question: "At v = 15 m/s constant, distance covered in 8 s:", options: ["80 m", "100 m", "120 m", "150 m"], correct: 2, explanation: "x = v · t = 15 · 8 = 120 m." },
      { id: 4, question: "If x₀ = 0 and after 4 s the position is 60 m, then v =", options: ["10 m/s", "12 m/s", "15 m/s", "20 m/s"], correct: 2, explanation: "v = (60 − 0) / 4 = 15 m/s." },
      { id: 5, question: "Velocity is a:", options: ["Scalar", "Vector", "Unit", "Coordinate"], correct: 1, explanation: "It has both magnitude and direction." },
    ],
  },
  {
    id: "kinematics-acceleration",
    subject: "Physics",
    name: "Kinematics · Acceleration",
    icon: "a",
    color: "from-yellow-500 to-orange-500",
    level: "Medium",
    theory: [
      { heading: "Definition", body: "Acceleration is the rate of change of velocity:  a = Δv / Δt. In uniform acceleration, motion follows the MRUA (uniformly accelerated motion) equations." },
      { heading: "MRUA equations", body: "v = v₀ + a·t.   x = x₀ + v₀·t + ½ a·t².   v² = v₀² + 2 a (x − x₀)." },
    ],
    formulas: ["a = Δv / Δt", "v = v₀ + a·t", "x = x₀ + v₀·t + ½ a·t²"],
    example: {
      problem: "A car accelerates from rest at 2 m/s² during 5 s. Find final v and distance.",
      steps: [
        "Final velocity:  v = 0 + 2 · 5 = 10 m/s.",
        "Distance:  x = 0 + ½ · 2 · 5² = 25 m.",
        "Result:  v = 10 m/s, x = 25 m.",
      ],
      answer: "v = 10 m/s,  x = 25 m",
    },
    xpPerQuestion: 30,
    questions: [
      { id: 1, question: "v₀ = 0, a = 3 m/s², t = 4 s. Final velocity?", options: ["7 m/s", "9 m/s", "12 m/s", "15 m/s"], correct: 2, explanation: "v = 0 + 3 · 4 = 12 m/s." },
      { id: 2, question: "From rest, a = 2 m/s². Distance covered in 6 s:", options: ["18 m", "24 m", "36 m", "72 m"], correct: 2, explanation: "x = ½ · 2 · 6² = 36 m." },
      { id: 3, question: "A car goes from 10 to 30 m/s in 5 s. Acceleration:", options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"], correct: 2, explanation: "a = (30 − 10) / 5 = 4 m/s²." },
      { id: 4, question: "If a = 0 during a stretch, motion is:", options: ["Uniform (constant velocity)", "Uniformly accelerated", "Decelerated", "Circular"], correct: 0, explanation: "Without acceleration the velocity stays constant." },
      { id: 5, question: "g ≈ 9.8 m/s². In 2 s of free fall the velocity reached is:", options: ["4.9 m/s", "9.8 m/s", "14.7 m/s", "19.6 m/s"], correct: 3, explanation: "v = g · t = 9.8 · 2 ≈ 19.6 m/s." },
    ],
  },
  {
    id: "dynamics-newton",
    subject: "Physics",
    name: "Dynamics · Newton's Laws",
    icon: "F",
    color: "from-red-500 to-rose-600",
    level: "Medium",
    theory: [
      { heading: "First law (inertia)", body: "A body keeps its state of rest or uniform motion unless a net force acts on it." },
      { heading: "Second law", body: "The net force on a body equals mass times acceleration:  F = m · a." },
      { heading: "Third law", body: "For every action there is an equal and opposite reaction." },
    ],
    formulas: ["F = m · a", "Weight = m · g", "Friction f = μ · N"],
    example: {
      problem: "What net force is needed to accelerate a 4 kg mass at 3 m/s²?",
      steps: [
        "Apply F = m · a.",
        "F = 4 · 3.",
        "Result:  F = 12 N.",
      ],
      answer: "F = 12 N",
    },
    xpPerQuestion: 30,
    questions: [
      { id: 1, question: "F = 20 N applied to mass m = 5 kg. Acceleration:", options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"], correct: 1, explanation: "a = F / m = 20 / 5 = 4 m/s²." },
      { id: 2, question: "Weight of a 10 kg body (g = 10 m/s²):", options: ["1 N", "10 N", "100 N", "1000 N"], correct: 2, explanation: "W = m · g = 10 · 10 = 100 N." },
      { id: 3, question: "An object moves at constant velocity. The net force is:", options: ["Maximum", "Equal to weight", "Zero", "Equal to friction"], correct: 2, explanation: "First law: constant velocity ⇒ ΣF = 0." },
      { id: 4, question: "Friction force when N = 50 N and μ = 0.3:", options: ["10 N", "12 N", "15 N", "20 N"], correct: 2, explanation: "f = μ · N = 0.3 · 50 = 15 N." },
      { id: 5, question: "If you push a wall with 100 N, the wall pushes you back with:", options: ["0 N", "50 N", "100 N", "200 N"], correct: 2, explanation: "Third law: equal in magnitude, opposite direction." },
    ],
  },
  {
    id: "energy-conservation",
    subject: "Physics",
    name: "Energy · Work and Energy",
    icon: "E",
    color: "from-violet-500 to-fuchsia-500",
    level: "Medium",
    theory: [
      { heading: "Work", body: "Work done by a constant force parallel to the motion:  W = F · d. Unit: joule (J)." },
      { heading: "Kinetic and potential energy", body: "Kinetic:  Eₖ = ½ m v².   Gravitational potential:  Eₚ = m · g · h." },
      { heading: "Conservation", body: "In the absence of friction the mechanical energy Eₖ + Eₚ remains constant." },
    ],
    formulas: ["W = F · d", "Eₖ = ½ m v²", "Eₚ = m · g · h"],
    example: {
      problem: "A 2 kg body moves at 3 m/s. Find its kinetic energy.",
      steps: [
        "Apply Eₖ = ½ m v².",
        "Eₖ = ½ · 2 · 3² = 1 · 9.",
        "Result:  Eₖ = 9 J.",
      ],
      answer: "Eₖ = 9 J",
    },
    xpPerQuestion: 30,
    questions: [
      { id: 1, question: "Work to push 5 m with F = 20 N:", options: ["25 J", "50 J", "100 J", "200 J"], correct: 2, explanation: "W = F · d = 20 · 5 = 100 J." },
      { id: 2, question: "Eₖ of a 4 kg body at 5 m/s:", options: ["20 J", "40 J", "50 J", "100 J"], correct: 2, explanation: "½ · 4 · 25 = 50 J." },
      { id: 3, question: "Eₚ of a 2 kg object at h = 10 m (g = 10 m/s²):", options: ["20 J", "100 J", "200 J", "400 J"], correct: 2, explanation: "Eₚ = 2 · 10 · 10 = 200 J." },
      { id: 4, question: "If velocity doubles, kinetic energy:", options: ["Doubles", "Triples", "Quadruples", "Halves"], correct: 2, explanation: "Eₖ ∝ v², so 2² = 4 times." },
      { id: 5, question: "An object falls from 5 m (no friction). At the ground:", options: ["Eₚ stays the same", "Eₖ increases by Eₚ lost", "Energy disappears", "Eₖ becomes zero"], correct: 1, explanation: "Conservation of mechanical energy: Eₚ converts into Eₖ." },
    ],
  },
];
