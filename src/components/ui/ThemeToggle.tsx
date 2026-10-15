"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function initialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem("pw-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

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
