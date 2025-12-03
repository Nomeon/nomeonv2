"use client";

import { HeroAnimation } from "./custom/hero-animation";
import { Button } from "./ui/button";
import { TextRoll } from "./ui/text-roll";
import { useState } from "react";

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
        <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          Hi, my name is
        </p>
        <h1 className="font-baumans text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
          Stijn Nijhuis.
          <br />
          <span className="block mt-2 text-3xl font-noto">
            I build pragmatic tools for messy processes.
          </span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          I blend Business &amp; IT: mapping out how a company actually works,
          then implementing and/or building the software that makes it less
          chaotic. From ERP systems, data pipelines and simulations to custom
          internal tools; I care more about what it fixes than how shiny it
          looks.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-2">
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
          <span className="text-[11px] uppercase text-center col-span-2 tracking-[0.26em] text-muted-foreground">
            Working across NL / DE
          </span>
        </div>
      </div>

      {/* Hero animation on the right */}
      <div className="relative hidden border border-border lg:block w-full bg-background/85 backdrop-blur-sm h-full">
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />
        <HeroAnimation />
      </div>
    </div>
  );
}
