"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const finish = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => setActive(false), 260);
    };

    finish();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const start = () => {
      setActive(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => setActive(false), 900);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank") {
        return;
      }

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      start();
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("hashchange", start);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", start);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 overflow-hidden transition-opacity duration-200 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="route-transition-bar h-full bg-[#0F4C81]" />
    </div>
  );
}
