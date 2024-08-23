import React from 'react'
import { Box, Typography } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector,useDispatch } from 'react-redux';
import { setAlertClose } from '../redux/noteSlice';

function Alert() {
    const dispatch = useDispatch()
    const {alert} = useSelector((state) => state.note)
    const handleClick = () => {
        dispatch(setAlertClose())
    }
  return (
  <>
<Box sx={{width:"300px",maxHeight:"80px",backgroundColor:alert.background,borderRadius:"0.5rem",p:2,color:"white",display:"flex",alignItems:"center"}}>
   
    <Typography sx={{fontWeight:"bold"}}>{alert.message}</Typography>
  
</Box>
<Box onClick = {handleClick} sx={{position:"absolute",top:3,right:3,cursor:"pointer"}}> <HighlightOffIcon sx={{color:"white"}}/></Box>

  </>
  )
}

export default Alert
