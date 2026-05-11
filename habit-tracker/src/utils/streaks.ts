import { getTodayKey } from './dates';
import { subDays } from 'date-fns';
import { format } from 'date-fns';

export function calculateStreak(
  completions: Record<string, boolean>,
  todayKey: string = getTodayKey()
): number {
  let count = 0;
  let currentDate = new Date();

  // If today is not completed, start from yesterday (streak isn't broken yet)
  const startDate = completions[todayKey] ? currentDate : subDays(currentDate, 1);

  let checkDate = startDate;

  while (completions[format(checkDate, 'yyyy-MM-dd')] === true) {
    count++;
    checkDate = subDays(checkDate, 1);
  }

  return count;
}
