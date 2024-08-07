import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CardSection from "../cardsection/CardSection";

const Page = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
       <CardSection/>
    </Box>
  );
};
export default Page;
