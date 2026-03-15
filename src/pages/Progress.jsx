import React, { useState } from "react";
import { Flame, Trophy, BarChart3, Settings } from "lucide-react";
import { CATEGORIES } from "../components/data/categories";
import useProgress from "../components/hooks/useProgress";
import RankBadge from "../components/manify/RankBadge";
import MasteryRing from "../components/manify/MasteryRing";
import SettingsModal from "../components/modals/SettingsModal";

export default function Progress() {
  const [showSettings, setShowSettings] = useState(false);
  const p = useProgress();

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-lg mx-auto px-4 py-6 pb-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Progress</h1>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-lg hover:bg-card transition-colors no-select"
          >
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Rank */}
        <RankBadge rank={p.currentRank} totalXP={p.totalXP} />

        {/* Discipline Index */}
        <div className="p-4 rounded-xl bg-card border border-white/[0.06] space-y-4">
          <span className="text-[10px] font-bold tracking-wider text-primary">DISCIPLINE INDEX</span>
          <div className="flex items-center gap-5">
            <MasteryRing progress={p.disciplineIndex / 100} color="hsl(var(--gold))" size={80} lineWidth={6} />
            <div className="flex-1 space-y-2">
              {[
                { label: "Streak Strength", weight: "40%" },
                { label: "Quiz Average", weight: "30%" },
                { label: "Weekly Consistency", weight: "20%" },
                { label: "Flashcard Review", weight: "10%" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-semibold text-foreground">{row.weight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Streak Stats */}
        <div className="flex bg-card rounded-xl overflow-hidden">
          {[
            { value: p.currentStreak, label: "Current\nStreak", icon: Flame, color: "text-warning" },
            { value: p.longestStreak, label: "Longest\nStreak", icon: Trophy, color: "text-primary" },
            { value: `${p.quizAverage}%`, label: "Quiz\nAverage", icon: BarChart3, color: "text-success" },
          ].map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <div className="w-px bg-white/[0.06] my-3" />}
              <div className="flex-1 flex flex-col items-center gap-2 py-4">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                <span className="text-xl font-bold text-foreground">{s.value}</span>
                <span className="text-[10px] text-muted-foreground text-center whitespace-pre-line">{s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Category Mastery */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-wider text-muted-foreground">CATEGORY MASTERY</span>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-2.5 py-3 bg-card rounded-xl">
                <MasteryRing progress={p.categoryMastery(cat.id)} color={cat.accentColor} size={50} lineWidth={4} />
                <span className="text-[10px] font-medium text-muted-foreground">{cat.displayName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-wider text-muted-foreground">STATS</span>
          <div className="bg-card rounded-xl divide-y divide-white/[0.06]">
            {[
              { label: "Lessons Completed", value: p.completedLessonCount },
              { label: "Total XP", value: p.totalXP },
              { label: "Flashcards Due", value: p.flashcardsDueCount },
              { label: "Current Rank", value: p.currentRank.name },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center p-3.5">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className="text-sm font-semibold text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}