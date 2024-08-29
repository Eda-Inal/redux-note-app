import React from 'react'
import { Box } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { setSideBarOpen } from '../redux/noteSlice'
import { useSelector,useDispatch } from 'react-redux'

function AddNote() {
    const dispatch = useDispatch();
    const {sideBarOpen } = useSelector((state) => state.note);
    const handleSideBarOpen = ()=> {
      dispatch(setSideBarOpen(true));
    }
  return (
    <>
       { 
        !sideBarOpen && (
            <Box onClick= {handleSideBarOpen} sx={{backgroundColor:"#9899e6", width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",bottom:40,right:25,cursor:"pointer",zIndex:99,border:"1px white solid"}}>
            <AddOutlinedIcon sx={{fontSize:"30px",color:"white"}}/>
          </Box>
        )
    }
    </>

   
  )
}

export default AddNote
