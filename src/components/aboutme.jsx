import React from 'react';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        mx: 'auto',
        mt: 5,
      }}
    >
      <Box
        component="a"
        href="https://github.com/Eda-Inal"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          border: "3px solid #9899e6",
          p: 1,
          borderRadius: "8px",
          textDecoration: 'none',
          color: 'black',
          '&:hover': {
            backgroundColor: '#9899e6',
          },
          mx: 1, 
        }}
      >
        <GitHubIcon sx={{ mr: 1 }} />
        <Box sx={{ fontSize: "16px" }}>Github</Box>
      </Box>

      <Box
        component="a"
        href="https://www.linkedin.com/in/eda-i%C5%9F%C4%B1l-inal-887a69267/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          border: "3px solid #9899e6",
          p: 1,
          borderRadius: "8px",
          textDecoration: 'none',
          color: 'black',
          '&:hover': {
            backgroundColor: '#9899e6',
          },
          mx: 1,
        }}
      >
        <LinkedInIcon sx={{ mr: 1 }} />
        <Box sx={{ fontSize: "16px" }}>Linkedin</Box>
      </Box>
    </Box>
  );
}

export default Footer;
