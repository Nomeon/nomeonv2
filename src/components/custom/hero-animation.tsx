// src/components/custom/hero-animation.tsx

"use client";

import * as React from "react";
import { motion, animate } from "motion/react";
import { CheckCircle } from "lucide-react";

type OperationStatus = "running" | "done";

type Operation = {
  label: string;
  meta: string;
};

type VisibleOperation = Operation & { status: OperationStatus };

// six-step cycle
const OPERATIONS: Operation[] = [
  { label: "Ingest Payload 47-B", meta: "JSON • 18 fields" },
  { label: "Normalize Entities", meta: "Ruleset v2.3 • Applied" },
  { label: "Resolve Foreign Keys", meta: "DB Scan • 3 lookups" },
  { label: "Enrichment Pass", meta: "API Layer • 2 merges" },
  { label: "Calculate Deltas", meta: "Diff Engine • 41 changes" },
  { label: "Finalize Export Block", meta: "CSV • 1.7 kB" },
];

/* ===========================
   Left side: Client-facing UI
   =========================== */

export function ClientMock() {
  const [records, setRecords] = React.useState(0);
  const [runtime, setRuntime] = React.useState(0);
  const [visibleOps, setVisibleOps] = React.useState<VisibleOperation[]>([]);

  React.useEffect(() => {
    let isCancelled = false;

    async function runCycle() {
      if (isCancelled) return;

      // reset state at the start of each cycle
      setRecords(0);
      setRuntime(0);
      setVisibleOps([]);

      const totalOps = 6;
      const perOpAnim = 1.2; // seconds to animate records
      const perOpPause = 0.8; // pause between ops
      const finalPause = 2;
      const approxCycleDuration =
        totalOps * (perOpAnim + perOpPause) + finalPause; // for runtime

      // runtime counter animation
      const runtimeAnim = animate(0, approxCycleDuration, {
        duration: approxCycleDuration,
        ease: "linear",
        onUpdate: (value) => {
          if (isCancelled) return;
          setRuntime(Math.floor(value));
        },
      });

      let currentRecords = 0;

      for (let i = 0; i < totalOps; i++) {
        if (isCancelled) break;

        const opTemplate = OPERATIONS[i % OPERATIONS.length];

        // add operation as "running"
        setVisibleOps((prev) => [
          ...prev,
          { ...opTemplate, status: "running" as const },
        ]);

        // choose random increment for records
        const increment = 40 + Math.floor(Math.random() * 120);
        const nextRecords = currentRecords + increment;

        const recordsAnim = animate(currentRecords, nextRecords, {
          duration: perOpAnim,
          ease: "easeOut",
          onUpdate: (value) => {
            if (isCancelled) return;
            setRecords(Math.round(value));
          },
        });

        // wait for records animation to finish
        await recordsAnim.finished;
        currentRecords = nextRecords;

        if (isCancelled) break;

        // mark this operation as done (checkmark)
        setVisibleOps((prev) =>
          prev.map((op, idx) =>
            idx === i ? { ...op, status: "done" as const } : op
          )
        );

        // small pause between operations (using animate as a "delay")
        await animate(0, 1, { duration: perOpPause }).finished;
      }

      // let runtime finish if it hasn't
      await runtimeAnim.finished;

      if (isCancelled) return;

      // short pause showing final state
      await animate(0, 1, { duration: finalPause }).finished;

      // reset for the next cycle
      setVisibleOps([]);
      setRecords(0);
      setRuntime(0);
    }

    async function loop() {
      while (!isCancelled) {
        await runCycle();
      }
    }

    loop();

    return () => {
      isCancelled = true;
    };
  }, []);

  const runtimeSeconds = runtime % 60;

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

          <motion.button
            className="border border-border px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground hover:bg-foreground/5 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(148,163,184,0.18)",
                "0 0 0 7px rgba(148,163,184,0)",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <span className="relative">Run Task</span>
          </motion.button>
        </div>

        {/* stats row: Records (left) • Runtime (center) • Issues (right) */}
        <div className="grid grid-cols-3 gap-3 text-[11px]">
          {/* Records */}
          <motion.div
            className="border border-border px-3 py-2"
            animate={{ y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Records
            </p>
            <p className="mt-1 text-sm">
              {records.toLocaleString("nl-NL")}
            </p>
          </motion.div>

          {/* Runtime (center) */}
          <motion.div
            className="border border-border px-3 py-2"
            animate={{ y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Runtime
            </p>
            <p className="mt-1 text-sm">
              00:{runtimeSeconds.toString().padStart(2, "0")}
            </p>
          </motion.div>

          {/* Issues (right, stays 0 but feels alive) */}
          <motion.div
            className="border border-border px-3 py-2"
            animate={{ y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <p className="uppercase tracking-[0.18em] text-muted-foreground">
              Issues
            </p>
            <p
              className="mt-1 text-sm text-emerald-500"
            >
              0
            </p>
          </motion.div>
        </div>

        {/* Recent operations (sequenced) */}
        <div className="mt-1 flex-1 border border-dashed border-border/70 px-3 py-2 text-[11px] space-y-1 overflow-hidden">
          <p className="uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Recent Operations
          </p>

          <div className="space-y-1.5">
            {visibleOps.map((op, idx) => {
              const isRunning = op.status === "running";
              const isDone = op.status === "done";

              return (
                <motion.div
                  key={`${op.label}-${idx}`}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2">
                    {isRunning && (
                      <motion.span
                        className="h-1.5 w-1.5 ml-0.5 mr-1 rounded-full bg-primary"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    {isDone && (
                      <span className="h-3 w-3 flex items-center justify-center">
                        <CheckCircle className=" text-emerald-500" />
                      </span>
                    )}
                    <span>{op.label}</span>
                  </div>
                  <span className="text-muted-foreground">{op.meta}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          className="text-[10px] text-muted-foreground uppercase tracking-[0.26em]"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
        >
          Clear controls. No distractions.
        </motion.p>
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

  const exportNode = NODES.find((n) => n.id === "export")!;
  const exportCx = exportNode.x * 320;
  const exportCy = exportNode.y * 200;

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
            <g key={`edge-${fromId}-${toId}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(148,163,184,0.35)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              {/* animated "signal" overlay */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--primary)"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="10 14"
                initial={{ strokeDashoffset: 24, opacity: 0.3 }}
                animate={{ strokeDashoffset: -24, opacity: 0.9 }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
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
                    delay: node.id === "logic" ? 0.2 : 0,
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

        {/* export "ping" */}
        <motion.circle
          cx={exportCx}
          cy={exportCy}
          r={4}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={1}
          initial={{ opacity: 0.3, r: 4 }}
          animate={{ opacity: [0.4, 0, 0.4], r: [4, 14, 4] }}
          transition={{
            duration: 2.4,
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
