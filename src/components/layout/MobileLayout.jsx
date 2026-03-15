import React, { useState } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { Home, Layers, TrendingUp, Settings } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SettingsModal from "../modals/SettingsModal";

export default function MobileLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);

  const navItems = [
    { path: "/Home", icon: Home, label: "Home" },
    { path: "/Flashcards", icon: Layers, label: "Flashcards" },
    { path: "/Progress", icon: TrendingUp, label: "Progress" },
  ];

  const isMainPage = ["/Home", "/Flashcards", "/Progress"].includes(location.pathname);
  const direction = location.state?.direction || 0;

  const pageVariants = {
    initial: (dir) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.3 },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : dir < 0 ? "100%" : 0,
      opacity: 0,
      transition: { type: "tween", duration: 0.3 },
    }),
  };

  return (
    <div className="mobile-safe-area h-screen flex flex-col overflow-hidden">
      {/* Header - only show settings on Home */}
      {location.pathname === "/Home" && (
        <header className="flex-shrink-0 px-4 pt-4 pb-2 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Manify</h1>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-lg hover:bg-card transition-colors no-select"
          >
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </header>
      )}

      {/* Page Content */}
      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full overflow-y-auto"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation - only show on main pages */}
      {isMainPage && (
        <nav className="flex-shrink-0 bg-card border-t border-white/[0.06] safe-area-bottom">
          <div className="flex items-center justify-around px-4 h-16">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors no-select"
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}