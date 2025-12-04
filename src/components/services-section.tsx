"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");

  const SERVICES = [
    {
      title: t("service1_title"),
      meta: t("service1_meta"),
      description: t("service1_description"),
      tags: [t("service1_tag1"), t("service1_tag2"), t("service1_tag3")],
    },
    {
      title: t("service2_title"),
      meta: t("service2_meta"),
      description: t("service2_description"),
      tags: [t("service2_tag1"), t("service2_tag2"), t("service2_tag3")],
    },
    {
      title: t("service3_title"),
      meta: t("service3_meta"),
      description: t("service3_description"),
      tags: [t("service3_tag1"), t("service3_tag2"), t("service3_tag3")],
    },
    {
      title: t("service4_title"),
      meta: t("service4_meta"),
      description: t("service4_description"),
      tags: [t("service4_tag1"), t("service4_tag2"), t("service4_tag3")],
    },
    {
      title: t("service5_title"),
      meta: t("service5_meta"),
      description: t("service5_description"),
      tags: [t("service5_tag1"), t("service5_tag2"), t("service5_tag3")],
    },
    {
      title: t("service6_title"),
      meta: t("service6_meta"),
      description: t("service6_description"),
      tags: [t("service6_tag1"), t("service6_tag2"), t("service6_tag3")],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {SERVICES.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative border border-border px-5 py-6 flex flex-col gap-4"
        >
          {/* corner brackets */}
          <div className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-t border-l border-border group-hover:border-primary transition-colors duration-300" />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-border group-hover:border-primary transition-colors duration-300" />

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
                  transition-colors duration-300
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
