import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../themes/theme";
import "./header.css";
import { Link } from "react-router-dom";

const navButtons = [
  {
    name: "Hakkımda",
    path: "/",
  },
  {
    name: "Çalışmalarım",
    path: "/projects",
  },
  {
    name: "İletişim",
    path: "/contact",
  },
];

export const Header = () => {
  const hamburgerClickHandler = () => {
    return;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <TerminalIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "secondary",
                  alignItems: "center",
                }}
              >
                DevCem
              </Typography>
              {navButtons.map((btn, i) => {
                return (
                  <Link key={i} className="nav-link" to={btn.path}>
                    <Button
                      sx={{
                        color: "secondary.main",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      {btn.name}
                    </Button>
                  </Link>
                );
              })}
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
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};
