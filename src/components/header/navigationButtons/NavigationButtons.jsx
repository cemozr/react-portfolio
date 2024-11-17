import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import "../header.css";

export const navButtons = [
  {
    name: "Hakkımda",
    path: "/",
  },
  {
    name: "Çalışmalarım",
    path: "/projects",
  },
  {
    name: "İletişim",
    path: "/contact",
  },
];
export const cvLinks = [
  {
    name: "CV EN",
    path: "https://drive.google.com/file/d/1inAISwRFclAi2pHoM2v7lVlQVe9JP5Ek/view?usp=sharing",
  },
  {
    name: "CV TR",
    path: "https://drive.google.com/file/d/19cz1Dzrss3XjqyHXFs307gSMZoedR7-I/view?usp=sharing",
  },
];
export const NavigationButtons = () => {
  return (
    <>
      {cvLinks.map((cv, i) => {
        return (
          <Link
            key={i}
            className="nav-link"
            to={cv.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              sx={{
                display: { xs: "none", sm: "block" },
                transition: "ease 0.5s",
                "&:hover": {
                  boxShadow: "0px 2px 0px 0px #3ad305",
                  top: "-3px",
                },
              }}
            >
              {cv.name}
            </Button>
          </Link>
        );
      })}
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          borderColor: "secondary.main",
          margin: "1rem 0.5rem 1rem 0.5rem",
          display: { xs: "none", md: "block" },
        }}
      />
      {navButtons.map((btn, i) => {
        return (
          <Link key={i} className="nav-link" to={btn.path}>
            <Button
              sx={{
                color: "secondary.main",
                display: { xs: "none", sm: "block" },
                transition: "ease 0.5s",
                "&:hover": {
                  boxShadow: "0px 2px 0px 0px #3ad305",
                  top: "-3px",
                },
              }}
            >
              {btn.name}
            </Button>
          </Link>
        );
      })}
    </>
  );
};
