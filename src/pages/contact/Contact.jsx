import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { Container, Box, Divider, Grid } from "@mui/material";
import { ContactFormInfo } from "../../components/contactFormInfo/ContactFormInfo";
import { Maximize } from "@mui/icons-material";

export const Contact = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: "primary.main",
        padding: { xs: 5, md: 6, lg: 16 },
        boxShadow: "2px 2px #3ad305",
        borderRadius: 2,
        "& .MuiGrid-item": { paddingLeft: 0 },
        flexWrap: { xs: "wrap", md: "nowrap" },
        margin: { xs: 2, sm: 5, md: 5, lg: 9 },
        marginBottom: { md: 15, lg: 12 },
      }}
    >
      <ContactFormInfo />
      <Divider
        sx={{
          borderColor: "secondary.main",
          display: { xs: "none", md: "block", lg: "block" },
        }}
        variant="middle"
        orientation="vertical"
        flexItem
      />
      <ContactForm />
    </Box>
  );
};
