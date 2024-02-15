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
          backgroundColor: " #3C4B5E",
          color: "#DDE6ED",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#27374D",
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
