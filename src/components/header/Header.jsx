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

            <Button sx={{ color: "secondary.main" }}>Hakkımda</Button>
            <Button sx={{ color: "secondary.main" }}>İletişim</Button>
            <Button sx={{ color: "secondary.main" }}>Çalışmalarım</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
