import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, LockOpen, CheckCircle2, Shield } from "lucide-react";
import { CATEGORIES } from "../components/data/categories";
import { getLessonsForCategory } from "../components/data/lessons";
import useProgress from "../components/hooks/useProgress";
import CategoryIcon from "../components/manify/CategoryIcon";
import MasteryRing from "../components/manify/MasteryRing";
import LessonRow from "../components/manify/LessonRow";
export default function Category() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("id");
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const lessons = getLessonsForCategory(categoryId);
  const tiers = [...new Set(lessons.map((l) => l.tier))].sort();
  const p = useProgress();

  if (!category) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Category not found</div>;

  const isLessonAvailable = (lesson) => {
    if (lesson.lessonNumber === 1 && lesson.tier === 1) return true;
    if (!p.isTierUnlocked(lesson.tier, categoryId)) return false;
    if (lesson.lessonNumber === 1) return true;
    const tierLessons = lessons.filter((l) => l.tier === lesson.tier);
    const prev = tierLessons.find((l) => l.lessonNumber === lesson.lessonNumber - 1);
    if (prev) return p.isCompleted(prev.id) || p.hasRead(prev.id);
    return lesson.prerequisites.every((id) => p.isCompleted(id) || p.hasRead(id));
  };

  const currentTier = tiers.reduce((t, tier) => p.isTierUnlocked(tier, categoryId) ? tier : t, 1);

  const tierLabel = (tier) => {
    if (categoryId === "sharks") return tier === 1 ? "Basics & Legend" : "Anatomy, Species & Myth";
    return tier === 1 ? "Structural Awareness" : tier === 2 ? "Operational Competence" : "Diagnostic Thinking";
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        <button
          onClick={() => navigate(-1, { state: { direction: -1 } })}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-select"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Header */}
        <div className="p-4 rounded-xl bg-card border transition-all" style={{ borderColor: `${category.accentColor}33` }}>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${category.accentColor}22` }}>
              <CategoryIcon name={category.icon} className="w-8 h-8" style={{ color: category.accentColor }} />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">{category.displayName}</h1>
              <p className="text-sm text-muted-foreground mt-0.5">{category.subtitle}</p>
            </div>
            <MasteryRing progress={p.categoryMastery(categoryId)} color={category.accentColor} size={56} lineWidth={4} />
          </div>
          <div className="flex gap-4 mt-4">
            {[
              { v: lessons.length, l: "Lessons" },
              { v: lessons.filter((l) => p.isCompleted(l.id)).length, l: "Completed" },
              { v: `Tier ${currentTier}`, l: "Current" },
            ].map((s) => (
              <div key={s.l} className="flex-1 text-center">
                <p className="text-sm font-bold text-foreground">{s.v}</p>
                <p className="text-[10px] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tiers */}
        {tiers.map((tier) => {
          const unlocked = p.isTierUnlocked(tier, categoryId);
          const tierLessons = lessons.filter((l) => l.tier === tier);
          const completed = tierLessons.filter((l) => p.isCompleted(l.id)).length;

          return (
            <div key={tier} className="space-y-3">
              <div className="flex items-center gap-2">
                {unlocked ? (
                  <LockOpen className="w-3 h-3 text-primary" />
                ) : (
                  <Lock className="w-3 h-3 text-muted-foreground" />
                )}
                <span className={`text-[10px] font-bold tracking-wider ${unlocked ? "text-primary" : "text-muted-foreground"}`}>
                  TIER {tier}
                </span>
                <span className="text-[10px] text-muted-foreground">{tierLabel(tier)}</span>
                <span className="flex-1" />
                {unlocked && <span className="text-xs font-semibold text-muted-foreground">{completed}/{tierLessons.length}</span>}
              </div>

              {unlocked ? (
                <div className="space-y-2">
                  {tierLessons.map((lesson) => (
                    <LessonRow key={lesson.id} lesson={lesson} progress={p.progress(lesson.id)} isAvailable={isLessonAvailable(lesson)} />
                  ))}
                </div>
              ) : (
                <TierLockedCard tier={tier} categoryId={categoryId} p={p} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TierLockedCard({ tier, categoryId, p }) {
  const prev = p.tierProgress(tier - 1, categoryId);
  const reqCompletion = tier === 2 ? 80 : 90;
  const reqScore = tier === 2 ? 80 : 85;
  const completionPct = prev.total > 0 ? Math.round((prev.completed * 100) / prev.total) : 0;

  return (
    <div className="p-5 rounded-xl bg-card/60 border border-white/[0.04] text-center space-y-3">
      <Shield className="w-8 h-8 text-muted-foreground/50 mx-auto" />
      <p className="text-sm font-semibold text-foreground">Complete Tier {tier - 1} to Unlock</p>
      <div className="space-y-2">
        <ReqRow label={`Tier ${tier - 1} completion`} current={completionPct} required={reqCompletion} met={completionPct >= reqCompletion} />
        <ReqRow label="Quiz average" current={prev.avgScore} required={reqScore} met={prev.avgScore >= reqScore} />
      </div>
    </div>
  );
}

function ReqRow({ label, current, required, met }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <CheckCircle2 className={`w-3 h-3 ${met ? "text-success" : "text-muted-foreground"}`} />
      <span className="text-muted-foreground">{label}</span>
      <span className="flex-1" />
      <span className={`font-semibold ${met ? "text-success" : "text-warning"}`}>{current}% / {required}%</span>
    </div>
  );
}