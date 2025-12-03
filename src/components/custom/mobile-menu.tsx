"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Mail, Phone, Linkedin, Github, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";


const sections = [
  { index: "00", label: "Intro", href: "#intro" },
  { index: "01", label: "Background", href: "#about" },
  { index: "02", label: "Projects", href: "#projects" },
  { index: "03", label: "Services", href: "#services" },
  { index: "04", label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Email",
    href: "mailto:stijn@nomeon.nl",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+31640267494",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stijn-nijhuis",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Nomeon",
    icon: Github,
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Trigger button */}
      {!open && (
        <div className="fixed top-0 left-0 w-full bg-background flex justify-between items-center p-4 z-50 lg:hidden">
          <Image
            src="/images/weblogo.svg"
            alt="Nomeon logo"
            width={110}
            height={32}
            className="z-40 flex h-6 w-auto brightness-0 dark:invert lg:hidden"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <>
            {/* Scrim */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 w-[80vw] max-w-sm bg-background/95 border-l border-border backdrop-blur-sm lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Close button */}
              <Button 
                className="absolute top-4 right-4"
              variant="outline" size="icon" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>

              {/* Content */}
              <div className="flex h-full flex-col gap-8 px-6 py-6 pt-6">
                {/* Logo row */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={handleNavigate}
                  >
                    <div className="h-7 w-auto brightness-0 dark:invert">
                      <Image
                        src="/images/weblogo.svg"
                        alt="Nomeon logo"
                        width={110}
                        height={32}
                        className="h-7 w-auto"
                      />
                    </div>
                  </Link>
                </div>

                {/* Sections */}
                <nav className="flex-1 pt-8">
                  <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Sections
                  </p>
                  <ul className="space-y-4">
                    {sections.map((section) => (
                      <li key={section.index}>
                        <Link
                          href={section.href}
                          onClick={handleNavigate}
                          className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-2"
                        >
                          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                            {section.index}
                          </span>
                          <span className="text-sm font-baumans tracking-[0.12em]">
                            {section.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Socials */}
                <div className=" pt-4">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Social
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socials.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-2 border border-border px-2 py-1 text-[10px] uppercase tracking-[0.22em]"
                        >
                          <Icon className="h-3 w-3" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* Theme toggle */}
                <div className="pt-6">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Display
                  </p>

                  <Button
                    onClick={() =>
                      setTheme(resolvedTheme === "light" ? "dark" : "light")
                    }
                    className="w-full flex justify-between"
                  >
                    <span>Theme</span>
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 dark:hidden" />
                      <Moon className="h-4 w-4 hidden dark:block" />
                      <span className="tabular-nums">
                        {resolvedTheme === "light" ? "Light" : "Dark"}
                      </span>
                    </div>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
