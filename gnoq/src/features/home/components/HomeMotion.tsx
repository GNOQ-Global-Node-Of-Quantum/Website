"use client";

import { Pause, Play } from "lucide-react";
import { useHomeMotion } from "../hooks/useHomeMotion";

/** Progressive enhancement: all content remains visible without JavaScript. */
export function HomeMotion() {
  const { paused, reducedMotion, toggle } = useHomeMotion();

  if (reducedMotion) {
    return (
      <span
        className="motion-preference"
        title="Movimento reduzido conforme a preferência do dispositivo"
      >
        Movimento reduzido
      </span>
    );
  }

  return (
    <button
      className="motion-toggle"
      type="button"
      aria-label={
        paused || reducedMotion ? "Ativar animações" : "Pausar animações"
      }
      aria-pressed={paused || reducedMotion}
      title={
        reducedMotion
          ? "Movimento reduzido conforme a preferência do dispositivo"
          : paused
            ? "Ativar animações"
            : "Pausar animações"
      }
      onClick={toggle}
    >
      {paused || reducedMotion ? <Play size={13} /> : <Pause size={13} />}
    </button>
  );
}
