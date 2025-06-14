import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeButton(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      title={`${isDarkMode ? "light mode" : "dark mode"} `}
      className={`flexCenter fixed bottom-2 right-2 rounded-full bg-main-color p-2  dark:bg-light-color`}
    >
      <button aria-label="color theme" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <LuSunMoon size={30} color="#FDB813" />
        ) : (
          <FaMoon size={30} color="#F6F1D5" />
        )}
      </button>
    </div>
  );
}
