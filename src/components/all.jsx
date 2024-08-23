import React from 'react'
import Side from "./Side"
import Notes from "./notes"
import Search from './search'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Theme from './theme'
import Alert from './alert'

import { useSelector } from 'react-redux'
import AddNote from './addNote'

function All() {

  const {sideBarOpen,alert } = useSelector((state) => state.note);

 
  return (
   <>
   {
    alert.show && (
      <Box sx={{position:"absolute",right:"50%",transform: "translateX(50%)",zIndex:999999999}}>
      <Alert/>
      </Box>
    )
   }
 

   <Box > 
    <AddNote/>
    {
      sideBarOpen && (
        <Side/>
      )
    }


  
  <Box sx={{display:"flex",alignItems:"center",width:"80%",justifyContent:"center",mx:"auto",mt:2}}> 
  
  <Theme/>
    <Box sx={{dipslay:"flex",flexGrow:3}}>
    <Search/>
    </Box>
 

<Box  sx={{
 width:"40px",height:"40px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",zIndex:999999 

  }}> <SearchIcon/>
  </Box>
  </Box>
   
   <Notes/>
   </Box>

   </>
  )
}

export default All

