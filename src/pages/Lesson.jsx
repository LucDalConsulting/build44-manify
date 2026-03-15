import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bookmark, Clock, ChevronRight, Maximize2, Minimize2, CheckCircle2 } from "lucide-react";
import { getLessonById } from "../components/data/lessons";
import { CATEGORIES } from "../components/data/categories";
import useProgress from "../components/hooks/useProgress";
import ContentBlockCard from "../components/manify/ContentBlockCard";
import CategoryIcon from "../components/manify/CategoryIcon";

export default function Lesson() {
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id");
  const lesson = getLessonById(lessonId);
  const p = useProgress();

  const [expanded, setExpanded] = useState(new Set());
  const [readSections, setReadSections] = useState(new Set());

  useEffect(() => {
    if (lesson) {
      p.markRead(lesson.id);
      if (lesson.contentBlocks.length > 0) {
        const firstId = lesson.contentBlocks[0].id;
        setExpanded(new Set([firstId]));
        setReadSections(new Set([firstId]));
      }
    }
  }, [lessonId]);

  if (!lesson) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Lesson not found</div>;

  const category = CATEGORIES.find((c) => c.id === lesson.categoryId);
  const progress = p.progress(lesson.id);
  const sectionProgress = lesson.contentBlocks.length > 0 ? readSections.size / lesson.contentBlocks.length : 0;

  const toggleSection = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else { next.add(id); setReadSections((r) => new Set(r).add(id)); }
      return next;
    });
  };

  const toggleAll = () => {
    if (expanded.size === lesson.contentBlocks.length) {
      setExpanded(new Set());
    } else {
      const all = new Set(lesson.contentBlocks.map((b) => b.id));
      setExpanded(all);
      setReadSections(all);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <Link to={`/Category?id=${lesson.categoryId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <button onClick={() => p.toggleBookmark(lesson.id)} className="p-2">
            <Bookmark className={`w-5 h-5 ${p.isBookmarked(lesson.id) ? "fill-primary text-primary" : "text-primary"}`} />
          </button>
        </div>

        {/* Header */}
        <div className="p-4 rounded-xl bg-card border transition-all" style={{ borderColor: `${category?.accentColor}33` }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold tracking-wider text-primary">LESSON {lesson.lessonNumber}</span>
            <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-white/[0.08]">Tier {lesson.tier}</span>
          </div>
          {lesson.subtitle && <p className="text-sm text-muted-foreground mb-3">{lesson.subtitle}</p>}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{lesson.estimatedMinutes} min</span>
            <DifficultyDots difficulty={lesson.difficulty} />
            {category && <span className="flex items-center gap-1"><CategoryIcon name={category.icon} className="w-3 h-3" />{category.displayName}</span>}
          </div>
          {progress.bestScore > 0 && (
            <div className="flex items-center gap-2 mt-3 text-xs">
              <CheckCircle2 className={`w-3.5 h-3.5 ${progress.isCompleted ? "text-success" : "text-muted-foreground"}`} />
              <span className={`font-semibold ${progress.bestScore >= 80 ? "text-success" : "text-warning"}`}>Best: {progress.bestScore}%</span>
              <span className="text-muted-foreground">· {progress.attempts} attempt{progress.attempts !== 1 ? "s" : ""}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-bold tracking-wider">
            <span className="text-muted-foreground">SECTIONS READ</span>
            <span className={sectionProgress >= 1 ? "text-success" : "text-primary"}>{readSections.size} / {lesson.contentBlocks.length}</span>
          </div>
          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${sectionProgress >= 1 ? "bg-success" : "bg-gradient-to-r from-gold-light via-primary to-gold-dark"}`}
              style={{ width: `${sectionProgress * 100}%` }} />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button onClick={toggleAll} className="flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-colors">
            {expanded.size === lesson.contentBlocks.length ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            {expanded.size === lesson.contentBlocks.length ? "Collapse All" : "Expand All"}
          </button>
          {readSections.size === lesson.contentBlocks.length && (
            <span className="flex items-center gap-1 text-xs font-semibold text-success">
              <CheckCircle2 className="w-3.5 h-3.5" /> All Read
            </span>
          )}
        </div>

        {/* Content Blocks */}
        <div className="space-y-3">
          {lesson.contentBlocks.map((block, i) => (
            <ContentBlockCard
              key={block.id}
              block={block}
              index={i}
              isExpanded={expanded.has(block.id)}
              onToggle={() => toggleSection(block.id)}
              isRead={readSections.has(block.id)}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {lesson.quiz.questions.length > 0 && (
            <Link to={`/Quiz?id=${lesson.id}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gold-light via-primary to-gold-dark text-background font-semibold text-sm">
              <span>Start Quiz</span>
              <span className="flex-1" />
              <span className="text-xs opacity-75">{lesson.quiz.questions.length} questions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
          {lesson.flashcards.length > 0 && (
            <Link to={`/Flashcards?id=${lesson.id}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-primary/30 text-foreground font-semibold text-sm">
              <span>Flashcards</span>
              <span className="flex-1" />
              <span className="text-xs text-muted-foreground">{lesson.flashcards.length} cards</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function DifficultyDots({ difficulty }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((level) => (
        <div key={level} className={`w-1.5 h-1.5 rounded-full ${level <= difficulty ? "bg-primary" : "bg-white/10"}`} />
      ))}
    </div>
  );
}