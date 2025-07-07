import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
    >
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
