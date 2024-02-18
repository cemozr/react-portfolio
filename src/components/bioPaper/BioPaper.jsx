import { Paper, Typography, Box, Avatar } from "@mui/material";

export const BioPaper = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          mt: "2rem",
          textAlign: "center",
          fontWeight: "medium",
          color: "primary.main",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Paper
        sx={{
          display: { xs: "block", sm: "flex" },
          mt: "2rem",
          p: "2rem",
          backgroundColor: "primary.main",
          boxShadow: "0px 0px 5px 1px #033171",
        }}
        elevation={5}
      >
        <Box
          sx={{
            display: "flex",
            mr: { xs: "0", sm: "2rem" },
            mb: { xs: "1rem" },
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="asdasd"
            src="../../../asdasd.jpg"
            sx={{ width: "10rem", height: "10rem" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "secondary.main" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dicta
            a! Perspiciatis aperiam repellendus at id debitis quasi neque
            doloremque a consequatur sapiente adipisci totam facilis, dolores
            tenetur eligendi eaque ad labore minima reprehenderit est rerum
            quidem! Consequatur voluptatem, fuga, delectus culpa hic beatae
            facilis asperiores recusandae quae repellendus suscipit modi
            voluptate optio laudantium amet! Sapiente unde deleniti dolor quas.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
