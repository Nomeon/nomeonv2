"use client";

import SectionHeader from "./custom/section-header";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
          className="group relative border border-border px-10 py-14 xl:w-1/2 bg-background/85 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.98, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Corner markers */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border group-hover:border-primary transition-colors duration-300" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border group-hover:border-primary transition-colors duration-300" />

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
              <p>{t("profile_paragraph1")}</p>
              <p>{t("profile_paragraph2")}</p>
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
              <p>{t("focus_paragraph1")}</p>
              <p>{t("focus_paragraph2")}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pixelated canvas placeholder (right) */}
        {/* Operator Spec Sheet (right) */}
        <motion.div
          className="group relative xl:w-1/2 border border-border bg-background/85 backdrop-blur-sm px-8 py-10 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border group-hover:border-primary transition-colors duration-300" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border group-hover:border-primary transition-colors duration-300" />

          {/* Title */}
          <motion.div
            className="flex items-baseline justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="overflow-hidden h-12 w-12 rounded-full border border-border/70 bg-muted/40 flex items-center justify-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Image
                  src="/images/avatar.webp"
                  alt="Stijn Nijhuis avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col mt-0.5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("operator_label")}
                </p>
                <h3 className="font-baumans text-xl tracking-wide">
                  {t("operator_name")}
                </h3>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground text-right place-self-start mt-1">
              {t("operator_role")}
            </p>
          </motion.div>

          {/* Spec grid */}
          <motion.div
            className="grid gap-4 text-[11px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_focus_label")}
              </span>
              <span className="text-right">{t("operator_focus_value")}</span>
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
              <span className="text-right">{t("operator_tooling_value")}</span>
            </div>

            <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
              <span className="uppercase tracking-[0.22em] text-muted-foreground">
                {t("operator_based_label")}
              </span>
              <span className="text-right">{t("operator_based_value")}</span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground mb-2">
              {t("operator_education_label")}
            </p>
            <div className="space-y-1.5 text-[11px] leading-relaxed text-muted-foreground">
              {[
                { text: t("operator_edu_bachelor"), location: "University of Twente" },
                { text: t("operator_edu_master_bi"), location: "University of Twente" },
                { text: t("operator_edu_master_is"), location: "University of Münster" },
                { text: t("operator_edu_minor"), location: "University of Twente" },
                { text: t("operator_edu_exchange"), location: "HSE Moscow" },
              ].map((line) => (
                <div key={line.text} className="flex items-center justify-between gap-2">
                  {/* tiny timeline tick */}
                  <div className="flex items-center gap-2">
                    <span className="h-px w-4 bg-border/80 group-hover:bg-primary transition-colors duration-300" />
                    <span>{line.text}</span>
                  </div>
                  <span>{line.location}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Little personality row */}
          <motion.div
            className="pt-4 border-t border-dashed border-border/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground mb-2">
              {t("operator_into_label")}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                t("operator_tag1"),
                t("operator_tag2"),
                t("operator_tag3"),
                t("operator_tag4"),
                t("operator_tag5"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2 py-1 text-[10px] uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
