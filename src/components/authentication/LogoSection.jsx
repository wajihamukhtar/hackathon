import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
const LogoSection = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={"span"}
        sx={{ borderRadius: "50%", width: "80px", marginBottom: "20px" }}
      >
        <img
          class="rounded-circle"
          src={"logo"}
          alt=""
          width={"100%"}
          height={"auto"}
        />
      </Box>
      <Typography sx={{}} variant={"h4"}>
        Check
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url(${"img"})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      ></Box>
    </Box>
  );
};

export default LogoSection;
