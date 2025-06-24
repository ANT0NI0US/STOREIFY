import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      title={`${isDarkMode ? "light mode" : "dark mode"} `}
      className="flexCenter bg-main-color dark:bg-light-color fixed right-2 bottom-2 cursor-pointer rounded-full p-1 sm:p-1.5 md:p-2"
    >
      <button
        aria-label="color theme"
        onClick={toggleDarkMode}
        className="text-xl sm:text-2xl md:text-3xl"
      >
        {isDarkMode ? (
          <LuSunMoon color="#FDB813" />
        ) : (
          <FaMoon color="#F6F1D5" />
        )}
      </button>
    </div>
  );
}
