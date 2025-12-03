// src/components/custom/hero-animation.tsx

"use client";

import { useMotionValue, useSpring, motion } from "motion/react";
import { useEffect, useState } from "react";

/* ===========================
   Flow variants
   =========================== */

type NodeDef = {
  id: string;
  x: number; // 0..1 (relative)
  y: number; // 0..1 (relative)
};

const NODES: NodeDef[] = [
  { id: "A", x: 0.10, y: 0.25 },
  { id: "B", x: 0.30, y: 0.25 },
  { id: "C", x: 0.50, y: 0.25 },
  { id: "D", x: 0.72, y: 0.25 },
  { id: "E", x: 0.50, y: 0.60 },
  { id: "F", x: 0.30, y: 0.60 },
  { id: "G", x: 0.72, y: 0.60 },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));

type FlowVariant = {
  id: string;
  label: string;
  edges: [string, string][];
  accentNodes?: string[];
};

const FLOW_VARIANTS: FlowVariant[] = [
  {
    id: "pipeline",
    label: "ifc → csv → milling",
    edges: [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["C", "E"],
      ["E", "G"],
    ],
    accentNodes: ["C", "E"],
  },
  {
    id: "simulation",
    label: "orders → simulation → schedule",
    edges: [
      ["A", "F"],
      ["F", "E"],
      ["E", "D"],
      ["F", "C"],
    ],
    accentNodes: ["F", "E"],
  },
  {
    id: "matching",
    label: "data → rules → output",
    edges: [
      ["B", "C"],
      ["C", "E"],
      ["B", "F"],
      ["E", "G"],
    ],
    accentNodes: ["B", "E"],
  },
];

/* ===========================
   Hero Animation
   =========================== */

export function HeroAnimation() {
  // Mouse-controlled tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springX = useSpring(tiltX, { stiffness: 40, damping: 18 });
  const springY = useSpring(tiltY, { stiffness: 40, damping: 18 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1

    const maxTilt = 5; // degrees
    tiltY.set((x - 0.5) * maxTilt); // left/right
    tiltX.set((0.5 - y) * maxTilt); // up/down
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // Cycle through flow variants
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FLOW_VARIANTS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const activeFlow = FLOW_VARIANTS[activeIndex];
  const activeNodeSet = new Set(
    activeFlow.edges.flatMap(([from, to]) => [from, to])
  );

  const cols = 10;
  const rows = 8;

  return (
    <motion.div
      className="relative h-full min-h-[260px] border border-border bg-background/80 backdrop-blur-sm overflow-hidden"
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* base grid background */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 163, 184, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* very subtle extra grid for density */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.3) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-10 bg-linear-to-b from-primary/12 via-primary/5 to-transparent pointer-events-none"
        initial={{ y: "-20%" }}
        animate={{ y: ["-20%", "120%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* self-assembling flowchart */}
      <svg
        className="absolute inset-6"
        viewBox="0 0 320 240"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* faint intersection dots to keep the “parametric” feel */}
        {Array.from({ length: cols }).map((_, ci) =>
          Array.from({ length: rows }).map((__, ri) => {
            const cx = (ci / (cols - 1 || 1)) * 320;
            const cy = (ri / (rows - 1 || 1)) * 240;
            return (
              <circle
                key={`bg-${ci}-${ri}`}
                cx={cx}
                cy={cy}
                r={0.4}
                fill="rgba(148,163,184,0.4)"
              />
            );
          })
        )}

        {/* animated edges for active flow */}
        <g key={activeFlow.id}>
          {activeFlow.edges.map(([fromId, toId], i) => {
            const from = NODE_MAP[fromId];
            const to = NODE_MAP[toId];
            if (!from || !to) return null;

            const x1 = from.x * 320;
            const y1 = from.y * 240;
            const x2 = to.x * 320;
            const y2 = to.y * 240;

            return (
              <motion.line
                key={`${fromId}-${toId}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(148,163,184,0.9)"
                strokeWidth={1.3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
              />
            );
          })}
        </g>

        {/* nodes */}
        {NODES.map((node) => {
          const cx = node.x * 320;
          const cy = node.y * 240;
          const isActive = activeNodeSet.has(node.id);
          const isAccent = activeFlow.accentNodes?.includes(node.id);

          return (
            <g key={node.id}>
              {isAccent && (
                <motion.rect
                  x={cx - 9}
                  y={cy - 6}
                  width={18}
                  height={12}
                  rx={2}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  fill="var(--primary)"
                />
              )}
              <motion.circle
                cx={cx}
                cy={cy}
                r={isAccent ? 2.6 : isActive ? 2 : 1.4}
                fill={
                  isAccent
                    ? "var(--primary)"
                    : isActive
                    ? "rgba(148,163,184,0.95)"
                    : "rgba(148,163,184,0.7)"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </g>
          );
        })}

        {/* tiny animated packet running along the final edge of the flow */}
        {activeFlow.edges.length > 0 && (() => {
          const [fromId, toId] =
            activeFlow.edges[activeFlow.edges.length - 1];
          const from = NODE_MAP[fromId];
          const to = NODE_MAP[toId];
          if (!from || !to) return null;

          const x1 = from.x * 320;
          const y1 = from.y * 240;
          const x2 = to.x * 320;
          const y2 = to.y * 240;

          return (
            <motion.circle
              cx={x1}
              cy={y1}
              r={1.8}
              fill="var(--primary)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cx: [x1, x2],
                cy: [y1, y2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
          );
        })()}
      </svg>

      {/* subtle label in the corner */}
      <div className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="block">Process Diagram</span>
        <span className="block opacity-60">
          {activeFlow.label.toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
}
