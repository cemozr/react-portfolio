import { mailSchema } from "./schema";
import { useForm, Controller } from "react-hook-form";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Diversity1 } from "@mui/icons-material";

export const ContactForm = () => {
  const form = useRef();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(mailSchema),
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();

    emailjs
      .sendForm("service_jyiexjz", "template_1kt4s7k", form.current, {
        publicKey: "6v98K44ETzRMtjQlG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Grid
      container
      spacing={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={8}
      sx={{
        backgroundColor: "primary.main",
        padding: 16,
        boxShadow: "2px 2px #3ad305",
        borderRadius: 2,
      }}
    >
      <Grid item md={5}>
        <Typography textAlign={"start"} variant={"h3"} marginBottom={2}>
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
            sx={{ color: "secondary.main" }}
          >
            Herhangi bir konuda benimle iletişime geçmek için yandaki formu
            doldurmanız yeterli. 🙂
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
      </Grid>
      <Divider
        sx={{ borderColor: "secondary.main" }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <Grid item md={5}>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="İsim"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="E-Posta"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  multiline
                  rows={4}
                  label="Mesaj"
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
            <Button
              sx={{
                marginLeft: 1.3,
                width: "100%",
                transition: "ease 0.5s",
                "&:hover": {
                  boxShadow: "0px 2px 0px 0px #3ad305",
                  top: "-3px",
                },
              }}
              type="submit"
            >
              Gönder
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};
