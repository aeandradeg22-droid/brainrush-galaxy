import { createFileRoute, redirect } from "@tanstack/react-router";
import { isAuthed } from "@/lib/auth";
import { AppShell } from "@/components/AppShell";
import { useEffect, useRef, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
} from "recharts";
import { Play, RotateCcw, Atom } from "lucide-react";

export const Route = createFileRoute("/simulator")({
  head: () => ({ meta: [{ title: "Physics Lab — NUMERIX" }] }),
  beforeLoad: () => { if (!isAuthed()) throw redirect({ to: "/login" }); },
  component: Simulator,
});

const G = 9.81;

function Simulator() {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(40);
  const [gravity, setGravity] = useState(G);
  const [running, setRunning] = useState(false);
  const [t, setT] = useState(0);
  const rafRef = useRef<number>(0);

  const rad = (angle * Math.PI) / 180;
  const vx = velocity * Math.cos(rad);
  const vy = velocity * Math.sin(rad);
  const tFlight = (2 * vy) / gravity;
  const range = (velocity * velocity * Math.sin(2 * rad)) / gravity;
  const maxH = (vy * vy) / (2 * gravity);

  // Trajectory points for chart
  const points = Array.from({ length: 60 }, (_, i) => {
    const ti = (i / 59) * tFlight;
    const x = vx * ti;
    const y = vy * ti - 0.5 * gravity * ti * ti;
    return { x: +x.toFixed(2), y: +Math.max(0, y).toFixed(2) };
  });

  // Velocity-time data
  const vtData = Array.from({ length: 30 }, (_, i) => {
    const ti = (i / 29) * tFlight;
    const vyt = vy - gravity * ti;
    return { t: +ti.toFixed(2), vx: +vx.toFixed(2), vy: +vyt.toFixed(2) };
  });

  // Animation
  useEffect(() => {
    if (!running) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = (ts - start) / 1000;
      if (elapsed >= tFlight) {
        setT(tFlight);
        setRunning(false);
        return;
      }
      setT(elapsed);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, tFlight]);

  const launch = () => { setT(0); setRunning(true); };
  const reset = () => { setRunning(false); setT(0); };

  // Cannon ball position (in chart units)
  const ballX = vx * t;
  const ballY = Math.max(0, vy * t - 0.5 * gravity * t * t);

  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-6 max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl gradient-neon grid place-items-center glow-neon">
            <Atom className="text-neon-foreground" size={22} />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Physics Lab</h1>
            <p className="mt-0.5 text-muted-foreground text-sm">Interactive projectile motion simulator</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Controls */}
          <div className="glass-strong rounded-2xl p-6 space-y-5">
            <div className="font-semibold">Controls</div>
            <Slider label="Launch angle" value={angle} setValue={setAngle} min={5} max={85} unit="°" />
            <Slider label="Initial velocity" value={velocity} setValue={setVelocity} min={5} max={80} unit=" m/s" />
            <Slider label="Gravity" value={gravity} setValue={setGravity} min={1.6} max={24.8} step={0.1} unit=" m/s²" />

            <div className="flex gap-2 pt-2">
              <button
                onClick={launch}
                disabled={running}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl gradient-primary text-primary-foreground font-semibold glow hover:glow-strong transition disabled:opacity-50"
              >
                <Play size={14} fill="currentColor" /> Launch
              </button>
              <button
                onClick={reset}
                className="px-4 rounded-xl glass hover:bg-secondary/50 transition"
                title="Reset"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <Mini label="Range" value={`${range.toFixed(1)} m`} />
              <Mini label="Max H" value={`${maxH.toFixed(1)} m`} />
              <Mini label="Flight" value={`${tFlight.toFixed(2)} s`} />
            </div>
          </div>

          {/* Trajectory canvas (SVG) */}
          <div className="lg:col-span-2 glass rounded-2xl p-4 relative overflow-hidden">
            <div className="font-semibold mb-2 px-2">Trajectory</div>
            <TrajectoryCanvas
              points={points}
              ballX={ballX}
              ballY={ballY}
              maxRange={Math.max(range, 10)}
              maxHeight={Math.max(maxH, 5)}
            />
          </div>
        </div>

        {/* V-T chart + force diagram */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Velocity vs Time</div>
            <div className="text-xs text-muted-foreground mb-4">Vertical velocity decreases linearly under gravity</div>
            <div className="h-56">
              <ResponsiveContainer>
                <LineChart data={vtData}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                  <XAxis dataKey="t" stroke="oklch(0.7 0.03 260)" fontSize={11} tickLine={false} axisLine={false} unit="s" />
                  <YAxis stroke="oklch(0.7 0.03 260)" fontSize={11} tickLine={false} axisLine={false} unit="m/s" />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
                  <Line type="monotone" dataKey="vy" name="Vy" stroke="oklch(0.6 0.25 295)" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="vx" name="Vx" stroke="oklch(0.78 0.18 230)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Force diagram</div>
            <div className="text-xs text-muted-foreground mb-4">Initial velocity decomposed into components</div>
            <div className="h-56 grid place-items-center">
              <ForceDiagram angle={angle} />
            </div>
          </div>
        </div>

        {/* Equation card */}
        <div className="glass-strong rounded-2xl p-6">
          <div className="font-semibold mb-3">Equations of motion</div>
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <Eq label="Horizontal" formula="x(t) = v₀·cos(θ)·t" />
            <Eq label="Vertical" formula="y(t) = v₀·sin(θ)·t − ½gt²" />
            <Eq label="Range" formula="R = v₀² · sin(2θ) / g" />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Slider({
  label, value, setValue, min, max, step = 1, unit = "",
}: { label: string; value: number; setValue: (v: number) => void; min: number; max: number; step?: number; unit?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-bold text-gradient">{value.toFixed(step < 1 ? 1 : 0)}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="w-full accent-primary"
      />
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-lg p-2.5 text-center">
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
      <div className="text-sm font-bold mt-0.5">{value}</div>
    </div>
  );
}

function Eq({ label, formula }: { label: string; formula: string }) {
  return (
    <div className="glass rounded-xl p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 font-mono text-base">{formula}</div>
    </div>
  );
}

function TrajectoryCanvas({
  points, ballX, ballY, maxRange, maxHeight,
}: { points: { x: number; y: number }[]; ballX: number; ballY: number; maxRange: number; maxHeight: number }) {
  const W = 600;
  const H = 320;
  const pad = 30;
  const sx = (x: number) => pad + (x / maxRange) * (W - 2 * pad);
  const sy = (y: number) => H - pad - (y / maxHeight) * (H - 2 * pad);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x)} ${sy(p.y)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-72 rounded-xl bg-secondary/30">
      <defs>
        <linearGradient id="traj" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.78 0.18 230)" />
          <stop offset="100%" stopColor="oklch(0.6 0.25 295)" />
        </linearGradient>
      </defs>
      {/* grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`g${i}`} x1={pad} y1={pad + (i * (H - 2 * pad)) / 7} x2={W - pad} y2={pad + (i * (H - 2 * pad)) / 7}
          stroke="oklch(1 0 0 / 0.05)" />
      ))}
      {/* ground */}
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="oklch(1 0 0 / 0.3)" />
      {/* trajectory */}
      <path d={path} stroke="url(#traj)" strokeWidth="2.5" fill="none"
        style={{ filter: "drop-shadow(0 0 6px oklch(0.7 0.2 265 / 0.6))" }} />
      {/* cannon */}
      <circle cx={sx(0)} cy={sy(0)} r="6" fill="oklch(0.7 0.2 265)" />
      {/* projectile */}
      <circle cx={sx(ballX)} cy={sy(ballY)} r="9" fill="oklch(0.78 0.2 30)"
        style={{ filter: "drop-shadow(0 0 12px oklch(0.78 0.2 30 / 0.9))" }} />
      {/* axis labels */}
      <text x={W - pad} y={H - 8} fill="oklch(0.7 0.03 260)" fontSize="11" textAnchor="end">x (m)</text>
      <text x={pad + 4} y={pad + 12} fill="oklch(0.7 0.03 260)" fontSize="11">y (m)</text>
    </svg>
  );
}

