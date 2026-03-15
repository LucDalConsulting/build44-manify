import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RotateCw } from "lucide-react";

export default function PullToRefresh({ children, onRefresh }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const y = useMotionValue(0);
  const containerRef = useRef(null);

  const opacity = useTransform(y, [0, 80], [0, 1]);
  const scale = useTransform(y, [0, 80], [0.5, 1]);
  const rotate = useTransform(y, [0, 80], [0, 180]);

  const handleDragEnd = async (event, info) => {
    if (y.get() >= 80 && !isRefreshing) {
      setIsRefreshing(true);
      await animate(y, 60, { type: "spring", stiffness: 300, damping: 30 });
      
      if (onRefresh) {
        await onRefresh();
      }
      
      await animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
      setIsRefreshing(false);
    } else {
      await animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const handleDrag = (event, info) => {
    const scrollTop = containerRef.current?.scrollTop || 0;
    if (scrollTop === 0 && info.offset.y > 0) {
      y.set(Math.min(info.offset.y, 120));
    }
  };

  return (
    <div ref={containerRef} className="h-full overflow-y-auto relative">
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center z-10"
        style={{ y: -40, opacity }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center"
          style={{ scale }}
        >
          <motion.div style={{ rotate }}>
            <RotateCw className={`w-5 h-5 text-primary ${isRefreshing ? "animate-spin" : ""}`} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.3, bottom: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="min-h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}