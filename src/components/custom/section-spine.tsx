"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "motion/react";
import { LocaleButtonDesktop } from "../locale/locale-desktop";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "Background" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { label: "Email", href: "mailto:stijn@nomeon.nl", Icon: Mail },
  { label: "Phone", href: "tel:+31640267494", Icon: Phone },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stijn-nijhuis",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Nomeon", Icon: Github },
];

export function SectionSpine() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40">
      {/* vertical spine */}
      <motion.div
        className="absolute left-2 top-0 bottom-0 w-px bg-border"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {SECTIONS.map((section, index) => {
        const isActive = activeId === section.id;

        return (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 + (index * 0.1) }}
            className={`
              relative pl-6 text-left flex flex-col items-start gap-0.5
              text-[10px] uppercase tracking-[0.25em]
              transition-colors cursor-pointer
              ${isActive ? "text-primary" : "text-muted-foreground"}
            `}
          >
            {/* tick mark */}
            <span
              className={`
                absolute left-0 top-1.5 h-px
                transition-all
                ${isActive ? "w-4 bg-foreground" : "w-2 bg-muted-foreground"}
              `}
            />

            <span>{String(index).padStart(2, "0")}</span>
            <span className="text-[9px] tracking-[0.3em]">{section.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

export function SocialSpine() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-6 z-40">
      <motion.div
        className="absolute right-2 top-0 bottom-0 w-px bg-border"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        style={{ transformOrigin: "top" }}
      />

      {SOCIALS.map(({ label, href, Icon }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 + (index * 0.1) }}
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
          <Icon
            className="h-4 w-4 group-hover:text-primary"
            strokeWidth={1.6}
          />
        </motion.a>
      ))}
    </div>
  );
}

export function TopSpine() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <div className="fixed mx-48 top-0 py-4 left-0 right-0 z-40 hidden lg:block bg-background">
      <div className="container relative mx-auto">
        {/* main spine line within container */}
        <motion.div
          className="absolute inset-x-0 top-1/2 h-px bg-border pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* left tick */}
        <motion.span
          className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-foreground ml-2"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        />

        {/* content on top of the line */}
        <div className="relative h-8">
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-8 bg-background ml-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
          >
            <Link
              href="/"
              aria-label="Nomeon home"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/images/favicon.svg"
                alt="Nomeon logo"
                width={32}
                height={32}
                className="h-4.5 w-auto brightness-0 dark:invert"
                priority
              />
            </Link>
          </motion.div>

          {/* right-side mode toggle */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
          >
            <button
              type="button"
              aria-label="Toggle color mode"
              onClick={toggleTheme}
              className="flex items-center
                text-muted-foreground hover:text-foreground
                transition-colors group
                cursor-pointer
              "
            >
              <div className="bg-background w-8 flex items-center justify-center">
                <div className="relative h-5 w-5">
                  <Sun className="absolute inset-0 h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute inset-0 h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </div>
              </div>
            </button>
            <div className="bg-background w-8 flex items-center justify-center ml-2 mr-1">
              <LocaleButtonDesktop />
            </div>
            {/* closing line segment */}
            <span className="h-4 w-px bg-muted-foreground group-hover:bg-foreground mr-2 ml-2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
