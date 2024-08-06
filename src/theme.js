"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main_color: {
      main: "#2563EB",
      light: "#F8FAFC",
      dark: "#EFF6FF",
    },
    light_color: {
      main: "#F0FDF4",
      light: "#E2E8F0",
    },
    links_color: {
      main: "#94A3B8",
      light: "#94A3B8",
      dark: "#64748B",
    },
    background: {
      default: "#fff",
      dark: "#F1F5F9",
      black: "black",
    },
    text: {
      primary: "#000000",
      secondary: "#008000",
    },
  },
});

export default theme;
