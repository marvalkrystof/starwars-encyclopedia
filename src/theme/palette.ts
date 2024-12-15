import { PaletteOptions } from "@mui/material/styles";

const lightModePalette: PaletteOptions = {
  primary: {
    main: "#1976d2",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "rgba(0, 0, 0, 0.25)",
  },
  background: {
    default: "#f4f6f8",
    paper: "#ffffff",
  },
  text: {
    primary: "#333333",
    secondary: "#555555",
  },
  divider: "#808080",
};

const darkModePalette: PaletteOptions = {
  primary: {
    main: "#dc004e",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "rgba(255, 255, 255, 0.1)",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "#bbbbbb",
  },
  divider: "#f4f6f8",
};

const getPalette = (mode: "light" | "dark"): PaletteOptions => {
  return mode === "light" ? lightModePalette : darkModePalette;
};

export default getPalette;
