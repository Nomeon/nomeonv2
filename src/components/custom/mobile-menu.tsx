"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Phone, Linkedin, Github, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "../ui/sheet";

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
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Top bar trigger (only visible when sheet is closed) */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 bg-background flex justify-between items-center p-4 z-50 lg:hidden"
          >
            <motion.div>
              <Image
                src="/images/weblogo.svg"
                alt="Nomeon logo"
                width={110}
                height={32}
                className="z-40 flex h-6 w-auto brightness-0 dark:invert lg:hidden"
              />
            </motion.div>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
          </motion.div>
        )}
      </AnimatePresence>

      <SheetContent
        side="right"
        className="w-[80vw] max-w-sm bg-background/95 border-l border-border backdrop-blur-sm lg:hidden p-0"
      >
        {/* Close button */}
        <div className="relative h-full">
          <SheetClose asChild>
            <Button
              className="absolute top-4 right-4"
              variant="outline"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
          <SheetDescription className="sr-only">
            Mobile navigation menu
          </SheetDescription>

          {/* Content */}
          <div className="flex h-full flex-col gap-8 px-6 py-6 pt-6">
            <AnimatePresence>
              {open && (
                <>
                  {/* Logo row */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <SheetClose asChild>
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
                    </SheetClose>
                  </motion.div>

                  {/* Sections */}
                  <nav className="flex-1 pt-8">
                    <motion.p
                      className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    >
                      Sections
                    </motion.p>
                    <ul className="space-y-4">
                      {sections.map((section, index) => (
                        <motion.li
                          key={section.index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + (index * 0.08) }}
                        >
                          <SheetClose asChild>
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
                          </SheetClose>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Socials */}
                  <div className="pt-4">
                    <motion.p
                      className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                    >
                      Social
                    </motion.p>
                    <div className="grid grid-cols-2 gap-4">
                      {socials.map((item, index) => {
                        const Icon = item.icon;
                        const isExternal = item.href.startsWith("http");
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 + (index * 0.05) }}
                          >
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 border border-border px-2 py-1 text-[10px] uppercase tracking-[0.22em]"
                                onClick={handleNavigate}
                              >
                                <Icon className="h-3 w-3" />
                                <span>{item.label}</span>
                              </Link>
                            </SheetClose>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Theme + Language */}
                  <div className="pt-6">
                    <motion.p
                      className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
                    >
                      Display
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 1.0 }}
                    >
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 1.05 }}
                    >
                      <Button
                        onClick={() =>
                          setTheme(resolvedTheme === "light" ? "dark" : "light")
                        }
                        className="w-full flex justify-between mt-4"
                      >
                        <span>Language</span>
                        <div className="flex items-center gap-2">
                          <Image
                            className="h-4 w-4 mb-1"
                            width={16}
                            height={16}
                            alt={
                              resolvedTheme === "light"
                                ? "Nederlandse vlag"
                                : "English flag"
                            }
                            src={
                              resolvedTheme === "light"
                                ? "/images/nl.svg"
                                : "/images/en.svg"
                            }
                          />
                          <span className="tabular-nums">
                            {resolvedTheme === "light" ? "Nederlands" : "English"}
                          </span>
                        </div>
                      </Button>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
