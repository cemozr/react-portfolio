import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0b0e0f",
    },
    secondary: { main: "#DDE6ED" },
    third: { main: "#3ad305" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#DDE6ED",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: " #0b0e0f",
          color: "#DDE6ED",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#3ad305",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#DDE6ED",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#0b0e0f",
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
