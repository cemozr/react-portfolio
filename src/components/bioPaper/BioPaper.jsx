import { Paper, Typography, Box, Avatar, Skeleton } from "@mui/material";
import profileImg from "../../assets/profile.jpg";
import { useEffect, useState } from "react";
import { fetchDataWithImage } from "../../actions/fetchData";
export const BioPaper = () => {
  const [bioData, setBioData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataWithImage("abouts");
        setBioData(data);
      } catch (error) {
        console.error("Data couldn't fetch", error);
      }
    };
    getData();
  }, []);

  return (
    <Box>
      {bioData[0]?.about ? (
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
              src={profileImg}
              sx={{ width: "7.8rem", height: "auto" }}
            />
          </Box>

          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Merhaba👋{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              {bioData[0]?.about}
            </Typography>
          </Box>
        </Paper>
      ) : (
        <Skeleton variant="rounded" width={"100%"} height={250} />
      )}
    </Box>
  );
};
