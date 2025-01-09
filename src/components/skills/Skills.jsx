import { Box, Grid, Skeleton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skills.css";
import { useEffect, useState } from "react";
import { handleData } from "../../actions/fetchData";
export const Skills = () => {
  const [skills, setSkills] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    className: "slider-container",
  };

  useEffect(() => {
    const getData = async () => {
      const data = await handleData("skill");
      setSkills(data);
    };
    getData();
  }, []);
  return (
    <>
      {skills[0]?.imgsrc ? (
        <Grid container spacing={4} marginTop={3}>
          {skills.map((skill) => {
            return (
              <Grid
                key={skill.id}
                item
                md={2}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Box
                  sx={{
                    backgroundColor: "#0b0e0f",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                    borderBottom: "2px solid #3ad305",
                    borderRadius: "8%",
                    height: "100%",
                  }}
                >
                  <img
                    loading="lazy"
                    width="50rem"
                    src={skill.imgsrc}
                    alt={skill.name}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Skeleton
          variant="rounded"
          width={"100%"}
          height={200}
          sx={{ marginTop: 5 }}
        />
      )}

      <Box
        marginTop={5}
        sx={{
          backgroundColor: "#0b0e0f",
          paddingTop: 4,
          paddingBottom: 4,
          borderBottom: "2px solid #3ad305",
          borderRadius: { xs: "2%", sm: "1%" },
          display: { xs: "block", md: "none" },
        }}
      >
        <Slider {...settings}>
          {skills.map((skill, i) => {
            return (
              <Box key={i}>
                <img
                  loading="lazy"
                  width="150px"
                  src={skill.imgsrc}
                  alt={skill.name}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
