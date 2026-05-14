import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { accuracyHistory, radarSkills, xpHistory, subjects } from "@/lib/mock-data";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  BarChart, Bar,
} from "recharts";

export const Route = createFileRoute("/progress")({
  head: () => ({ meta: [{ title: "Analytics — NUMERIX" }] }),
  component: Progress,
});

const tooltipStyle = {
  background: "oklch(0.18 0.025 270)",
  border: "1px solid oklch(1 0 0 / 0.1)",
  borderRadius: 12,
  fontSize: 12,
  color: "white",
};

function Progress() {
  const heat = Array.from({ length: 7 * 12 }, () => Math.floor(Math.random() * 5));
  const stats = [
    { label: "Accuracy", value: "83%", delta: "+9%", positive: true },
    { label: "Avg. response", value: "42s", delta: "-6s", positive: true },
    { label: "Study consistency", value: "92%", delta: "+4%", positive: true },
    { label: "Problems solved", value: "1,284", delta: "+128", positive: true },
  ];
  return (
    <AppShell>
      <div className="p-6 lg:p-10 space-y-6 max-w-7xl">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">Analytics</h1>
          <p className="mt-1 text-muted-foreground">Cold hard data on your grind.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="mt-2 flex items-end justify-between">
                <div className="text-3xl font-bold">{s.value}</div>
                <div className={`text-xs font-bold ${s.positive ? "text-success" : "text-destructive"}`}>{s.delta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Accuracy trend</div>
            <div className="text-xs text-muted-foreground mb-4">6 weeks · trending up</div>
            <div className="h-64">
              <ResponsiveContainer>
                <LineChart data={accuracyHistory}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                  <XAxis dataKey="week" stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} domain={[40, 100]} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line type="monotone" dataKey="accuracy" stroke="oklch(0.6 0.25 295)" strokeWidth={3} dot={{ fill: "oklch(0.6 0.25 295)", r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Skill radar</div>
            <div className="text-xs text-muted-foreground mb-4">Your topic strengths</div>
            <div className="h-64">
              <ResponsiveContainer>
                <RadarChart data={radarSkills}>
                  <PolarGrid stroke="oklch(1 0 0 / 0.1)" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "oklch(0.7 0.03 260)", fontSize: 11 }} />
                  <PolarRadiusAxis stroke="oklch(1 0 0 / 0.1)" tick={false} />
                  <Radar dataKey="value" stroke="oklch(0.7 0.2 265)" fill="oklch(0.7 0.2 265)" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="font-semibold mb-1">XP per day</div>
            <div className="text-xs text-muted-foreground mb-4">Last 7 days</div>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={xpHistory}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                  <XAxis dataKey="day" stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.7 0.03 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(1 0 0 / 0.04)" }} />
                  <Bar dataKey="xp" fill="oklch(0.7 0.2 265)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-semibold mb-1">Activity heatmap</div>
            <div className="text-xs text-muted-foreground mb-4">Last 12 weeks</div>
            <div className="grid grid-cols-12 gap-1">
              {heat.map((v, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    background: v === 0
                      ? "oklch(0.24 0.03 270)"
                      : `oklch(${0.4 + v * 0.1} 0.2 265 / ${0.3 + v * 0.15})`,
                    boxShadow: v >= 3 ? "0 0 6px oklch(0.7 0.2 265 / 0.5)" : "none",
                  }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((v) => (
                  <div key={v} className="h-2.5 w-2.5 rounded-sm" style={{
                    background: v === 0 ? "oklch(0.24 0.03 270)" : `oklch(${0.4 + v * 0.1} 0.2 265 / ${0.3 + v * 0.15})`,
                  }} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Topic breakdown */}
        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-4">Topic mastery</div>
          <div className="space-y-3">
            {subjects.map((s) => (
              <div key={s.id} className="flex items-center gap-4">
                <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center text-base shrink-0`}>{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
