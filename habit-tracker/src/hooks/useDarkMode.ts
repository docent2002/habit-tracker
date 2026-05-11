import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../constants';

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useLocalStorage(STORAGE_KEYS.DARK_MODE, false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return [isDark, toggle];
}
