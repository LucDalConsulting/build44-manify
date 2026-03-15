import React from "react";
import { Building2, Crosshair, Home, Car, Flame, Waves } from "lucide-react";

const iconMap = {
  Building2, Crosshair, Home, Car, Flame, Waves,
};

export default function CategoryIcon({ name, className = "" }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}