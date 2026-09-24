"use client";
import { useEffect, useState } from "react";
import type { HomeMotionState } from "../types/home.types";
export function useHomeMotion(): HomeMotionState {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const disabled =
      paused ||
      reducedMotion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.dataset.motion = disabled ? "paused" : "running";
    if (disabled || !("IntersectionObserver" in window)) {
      return () => {
        delete root.dataset.motion;
      };
    }

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          if (!(target instanceof HTMLElement) || target.dataset.revealed)
            return;
          target.dataset.revealed = "true";
          const animation = target.animate(
            [
              { opacity: 0, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 650,
              delay: Number(target.dataset.delay || 0),
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "backwards",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));

    const visual = document.querySelector(".hero-visual");
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      root.dataset.orbitVisible = entry.isIntersecting ? "true" : "false";
    });
    if (visual) visibilityObserver.observe(visual);

    return () => {
      observer.disconnect();
      visibilityObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      delete root.dataset.motion;
      delete root.dataset.orbitVisible;
    };
  }, [paused, reducedMotion]);

  return { paused, reducedMotion, toggle: () => setPaused((value) => !value) };
}
