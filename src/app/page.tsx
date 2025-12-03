import SectionHeader from "@/components/custom/section-header";
import ProjectAccordion from "@/components/project-accordion";
import { HeroAnimation } from "@/components/custom/hero-animation";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      {/* ============================= */}
      {/* 01 • BACKGROUND / INTRO      */}
      {/* ============================= */}
      <section id="about" className="relative w-full overflow-hidden py-20">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto w-full px-12 relative flex flex-col gap-10">
          {/* Section header, same system as Projects */}
          <SectionHeader
            index="01"
            meta="Background"
            title="Introduction"
            subtitle="From Business & IT to practical, technical solutions"
            description="I design and build tools that remove friction from real-world processes: translating business needs into clean, reliable software that people actually use."
          />

          <div className="flex w-full gap-16">
            {/* Blueprint content box */}
            <div className="relative border border-border px-10 py-14 max-w-1/2 bg-background/85 backdrop-blur-sm">
              {/* Corner markers */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

              {/* Top: My Background */}
              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Profile
                </span>
                <h1 className="font-baumans text-3xl md:text-4xl tracking-wide mb-4">
                  My Background
                </h1>

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
                <h2 className="font-baumans text-2xl tracking-wide mb-4">
                  Two Languages
                </h2>

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
            <div className="relative hidden border border-border lg:block w-full bg-background/85 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* 02 • PROJECTS                */}
      {/* ============================= */}
      <section
        id="projects"
        className="container mx-auto w-full py-20 flex flex-col gap-10 pl-12"
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
