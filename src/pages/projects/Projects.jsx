import { Grid, Container, CssBaseline } from "@mui/material";
import { Activity } from "../../components/activity/Activity";
import { ProjectList } from "../../components/projectList/ProjectList";

export const Projects = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={0} marginBottom={2} marginTop={2}>
          <Grid item xs={12} md={8} lg={8}>
            <ProjectList />
          </Grid>
          <Grid item xs={12} md={4} lg={4} padding={0}>
            <Activity />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
