"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + whether the element has scrolled into view (once, then
 * disconnects). Compose the boolean into your own className, e.g.:
 *   `reveal ${visible ? "reveal-visible" : ""}`           (single block)
 *   `reveal-stagger ${visible ? "reveal-visible" : ""}`   (staggered children)
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}
