import Navigation from "@/navigation/Navigation";
import RoutesProvider from "./RoutesProvider";
import StoreProvider from "./StoreProvider";
import ToasterWrapper from "./ToasterWrapper";
import { DarkModeButton } from "@/ui";
import DarkModeProvider from "@/context/DarkModeContext";
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
