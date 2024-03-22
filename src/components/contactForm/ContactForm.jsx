import { mailSchema } from "./schema";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Diversity1 } from "@mui/icons-material";

export const ContactForm = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  console.log(isSuccess);

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
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("asdasd");
        }
      );
  };

  return (
    <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
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
      {isSuccess && (
        <Alert
          sx={{
            marginTop: 1,
            "& .MuiAlert-message": { display: "flex", flexDirection: "row" },
          }}
          variant="filled"
          severity="success"
        >
          <Typography variant="body1">
            Mesajınız iletildi. Anasayfaya yönlendiriliyorsunuz.
          </Typography>
          <Typography fontSize={"large"}>👋</Typography>
        </Alert>
      )}
    </Box>
  );
};
