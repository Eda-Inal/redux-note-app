import React from 'react'
import { Box,InputBase } from '@mui/material'



function Search() {
  return (
 
 
    <Box 
    sx={{
     
        mx:"auto",
      display: 'flex', 
      justifyContent: 'center', 
     
      alignItems:"center"
    }}
  >
  
    <InputBase
    placeholder='Find note'
      sx={{
    flexGrow:3,
        height: '35px',
        mx:1,
        borderRadius: '1rem',
        border: `2px gray solid`,
        boxShadow: 1,
        paddingLeft: '10px',
        '& input': {
          padding: 0,
        },
      }}
    />
  
  
  </Box>
    
   

  
  )
}

export default Search
