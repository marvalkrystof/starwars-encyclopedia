import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useThemeContext } from "./providers/ThemeContextProvider";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const queryClient = new QueryClient();
  const { theme } = useThemeContext();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <CssBaseline enableColorScheme />
            <Navbar />
            <AppRoutes />
          </HelmetProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
