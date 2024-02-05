import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            fontWeight={"bold"}
            color={"primary"}
            variant="h4"
          >
            Sanırım yanlış yerdesin...
          </Typography>
        </Box>
        <Box mt={3}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "secondary.main",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                boxShadow: "0px 0px 10px 1px #033171",
              },
            }}
          >
            Ana Sayfaya Dön!
          </Button>
        </Box>
      </Container>
    </>
  );
};
