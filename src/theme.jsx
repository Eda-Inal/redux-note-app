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
      main:"#EB4E68"
    },
    success:{
      main:"#07AE13"
    }
  },
});

const lightTheme = createTheme({
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
