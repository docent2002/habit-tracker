import { useState } from 'react';
import { Plus } from 'lucide-react';
import { DEFAULT_EMOJI } from '../constants';

interface AddHabitFormProps {
  onAdd: (name: string, emoji: string) => void;
}

export default function AddHabitForm({ onAdd }: AddHabitFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim(), emoji);
      setName('');
      setEmoji(DEFAULT_EMOJI);
      setIsExpanded(false);
    }
  };

  if (!isExpanded) {
    return (
      <div className="mt-8">
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
        >
          <Plus className="w-5 h-5" />
          Add Habit
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Habit name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
            autoFocus
          />
          <input
            type="text"
            placeholder="Emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            maxLength={2}
            className="w-16 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 font-medium"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              setIsExpanded(false);
              setName('');
              setEmoji(DEFAULT_EMOJI);
            }}
            className="flex-1 py-2 px-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
