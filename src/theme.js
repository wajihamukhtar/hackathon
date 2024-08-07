"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main_color: {
      main: "#5D5FEF",
      light: "#F8FAFC",
      dark: "#EFF6FF",
    },
    light_color: {
      main: "#F0FDF4",
      light: "#E2E8F0",
    },
    links_color: {
      main: "#4079ED",
      light: "#737791",
      dark: "#64748B",
    },
    background: {
      default: "#fff",
      dark: "#F1F5F9",
      black: "black",
    },
  },
});

export default theme;
