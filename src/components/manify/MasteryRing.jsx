import React from "react";

export default function MasteryRing({ progress = 0, color = "hsl(var(--gold))", size = 56, lineWidth = 4 }) {
  const radius = (size - lineWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;
  const pct = Math.round(progress * 100);

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={lineWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={lineWidth}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.4s ease" }} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
        {pct}%
      </span>
    </div>
  );
}