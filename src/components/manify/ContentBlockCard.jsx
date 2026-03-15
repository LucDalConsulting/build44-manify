import React from "react";
import { ChevronDown, ChevronRight, Lightbulb, Settings, List, Wrench, AlertTriangle, CheckCircle2, Phone, FileText, Clock } from "lucide-react";

const typeIcons = {
  why_matters: Lightbulb,
  system_overview: Settings,
  component_breakdown: List,
  how_it_works: Wrench,
  failure_modes: AlertTriangle,
  owner_actions: CheckCircle2,
  call_pro: Phone,
  summary: FileText,
  history: Clock,
};

export default function ContentBlockCard({ block, index, isExpanded, onToggle, isRead }) {
  const Icon = typeIcons[block.type] || FileText;

  return (
    <div className={`rounded-xl border transition-all ${isRead ? "border-white/[0.08] bg-card" : "border-white/[0.04] bg-card/80"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isRead ? "bg-primary/[0.15]" : "bg-white/[0.04]"}`}>
          <Icon className={`w-4 h-4 ${isRead ? "text-primary" : "text-muted-foreground"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold tracking-wider text-muted-foreground">{block.title}</span>
        </div>
        {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {block.bullets.map((bullet, i) => (
            <div key={i} className="flex gap-2.5">
              <span className="text-primary mt-1.5 text-[6px]">●</span>
              <p className="text-sm text-foreground/80 leading-relaxed">{bullet}</p>
            </div>
          ))}
          {block.body && <p className="text-sm text-foreground/70 leading-relaxed mt-2">{block.body}</p>}
          {block.callouts?.map((c, i) => (
            <div key={i} className="p-3 rounded-lg bg-primary/[0.08] border border-primary/[0.15]">
              <p className="text-xs text-foreground/80">{c}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}