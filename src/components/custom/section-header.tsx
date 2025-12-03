"use client";

import { motion } from "motion/react";

type SectionHeaderProps = {
  index: string;              // "02"
  meta: string;               // "Work"
  title: string;              // "Projects"
  subtitle?: string;          // "Selected client work & own products"
  description?: string;       // optional paragraph
};

export default function SectionHeader({
  index,
  meta,
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-col gap-2">
          <motion.span 
            className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {index} • {meta}
          </motion.span>

          <div className="flex items-baseline gap-3">
            <motion.h2 
              className="font-baumans text-4xl md:text-5xl tracking-widest leading-none"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  
            >
              {title}
            </motion.h2>
            <span className="hidden md:block h-px flex-1 bg-border" />
          </div>
        </div>

        {/* Right side */}
        {subtitle && (
          <motion.p 
            className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {description && (
        <motion.p 
          className="text-sm text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
