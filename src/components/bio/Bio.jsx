import Typography from "@mui/material/Typography";
import { Container, Avatar, Box, Chip, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

const skills = [
  "TypeScript",
  "React.js",
  "Material UI",
  "Three.js",
  "WebXR",
  "JavaScript",
  "Scss",
  "Bootstrap",
  "Css",
  "Html",
  "SQL",
  "Axios",
];

export const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mb: "10rem", backgroundColor: "#dde6ed" }}>
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
            boxShadow: "0px 0px 5px 1px #033171",
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
            alignItems={"center"}
            sx={{ mt: "1rem", height: "6rem" }}
          >
            {skills.map((s, i) => {
              return (
                <Chip
                  key={i}
                  label={s}
                  variant="filled"
                  sx={{
                    width: "10rem",
                    p: "1rem",
                    boxShadow: "0px 0px 5px 1px #033171",
                    "&:hover": {
                      boxShadow: "0px 0px 10px 1px #033171",
                    },
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};
// box-shadow: 0px 0px 39px 3px rgba(0,0,0,0.1);
