import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle2, Circle, Clock } from "lucide-react";

export default function LessonRow({ lesson, progress, isAvailable }) {
  const navigate = useNavigate();

  const content = (
    <div className={`flex items-center gap-3 p-3.5 rounded-xl transition-all no-select ${isAvailable ? "bg-card hover:bg-panel-light border border-white/[0.06]" : "bg-card/50 opacity-50 border border-white/[0.03]"}`}>
      <div className="flex-shrink-0">
        {progress.isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-success" />
        ) : !isAvailable ? (
          <Lock className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground truncate">{lesson.title}</h4>
        {lesson.subtitle && <p className="text-xs text-muted-foreground truncate mt-0.5">{lesson.subtitle}</p>}
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{lesson.estimatedMinutes}m</span>
        </div>
        {progress.bestScore > 0 && (
          <span className={`text-xs font-semibold ${progress.bestScore >= 80 ? "text-success" : "text-warning"}`}>
            {progress.bestScore}%
          </span>
        )}
      </div>
    </div>
  );

  if (!isAvailable) return content;
  return (
    <button onClick={() => navigate(`/Lesson?id=${lesson.id}`, { state: { direction: 1 } })} className="w-full text-left">
      {content}
    </button>
  );
}