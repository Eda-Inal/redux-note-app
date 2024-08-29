import React from 'react'
import { Box} from '@mui/material'
import { useSelector,useDispatch } from "react-redux";
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import { setIsDarkTheme } from '../redux/noteSlice';



function Theme() {
  const dispatch = useDispatch();
    const {isDarkTheme} = useSelector((state) => state.note);
    const handleClick = () => {
      dispatch(setIsDarkTheme());
    }
  return (
    <>
    
      <Box onClick = {handleClick}  sx={{
 width:"40px",height:"40px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",zIndex:999999 , transition: "transform 0.3s ease-in-out", 
 "&:hover": {
   transform: "rotate(360deg)", 
 }

  }}>
    {isDarkTheme ? (
      <MdOutlineLightMode fontSize={25}/>) : 
      (<MdDarkMode fontSize={25}/>)
     }
  </Box>
    </>

  )
}

export default Theme
