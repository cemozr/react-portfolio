import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CssBaseline,
} from "@mui/material";
import projectData from "../../data/projectData.json";
import { Activity } from "../../components/activity/Activity";
import { useState } from "react";

export const Projects = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={1} marginBottom={2} marginTop={2}>
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
                // <Box key={i} sx={{ maxWidth: 480, maxHeight: 220 }}>
                <Card sx={{ width: "100%" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">İncele</Button>
                    <Button href={project.gitLink} size="small">
                      Github
                    </Button>
                    <Button size="small">Projeye Git</Button>
                  </CardActions>
                </Card>
                // </Box>
              );
            })}
          </Grid>
          <Grid item xs={12} md={3} padding={0}>
            <Activity />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
