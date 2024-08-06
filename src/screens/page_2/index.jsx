import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Page = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Typography variant="h6" color={theme?.palette?.links_color?.dark}>
        page 2
      </Typography>
    </Box>
  );
};
export default Page;
