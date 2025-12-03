"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMotionValueEvent, useScroll } from "motion/react";

const SECTIONS = [
  { id: "about",    label: "Background" },
  { id: "projects", label: "Projects" },
  { id: "blog",     label: "Services" },
  { id: "contact",  label: "Contact" },
];

const SOCIALS = [
  { label: "Email",    href: "mailto:stijn@nomeon.nl",      Icon: Mail },
  { label: "Phone",    href: "tel:+31625187362",           Icon: Phone },
  { label: "LinkedIn", href: "https://www.linkedin.com/",  Icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/",        Icon: Github },
];

type SectionBounds = Record<string, { top: number; bottom: number }>;

// pick the section whose midpoint sits ~35% down the viewport
const VIEWPORT_FOCUS = 0.35;

export function SectionSpine() {
  const [activeId, setActiveId] = useState<string>("about");
  const { scrollY } = useScroll();
  const sectionBoundsRef = useRef<SectionBounds>({});

  const measureSections = useCallback(() => {
    const nextBounds: SectionBounds = {};

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      nextBounds[id] = { top, bottom: top + rect.height };
    });

    sectionBoundsRef.current = nextBounds;
  }, []);

  useEffect(() => {
    measureSections();
    window.addEventListener("resize", measureSections);

    return () => window.removeEventListener("resize", measureSections);
  }, [measureSections]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const focusY = latest + window.innerHeight * VIEWPORT_FOCUS;
    const bounds = sectionBoundsRef.current;

    let nextId: string | null = null;
    for (const section of SECTIONS) {
      const entry = bounds[section.id];
      if (!entry) continue;
      if (focusY >= entry.top && focusY < entry.bottom) {
        nextId = section.id;
        break;
      }
    }

    if (nextId) {
      setActiveId((prev) => (prev === nextId ? prev : nextId));
    }
  });

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    // hide on small screens, center vertically
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40">
      {/* spine line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />

      {SECTIONS.map((section, index) => {
        const isActive = activeId === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(section.id);
            }}
            className={`
              relative pl-6 flex flex-col items-start gap-0.5
              text-[10px] uppercase tracking-[0.25em]
              transition-colors
              ${isActive ? "text-primary" : "text-muted-foreground"}
            `}
          >
            {/* little tick on the spine */}
            <span
              className={`
                absolute left-0 top-1.5 h-px
                transition-all
                ${isActive ? "w-4 bg-foreground" : "w-2 bg-muted-foreground"}
              `}
            />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="text-[9px] tracking-[0.3em]">
              {section.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}



export function SocialSpine() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-6 z-40">
      <div className="absolute right-2 top-0 bottom-0 w-px bg-border" />

      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="
            relative pr-6 flex items-center gap-2
            text-muted-foreground hover:text-foreground
            transition-colors group
          "
          aria-label={label}
        >
          <span
            className="
              absolute right-0 top-1.5 h-px
              transition-all w-2 bg-muted-foreground
              group-hover:w-4 group-hover:bg-foreground
            "
          />
          <Icon className="h-4 w-4 group-hover:text-primary" strokeWidth={1.6} />
        </a>
      ))}
    </div>
  );
}

export function TopSpine() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <div className="fixed top-0 py-4 left-0 right-0 z-40 hidden lg:block bg-background">
      <div className="container mx-auto relative">
        {/* main spine line within container */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-border pointer-events-none" />

        {/* left tick */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-foreground ml-2" />

        {/* content on top of the line */}
        <div className="relative h-8">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-26 bg-background ml-4">
            <Link
              href="/"
              aria-label="Nomeon home"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/images/weblogo.svg"
                alt="Nomeon logo"
                width={110}
                height={32}
                className="h-5 w-auto brightness-0 dark:invert"
                priority
              />
            </Link>
          </div>

          {/* right-side mode toggle */}
          <button
            type="button"
            aria-label="Toggle color mode"
            onClick={toggleTheme}
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              flex items-center
              text-muted-foreground hover:text-foreground
              transition-colors group
              cursor-pointer
            "
          >
            <div className="w-10 bg-background pl-2.5">
              <div className="relative h-5 w-5">
                <Sun className="absolute inset-0 h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute inset-0 h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </div>
            </div>
            {/* closing line segment */}
            <span className="h-4 w-px bg-muted-foreground group-hover:bg-foreground mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}