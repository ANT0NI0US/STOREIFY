import { Toaster } from "react-hot-toast";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function ToasterWrapper() {
  const { isDarkMode } = useDarkMode();

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        success: {
          style: {
            background: isDarkMode ? " #2a2a2a" : "#faeed1",
            color: isDarkMode ? "#e8d6c2" : "#4b352a",
          },
          iconTheme: {
            primary: isDarkMode ? "#e8d6c2" : "#4b352a",
            secondary: isDarkMode ? "#2a2a2a" : "#faeed1",
          },
        },
        error: {
          style: {
            background: isDarkMode ? "#d43c3c" : "#ff0000",
            color: isDarkMode ? "#e8d6c2" : "#faeed1",
          },
          iconTheme: {
            primary: isDarkMode ? "#e8d6c2" : "#faeed1",
            secondary: isDarkMode ? "#d43c3c" : "#ff0000",
          },
        },
      }}
    />
  );
}
