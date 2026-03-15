import React from "react";
import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";

export default function CategoryTile({ category, mastery, lessonsCount }) {
  const pct = Math.round(mastery * 100);

  return (
    <Link to={`/Category?id=${category.id}`} className="block">
      <div className="p-4 rounded-xl bg-card border border-white/[0.06] hover:border-white/[0.12] transition-all">
        <div className="flex justify-between items-start mb-3">
          <CategoryIcon name={category.icon} className="w-7 h-7" style={{ color: category.accentColor }} />

          {pct > 0 && (
            <span className="text-xs font-bold text-primary">{pct}%</span>
          )}
        </div>
        <h3 className="font-semibold text-foreground text-sm">{category.displayName}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{category.subtitle}</p>
        {pct > 0 && (
          <div className="mt-3 h-1 rounded-full bg-white/[0.08] overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: category.accentColor }} />
          </div>
        )}
        <p className="text-[10px] text-muted-foreground mt-2">{lessonsCount} lessons</p>
      </div>
    </Link>
  );
}