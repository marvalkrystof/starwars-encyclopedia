import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./providers/ThemeContextProvider";
import { DeviceContextProvider } from "./providers/DeviceContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DeviceContextProvider>
        <App />
      </DeviceContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
