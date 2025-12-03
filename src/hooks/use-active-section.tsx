"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], options?: {
  rootMargin?: string;
  threshold?: number;
}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (!id) return;
          setActiveId(id);
        });
      },
      {
        // A horizontal band around the middle of the viewport
        // section becomes "active" when its top crosses this band
        root: null,
        rootMargin: options?.rootMargin ?? "-45% 0px -55% 0px",
        threshold: options?.threshold ?? 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeId;
}
