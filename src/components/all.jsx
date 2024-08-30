import React from 'react'
import Side from "./Side"
import Notes from "./notes"
import Search from './search'
import { Box } from '@mui/material'
import Theme from './theme'
import Alert from './alert'
import FilterOptions from './filterOptions'
import Edit from './edit'
import FilterColors from './filterColors'
import { useSelector } from 'react-redux'
import AddNote from './addNote'


function All() {
  const {sideBarOpen,alert ,isEdit} = useSelector((state) => state.note);
  return (
   <>
  {
  isEdit && (
    <Box 
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 99999999,
        width: { xs: "94%", sm: "99%", md: "60%", lg: "50%", xl: "40%" },
        mt:2
      }}
    >
      <Edit />
    </Box>
  )
}

  
  
   {
    alert.show && (
      <Box sx={{position:"absolute",right:0,top:7,zIndex:999999999}}>
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
    
  <Box sx={{display:"flex",alignItems:"center",width:"90%",mx:"auto",mt:2}}> 
    <Box sx={{dipslay:"flex",flexGrow:3}}>
    <Search/>
    </Box>
    <Theme/>
  </Box>
  <Box sx={{display:"flex",width:"90%",mx:"auto",alignItems:"center",justifyContent:{xs:"center",md:"space-between"},mt:1,flexDirection:{xs:"column",sm:"row",mb:1}}}>
  <FilterOptions/>
  <FilterColors/>
  </Box>

   <Notes/> 
   </Box>
   </>
  )
}

export default All

