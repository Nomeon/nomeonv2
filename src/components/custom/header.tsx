"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Background", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#blog" },
];

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <header
      className={`
        sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm
        transition-all ${isScrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" : ""}
      `}
    >
      <div className="container mx-auto h-20 flex items-center justify-between pl-12 relative">
        {/* meta rail left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          <span>00</span>
          <span className="w-6 h-px bg-foreground" />
          <span>Menu</span>
        </div>

        {/* Logo */}
        <Link href="/" className="dark:invert brightness-0">
          <Image
            src="/images/weblogo.svg"
            alt="Nomeon Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-[0.2em] text-foreground hover:opacity-70 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            asChild
            className="uppercase tracking-[0.15em] px-4 py-2 rounded-none"
          >
            <Link href="#contact">Contact</Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-none"
          >
            <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}
