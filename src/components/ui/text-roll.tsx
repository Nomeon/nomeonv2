'use client';

import {
  motion,
  VariantLabels,
  Target,
  TargetAndTransition,
  Transition,
} from 'motion/react';
import { useState } from 'react';

export type TextRollProps = {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  variants?: {
    enter: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
    exit: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
  };
  onAnimationComplete?: () => void;
  hovered?: boolean;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  transition = { ease: 'easeIn' },
  variants,
  onAnimationComplete,
  hovered: externalHovered,
}: TextRollProps) {
  const [internalHovered, setInternalHovered] = useState(false);
  const hovered = externalHovered !== undefined ? externalHovered : internalHovered;

  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  } as const;

  const letters = children.split('');

  // When not hovered: just render plain text with the same className
  if (!hovered) {
    return (
      <span
        className={className}
        onMouseEnter={() => externalHovered === undefined && setInternalHovered(true)}
        onMouseLeave={() => externalHovered === undefined && setInternalHovered(false)}
      >
        {children}
      </span>
    );
  }

  // When hovered: render the rolling animation
  return (
    <span
      className={className}
      onMouseEnter={() => externalHovered === undefined && setInternalHovered(true)}
      onMouseLeave={() => externalHovered === undefined && setInternalHovered(false)}
    >
      {letters.map((letter, i) => {
        const safeLetter = letter === ' ' ? '\u00A0' : letter;

        return (
          <span
            key={i}
            className="relative inline-block perspective-[10000px] transform-3d w-auto"
            aria-hidden="true"
          >
            <motion.span
              className="absolute inline-block backface-hidden origin-[50%_25%]"
              initial={variants?.enter?.initial ?? defaultVariants.enter.initial}
              animate={variants?.enter?.animate ?? defaultVariants.enter.animate}
              transition={{
                ...transition,
                duration,
                delay: getEnterDelay(i),
              }}
            >
              {safeLetter}
            </motion.span>
            <motion.span
              className="absolute inline-block backface-hidden origin-[50%_100%]"
              initial={variants?.exit?.initial ?? defaultVariants.exit.initial}
              animate={variants?.exit?.animate ?? defaultVariants.exit.animate}
              transition={{
                ...transition,
                duration,
                delay: getExitDelay(i),
              }}
              onAnimationComplete={
                letters.length === i + 1 ? onAnimationComplete : undefined
              }
            >
              {safeLetter}
            </motion.span>
            <span className="invisible">{safeLetter}</span>
          </span>
        );
      })}
      <span className="sr-only">{children}</span>
    </span>
  );
}
