"use client";

import { allTheme } from "@/shared/lib/theme";
import { useThemeStore } from "../model/useThemeStore";

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex flex-col lg:flex-row gap-2 fixed z-30 left-0 top-0 bg-background p-1 text-white text-sm [&>button]:p-2 [&>button]:cursor-pointer [&>button]:data-[current=true]:bg-blue-600 pointer-events-auto">
      {allTheme.map((val, idx) => (
        <button
            key={`theme-btn-${val}-${idx}`}
            data-current={theme === val}
            onClick={() => setTheme(val)}
            >
            {val}
        </button>
      ))}
    </div>
  );
}

