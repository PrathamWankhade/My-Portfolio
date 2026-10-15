"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark";
}

/**
 * Single source of truth: the inline pre-hydration script in layout.tsx sets
 * `document.documentElement.dataset.theme` before React mounts, so the initial
 * state reads that attribute instead of re-deriving from storage. The fallbacks
 * below only run if the script did not (e.g. script disabled).
 */
function initialTheme(): Theme {
  if (typeof window === "undefined" || typeof document === "undefined") return "dark";
  const fromDom = document.documentElement.dataset.theme;
  if (isTheme(fromDom)) return fromDom;
  try {
    const stored: string | null = window.localStorage.getItem("pw-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("pw-theme", theme);
    } catch {
      /* storage unavailable — theme still applies for session */
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
      style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
    >
      {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
