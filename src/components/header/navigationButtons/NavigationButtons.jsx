import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const NavigationButtons = () => {
  const navButtons = [
    {
      name: "Hakkımda",
      path: "/bio",
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
