import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
  SvgIcon,
  Stack,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import projectData from "../../data/projectData.json";

export const ProjectList = () => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      rowGap={1}
      columnGap={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: { xs: 2 },
      }}
    >
      {projectData.map((project, i) => {
        return (
          <Card key={i} sx={{ width: "100%" }}>
            <CardContent>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  display={"flex"}
                  alignItems={"center"}
                  marginTop={0.75}
                >
                  {project.name}
                </Typography>
                <Box
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "block",
                      xs: "flex",
                    },
                    flexDirection: { xs: "column" },
                  }}
                >
                  <Button
                    href="https://github.com/cemozr"
                    sx={{ color: "secondary.main", borderColor: "black" }}
                  >
                    <GitHubIcon
                      sx={{
                        fontSize: 30,
                        borderRadius: "50%",
                        "&:hover": { border: "2px solid green" },
                      }}
                    />
                  </Button>
                  <Button
                    href="https://github.com/cemozr"
                    sx={{
                      color: "secondary.main",
                      borderColor: "black",
                    }}
                  >
                    <SvgIcon
                      sx={{
                        fontSize: 30,
                        textAlign: "center",
                        borderRadius: "50%",
                        "&:hover": { border: "2px solid green" },
                      }}
                    >
                      <svg
                        fill="#DDE6ED"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            d="M256,48,496,464H16Z"
                          ></path>
                        </g>
                      </svg>
                      ;
                    </SvgIcon>
                  </Button>
                </Box>
              </Box>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <Divider
              variant="fullwidth"
              orientation="horizontal"
              sx={{ borderColor: "#3ad305" }}
            />

            <CardActions sx={{ backgroundColor: "primary.main" }}>
              <Stack
                direction={"row"}
                spacing={2}
                margin={1}
                sx={{
                  display: { xs: "flex" },
                  flexWrap: { xs: "wrap" },
                }}
              >
                {project.usedSkills.map((usedSkill, i) => {
                  return (
                    <Chip
                      key={i}
                      label={usedSkill}
                      variant="outlined"
                      color="secondary"
                      sx={{ marginBottom: 5 }}
                    />
                  );
                })}
              </Stack>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
