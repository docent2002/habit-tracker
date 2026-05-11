import type { Habit, CompletionStore } from '../types';
import HabitRow from './HabitRow';

interface HabitListProps {
  habits: Habit[];
  completions: CompletionStore;
  isCompletedToday: (habitId: string) => boolean;
  getStreak: (habitId: string) => number;
  getWeekDays: (habitId: string) => boolean[];
  toggleToday: (habitId: string) => void;
  onEdit: (habitId: string) => void;
  onDelete: (habitId: string) => void;
}

export default function HabitList({
  habits,
  isCompletedToday,
  toggleToday,
  onEdit,
  onDelete,
}: HabitListProps) {
  return (
    <div className="space-y-3">
      {habits.map((habit) => (
        <HabitRow
          key={habit.id}
          habit={habit}
          isCompletedToday={isCompletedToday(habit.id)}
          onToggleToday={() => toggleToday(habit.id)}
          onEdit={() => onEdit(habit.id)}
          onDelete={() => onDelete(habit.id)}
        />
      ))}
    </div>
  );
}
