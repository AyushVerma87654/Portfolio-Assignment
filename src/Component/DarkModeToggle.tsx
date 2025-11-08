import { useEffect, useState, type FC } from "react";
import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 p-3 bg-gray-200/90 dark:bg-gray-700/90 text-gray-800 dark:text-yellow-300 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-[999] pointer-events-auto"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
