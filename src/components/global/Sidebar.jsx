import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { sidebarLinks } from "../../constants/constant";
import SidebarAccordion from "./SidebarAccordion";

function Sidebar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        overflowY: "hidden",
        backgroundColor: `${theme?.palette?.background?.default}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "88px",
          borderBottom: `1px solid ${theme?.palette?.background?.dark}`,
          mx: 2,
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "35px",
            height: "35px",
            borderRadius: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${theme?.palette?.main_color?.main}`,
          }}
        >
          <Typography variant="h5" color={theme?.palette?.background?.default}>
            @
          </Typography>
        </Box>
        <Typography
          variant="h5"
          color={theme?.palette?.background?.black}
          fontWeight={"bold"}
        >
          Hiphonic
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: `calc(100% - 88px)`,
          maxHeight: "550px",
          overflowY: "auto",
        }}
      >
        <SidebarAccordion sidebarLinks={sidebarLinks} />
      </Box>
    </Box>
  );
}

export default Sidebar;
