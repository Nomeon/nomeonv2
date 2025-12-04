"use client";

import SectionHeader from "./custom/section-header";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function BackgroundSection() {
  const t = useTranslations("BackgroundSection");
  return (
    <div className="container mx-auto w-full px-6 lg:px-12 relative flex flex-col gap-10">
      <SectionHeader
        index={"01"}
        meta={t("header_meta")}
        title={t("header_title")}
        subtitle={t("header_subtitle")}
        description={t("header_description")}
      />

      <div className="flex flex-col xl:flex-row w-full gap-16">
        {/* Blueprint content box (left) */}
        <motion.div
          className="relative border border-border px-10 py-14 xl:w-1/2 bg-background/85 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.98, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Corner markers */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

          {/* Top: My Background */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t("profile_label")}
            </span>
            <h2 className="font-baumans text-3xl md:text-4xl tracking-wide mb-4">
              {t("profile_heading")}
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                {t("profile_paragraph1")}
              </p>
              <p>
                {t("profile_paragraph2")}
              </p>
            </div>
          </motion.div>

          {/* Divider line */}
          <motion.div
            className="h-px w-full bg-border mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />

          {/* Bottom: Two Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t("focus_label")}
            </span>
            <h3 className="font-baumans text-2xl tracking-wide mb-4">
              {t("focus_heading")}
            </h3>

            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                {t("focus_paragraph1")}
              </p>
              <p>
                {t("focus_paragraph2")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pixelated canvas placeholder (right) */}
        {/* Operator Spec Sheet (right) */}
        <div className="relative xl:w-1/2 border border-border bg-background/85 backdrop-blur-sm px-8 py-10 flex flex-col gap-8">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

          {/* Title */}
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("operator_label")}
              </p>
              <h3 className="font-baumans text-2xl tracking-wide">
                {t("operator_name")}
              </h3>
            </div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground text-right">
              {t("operator_role")}
            </p>
          </div>

          {/* Spec grid */}
          <div className="grid gap-4 text-[11px]">
            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_focus_label")}
              </span>
              <span className="text-right">
                {t("operator_focus_value")}
              </span>
            </div>

            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_currently_label")}
              </span>
              <span className="text-right">
                {t("operator_currently_value")}
              </span>
            </div>

            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_tooling_label")}
              </span>
              <span className="text-right">
                {t("operator_tooling_value")}
              </span>
            </div>

            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_based_label")}
              </span>
              <span className="text-right">{t("operator_based_value")}</span>
            </div>
          </div>

          {/* Little personality row */}
          <div className="pt-2">
            <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground mb-2">
              {t("operator_into_label")}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                t("operator_tag1"),
                t("operator_tag2"),
                t("operator_tag3"),
                t("operator_tag4"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2 py-1 text-[10px] uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
