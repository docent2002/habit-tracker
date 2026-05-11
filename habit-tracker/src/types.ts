export interface Habit {
  id: string;
  name: string;
  emoji: string;
  createdAt: string; // "YYYY-MM-DD"
}

export type CompletionStore = Record<string, Record<string, boolean>>;
