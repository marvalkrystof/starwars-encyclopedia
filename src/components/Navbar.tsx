import React, { useState } from "react";
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModeSwitch from "./ModeSwitch";
import { useThemeContext } from "../providers/ThemeContextProvider";
import { useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useDeviceContext } from "../providers/DeviceContextProvider";

const Navbar: React.FC = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const { isMobile } = useDeviceContext();

  const navLinks = [
    { href: "/people", label: "People" },
    { href: "/films", label: "Films" },
    { href: "/planets", label: "Planets" },
    { href: "/species", label: "Species" },
    { href: "/starships", label: "Starships" },
    { href: "/vehicles", label: "Vehicles" },
  ];

  const renderDesktopNavbar = () => (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: 2,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            padding: 1,
            borderRadius: 1,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Typography
            href="/"
            variant="h4"
            component="a"
            sx={{
              textDecoration: "none",
              color: "primary.contrastText",
              whiteSpace: "nowrap",
            }}
          >
            STARWARS Encyclopedia
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flex: 1,
          justifyContent: "center",
        }}
      >
        {navLinks.map((link) => (
          <Button
            key={link.href}
            href={link.href}
            color={isActive(link.href) ? "secondary" : "inherit"}
            variant={isActive(link.href) ? "contained" : "text"}
          >
            {link.label}
          </Button>
        ))}
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <ModeSwitch />
      </Box>
    </Toolbar>
  );

  const renderMobileNavbar = () => (
    <Toolbar
      sx={{
        height: "5rem",
        borderBottom: 2,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
      }}
    >
      <Hamburger>
        {[
          <Box
            key="enclosing-box"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "primary.main",
              height: "5rem",
              borderBottom: 2,
              borderColor: "white",
              borderBottomLeftRadius: 1,
              boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
              paddingInline: 2,
            }}
          >
            <Typography
              key="title"
              href="/"
              variant="h4"
              component="a"
              sx={{
                textDecoration: "none",
                color: "primary.contrastText",
                textAlign: "center",
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                padding: 1,
                borderRadius: 1,
              }}
            >
              STARWARS Encyclopedia
            </Typography>
          </Box>,
          ...navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              fullWidth
              sx={{ paddingBlock: 2, fontSize: "1.2rem" }}
              color={isActive(link.href) ? "secondary" : "inherit"}
              variant={isActive(link.href) ? "contained" : "text"}
            >
              {link.label}
            </Button>
          )),
          <Box
            key="mode-switch"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ModeSwitch />
          </Box>,
        ]}
      </Hamburger>
    </Toolbar>
  );

  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "primary.main",
        minHeight: "5vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isMobile ? renderMobileNavbar() : renderDesktopNavbar()}
    </AppBar>
  );
};

export default Navbar;
