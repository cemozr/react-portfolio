import { green, grey, orange, purple, red, yellow } from "@mui/material/colors";
import "./App.css";
import { Header } from "./components/header/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Bio } from "./components/bio/Bio";
import { Footer } from "./components/footer/Footer";

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
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex-wrapper">
          <Header />
          <Bio />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
