import "./App.css";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "@mui/material";
import { Bio } from "./pages/bio/Bio";
import { Footer } from "./components/footer/Footer";
import { theme } from "./themes/theme";
import { router } from "./routes";
import { RouterProvider } from "react-router";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex-wrapper">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
