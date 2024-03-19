import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BioPaper } from "../../components/bioPaper/BioPaper";
import { Skills } from "../../components/skills/Skills";
export const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{ mb: { md: "7rem", xs: "2rem" }, backgroundColor: "#24272c" }}
      >
        <BioPaper />
        <Skills />
      </Container>
    </>
  );
};
