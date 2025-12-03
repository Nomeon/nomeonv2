"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex items-center justify-center gap-2
  cursor-pointer select-none
  font-baumans text-[11px] uppercase tracking-[0.26em]
  whitespace-nowrap
  transition-all duration-150
  rounded-none
  px-5 h-8
  disabled:pointer-events-none disabled:opacity-50
  [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground
          border border-foreground
          shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]
          dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.8)]
          hover:-translate-x-[1px] hover:-translate-y-[1px]
          hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.9)]
          dark:hover:shadow-[3px_3px_0_0_rgba(255,255,255,0.9)]
          active:translate-x-0 active:translate-y-0 active:shadow-none
          dark:active:shadow-none
        `,
        outline: `
          bg-background text-foreground
          border border-foreground
          shadow-[2px_2px_0_0_rgba(0,0,0,0.75)]
          dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.75)]
          hover:-translate-x-[1px] hover:-translate-y-[1px]
          hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.9)]
          dark:hover:shadow-[3px_3px_0_0_rgba(255,255,255,0.9)]
          active:translate-x-0 active:translate-y-0 active:shadow-none
          dark:bg-background/40
        `,
        link: `
          border-none shadow-none
          bg-transparent px-0 h-auto
          text-primary tracking-[0.22em]
          underline-offset-4
          hover:underline
        `,
      },
      size: {
        default: "h-9 px-5 pt-1",
        sm: "h-7 px-4 text-[10px]",
        lg: "h-10 px-6 text-[12px]",
        icon: "size-9 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
