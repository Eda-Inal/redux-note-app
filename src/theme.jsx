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
    error:{
      main:"#DE2244"
    },
    success:{
      main:"#5EC293"
    }
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
    error:{
      main:"#EB4E68"
    },
    success:{
      main:"#5EC293"
    }
  },
});

export { darkTheme, lightTheme };
