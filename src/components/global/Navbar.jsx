import React from "react";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  useTheme,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
const settings = ["Logout"];

const Navbar = ({ open }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
      navigate("/");
      localStorage.removeItem("token");
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "auto",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: `${theme?.palette?.background?.default}`,
          px: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MenuOpenIcon
            onClick={open}
            sx={{
              display: { xs: "flex", md: "none" },
              ml: 1,
              color: "black",
              "&:hover": {
                color: "black",
                backgroundColor: "transparent",
              },
            }}
          />
          <Typography
            variant="h5"
            color={theme?.palette?.background?.black}
            fontWeight={"bold"}
          >
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={"Avatart"} src="tu" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleLogout}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
