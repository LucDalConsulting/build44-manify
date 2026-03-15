import React from "react";
import { Shield, Hammer, ShieldCheck, Home, Wrench, Brain, Crown } from "lucide-react";

const iconMap = { Shield, Hammer, ShieldCheck, Home, Wrench, Brain, Crown };

export default function RankIcon({ name, className = "" }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}