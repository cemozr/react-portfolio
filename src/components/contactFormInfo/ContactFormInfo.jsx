import {
  Button,
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const ContactFormInfo = () => {
  return (
    // <Grid item md={5} padding={0}>
    <Box sx={{ marginBottom: { xs: 2 }, width: { xs: "100%", lg: "40%" } }}>
      <Typography
        variant={"h3"}
        marginBottom={2}
        sx={{
          textAlign: { xs: "center", md: "start" },
        }}
      >
        İletişime Geç! 🫠
      </Typography>

      <Box
        marginBottom={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={"bold"}
          variant={"body1"}
          sx={{
            color: "secondary.main",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Herhangi bir konuda benimle iletişime geçmek için formu doldurmanız
          yeterli. 🙂
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        sx={{
          width: "100%",
          height: "4rem",
          backgroundColor: "primary.main",
          position: "",
        }}
      >
        <Button
          href="https://github.com/cemozr"
          sx={{ color: "secondary.main", borderColor: "black" }}
        >
          <GitHubIcon
            sx={{
              fontSize: 50,
              borderRadius: "50%",
              "&:hover": { border: "2px solid green" },
            }}
          />
        </Button>
        <Button
          href="https://www.linkedin.com/in/cem-%C3%B6zer-645361230/"
          sx={{
            color: "secondary.main",
          }}
        >
          <LinkedInIcon
            sx={{
              fontSize: 50,
              borderRadius: "25%",
              "&:hover": { border: "2px solid green" },
            }}
          />
        </Button>
      </Box>
      {/* </Grid> */}
    </Box>
  );
};
