import { createTheme, Theme } from "@mui/material";
import { createContext, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "../hooks/UseColorTheme";

type ThemeContextType = {
  mode: string;
  toggleMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
