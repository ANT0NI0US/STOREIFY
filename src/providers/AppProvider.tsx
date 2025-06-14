import Navigation from "@/navigation/Navigation";
import RoutesProvider from "./RoutesProvider";
import StoreProvider from "./StoreProvider";
import DarkModeButton from "@/ui/DarkModeButton";
import DarkModeProvider from "@/context/DarkModeContext";
import ToasterWrapper from "./ToasterWrapper";
import "react-multi-carousel/lib/styles.css";

export default function AppProvider() {
  return (
    <DarkModeProvider>
      <StoreProvider>
        <RoutesProvider>
          <Navigation />
        </RoutesProvider>
        <ToasterWrapper />
        <DarkModeButton />
      </StoreProvider>
    </DarkModeProvider>
  );
}
