import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllLessons } from "../components/data/lessons";
import useProgress from "../components/hooks/useProgress";

export default function FlashcardsPage() {
  const p = useProgress();
  const allLessons = getAllLessons();
  const lessonsWithFlashcards = allLessons.filter((l) => l.flashcards && l.flashcards.length > 0);

  // Get due flashcards
  const dueFlashcards = lessonsWithFlashcards.flatMap((lesson) => {
    return lesson.flashcards.filter((card) => {
      const schedule = p.data.flashcardSchedules[card.id];
      if (!schedule || !schedule.nextReviewDate) return true;
      return new Date(schedule.nextReviewDate) <= new Date();
    }).map((card) => ({ ...card, lessonTitle: lesson.title }));
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (lessonsWithFlashcards.length === 0) {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">No flashcards available yet</p>
          <p className="text-xs text-muted-foreground">Complete lessons to unlock flashcards</p>
        </div>
      </div>
    );
  }

  if (dueFlashcards.length === 0) {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="text-center space-y-3">
          <p className="text-sm text-foreground font-semibold">All caught up!</p>
          <p className="text-xs text-muted-foreground">No flashcards due for review</p>
        </div>
      </div>
    );
  }

  const currentCard = dueFlashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex + 1 < dueFlashcards.length) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      p.markFlashcards(null, dueFlashcards.map((c) => c.id));
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto">
            <RotateCcw className="w-8 h-8 text-success" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Session Complete!</h2>
            <p className="text-sm text-muted-foreground mt-1">Reviewed {dueFlashcards.length} cards</p>
          </div>
          <Button onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Review Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col px-4 py-6">
      <div className="mb-4">
        <p className="text-xs text-muted-foreground text-center">
          Card {currentIndex + 1} of {dueFlashcards.length}
        </p>
        <div className="flex gap-1 mt-2">
          {dueFlashcards.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= currentIndex ? "bg-primary" : "bg-white/[0.08]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full max-w-sm aspect-[3/4] cursor-pointer perspective-1000 no-select"
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute inset-0 backface-hidden rounded-2xl bg-card border border-white/[0.06] p-8 flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold tracking-wider text-primary mb-4">TERM</p>
              <p className="text-lg font-semibold text-foreground text-center">{currentCard.front}</p>
              <p className="text-xs text-muted-foreground mt-6 text-center">{currentCard.lessonTitle}</p>
            </div>
            <div className="absolute inset-0 backface-hidden rounded-2xl bg-primary/10 border border-primary/20 p-8 flex flex-col items-center justify-center rotate-y-180">
              <p className="text-[10px] font-bold tracking-wider text-primary mb-4">DEFINITION</p>
              <p className="text-sm text-foreground text-center leading-relaxed">{currentCard.back}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button onClick={handleNext} className="w-full" size="lg">
          {currentIndex + 1 < dueFlashcards.length ? "Next Card" : "Finish"}
        </Button>
      </div>
    </div>
  );
}