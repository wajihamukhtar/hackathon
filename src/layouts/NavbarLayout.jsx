import * as React from "react";
import Box from "@mui/material/Box";

import { Auth_Data } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../auth/firebaseMethods";
import { useSelector } from "react-redux";
import Navbar from "../components/global/Navbar";
const pages = ["About", "Pricing", "Blog"];
const settings = ["Logout"];

export const NavbarLayout = ({ onNavOpen }) => {
  const { text, button_text, link } = Auth_Data?.navbar || {};
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const logindetail = useSelector((a) => a.login.logindetail);
  const navigate = useNavigate();
  console.log("Login Details in Navbar:", logindetail);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    doSignOut().then(() => {
      navigate("/");
      localStorage.removeItem("token");
    });
  };
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
