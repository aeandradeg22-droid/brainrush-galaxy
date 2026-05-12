import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { aiMessages } from "@/lib/mock-data";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Lightbulb, BookOpen, Brain } from "lucide-react";

export const Route = createFileRoute("/ai-tutor")({
  head: () => ({ meta: [{ title: "Nova AI — BrainRush" }] }),
  component: AITutor,
});

type Msg = { role: "user" | "ai"; text: string };

function AITutor() {
  const [messages, setMessages] = useState<Msg[]>(aiMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    if (!input.trim()) return;
    const q = input.trim();
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: `Great question. Let me break that down step by step:\n\n1️⃣ Identify the knowns and unknowns.\n2️⃣ Pick the right formula or theorem.\n3️⃣ Substitute, simplify, and check units.\n\nWant me to generate a practice problem on this topic?`,
        },
      ]);
      setTyping(false);
    }, 1400);
  }

  const suggestions = [
    "Explain projectile motion",
    "Solve a quadratic equation",
    "What's a derivative?",
    "Recommend a topic to study",
  ];

  return (
    <AppShell>
      <div className="p-6 lg:p-10 max-w-5xl flex flex-col h-[calc(100vh-3rem)] lg:h-screen">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-14 w-14 rounded-2xl gradient-primary grid place-items-center glow-strong animate-pulse-glow">
            <Sparkles className="text-primary-foreground" size={26} />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-success border-2 border-background" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              Nova AI <span className="text-xs px-2 py-0.5 rounded-md bg-success/20 text-success font-bold">ONLINE</span>
            </h1>
            <p className="text-sm text-muted-foreground">Your personal math & physics tutor</p>
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 glass-strong rounded-2xl p-5 overflow-y-auto space-y-4 min-h-0">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "ai" && (
                <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center shrink-0 glow">
                  <Sparkles size={14} className="text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                  m.role === "user"
                    ? "gradient-primary text-primary-foreground rounded-br-sm"
                    : "glass rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center shrink-0 glow">
                <Sparkles size={14} className="text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                <Dot /><Dot delay={150} /><Dot delay={300} />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggestions */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="px-3 py-1.5 rounded-full glass text-xs hover:glow transition"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="mt-3 flex items-center gap-2 glass-strong rounded-2xl p-2 focus-within:glow transition">
          <button className="p-2 rounded-lg hover:bg-secondary/50 transition" title="Hint">
            <Lightbulb size={18} className="text-warning" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary/50 transition" title="Topics">
            <BookOpen size={18} className="text-primary" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary/50 transition" title="Concepts">
            <Brain size={18} className="text-accent" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask Nova anything about math or physics..."
            className="flex-1 bg-transparent outline-none px-2 text-sm"
          />
          <button
            onClick={send}
            className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center glow hover:glow-strong transition"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </AppShell>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
