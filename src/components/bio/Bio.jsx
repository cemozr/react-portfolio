import Typography from "@mui/material/Typography";
import { Container, Avatar, Box, Chip, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

export const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: "1rem", backgroundColor: "#dde6ed" }}>
        <Typography
          variant="h5"
          sx={{
            mt: "2rem",
            textAlign: "center",
            fontWeight: "medium",
            color: "primary.main",
          }}
        >
          MERHABA! BEN BİR FRONT END GELİŞTİRİCİYİM.
        </Typography>
        <Paper
          sx={{
            display: "flex",
            mt: "2rem",
            p: "2rem",
            backgroundColor: "primary.main",
          }}
          elevation={5}
        >
          <Box sx={{ display: "flex", alignItems: "center", mr: "2rem" }}>
            <Typography sx={{ color: "secondary.main" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              dicta a! Perspiciatis aperiam repellendus at id debitis quasi
              neque doloremque a consequatur sapiente adipisci totam facilis,
              dolores tenetur eligendi eaque ad labore minima reprehenderit est
              rerum quidem! Consequatur voluptatem, fuga, delectus culpa hic
              beatae facilis asperiores recusandae quae repellendus suscipit
              modi voluptate optio laudantium amet! Sapiente unde deleniti dolor
              quas.
            </Typography>
          </Box>
          <Box>
            <Avatar
              alt="asdasd"
              src="../../assets/asd.jpg"
              sx={{ width: "10rem", height: "10rem" }}
            />
          </Box>
        </Paper>
        <Box>
          <Typography variant="h5" sx={{ mt: "2rem" }}>
            Yeteneklerim
          </Typography>
          <Stack
            direction={"row"}
            spacing={3}
            display={"flex"}
            flexWrap={"wrap"}
            sx={{ mt: "1rem" }}
          >
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
            <Chip label="Chip Outlined" variant="filled" />
          </Stack>
        </Box>
      </Container>
    </>
  );
};
