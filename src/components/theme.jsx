import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from "react-redux";
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";


function Theme() {
    const {isDark} = useSelector((state) => state.note)
  return (
  <Box sx={{
    position:"absolute",width:"50px",height:"50px", borderRadius:"50%", top:15, right:25, backgroundColor:"#75eab0", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",

  }}>
    <MdOutlineLightMode fontSize={30}/>
    

  </Box>
  )
}

export default Theme
