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
  <Box onClick = {handleClick}  sx={{
    position:"absolute",width:"50px",height:"50px", borderRadius:"50%", top:15, right:25, backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",

  }}>
    {isDarkTheme ? (
      <MdOutlineLightMode fontSize={30}/>) : 
      (<MdDarkMode fontSize={30}/>)
     }
  </Box>
  )
}

export default Theme
