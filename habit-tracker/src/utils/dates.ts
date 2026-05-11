import { format, subDays } from 'date-fns';

export function getTodayKey(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

export function getLast7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    days.push(format(subDays(new Date(), i), 'yyyy-MM-dd'));
  }
  return days;
}

export function formatDayLabel(dateStr: string): string {
  const [, month, day] = dateStr.split('-');
  return `${parseInt(month)}/${parseInt(day)}`;
}
