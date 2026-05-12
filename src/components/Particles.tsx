import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  hue: string;
}

export function Particles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 14 + Math.random() * 18,
      delay: Math.random() * 18,
      hue: Math.random() > 0.5 ? "var(--primary)" : "var(--accent)",
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full animate-float-up"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
