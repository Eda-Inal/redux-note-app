import React from 'react'
import Side from "./Side"
import Notes from "./notes"
import Search from './search'
import { Box } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Theme from './theme'
import { setSideBarOpen } from '../redux/noteSlice'
import { useSelector,useDispatch } from 'react-redux'

function All() {
  const dispatch = useDispatch();
  const {sideBarOpen } = useSelector((state) => state.note);
  const handleSideBarOpen = ()=> {
    dispatch(setSideBarOpen(true));
  }

  return (
   <>
 
   <Box > 
    {
      sideBarOpen && (
        <Side/>
      )
    }


  
  <Box sx={{display:"flex",alignItems:"center",width:"80%",justifyContent:"center",mx:"auto",mt:2}}> 
    {!sideBarOpen &&(
  <Box onClick= {handleSideBarOpen} sx={{
    width:"40px",height:"40px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white"
   
     }}>
   <AddOutlinedIcon/>
       </Box>
    )}
  
    <Box sx={{dipslay:"flex",flexGrow:3}}>
    <Search/>
    </Box>
 
<Theme/>
  </Box>
   
   <Notes/>
   </Box>

   </>
  )
}

export default All

