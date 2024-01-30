import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#27374D",
    },
    secondary: { main: "#DDE6ED" },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#27374D",
          color: "#DDE6ED",
          marginTop: "1rem",
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#27374D",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#DDE6ED",
        },
      },
    },
  },
});
