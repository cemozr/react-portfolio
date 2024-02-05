import "./App.css";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "@mui/material";
import { Bio } from "./pages/bio/Bio";
import { Footer } from "./components/footer/Footer";
import { theme } from "./themes/theme";
import { Routes, Route } from "react-router";
import { Error } from "./pages/error/Error";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex-wrapper">
          <Header />
          <Routes>
            <Route index path="/" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
