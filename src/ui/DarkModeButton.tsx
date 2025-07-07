import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      title={`${isDarkMode ? "light mode" : "dark mode"}`}
      aria-label={`${isDarkMode ? "light mode" : "dark mode"}`}
      onClick={toggleDarkMode}
      className="flexCenter bg-secondary-dark-color dark:bg-secondary-light-color fixed right-2 bottom-2 cursor-pointer rounded-full p-1 text-xl sm:p-1.5 sm:text-2xl md:p-2 md:text-3xl"
    >
      {isDarkMode ? <LuSunMoon color="#FDB813" /> : <FaMoon color="#F6F1D5" />}
    </button>
  );
}
