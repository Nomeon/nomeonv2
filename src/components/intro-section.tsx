"use client";

import { HeroAnimation } from "./custom/hero-animation";
import { Button } from "./ui/button";
import { TextRoll } from "./ui/text-roll";
import { useState } from "react";
import { motion } from "motion/react";

export default function IntroSection() {
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="grid gap-16 xl:grid-cols-2 items-center">
      {/* Intro copy */}
      <div className="space-y-6 py-10">
        <motion.p
          className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hi, my name is
        </motion.p>
        <h1 className="font-baumans text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
          <motion.span
            className="block mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Stijn Nijhuis.
          </motion.span>
          <motion.span
            className="block mt-2 text-3xl font-noto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            I build pragmatic tools for messy processes.
          </motion.span>
        </h1>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          I blend Business &amp; IT: mapping out how a company actually works,
          then implementing and/or building the software that makes it less
          chaotic. From ERP systems, data pipelines and simulations to custom
          internal tools; I care more about what it fixes than how shiny it
          looks.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-8 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onMouseEnter={() => setIsHoveredContact(true)}
            onMouseLeave={() => setIsHoveredContact(false)}
            onClick={() => scrollToSection("contact")}
          >
              <TextRoll
                duration={0.2}
                getEnterDelay={() => 0.1}
                getExitDelay={() => 0.2}
                transition={{ ease: "easeInOut" }}
                hovered={isHoveredContact}
              >
                Contact me
              </TextRoll>
          </Button>
          <Button
            variant="outline"
            onMouseEnter={() => setIsHoveredBook(true)}
            onMouseLeave={() => setIsHoveredBook(false)}
            onClick={() => scrollToSection("contact-call")}
          >
              <TextRoll
                duration={0.2}
                getEnterDelay={() => 0.1}
                getExitDelay={() => 0.2}
                transition={{ ease: "easeInOut" }}
                hovered={isHoveredBook}
              >
                Book a call
              </TextRoll>
          </Button>
          <motion.span
            className="text-[11px] uppercase text-center col-span-2 tracking-[0.26em] text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            Working across NL / DE
          </motion.span>
        </motion.div>
      </div>

      {/* Hero animation on the right */}
      <motion.div
        className="relative hidden border border-border lg:block w-full bg-background/85 backdrop-blur-sm h-full"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />
        <HeroAnimation />
      </motion.div>
    </div>
  );
}
