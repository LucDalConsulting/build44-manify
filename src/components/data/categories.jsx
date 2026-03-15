// Category definitions matching the original Manify app
export const CATEGORIES = [
  {
    id: "constitution",
    displayName: "Constitution",
    icon: "Building2",
    subtitle: "Power structure literacy",
    totalTiers: 3,
    accentColor: "#4682C8",
  },
  {
    id: "firearms",
    displayName: "Firearms",
    icon: "Crosshair",
    subtitle: "Responsibility & force literacy",
    totalTiers: 3,
    accentColor: "#B45050",
  },
  {
    id: "home",
    displayName: "Home",
    icon: "Home",
    subtitle: "Ownership competence",
    totalTiers: 3,
    accentColor: "#50A078",
  },
  {
    id: "cars",
    displayName: "Cars",
    icon: "Car",
    subtitle: "Mechanical autonomy",
    totalTiers: 3,
    accentColor: "#C88C3C",
  },
  {
    id: "grilling",
    displayName: "Grilling",
    icon: "Flame",
    subtitle: "Fire, meat, method, confidence",
    totalTiers: 3,
    accentColor: "#DC6432",
  },
  {
    id: "sharks",
    displayName: "Sharks",
    icon: "Waves",
    subtitle: "Apex predator energy",
    totalTiers: 2,
    accentColor: "#3C8CB4",
  },
];

export const RANKS = [
  { id: "initiate", name: "Initiate", xpThreshold: 0, icon: "Shield" },
  { id: "builder", name: "Builder", xpThreshold: 200, icon: "Hammer" },
  { id: "protector", name: "Protector", xpThreshold: 500, icon: "ShieldCheck" },
  { id: "provider", name: "Provider", xpThreshold: 1000, icon: "Home" },
  { id: "operator", name: "Operator", xpThreshold: 2000, icon: "Wrench" },
  { id: "strategist", name: "Strategist", xpThreshold: 4000, icon: "Brain" },
  { id: "sovereign", name: "Sovereign", xpThreshold: 8000, icon: "Crown" },
];

export function getRank(xp) {
  const sorted = [...RANKS].reverse();
  for (const rank of sorted) {
    if (xp >= rank.xpThreshold) return rank;
  }
  return RANKS[0];
}

export function getNextRank(currentRank) {
  const idx = RANKS.findIndex((r) => r.id === currentRank.id);
  if (idx < RANKS.length - 1) return RANKS[idx + 1];
  return null;
}