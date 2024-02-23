import { ThemeContet } from "@/context/theme-context";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContet);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
