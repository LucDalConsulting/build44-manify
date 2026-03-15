import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, Info, ChevronRight } from "lucide-react";
import { getLessonById } from "../components/data/lessons";
import useProgress from "../components/hooks/useProgress";
import MasteryRing from "../components/manify/MasteryRing";

export default function Quiz() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id");
  const lesson = getLessonById(lessonId);
  const p = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  if (!lesson) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Lesson not found</div>;

  const questions = lesson.quiz.questions;
  const question = questions[currentIndex];
  const progressPct = (currentIndex + 1) / questions.length;

  const handleAnswer = (idx) => {
    if (hasAnswered) return;
    setSelectedAnswer(idx);
    setHasAnswered(true);
    if (idx === question.correctIndex) setCorrectCount((c) => c + 1);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      const finalCorrect = selectedAnswer === question.correctIndex ? correctCount : correctCount;
      p.submitQuiz(lesson.id, finalCorrect, questions.length);
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setCorrectCount(0);
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = questions.length ? Math.round((correctCount * 100) / questions.length) : 0;
    const passed = percentage >= lesson.quiz.passPercent;
    const xp = passed ? 30 + (correctCount === questions.length ? 10 : 0) : 0;

    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-lg mx-auto px-4 py-12 flex flex-col items-center gap-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${passed ? "bg-success/20" : "bg-warning/20"}`}>
            {passed ? <CheckCircle2 className="w-9 h-9 text-success" /> : <Info className="w-9 h-9 text-warning" />}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">{passed ? "Quiz Passed" : "Not Quite"}</h2>
            <p className="text-lg text-muted-foreground mt-1">{correctCount}/{questions.length} correct</p>
          </div>
          <MasteryRing progress={percentage / 100} color={passed ? "hsl(var(--success))" : "hsl(var(--warning))"} size={100} lineWidth={8} />
          {passed ? (
            <div className="text-center">
              <p className="text-xl font-bold text-primary">+{xp} XP</p>
              <p className="text-xs text-muted-foreground">Knowledge secured</p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Score {lesson.quiz.passPercent}% or higher to pass.</p>
          )}
          <div className="w-full space-y-3 mt-4">
            <button onClick={resetQuiz} className={`w-full p-4 rounded-xl text-center font-semibold ${passed ? "bg-card border border-primary/30 text-foreground" : "bg-gradient-to-r from-gold-light via-primary to-gold-dark text-background"}`}>
              {passed ? "Retry for Better Score" : "Retry Quiz"}
            </button>
            <Link to={`/Category?id=${lesson.categoryId}`} className="block w-full p-4 rounded-xl text-center font-semibold bg-gradient-to-r from-gold-light via-primary to-gold-dark text-background">
              Back to Category
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1, { state: { direction: -1 } })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors no-select"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-foreground">Lesson Quiz</span>
          <div className="w-4" />
        </div>

        {/* Progress */}
        <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-400" style={{ width: `${progressPct * 100}%` }} />
        </div>

        {/* Question */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold tracking-wider text-primary">QUESTION {currentIndex + 1} OF {questions.length}</span>
            <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-white/[0.08]">
              {question.type === "scenario" ? "Scenario" : "MCQ"}
            </span>
          </div>
          <p className="text-lg font-semibold text-foreground leading-relaxed">{question.prompt}</p>
        </div>

        {/* Choices */}
        <div className="space-y-2.5">
          {question.choices.map((choice, idx) => {
            const isCorrect = idx === question.correctIndex;
            const isSelected = idx === selectedAnswer;
            let bg = "bg-card";
            let border = "border-white/[0.06]";
            if (hasAnswered && isCorrect) { bg = "bg-success/10"; border = "border-success/50"; }
            else if (hasAnswered && isSelected && !isCorrect) { bg = "bg-danger/10"; border = "border-danger/50"; }

            return (
              <button key={idx} onClick={() => handleAnswer(idx)} disabled={hasAnswered}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${bg} ${border}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  hasAnswered && isCorrect ? "border-success" : hasAnswered && isSelected ? "border-danger" : "border-white/20"
                }`}>
                  {hasAnswered && isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-success" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-3.5 h-3.5 text-danger" />}
                </div>
                <span className="text-sm text-foreground">{choice}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {hasAnswered && (
          <div className="p-3.5 rounded-xl bg-panel-light space-y-1">
            <div className="flex items-center gap-2">
              {selectedAnswer === question.correctIndex ? (
                <CheckCircle2 className="w-4 h-4 text-success" />
              ) : (
                <Info className="w-4 h-4 text-warning" />
              )}
              <span className={`text-sm font-semibold ${selectedAnswer === question.correctIndex ? "text-success" : "text-warning"}`}>
                {selectedAnswer === question.correctIndex ? "Correct" : "Incorrect"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}

        {hasAnswered && (
          <button onClick={nextQuestion}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-gold-light via-primary to-gold-dark text-background font-semibold text-center">
            {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}