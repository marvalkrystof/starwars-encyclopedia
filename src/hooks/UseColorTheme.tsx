import { createTheme, PaletteMode } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import theme from "../theme/theme";
import getPalette from "../theme/palette";

export const useColorTheme = () => {
  const storedMode = localStorage.getItem("colorMode") as PaletteMode;
  const [mode, setMode] = useState<PaletteMode>(storedMode || "light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);
  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: getPalette(mode),
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleMode,
  };
};
