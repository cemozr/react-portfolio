import { Paper, Typography, Box, Avatar } from "@mui/material";

export const BioPaper = () => {
  return (
    <Box>
      <Paper
        sx={{
          display: { xs: "block", sm: "flex" },
          mt: "2rem",
          p: "2rem",
          backgroundColor: "primary.main",
          boxShadow: "2px 2px #3ad305",
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
            display: "block",
          }}
        >
          <Typography variant="h4">Merhaba👋 </Typography>
          <Typography sx={{ color: "secondary.main" }}>
            Ben Cem. Kütahya Dumlupınar Üniversitesi bilgisayar mühendisliği
            bölümü mezunuyum. Üniversite yıllarımda oyun geliştirme, bilgi
            güvenliği, veri tabanı tasarımı ve yönetimi, web geliştirme ve diğer
            alanları denedim. Daha sonra ana teknoloji yığınım olarak Frontend
            teknolojilerini seçtim. Çünkü kodlama yaparken ne yaptığınızı anında
            görmek ve ilham verici kullanıcı arayüzleriyle insanları etkilemek
            oldukça tatmin edici.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
