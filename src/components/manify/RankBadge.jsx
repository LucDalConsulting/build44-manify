import React from "react";
import RankIcon from "./RankIcon";
import { getNextRank } from "../data/categories";

export default function RankBadge({ rank, totalXP, compact = false }) {
  const next = getNextRank(rank);
  const xpProgress = next ? Math.min((totalXP - rank.xpThreshold) / (next.xpThreshold - rank.xpThreshold), 1) : 1;

  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/[0.12]">
        <RankIcon name={rank.icon} className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{rank.name}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 p-5 bg-card rounded-2xl border border-white/[0.06]">
      <RankIcon name={rank.icon} className="w-8 h-8 text-primary" />
      <span className="text-base font-bold text-primary tracking-widest uppercase">{rank.name}</span>
      <span className="text-xs text-muted-foreground">{totalXP} XP</span>
      {next && (
        <div className="w-full space-y-2">
          <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-gold-light via-primary to-gold-dark transition-all duration-500" style={{ width: `${xpProgress * 100}%` }} />
          </div>
          <p className="text-[10px] text-muted-foreground text-center">Next: {next.name} at {next.xpThreshold} XP</p>
        </div>
      )}
    </div>
  );
}