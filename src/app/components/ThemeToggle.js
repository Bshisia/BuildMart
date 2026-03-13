'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-xl text-gray-700 dark:text-gray-300"></i>
      ) : (
        <i className="fas fa-sun text-xl text-yellow-400"></i>
      )}
    </button>
  );
}
