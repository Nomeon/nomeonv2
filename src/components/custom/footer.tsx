"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto w-full mt-24 pb-12 pt-12 lg:border-t border-border relative">

      {/* ticks */}
      <span className="hidden lg:block absolute left-0 -top-2 h-4 w-px bg-foreground ml-2" />
      <span className="hidden lg:block absolute right-0 -top-2 h-4 w-px bg-foreground mr-2" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-8">
        {/* top row */}
        
        <div className="flex flex-row items-center justify-between gap-6">
          {/* left block */}
          <div className="space-y-1 flex-1">
            <Image
              className="brightness-0 dark:invert"
              src="/images/weblogo.svg"
              alt="Nomeon Logo"
              width={110}
              height={40}
            />
            <p className="text-sm text-muted-foreground tracking-wide pt-2 max-md:hidden">
              Designed & built by hand.
            </p>
          </div>

          {/* links */}
          <div className="flex gap-6 text-sm uppercase tracking-[0.22em] text-muted-foreground text-end">
            <Link
              href="/Nomeon Terms & Conditions.pdf"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-border" />

        {/* bottom copyright */}
        <div className="text-xs self-center text-muted-foreground uppercase tracking-[0.26em] text-center">
          © 2025 Nomeon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
