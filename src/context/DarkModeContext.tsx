import { createContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the context
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create a new context with an initial value of undefined
export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

// Props type for the provider
interface DarkModeProviderProps {
  children: ReactNode;
}

// Context provider component
export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode: () => setIsDarkMode((prev) => !prev),
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
