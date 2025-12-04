// src/components/custom/intro-background.tsx
"use client";

import { cn } from "@/lib/utils";

export function IntroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <div
        className={cn(
          "absolute inset-0 opacity-40 dark:opacity-80",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
          "bg-size-[40px_40px]"
        )}
      />

      {/* Soft radial fade (center bright, edges fade out) */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)]"
        )}
      />

      {/* Slight highlight center pulse (barely visible) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_60%)]"
      />
    </div>
  );
}
