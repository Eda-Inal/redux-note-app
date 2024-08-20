import Notes from "./notes";
import React from 'react'
import {Box,Button } from "@mui/material";
import Side from "./Side";
import Theme from "./theme";
import { useSelector,useDispatch } from "react-redux";
import Search from "./search";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { setSideBarOpen } from "../redux/noteSlice";
function All() {
 const dispatch = useDispatch()
  const {sideBarOpen} = useSelector((state) => state.note);
  const handleSetSideBarOpen  =() => {
    dispatch(setSideBarOpen())
  }
  
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
    {
      sideBarOpen ? (
        <Box onClick={() => handleSetSideBarOpen()} sx={{flexGrow:1, display:{xs:"flex",md:"none"},justifyContent:"flex-start"}}>
        <Box  sx={{
       width:"40px",height:"40px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",zIndex:999999 
      
        }}>
      <IoIosClose  fontSize={30}/>
        </Box>
        </Box>
      ) : (
        <Box onClick={() => handleSetSideBarOpen()} sx={{flexGrow:1, display:{xs:"flex",md:"none"},justifyContent:"flex-start"}}>
        <Box sx={{
       width:"40px",height:"40px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",zIndex:999999 
      
        }}>
      <FaPlus/>
        </Box>
          </Box>
      )
    }

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
