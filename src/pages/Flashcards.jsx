import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRightCircle, CheckCircle2 } from "lucide-react";
import { getLessonById } from "../components/data/lessons";
import useProgress from "../components/hooks/useProgress";

export default function Flashcards() {
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id");
  const lesson = getLessonById(lessonId);
  const p = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!lesson) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Lesson not found</div>;

  const cards = lesson.flashcards;
  const card = cards[currentIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        p.markFlashcards(lesson.id, cards.map((c) => c.id));
        setIsDone(true);
      }
    }, 150);
  };

  if (isDone) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-lg mx-auto px-4 py-16 flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-success" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">Flashcards Complete</h2>
            <p className="text-muted-foreground mt-1">{cards.length} cards reviewed</p>
          </div>
          <p className="text-xl font-bold text-primary">+10 XP</p>
          <Link to={`/Lesson?id=${lessonId}`}
            className="w-full max-w-xs p-4 rounded-xl bg-gradient-to-r from-gold-light via-primary to-gold-dark text-background font-semibold text-center">
            Done
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-8">
        <div className="flex items-center justify-between">
          <Link to={`/Lesson?id=${lessonId}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-sm font-medium text-foreground">Flashcards</span>
          <span className="text-xs font-semibold text-muted-foreground">{currentIndex + 1}/{cards.length}</span>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5">
          {cards.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i <= currentIndex ? "bg-primary" : "bg-white/[0.1]"}`} />
          ))}
        </div>

        {/* Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer perspective-1000"
        >
          <div
            className={`relative w-full min-h-[320px] transition-transform duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
            style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", transition: "transform 0.5s" }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-2xl bg-card border border-white/[0.08] flex flex-col items-center justify-center p-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="text-[10px] font-bold tracking-widest text-primary mb-4">TERM</span>
              <p className="text-xl font-bold text-foreground text-center">{card.front}</p>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 rounded-2xl bg-card border border-primary/30 flex flex-col items-center justify-center p-8"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="text-[10px] font-bold tracking-widest text-primary mb-4">DEFINITION</span>
              <p className="text-base text-foreground text-center leading-relaxed">{card.back}</p>
              {card.tags?.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-muted-foreground px-2 py-0.5 rounded-full bg-white/[0.06]">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="flex flex-col items-center gap-3">
          <button onClick={nextCard} className="flex flex-col items-center gap-1.5">
            <ArrowRightCircle className="w-12 h-12 text-primary" />
            <span className="text-xs text-muted-foreground">Next</span>
          </button>
          <p className="text-xs text-muted-foreground/60">Tap card to flip</p>
        </div>
      </div>
    </div>
  );
}