import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import projectData from "../../data/projectData.json";
export const ProjectList = () => {
  return (
    <Grid
      item
      xs={0}
      md={9}
      rowGap={1}
      columnGap={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {projectData.map((project, i) => {
        return (
          <Card key={i} sx={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#24272c",
                  "&:hover": { backgroundColor: "primary.main" },
                }}
              >
                İncele
              </Button>
              <Divider
                orientation="vertical"
                variant="fullwidth"
                flexItem
                sx={{ borderColor: "primary.main" }}
              />
              <Button
                href={project.gitLink}
                size="small"
                sx={{
                  backgroundColor: "#24272c",
                  "&:hover": { backgroundColor: "primary.main" },
                }}
              >
                Github
              </Button>
              <Divider
                orientation="vertical"
                variant="fullwidth"
                flexItem
                sx={{ borderColor: "primary.main" }}
              />
              <Button
                size="small"
                sx={{
                  backgroundColor: "#24272c",
                  "&:hover": { backgroundColor: "primary.main" },
                }}
              >
                Projeye Git
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
