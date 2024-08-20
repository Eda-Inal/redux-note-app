import Notes from "./notes";
import React from 'react'
import {Box,Button } from "@mui/material";
import Side from "./Side";
import Theme from "./theme";
import { useEffect } from "react";
import Search from "./search";
import { IoIosClose } from "react-icons/io";
function All() {
 

  
  return (
  <>
    
     
     
  <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} width="100%"  >
  <Box
          sx={{
          
            flex: { md: '1', lg: '0 0 33.33%' },
          }}
        >
          <Side />
        </Box>
        <Box
          sx={{
            flex: '1',
            width: { xs: '100%', md: '75%', lg: '66.66%' }
          }}
        >
         
          <Box 
    sx={{
        width:"90%",
        mx:"auto",
      display: 'flex', 
      justifyContent: 'center', 
      mt: 2,
      alignItems:"center"
    }}
  >
 <Box sx={{flexGrow:1, display:"flex",justifyContent:"flex-start"}}>
    <Theme/>
    </Box>
    <Search/>
    <Box sx={{flexGrow:1, display:"flex",justifyContent:"flex-end"}}>
    <Theme/>
    </Box>
  </Box>
          <Notes />
        </Box>
   
  </Box>
 
  
  </>
  )
}

export default All
