import axios from "axios";
import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  CircularProgress,
  Skeleton,
} from "@mui/material";

export const Activity = () => {
  const [activities, setActivities] = useState([]);
  const commitAmount = 13;
  const token = import.meta.env.VITE_GIT_TOKEN;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const username = "cemozr";

  const fetchActivities = async () => {
    try {
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        config
      );
      const commitsPromises = reposResponse.data.map(async (repo) => {
        try {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${username}/${repo.name}/commits`,
            config
          );
          return commitsResponse.data.map((commit) => ({
            ...commit,
            repository: { name: repo.name },
          }));
        } catch (error) {
          console.log("error", error);
        }
      });
      const allCommits = await Promise.all(commitsPromises);
      const flattenedCommits = allCommits.flat();

      const sortedActivities = flattenedCommits
        .sort(
          (a, b) =>
            new Date(b.commit.author.date) - new Date(a.commit.author.date)
        )
        .slice(0, commitAmount);

      setActivities(sortedActivities);
    } catch (error) {
      console.error("veri alınamadı", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [username, commitAmount]);

  return (
    <>
      {activities.length === 0 ? (
        <Box display={"flex"} justifyContent={"center"}>
          {/* <CircularProgress /> */}
          <Skeleton
            variant="rounded"
            width={"80%"}
            height={"140vh"}
            sx={{ bgcolor: "primary.main" }}
          />
        </Box>
      ) : (
        <Box marginLeft={{ md: 2 }}>
          <List
            sx={{
              borderRadius: 1,
            }}
          >
            {activities.map((activity, i) => {
              return (
                <Box key={i}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="author avatar"
                        src={activity.author.avatar_url}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={activity.repository.name}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="secondary.main"
                          >
                            {activity.commit.message}
                          </Typography>
                          <br />
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="secondary.main"
                          >
                            {activity.commit.author.date.slice(0, 10)}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider
                    variant="middle"
                    component="li"
                    sx={{ borderColor: "third.main" }}
                  />
                </Box>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
};
