import { useHabits } from './hooks/useHabits';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const {
    habits,
    completions,
    addHabit,
    deleteHabit,
    toggleToday,
    isCompletedToday,
    getStreak,
    getWeekDays,
  } = useHabits();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <Header isDark={isDark} onToggleDarkMode={toggleDarkMode} />
      <main className="max-w-2xl mx-auto px-4 py-8">
        {habits.length === 0 ? (
          <EmptyState />
        ) : (
          <HabitList
            habits={habits}
            completions={completions}
            isCompletedToday={isCompletedToday}
            getStreak={getStreak}
            getWeekDays={getWeekDays}
            toggleToday={toggleToday}
            onEdit={() => {}}
            onDelete={deleteHabit}
          />
        )}
        <AddHabitForm onAdd={addHabit} />
      </main>
    </div>
  );
}

export default App;
