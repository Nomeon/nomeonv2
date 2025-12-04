"use client";

import { motion } from "motion/react";

const SERVICES = [
  {
    title: "Process & workflow mapping",
    meta: "Analysis",
    description:
      "Turn messy, informal workflows into clear process maps that reveal bottlenecks, handovers, and automation opportunities.",
    tags: ["BPMN", "Process design", "Discovery"],
  },
  {
    title: "Custom internal tools",
    meta: "Development",
    description:
      "Design and build lightweight tools that fit your team: from small utilities to full internal apps that replace spreadsheets.",
    tags: ["Web apps", "Dashboards", "Automation"],
  },
  {
    title: "System integration",
    meta: "Integration",
    description:
      "Connect the tools you already use so data flows automatically instead of being copied around by hand.",
    tags: ["APIs", "Sync", "Data pipelines"],
  },
  {
    title: "Data modeling & reporting",
    meta: "Data",
    description:
      "Structure your data so it can actually be used: consistent models, clean exports, and reports that answer real questions.",
    tags: ["Modeling", "ETL", "Reporting"],
  },
  {
    title: "Prototyping & technical discovery",
    meta: "Exploration",
    description:
      "Validate ideas quickly with focused prototypes, so you know what’s worth investing in before committing to a big build.",
    tags: ["Prototypes", "MVPs", "Tech choices"],
  },
  {
    title: "Simulation & optimization",
    meta: "Optimization",
    description:
      "Use simulations to explore different scenarios, spot constraints, and make better decisions about planning and capacity.",
    tags: ["Simulation", "Planning", "What-if"],
  },
];

export default function ServicesSection() {

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {SERVICES.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -2,
            x: -2,
            transition: { duration: 0.15 },
          }}
          className="group relative border border-border bg-background/85 backdrop-blur-sm px-5 py-6 flex flex-col gap-4"
        >
          {/* corner brackets */}
          <div className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-t border-l border-border" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-border" />

          {/* meta row */}
          <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
            <span>{service.meta}</span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-border group-hover:w-8 group-hover:bg-foreground transition-all" />
              <span className="tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
          </div>

          {/* title + description */}
          <div className="space-y-2">
            <h3 className="font-baumans text-lg tracking-wide">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* tags */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="
                  border border-border px-2 py-0.5 text-[10px]
                  uppercase tracking-[0.24em] text-muted-foreground
                  transition-colors
                  group-hover:border-primary group-hover:text-foreground group-hover:bg-primary/5
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
