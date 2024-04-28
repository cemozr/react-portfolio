import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skills.css";
export const Skills = () => {
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

  const skills = [
    {
      name: "TypeScript",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
      width: "50%",
    },
    {
      name: "JavaScript",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
      width: "50%",
    },
    {
      name: "React.js",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
      width: "50%",
    },
    {
      name: "Material Ui",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png",
      width: "50%",
    },
    { name: "WebXR", imgsrc: "src/assets/webxr.png", width: "50%" },
    {
      name: "Three.js",
      imgsrc: "src/assets/three-js-icon.png",
      width: "50%",
    },
    {
      name: "Scss",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png",
      width: "50%",
    },
    {
      name: "Bootstrap",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
      width: "50%",
    },
    {
      name: "Axios",
      imgsrc: "src/assets/ax.png",
      width: "50%",
    },
    {
      name: "Html",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
      width: "50%",
    },
    {
      name: "Css",
      imgsrc:
        "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
      width: "50%",
    },
    {
      name: "SQL",
      imgsrc:
        "https://github.com/marwin1991/profile-technology-icons/assets/19180175/3b371807-db7c-45b4-8720-c0cfc901680a",
      width: "50%",
    },
  ];

  return (
    <>
      <Grid container spacing={4} marginTop={3}>
        {skills.map((skill, i) => {
          return (
            <Grid
              key={i}
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
                  width={skill.width}
                  src={skill.imgsrc}
                  alt={skill.name}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>

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
