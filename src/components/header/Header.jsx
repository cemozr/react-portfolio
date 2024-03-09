import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, CssBaseline, Menu, MenuItem } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../themes/theme";
import "./header.css";
import { useState } from "react";
import {
  NavigationButtons,
  navButtons,
  cvLinks,
} from "./navigationButtons/NavigationButtons";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerClickHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ borderBottom: "2px solid", borderColor: "third.main" }}
          >
            <Toolbar>
              <TerminalIcon sx={{ mr: 1 }} />

              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  flexGrow: 1,
                  color: "secondary",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                DevCem
              </Typography>

              <NavigationButtons />
              <IconButton
                onClick={hamburgerClickHandler}
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mt: "0.4rem", display: { xs: "block", sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <div>
                <Menu
                  id="positioned-menu"
                  open={isOpen}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {cvLinks.map((cv, i) => {
                    return (
                      <Link
                        key={i}
                        className="nav-link"
                        to={cv.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MenuItem>{cv.name}</MenuItem>
                      </Link>
                    );
                  })}
                  {navButtons.map((navButton, i) => {
                    return (
                      <Link key={i} className="nav-link" to={navButton.path}>
                        <MenuItem>{navButton.name}</MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};
