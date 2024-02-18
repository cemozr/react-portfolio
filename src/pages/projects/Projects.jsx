import { Grid, Container, CssBaseline } from "@mui/material";
import { Activity } from "../../components/activity/Activity";
import { ProjectList } from "../../components/projectList/ProjectList";

export const Projects = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={1} marginBottom={2} marginTop={2}>
          <ProjectList />
          <Grid item xs={12} md={3} padding={0}>
            <Activity />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
