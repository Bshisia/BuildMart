'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('ThemeToggle clicked, current theme:', theme);
    console.log('HTML classList before:', document.documentElement.classList.toString());
    toggleTheme();
    setTimeout(() => {
      console.log('HTML classList after:', document.documentElement.classList.toString());
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
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
