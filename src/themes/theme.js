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
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#DDE6ED",
          width: "100%",
          margin: 10,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bolder",
          fontSize: 15,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginBottom: 10,
        },
      },
    },
  },
});
