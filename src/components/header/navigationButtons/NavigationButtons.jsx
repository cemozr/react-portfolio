import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData } from "../../../actions/fetchData";
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

export const NavigationButtons = () => {
  const [cv, setCv] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData("cvs");
        setCv(data);
      } catch (err) {
        console.error("Data couldn't fetch", err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Link
        className="nav-link"
        to={cv[0]?.English}
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
          CV EN
        </Button>
      </Link>
      <Link
        className="nav-link"
        to={cv[0]?.Turkish}
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
          CV TR
        </Button>
      </Link>

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
