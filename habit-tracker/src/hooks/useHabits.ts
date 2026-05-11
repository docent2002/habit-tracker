import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS, DEFAULT_EMOJI } from '../constants';
import type { Habit, CompletionStore } from '../types';
import { getTodayKey, getLast7Days } from '../utils/dates';
import { calculateStreak } from '../utils/streaks';
import { format } from 'date-fns';

export function useHabits() {
  const [habits, setHabits] = useLocalStorage<Habit[]>(STORAGE_KEYS.HABITS, []);
  const [completions, setCompletions] = useLocalStorage<CompletionStore>(
    STORAGE_KEYS.COMPLETIONS,
    {}
  );

  const addHabit = (name: string, emoji: string = DEFAULT_EMOJI) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      emoji,
      createdAt: format(new Date(), 'yyyy-MM-dd'),
    };
    setHabits([...habits, newHabit]);
    setCompletions({
      ...completions,
      [newHabit.id]: {},
    });
  };

  const editHabit = (id: string, name: string, emoji: string) => {
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, name, emoji } : h))
    );
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((h) => h.id !== id));
    const newCompletions = { ...completions };
    delete newCompletions[id];
    setCompletions(newCompletions);
  };

  const toggleToday = (habitId: string) => {
    const today = getTodayKey();
    const habitCompletions = completions[habitId] || {};
    const newCompletions = {
      ...completions,
      [habitId]: {
        ...habitCompletions,
        [today]: !habitCompletions[today],
      },
    };
    setCompletions(newCompletions);
  };

  const isCompletedToday = (habitId: string): boolean => {
    return completions[habitId]?.[getTodayKey()] ?? false;
  };

  const getStreak = (habitId: string): number => {
    return calculateStreak(completions[habitId] || {});
  };

  const getWeekDays = (habitId: string): boolean[] => {
    const habitCompletions = completions[habitId] || {};
    return getLast7Days().map((day) => habitCompletions[day] ?? false);
  };

  return {
    habits,
    completions,
    addHabit,
    editHabit,
    deleteHabit,
    toggleToday,
    isCompletedToday,
    getStreak,
    getWeekDays,
  };
}
