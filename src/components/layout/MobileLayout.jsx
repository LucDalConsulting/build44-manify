import React, { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Home, BookOpen, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES } from "../data/categories";

export default function MobileLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Independent navigation stacks for each tab
  const homeStack = useRef(["/Home"]);
  const trainingStack = useRef([`/Category?id=${CATEGORIES[0].id}`]);
  const progressStack = useRef(["/Progress"]);

  const navItems = [
    { path: "/Home", icon: Home, label: "Home", stack: homeStack },
    { path: "/Category", icon: BookOpen, label: "Training", stack: trainingStack },
    { path: "/Progress", icon: TrendingUp, label: "Progress", stack: progressStack },
  ];

  // Determine current tab
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === "/Home") return "home";
    if (["/Category", "/Lesson", "/Quiz"].includes(path)) return "training";
    if (path === "/Progress" || path === "/Flashcards") return "progress";
    return null;
  };

  const currentTab = getCurrentTab();

  // Update stack when navigating
  useEffect(() => {
    const fullPath = location.pathname + location.search;
    const tab = getCurrentTab();
    
    if (tab === "home" && !homeStack.current.includes(fullPath)) {
      homeStack.current.push(fullPath);
    } else if (tab === "training" && !trainingStack.current.includes(fullPath)) {
      trainingStack.current.push(fullPath);
    } else if (tab === "progress" && !progressStack.current.includes(fullPath)) {
      progressStack.current.push(fullPath);
    }
  }, [location.pathname, location.search]);

  const handleTabClick = (item) => {
    const isActive = location.pathname === item.path || 
      (item.path === "/Category" && location.pathname === "/Category");
    
    if (isActive) {
      // Reset to root of this tab's stack
      const rootPath = item.path === "/Category" ? `/Category?id=${CATEGORIES[0].id}` : item.path;
      item.stack.current = [rootPath];
      navigate(rootPath, { replace: true });
    } else {
      // Switch to this tab's current page (top of stack)
      const targetPath = item.stack.current[item.stack.current.length - 1] || 
        (item.path === "/Category" ? `/Category?id=${CATEGORIES[0].id}` : item.path);
      navigate(targetPath);
    }
  };

  const isMainPage = true; // Always show bottom navigation
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
            className="h-full"
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
                <button
                  key={item.path}
                  onClick={() => handleTabClick(item)}
                  className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors no-select"
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}