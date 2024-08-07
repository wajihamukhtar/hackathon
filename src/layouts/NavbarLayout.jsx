import * as React from "react";
import Box from "@mui/material/Box";

import { Auth_Data } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/global/Navbar";
const pages = ["About", "Pricing", "Blog"];
const settings = ["Logout"];

export const NavbarLayout = ({ onNavOpen }) => {
  const logindetail = useSelector((a) => a.login.logindetail);
  console.log("Login Details in Navbar:", logindetail);
  return (
    <>
      <Box
        component="header"
        sx={{
          height: "auto",
          position: "sticky",
          left: {
            md: `${280}px`,
          },
          top: 0,
          width: {
            md: `calc(100% - ${280}px)`,
          },
          zIndex: 500,
        }}
      >
        <Navbar open={onNavOpen} />
      </Box>
    </>
  );
};
