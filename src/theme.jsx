import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: '"Slabo 40px", system-ui',
  },
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
      main:"#EB4E68"
    },
    success:{
      main:"#07AE13"
    }
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: '"Slabo 40px", system-ui',
  },
  palette: {
    mode: 'light',
    background: {
      default: "#EEFAE9", 
    },
    sideBarColor:{
      main:"#EfFAE9"
          },
    text: {
      primary: "#000", 
    },
    error:{
      main:"#FF435C"
    },
    success:{
      main:"#57E392"
    }
  },
});

export { darkTheme, lightTheme };
