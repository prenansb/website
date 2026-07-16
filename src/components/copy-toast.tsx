"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ICON_SIZE = 36;
const MORPH_DURATION = 0.45;
// Soft ease-out without the long asymptotic crawl of [0.16, 1, 0.3, 1].
const EASE = [0.22, 1, 0.36, 1] as const;

type CopyToastProps = {
  onComplete: () => void;
};

export function CopyToast({ onComplete }: CopyToastProps) {
  const reduce = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const toastRef = useRef<HTMLDivElement>(null);
  const contentWidthRef = useRef(ICON_SIZE);
  const [mounted, setMounted] = useState(false);

  const y = useMotionValue(reduce ? 0 : 36);
  const opacity = useMotionValue(reduce ? 1 : 0);
  const maxWidth = useMotionValue(reduce ? 999 : ICON_SIZE);
  const textProgress = useMotionValue(reduce ? 1 : 0);

  const textOpacity = useTransform(textProgress, [0, 0.35, 1], [0, 0, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || reduce) return;
    const el = toastRef.current;
    if (!el) return;

    // scrollWidth reports full content even while maxWidth clips the pill.
    const borderX =
      Number.parseFloat(getComputedStyle(el).borderLeftWidth) +
      Number.parseFloat(getComputedStyle(el).borderRightWidth);
    contentWidthRef.current = el.scrollWidth + borderX;
  }, [mounted, reduce]);

  useEffect(() => {
    if (!mounted) return;

    if (reduce) {
      const hold = window.setTimeout(() => onCompleteRef.current(), 1500);
      return () => window.clearTimeout(hold);
    }

    let cancelled = false;

    async function run() {
      // 1. Slide in from bottom at icon size
      await Promise.all([
        animate(y, 0, { duration: 0.4, ease: EASE }),
        animate(opacity, 1, { duration: 0.35, ease: EASE }),
      ]);
      if (cancelled) return;

      // Animate past content width so the ease-out tail is clipped by w-max
      // and never visibly stretches the pill after the label fits.
      const openTarget = contentWidthRef.current + 8;

      // 2. Morph open + reveal text
      await Promise.all([
        animate(maxWidth, openTarget, { duration: MORPH_DURATION, ease: EASE }),
        animate(textProgress, 1, { duration: MORPH_DURATION, ease: EASE }),
      ]);
      if (cancelled) return;

      // Snap to exact content width so close starts immediately.
      maxWidth.set(contentWidthRef.current);

      // Hold
      await new Promise((resolve) => window.setTimeout(resolve, 1400));
      if (cancelled) return;

      // 3. Morph closed + hide text
      await Promise.all([
        animate(textProgress, 0, { duration: MORPH_DURATION, ease: EASE }),
        animate(maxWidth, ICON_SIZE, { duration: MORPH_DURATION, ease: EASE }),
      ]);
      if (cancelled) return;

      // 4. Slide down to exit
      await Promise.all([
        animate(y, 28, { duration: 0.32, ease: EASE }),
        animate(opacity, 0, { duration: 0.28, ease: EASE }),
      ]);
      if (cancelled) return;

      onCompleteRef.current();
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [maxWidth, mounted, opacity, reduce, textProgress, y]);

  if (!mounted) return null;

  const toast = reduce ? (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex h-9 -translate-x-1/2 items-center gap-2 overflow-hidden rounded-full border border-line bg-background px-3 text-foreground shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
    >
      <CheckIcon className="size-4 shrink-0" />
      <span className="whitespace-nowrap text-sm font-medium">
        Successfully copied
      </span>
    </div>
  ) : (
    <motion.div
      ref={toastRef}
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex h-9 w-max items-center overflow-hidden rounded-full border border-line bg-background text-foreground shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
      style={{ y, opacity, maxWidth, x: "-50%" }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
        <CheckIcon className="size-4" />
      </span>
      <motion.span
        className="whitespace-nowrap pr-3 text-sm font-medium"
        style={{ opacity: textOpacity }}
      >
        Successfully copied
      </motion.span>
    </motion.div>
  );

  return createPortal(toast, document.body);
}
