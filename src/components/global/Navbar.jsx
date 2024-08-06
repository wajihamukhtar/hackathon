import React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton, useTheme } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = ({ open }) => {
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
          {/* <IconButton disableRipple> */}
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
          {/* </IconButton> */}
          <Typography
            variant="h5"
            color={theme?.palette?.background?.black}
            fontWeight={"bold"}
          >
            Dashboard
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography variant="h6" color={theme?.palette?.links_color?.light}>
            search
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
