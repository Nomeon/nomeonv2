"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Mail, Phone, Linkedin, Github } from "lucide-react";

const sections = [
  { index: "01", label: "Background", href: "#about" },
  { index: "02", label: "Projects", href: "#projects" },
  { index: "03", label: "Services", href: "#services" },
  { index: "04", label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Email",
    href: "mailto:info@nomeon.nl",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+31000000000",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

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
        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-9 w-9 items-center justify-center border border-border bg-background/90 backdrop-blur-sm"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-4 w-4" />
        </button>
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
              <button
                type="button"
                aria-label="Close navigation"
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-border bg-background/90"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>

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
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
