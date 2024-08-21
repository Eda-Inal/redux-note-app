import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#22333b",
    },
    sideBarColor:{
main:"#2B424C"
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
    sideBarColor:{
      main:"#EAEDE9"
          },
    text: {
      primary: "#000", 
    },
  },
});

export { darkTheme, lightTheme };
