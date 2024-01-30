import { Box, Button, CssBaseline } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            width: "100%",
            height: "4rem",
            backgroundColor: "primary.main",
            position: "",
          }}
        >
          <Button
            href="https://github.com/cemozr"
            sx={{ color: "secondary.main" }}
          >
            <GitHubIcon fontSize="large" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/cem-%C3%B6zer-645361230/"
            sx={{
              color: "secondary.main",
            }}
          >
            <LinkedInIcon fontSize="large" />
          </Button>
        </Box>
        <Typography
          color={"secondary.dark"}
          bgcolor={"primary.main"}
          fontSize={"small"}
          sx={{ textAlign: { xs: "center", sm: "end" } }}
        >
          React, Material UI ve <FavoriteIcon fontSize="smaller" /> ile
          geliştirildi.
        </Typography>
      </Box>
    </>
  );
};
