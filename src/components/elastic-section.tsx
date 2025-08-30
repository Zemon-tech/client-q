"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  maxOffsetPx?: number;
  stiffness?: number; // spring stiffness
  damping?: number; // spring damping
  className?: string;
};

export function ElasticSection({
  children,
  maxOffsetPx = 10,
  stiffness = 0.12,
  damping = 0.18,
  className,
}: Props) {
  const [y, setY] = useState(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      const delta = current - lastScrollRef.current;
      lastScrollRef.current = current;
      const target = Math.max(-maxOffsetPx, Math.min(maxOffsetPx, -delta));
      velocityRef.current += (target - y) * stiffness;
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    }

    function tick() {
      // Update position with damping
      velocityRef.current *= 1 - damping;
      const next = y + velocityRef.current;
      setY(next);
      if (Math.abs(velocityRef.current) > 0.05 || Math.abs(next) > 0.05) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        setY(0);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [damping, stiffness, y, maxOffsetPx]);

  return (
    <section className={className} style={{ transform: `translateY(${y.toFixed(2)}px)` }}>
      {children}
    </section>
  );
}











