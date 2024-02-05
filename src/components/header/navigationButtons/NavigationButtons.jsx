import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
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
export const NavigationButtons = () => {
  return (
    <>
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
