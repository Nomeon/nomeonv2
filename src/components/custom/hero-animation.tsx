// src/components/custom/hero-animation.tsx

"use client";

import * as React from "react";
import { motion } from "motion/react";

/* ===========================
   Left side: Client-facing UI
   =========================== */

function ClientMock() {
  return (
    <div className="h-full w-full bg-background">
      <div className="h-full w-full px-6 py-5 flex flex-col gap-4">
        
        {/* header */}
        <div className="flex items-center justify-between mt-6">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Interface preview
            </p>
            <h3 className="font-baumans text-xl tracking-[0.08em]">
              Data Transformation Panel
            </h3>
          </div>

          <button className="border border-border px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground hover:bg-foreground/5">
            Run Task
          </button>
        </div>

        {/* stats row */}
        <div className="grid grid-cols-3 gap-3 text-[11px]">
          <div className="border border-border px-3 py-2">
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Records
            </p>
            <p className="mt-1 text-sm">1 028</p>
          </div>

          <div className="border border-border px-3 py-2">
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Issues
            </p>
            <p className="mt-1 text-sm text-emerald-500">0</p>
          </div>

          <div className="border border-border px-3 py-2">
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Runtime
            </p>
            <p className="mt-1 text-sm">00:08</p>
          </div>
        </div>

        {/* simple list */}
        <div className="mt-1 flex-1 border border-dashed border-border/70 px-3 py-2 text-[11px] space-y-1 overflow-hidden">
          <p className="uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Recent Operations
          </p>

          <div className="flex items-center justify-between">
            <span>Record Set A-12</span>
            <span className="text-muted-foreground">JSON • 4 items</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Batch Import 7B</span>
            <span className="text-muted-foreground">CSV • 12 items</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Data Sync 204</span>
            <span className="text-muted-foreground">API • Completed</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Schema Check</span>
            <span className="text-muted-foreground">Report • OK</span>
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.26em]">
          Clear controls. No distractions.
        </p>
      </div>
    </div>
  );
}


/* ===========================
   Right side: Technical flow
   =========================== */

type Node = { id: string; x: number; y: number };

const NODES: Node[] = [
  { id: "in", x: 0.12, y: 0.5 },
  { id: "validate", x: 0.35, y: 0.28 },
  { id: "enrich", x: 0.35, y: 0.72 },
  { id: "logic", x: 0.6, y: 0.5 },
  { id: "export", x: 0.85, y: 0.5 },
];

const EDGE_PATHS: [string, string][] = [
  ["in", "validate"],
  ["validate", "logic"],
  ["in", "enrich"],
  ["enrich", "logic"],
  ["logic", "export"],
];

const NODE_INDEX: Record<string, Node> = Object.fromEntries(
  NODES.map((n) => [n.id, n])
);

function TechnicalFlow() {
  const points = [
    NODES.find((n) => n.id === "in")!,
    NODES.find((n) => n.id === "validate")!,
    NODES.find((n) => n.id === "logic")!,
    NODES.find((n) => n.id === "export")!,
  ];

  const polylinePoints = points
    .map((n) => `${n.x * 320},${n.y * 200}`)
    .join(" ");

  return (
    <div className="relative h-full w-full bg-background">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <svg
        className="relative h-full w-full p-6"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* base edges */}
        {EDGE_PATHS.map(([fromId, toId]) => {
          const from = NODE_INDEX[fromId];
          const to = NODE_INDEX[toId];
          if (!from || !to) return null;

          const x1 = from.x * 320;
          const y1 = from.y * 200;
          const x2 = to.x * 320;
          const y2 = to.y * 200;

          return (
            <line
              key={`base-${fromId}-${toId}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(148,163,184,0.45)"
              strokeWidth={1}
              strokeLinecap="round"
            />
          );
        })}

        {/* animated main path */}
        <motion.polyline
          points={polylinePoints}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={1.6}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.9 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* nodes */}
        {NODES.map((node) => {
          const cx = node.x * 320;
          const cy = node.y * 200;
          const isCore =
            node.id === "in" ||
            node.id === "logic" ||
            node.id === "export";

          return (
            <g key={node.id}>
              {isCore && (
                <motion.rect
                  x={cx - 18}
                  y={cy - 10}
                  width={36}
                  height={20}
                  rx={3}
                  initial={{ opacity: 0.08, scale: 0.96 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  fill="var(--primary)"
                />
              )}
              <circle
                cx={cx}
                cy={cy}
                r={isCore ? 3 : 2}
                fill={
                  isCore
                    ? "var(--primary)"
                    : "rgba(148,163,184,0.9)"
                }
              />
            </g>
          );
        })}

        {/* small token traveling along main path */}
        <motion.circle
          r={2.2}
          fill="var(--primary)"
          initial={{ cx: points[0].x * 320, cy: points[0].y * 200 }}
          animate={{
            cx: points.map((p) => p.x * 320),
            cy: points.map((p) => p.y * 200),
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <div className="absolute right-6 bottom-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right">
        <span className="block">System Diagram</span>
        <span className="block opacity-60">
          Validation • Logic • Export
        </span>
      </div>
    </div>
  );
}

/* ===========================
   Comparison Slider
   =========================== */

function ComparisonSlider() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = React.useState(0.55); // 0..1
  const [dragging, setDragging] = React.useState(false);

  const updateFromEvent = (e: PointerEvent | React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = "clientX" in e ? e.clientX : 0;
    let next = (x - rect.left) / rect.width;
    // allow full range; clamp only to [0,1]
    next = Math.max(0, Math.min(1, next));
    setPosition(next);
  };

  React.useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: PointerEvent) => updateFromEvent(e);
    const handleUp = () => setDragging(false);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging]);

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    setDragging(true);
    updateFromEvent(e);
  };

  const leftWidth = `${position * 100}%`;
  const rightClip = `${position * 100}%`;

  // fade labels so they don't fight when near an edge
  const usabilityOpacity = 1 - position * 0.7; // fades as you drag right
  const systemOpacity = 0.3 + position * 0.7;  // grows as you drag right

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full cursor-ew-resize select-none"
      onPointerDown={handlePointerDown}
    >
      {/* Client side (left) full width, under everything */}
      <div className="absolute inset-0">
        <ClientMock />
      </div>

      {/* Technical side (right) clipped from slider position */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${rightClip})` }}
      >
        <TechnicalFlow />
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0 flex items-center justify-center"
        style={{ left: leftWidth, transform: "translateX(-50%)" }}
      >
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 w-px bg-border" />
        {/* knob */}
        <div className="relative h-7 w-7 rounded-full border border-border bg-background flex items-center justify-center text-[9px] uppercase tracking-[0.18em]">
          <span>⇆</span>
        </div>
      </div>

      {/* labels */}
      <div
        className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.26em] text-muted-foreground"
        style={{ opacity: usabilityOpacity }}
      >
        Usability
      </div>
      <div
        className="pointer-events-none absolute right-4 top-4 text-[10px] uppercase tracking-[0.26em] text-muted-foreground text-right"
        style={{ opacity: systemOpacity }}
      >
        System
      </div>
    </div>
  );
}

/* ===========================
   Main export
   =========================== */

export function HeroAnimation() {
  return (
    <div className="relative w-full h-full min-h-[380px] bg-background/80 overflow-hidden">
      <ComparisonSlider />
    </div>
  );
}
