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
    path: "https://drive.google.com/file/d/1aB2pUAAFI232BWPNRTTVWWe0oA5dwyxi/view?usp=sharing",
  },
  {
    name: "CV TR",
    path: "https://drive.google.com/file/d/1OmFKYpbN1NFaz8h6zVZvaM1TjEtrfuJX/view?usp=drive_link",
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
                color: "secondary.main",
                display: { xs: "none", sm: "block" },
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
