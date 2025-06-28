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
            background: isDarkMode ? " #0e1013" : "#faeed1",
            color: isDarkMode ? "#f0faff" : "#4b352a",
          },
          iconTheme: {
            primary: isDarkMode ? "#f0faff" : "#4b352a",
            secondary: isDarkMode ? "#0e1013" : "#faeed1",
          },
        },
        error: {
          style: {
            background: isDarkMode ? "#dd0808" : "#ff0000",
            color: isDarkMode ? "#f0faff" : "#faeed1",
          },
          iconTheme: {
            primary: isDarkMode ? "#f0faff" : "#faeed1",
            secondary: isDarkMode ? "#dd0808" : "#ff0000",
          },
        },
      }}
    />
  );
}
