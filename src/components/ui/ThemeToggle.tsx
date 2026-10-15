"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark";
}

/**
 * Hydration-safe theme state with no effects and no setState.
 *
 * - Server snapshot is always "dark", matching the SSR HTML exactly.
 * - Client snapshot reads the pre-hydration choice from
 *   `document.documentElement.dataset.theme` (set by the beforeInteractive
 *   script in layout.tsx) — saved preferences apply without overwriting.
 * - Toggling writes the DOM attribute + storage; the MutationObserver picks
 *   the change up and re-renders. Storage failures degrade to session scope.
 */
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  window.addEventListener("storage", onChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Theme {
  const current = document.documentElement.dataset.theme;
  return isTheme(current) ? current : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("pw-theme", next);
    } catch {
      /* storage unavailable — theme still applies for session */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
      style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
    >
      {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
