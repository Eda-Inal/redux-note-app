import React from 'react'
import Side from "./Side"
import Notes from "./notes"
import Search from './search'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Theme from './theme'
import Alert from './alert'
import FilterOptions from './filterOptions'
import Edit from './edit'

import { useSelector } from 'react-redux'
import AddNote from './addNote'


function All() {
  const {sideBarOpen,alert ,isEdit} = useSelector((state) => state.note);
  return (
   <>
   {
    isEdit && (
      <Box sx={{position:"absolute",right:"50%",transform: "translateX(50%)",zIndex:9999,width:{xs:"90%",sm:"70%",md:"60%",lg:"50%",xl:"40%"}}}>
      <Edit/>
      </Box>
    )
   }
  
  
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
  <Box sx={{display:"flex",alignItems:"center",width:"90%",mx:"auto",mt:2}}> 
    <Box sx={{dipslay:"flex",flexGrow:3}}>
    <Search/>
    </Box>
    <Theme/>
  </Box>
  <FilterOptions/>
   <Notes/> 
   </Box>
   </>
  )
}

export default All

