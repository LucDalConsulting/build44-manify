import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flame, Star, BarChart3, Layers } from "lucide-react";
import { CATEGORIES } from "../components/data/categories";
import { getLessonsForCategory, getAllLessons, getLessonById } from "../components/data/lessons";
import useProgress from "../components/hooks/useProgress";
import RankBadge from "../components/manify/RankBadge";
import CategoryTile from "../components/manify/CategoryTile";

export default function Home() {
  const navigate = useNavigate();
  const p = useProgress();

  const findCurrentLesson = () => {
    if (p.data.currentLessonId) {
      const lesson = getLessonById(p.data.currentLessonId);
      if (lesson && !p.isCompleted(lesson.id)) return lesson;
    }
    for (const cat of CATEGORIES) {
      const lessons = getLessonsForCategory(cat.id);
      const first = lessons.find((l) => !p.isCompleted(l.id));
      if (first) return first;
    }
    return getLessonsForCategory("constitution")[0];
  };

  const current = findCurrentLesson();

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-lg mx-auto px-4 pb-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">
              MANIFY
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">Daily competence training</p>
          </div>
          <RankBadge rank={p.currentRank} totalXP={p.totalXP} compact />
        </div>

        {/* Stats Bar */}
        <div className="flex gap-5 p-3.5 bg-card rounded-xl">
          {[
            { value: p.currentStreak, label: "Streak", icon: Flame, color: "text-warning" },
            { value: p.totalXP, label: "XP", icon: Star, color: "text-primary" },
            { value: p.disciplineIndex, label: "Index", icon: BarChart3, color: "text-success" },
            { value: p.flashcardsDueCount, label: "Due", icon: Layers, color: "text-blue-400" },
          ].map((s) => (
            <div key={s.label} className="flex-1 flex flex-col items-center gap-1.5">
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <span className="text-lg font-bold text-foreground">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Continue Training */}
        {current && (
          <button
            onClick={() => navigate(`/Lesson?id=${current.id}`, { state: { direction: 1 } })}
            className="w-full text-left no-select"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-panel-light to-card border border-primary/20 hover:border-primary/40 transition-all">
              <p className="text-[10px] font-bold tracking-wider text-primary mb-2">CONTINUE TRAINING</p>
              <h3 className="font-semibold text-foreground">{current.title}</h3>
              {current.subtitle && <p className="text-xs text-muted-foreground mt-1">{current.subtitle}</p>}
              <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                <span>{current.estimatedMinutes} min</span>
                <span>Tier {current.tier}</span>
                <span>{CATEGORIES.find((c) => c.id === current.categoryId)?.displayName}</span>
              </div>
            </div>
          </button>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-card border border-white/[0.04]">
            <Star className="w-5 h-5 text-warning mb-2" />
            <p className="text-sm font-semibold text-foreground">Review</p>
            <p className="text-xs text-muted-foreground">Weak spots</p>
          </div>
          <Link to="/Progress" className="p-3.5 rounded-xl bg-card border border-white/[0.04]">
            <Layers className="w-5 h-5 text-blue-400 mb-2" />
            <p className="text-sm font-semibold text-foreground">Progress</p>
            <p className="text-xs text-muted-foreground">View stats</p>
          </Link>
        </div>

        {/* Training Tracks */}
        <div>
          <h2 className="text-[10px] font-bold tracking-wider text-muted-foreground mb-3">TRAINING TRACKS</h2>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => (
              <CategoryTile
                key={cat.id}
                category={cat}
                mastery={p.categoryMastery(cat.id)}
                lessonsCount={getLessonsForCategory(cat.id).length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}