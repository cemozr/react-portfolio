import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
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
              <Button size="small">İncele</Button>
              <Button href={project.gitLink} size="small">
                Github
              </Button>
              <Button size="small">Projeye Git</Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
