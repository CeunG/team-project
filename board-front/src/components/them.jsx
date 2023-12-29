import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#5FAA8F",
        light: "#8ED5BB",
        dark: "#1A7756",
        contrastText: "#fff",
      },
      secondary: {
        dark: "#B72D26",
        main: "#de4d4d",
        light: "#ffffff",
      },
      accent: {
        main: "#232227",
      }
    },
  }),
);

export default theme;