import React, { createContext, useContext, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "tobiafo-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
          return stored;
        }
      } catch (e) {
        // LocalStorage disabled or unavailable
      }
    }
    // Dark mode is default for first-time visitors
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * Compact, keyboard-operable theme toggle button with accessible name,
 * visible focus state, and 44px+ touch target.
 */
export function ThemeToggle({
  variant = "desktop",
  className = "",
}: {
  variant?: "desktop" | "mobile-bar" | "drawer";
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const accessibleName = isDark
    ? "Switch to light theme (currently dark)"
    : "Switch to dark theme (currently light)";

  if (variant === "mobile-bar") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={accessibleName}
        title={accessibleName}
        className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center border border-[var(--color-border-control)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${className}`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
        )}
      </button>
    );
  }

  if (variant === "drawer") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={accessibleName}
        className={`w-full min-h-[48px] px-3 flex items-center justify-between border border-[var(--color-border-control)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${className}`}
      >
        <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider font-semibold">
          {isDark ? (
            <Sun className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
          ) : (
            <Moon className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
          )}
          <span>EDITION / THEME: {isDark ? "DARK (ARCHIVE)" : "LIGHT (PRINT)"}</span>
        </span>
        <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest font-bold">
          [ {isDark ? "SWITCH TO LIGHT" : "SWITCH TO DARK"} ]
        </span>
      </button>
    );
  }

  // Desktop header variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={accessibleName}
      title={accessibleName}
      className={`inline-flex items-center gap-2 px-3 py-1.5 min-h-[44px] font-mono text-xs uppercase tracking-wider border border-[var(--color-border-control)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] select-none cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
      )}
      <span className="font-bold tracking-widest text-[11px]">
        {isDark ? "LIGHT EDITION" : "DARK ARCHIVE"}
      </span>
    </button>
  );
}
