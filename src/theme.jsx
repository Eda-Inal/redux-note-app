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
      main:"#E93D3D"
    },
    success:{
      main:"#56A603"
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
      main:"#E93D3D"
    },
    success:{
      main:"#56A603"
    }
  },
});

export { darkTheme, lightTheme };
