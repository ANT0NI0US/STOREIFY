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
            background: isDarkMode ? " #163b48" : "#faeed1",
            color: isDarkMode ? "#88d07a" : "#4b352a",
          },
          iconTheme: {
            primary: isDarkMode ? "#0e1013" : "#4b352a",
            secondary: isDarkMode ? "#c18500" : "#faeed1",
          },
        },
        error: {
          style: {
            background: "#ff0000",
            color: "#faeed1",
          },
          iconTheme: {
            primary: "#faeed1",
            secondary: isDarkMode ? "#ff0000" : "#ff0000",
          },
        },
      }}
    />
  );
}
