import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BioPaper } from "../../components/bioPaper/BioPaper";
import { Skills } from "../../components/skills/Skills";
export const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mb: "7rem", backgroundColor: "#dde6ed" }}>
        <BioPaper />
        <Skills />
      </Container>
    </>
  );
};
