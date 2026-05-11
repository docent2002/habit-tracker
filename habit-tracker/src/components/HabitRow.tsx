import type { Habit } from '../types';
import { Trash2, Pencil } from 'lucide-react';

interface HabitRowProps {
  habit: Habit;
  isCompletedToday: boolean;
  onToggleToday: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function HabitRow({
  habit,
  isCompletedToday,
  onToggleToday,
  onEdit,
  onDelete,
}: HabitRowProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors duration-200">
      <input
        type="checkbox"
        checked={isCompletedToday}
        onChange={onToggleToday}
        className="w-6 h-6 rounded border-slate-300 dark:border-slate-600 text-blue-500 cursor-pointer accent-blue-500 dark:accent-blue-400 transition-colors duration-200"
      />
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl">{habit.emoji}</span>
        <span className="text-lg font-medium text-slate-900 dark:text-white">
          {habit.name}
        </span>
      </div>
      <button
        onClick={onEdit}
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        aria-label={`Edit ${habit.name}`}
      >
        <Pencil className="w-5 h-5" />
      </button>
      <button
        onClick={onDelete}
        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
        aria-label={`Delete ${habit.name}`}
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
