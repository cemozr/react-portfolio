import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Margin } from "@mui/icons-material";
import { Link, Router } from "react-router-dom";
import { router } from "../../routes";
export const Header = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <TerminalIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "secondary", alignItems: "center" }}
            >
              DevCem
            </Typography>

            <Button
              sx={{
                color: "secondary.main",
                display: { xs: "none", sm: "block" },
              }}
            >
              Hakkımda
            </Button>

            <Button
              sx={{
                color: "secondary.main",
                display: { xs: "none", sm: "block" },
              }}
            >
              Çalışmalarım
            </Button>

            <Button
              sx={{
                color: "secondary.main",
                display: { xs: "none", sm: "block" },
              }}
            >
              İletişim
            </Button>
            <IconButton
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
    </>
  );
};
