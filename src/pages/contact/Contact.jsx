import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { Container, Box } from "@mui/material";

export const Contact = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ContactForm />
    </Box>
  );
};
