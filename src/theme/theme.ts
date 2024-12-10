import { createTheme, ThemeOptions } from "@mui/material/styles";
import palette from "./palette";
import { typography } from "./typography";

const theme: ThemeOptions = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: (t) => ({
        body: {
          scrollbarColor: `${t.palette.primary.main} ${t.palette.background.default}`,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: t.palette.primary.dark,
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: t.palette.primary.main,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: t.palette.primary.dark,
            },
          },
        },
      }),
    },
  },
});

export default theme;
