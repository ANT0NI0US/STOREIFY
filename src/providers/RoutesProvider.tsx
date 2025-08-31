import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface RoutesProviderProps {
  children: ReactNode;
}

export default function RoutesProvider({ children }: RoutesProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