function ForceDiagram({ angle }: { angle: number }) {
  const cx = 100, cy = 130, len = 90;
  const rad = (angle * Math.PI) / 180;
  const ex = cx + len * Math.cos(rad);
  const ey = cy - len * Math.sin(rad);
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full">
      <defs>
        <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.7 0.2 265)" />
        </marker>
        <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.78 0.18 230)" />
        </marker>
        <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.6 0.25 295)" />
        </marker>
      </defs>
      <line x1={20} y1={cy} x2={220} y2={cy} stroke="oklch(1 0 0 / 0.2)" />
      {/* v0 */}
      <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="oklch(0.7 0.2 265)" strokeWidth="3" markerEnd="url(#ah)" />
      <text x={ex + 4} y={ey - 4} fontSize="12" fill="oklch(0.7 0.2 265)" fontWeight="bold">v₀</text>
      {/* vx */}
      <line x1={cx} y1={cy} x2={ex} y2={cy} stroke="oklch(0.78 0.18 230)" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#ah2)" />
      <text x={(cx + ex) / 2} y={cy + 14} fontSize="10" fill="oklch(0.78 0.18 230)">vₓ</text>
      {/* vy */}
      <line x1={ex} y1={cy} x2={ex} y2={ey} stroke="oklch(0.6 0.25 295)" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#ah3)" />
      <text x={ex + 6} y={(cy + ey) / 2} fontSize="10" fill="oklch(0.6 0.25 295)">vy</text>
      {/* angle arc */}
      <path d={`M ${cx + 24} ${cy} A 24 24 0 0 0 ${cx + 24 * Math.cos(rad)} ${cy - 24 * Math.sin(rad)}`}
        stroke="oklch(0.78 0.2 75)" strokeWidth="1.5" fill="none" />
      <text x={cx + 30} y={cy - 8} fontSize="11" fill="oklch(0.78 0.2 75)">θ={angle}°</text>
      {/* origin */}
      <circle cx={cx} cy={cy} r="4" fill="white" />
    </svg>
  );
}
