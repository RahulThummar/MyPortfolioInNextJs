"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  variant?: "fade-up" | "scale-up" | "slide-up";
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 45,
  duration = 0.85,
  variant = "fade-up",
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={`relative w-full ${className}`}>{children}</div>;
  }

  const getInitialState = () => {
    switch (variant) {
      case "scale-up":
        return { opacity: 0, scale: 0.95, y: 30, filter: "blur(6px)" };
      case "slide-up":
        return { opacity: 0, y: yOffset * 1.3 };
      case "fade-up":
      default:
        return { opacity: 0, y: yOffset, filter: "blur(6px)" };
    }
  };

  const getTargetState = () => {
    switch (variant) {
      case "scale-up":
        return { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" };
      case "slide-up":
        return { opacity: 1, y: 0 };
      case "fade-up":
      default:
        return { opacity: 1, y: 0, filter: "blur(0px)" };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getTargetState()}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`relative w-full ${className}`}
    >
      {/* Subtle ambient light aura on section entrance */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-radial from-primary/5 via-secondary/0 to-transparent pointer-events-none -z-10 blur-2xl"
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
}

export default SectionReveal;
