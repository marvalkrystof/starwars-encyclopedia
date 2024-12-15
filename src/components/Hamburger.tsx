import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, ButtonBase } from "@mui/material";

interface Props {
  children: JSX.Element[];
}

export default function Hamburger({ children }: Props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Button
        sx={{ backgroundColor: "primary.main" }}
        variant="contained"
        color="inherit"
        startIcon={<MenuIcon />}
        onClick={toggleDrawer(true)}
      >
        Menu
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ backgroundColor: "background.primary" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {children}
        </Box>
      </Drawer>
    </Box>
  );
}
