"use client";

import SectionHeader from "@/components/custom/section-header";
import ProjectAccordion from "@/components/project-accordion";
import { HeroAnimation } from "@/components/custom/hero-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      {/* ============================= */}
      {/* INTRO HERO (no spine section) */}
      {/* ============================= */}
      <section className="container mx-auto w-full py-24 lg:py-48 px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
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
              I blend Business &amp; IT: mapping out how a company actually
              works, then implementing and/or building the software that makes
              it less chaotic. From ERP systems, data pipelines and simulations
              to custom internal tools; I care more about what it fixes than how
              shiny it looks.
            </p>

            <div className="flex items-center gap-8 pt-2">
              <Button asChild>
                <Link href="#contact">Contact me</Link>
              </Button>
              <span className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                Based in Germany • working across NL / DE
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
      </section>

      {/* ============================= */}
      {/* 01 • BACKGROUND / ABOUT       */}
      {/* ============================= */}
      <section id="about" className="relative w-full overflow-hidden py-12 lg:py-24">
        {/* grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto w-full px-6 lg:px-12 relative flex flex-col gap-10">
          <SectionHeader
            index="01"
            meta="Background"
            title="Profile"
            subtitle="From Business & IT to practical, technical solutions"
            description="I design and build tools that remove friction from real-world processes: translating business needs into clean, reliable software that people actually use."
          />

          <div className="flex flex-col lg:flex-row w-full gap-16">
            {/* Blueprint content box (left) */}
            <div className="relative border border-border px-10 py-14 lg:w-1/2 bg-background/85 backdrop-blur-sm">
              {/* Corner markers */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

              {/* Top: My Background */}
              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Profile
                </span>
                <h2 className="font-baumans text-3xl md:text-4xl tracking-wide mb-4">
                  My Background
                </h2>

                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    After graduating in Business &amp; IT at the University of
                    Twente, I found my groove: building smart, pragmatic tools
                    that actually improve how companies work. Less chaos. Fewer
                    manual steps. More breathing room for the people who keep
                    the business running.
                  </p>
                  <p>
                    I have a habit of picking apart messy processes, figuring
                    out where the friction lives, and replacing it with
                    something clean, automated, and reliable.
                  </p>
                </div>
              </div>

              {/* Divider line */}
              <div className="h-px w-full bg-border mb-10" />

              {/* Bottom: Two Languages */}
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Focus
                </span>
                <h3 className="font-baumans text-2xl tracking-wide mb-4">
                  Two Languages
                </h3>

                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    In the landscape of Business &amp; IT, two worlds often
                    clash: the strategic voice of business and the technical
                    dialect of engineering. I sit squarely in the middle.
                  </p>
                  <p>
                    I translate business constraints into clear technical
                    requirements, and technical limitations back into realistic
                    business decisions. When off-the-shelf tools fall short, I
                    design and build the missing pieces myself: data pipelines,
                    simulations, workflow systems, and integration tooling.
                  </p>
                </div>
              </div>
            </div>

            {/* Pixelated canvas placeholder (right) */}
            {/* Operator Spec Sheet (right) */}
<div className="relative lg:w-1/2 border border-border bg-background/85 backdrop-blur-sm px-8 py-10 flex flex-col gap-8">
  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

  {/* Title */}
  <div className="flex items-baseline justify-between gap-4">
    <div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        Operator Profile
      </p>
      <h3 className="font-baumans text-2xl tracking-wide">
        Stijn Nijhuis
      </h3>
    </div>
    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground text-right">
      Business &amp; IT • Builder
    </p>
  </div>

  {/* Spec grid */}
  <div className="grid gap-4 text-[11px]">
    <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
      <span className="uppercase tracking-[0.22em] text-muted-foreground">
        Focus
      </span>
      <span className="text-right">
        Process automation, manufacturing data,
        <br className="hidden md:block" />
        and hiring / matching tooling.
      </span>
    </div>

    <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
      <span className="uppercase tracking-[0.22em] text-muted-foreground">
        Currently building
      </span>
      <span className="text-right">
        KiwiConnect (matching platform),
        <br className="hidden md:block" />
        IFC / production tooling, internal dashboards.
      </span>
    </div>

    <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
      <span className="uppercase tracking-[0.22em] text-muted-foreground">
        Tooling
      </span>
      <span className="text-right">
        Next.js · TypeScript · Python · PostgreSQL
        <br className="hidden md:block" />
        Arch Linux · Tauri · Exact Online / API work.
      </span>
    </div>

    <div className="flex justify-between gap-4 border-b border-dashed border-border/60 pb-2">
      <span className="uppercase tracking-[0.22em] text-muted-foreground">
        Based in
      </span>
      <span className="text-right">
        Gronau (DE) • Twente (NL)
      </span>
    </div>
  </div>

  {/* Little personality row */}
  <div className="pt-2">
    <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground mb-2">
      Currently into
    </p>
    <div className="flex flex-wrap gap-2">
      {[
        "LLM-powered tooling",
        "Scheduling problems",
        "Manufacturing data",
        "Fair matching",
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
      </section>

      {/* ============================= */}
      {/* 02 • PROJECTS                 */}
      {/* ============================= */}
      <section
        id="projects"
        className="container mx-auto w-full py-12 lg:py-20 flex flex-col gap-10 px-6 lg:px-12"
      >
        <SectionHeader
          index="02"
          meta="Work"
          title="Projects"
          subtitle="Selected client work & own products"
          description="A non-exhaustive showcase of the projects I have worked on: from production simulations and IFC tooling to full SaaS platforms and high-performance websites."
        />
        <ProjectAccordion />
      </section>
    </div>
  );
}
