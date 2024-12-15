import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type DeviceContextType = {
  isMobile: boolean;
};

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
});

export const DeviceContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({ isMobile }), [isMobile]);

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

// Hook to access the context
export const useDeviceContext = () => {
  return useContext(DeviceContext);
};
