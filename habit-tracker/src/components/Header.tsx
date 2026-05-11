import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ isDark, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Habit Tracker
        </h1>
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-slate-600" />
          )}
        </button>
      </div>
    </header>
  );
}
