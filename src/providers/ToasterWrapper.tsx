import { Toaster } from "react-hot-toast";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function ToasterWrapper() {
  const { isDarkMode } = useDarkMode(); // Get the current theme state from context

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 10000,
        success: {
          style: {
            background: isDarkMode ? " #163b48" : "#a3ffce",
            color: isDarkMode ? "#88d07a" : "#253b45",
          },
          iconTheme: {
            primary: isDarkMode ? "#0e1013" : "#daf3ff",
            secondary: isDarkMode ? "#c18500" : "#f39530",
          },
        },
        error: {
          style: {
            background: "#EE4B2B",
            color: "#ffffff",
          },
          iconTheme: {
            primary: isDarkMode ? "#0e1013" : "#a3ffce",
            secondary: isDarkMode ? "#EE4B2B" : "#EE4B2B",
          },
        },
      }}
    />
  );
}
