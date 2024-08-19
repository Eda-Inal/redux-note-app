import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#22333b",
    },
    text: {
      primary: "#fff", 
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#f1faee", 
    },
    text: {
      primary: "#000", 
    },
  },
});

export { darkTheme, lightTheme };
