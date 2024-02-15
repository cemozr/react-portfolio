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
} from "@mui/material";

export const Activity = () => {
  const [activities, setActivities] = useState([]);
  const commitAmount = 7;
  const token = "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";
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
      console.log(activities);
    } catch (error) {
      console.error("bilgi alınamadı", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [username, commitAmount]);

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "40rem",
          borderRadius: 1,
          marginLeft: 3,
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
                        color="text.primary"
                      >
                        {activity.commit.message}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {activity.commit.author.date.slice(0, 10)}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          );
        })}
      </List>
    </>
  );
};
